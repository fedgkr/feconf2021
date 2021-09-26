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

interface Speaker {
  name: string;
  company: string;
  imageUrl: string;
}

interface Session {
  type: SessionType;
  title: string;
  description: string;
  speaker: Speaker;
}

type SessionType = 'A' | 'B';
