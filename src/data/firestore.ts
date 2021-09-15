import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {FirebaseOptions} from "@firebase/app-types";

interface Callbacks {
  setAuthenticating: Function;
  setSupportModal: Function;
  setCurrentUser: Function;
  setMyMessage: Function;
  setMessages: Function;
  setMessageCount: Function;
}

class FireStore {
  private readonly base;
  private readonly db;
  private readonly config: FirebaseOptions = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    appId: process.env.APP_ID,
  };
  private supportsCollectionRef;
  private usersCollectionRef;
  private provider;

  constructor(private callbacks: Callbacks) {
    this.base = firebase;
    this.base.initializeApp(this.config);
    this.db = this.base.firestore();
    this.supportsCollectionRef = this.db.collection('supports');
    this.usersCollectionRef = this.db.collection('users');
    this.registerListeners();
  }

  public signIn() {
    if (!this.base.auth().currentUser) {
      this.provider = new this.base.auth.GithubAuthProvider();
      this.provider.addScope('email');
      this.base.auth().signInWithRedirect(this.provider).catch(err => {
        console.log('err : ', err.message);
      });
    }
  }

  public async post(message: string) {
    const currentUser = await this.getCurrentUser();
    if (currentUser) {
      try {
        const supportCreation = this.supportsCollectionRef.doc(currentUser.id).set({
          message,
          user: {
            id: currentUser.id,
            githubId: currentUser.githubId,
            username: currentUser.username,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          createdAt: Date.now(),
        });
        const userCreation = this.usersCollectionRef.doc(currentUser.id).set({
          ...currentUser,
          createdAt: Date.now(),
        });
        await Promise.all([supportCreation, userCreation]);
        this.callbacks.setSupportModal(false);
      } catch(err) {
        alert('등록에 실패했습니다.');
      }
    }
  }

  private registerListeners = () => {
    this.base.auth().onAuthStateChanged(this.onAuthChanged);
    this.listenSupportMetadata();
    this.listenSupportMessageList();
  };

  private getCurrentUser = async (): Promise<User> => {
    let username;
    const currentUser = this.base.auth().currentUser;
    const { fetch } = await import('whatwg-fetch');
    const githubId = currentUser.providerData[0]?.uid;
    if (githubId) {
      const { login } = await fetch(`https://api.github.com/user/${githubId}`).then(res => res.json());
      username = login;
    }
    return currentUser && {
      githubId: currentUser.providerData[0]?.uid,
      id: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      photoURL: currentUser.photoURL,
      username,
    };
  };

  private listenSupportMetadata = () => {
    this.supportsCollectionRef.doc('metadata').onSnapshot((doc) => {
      this.callbacks.setMessageCount(doc.data().count);
    });
  }

  private listenSupportMessageList = () => {
    this.supportsCollectionRef.orderBy('createdAt', 'desc').limit(50).onSnapshot(this.updateMessageList);
  };

  private updateMessageList = (snapshot) => {
    const result = [];
    snapshot.docs.forEach((doc) => {
      if (doc.id !== 'metadata') {
        const data = doc.data();
        result.push({
          userId: doc.id,
          ...data,
        });
      }
    });
    this.callbacks.setMessages(result);
  };

  private onAuthChanged = async (user) => {
    if (user) {
      const currentUser = await this.getCurrentUser();
      this.callbacks.setAuthenticating(false);
      this.callbacks.setCurrentUser(currentUser);
      this.supportsCollectionRef.doc(user.uid).onSnapshot((doc) => {
        this.callbacks.setMyMessage(doc.data());
      });
    }
  };
}

export default FireStore;
