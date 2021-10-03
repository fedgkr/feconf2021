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

type SessionType = 'A' | 'B';

interface Session {
  type: SessionType;
  title: string;
  description: string;
  speaker: Speaker;
  tags: string[];
}

type SponsorGrade = 'Diamond' | 'Platinum' | 'Gold' | '장소지원';

interface Sponsor {
  grade: SponsorGrade;
  name: string;
  imageUrl: string;
  link: string;
}
