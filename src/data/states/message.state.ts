import { atom } from "jotai";
import { useAtomValue } from "jotai/utils";

interface MessageState {
  myMessage: Message;
  messageList: Message[];
  messageCount: number;
}

export const messages = atom<MessageState>({
  myMessage: null,
  messageList: [],
  messageCount: 0,
});

export const useMessages = () => useAtomValue(messages);
