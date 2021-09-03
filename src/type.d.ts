declare module "*.scss"
declare module "*.png"
declare module "*.svg"

declare global {
  interface Window {
    firebase: FirebaseNamespace;
  }
}

interface User {
  githubId?: number;
  id: string;
  email: string;
  displayName: string;
  username?: string;
  photoURL: string;
}

interface Message {
  message: string;
  createdAt: number;
  user: User ;
}
