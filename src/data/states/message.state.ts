import { atom } from "jotai";
import { useAtomValue } from "jotai/utils";

interface MessageState {
  myMessage: Message;
  messageList: Message[];
  messageCount: number;
}

const message: Message = {
  message: 'hi',
  user: {
    username: 'codemilli',
    displayName: 'codemilli',
    email: 'hckrmoon@gmail.com',
    id: '12123',
    githubId: 123,
    photoURL: '123'
  },
  createdAt: 1
}

export const messages = atom<MessageState>({
  myMessage: message,
  messageList: [message, message, message, message, message, message, message, message, message, message, message, message],
  messageCount: 0,
});

export const useMessages = () => useAtomValue(messages);
