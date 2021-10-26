import { useEffect, useState } from "react";
import type FireStore from "~/data/firestore";
import { currentUser, useAuthenticating } from "~/data/states/auth.state";
import { useReservationModal } from "~/data/states/modal.state";
import { messages } from "~/data/states/message.state";
import { useAtom } from "jotai";

let loadRequested = false;
let firestore = null;

export const useFirebase = () => {
  const [fireStore, setFireStore] = useState<FireStore>(firestore);
  const [, setSupportModal] = useReservationModal();
  const [, setAuthenticating] = useAuthenticating();
  const [, setCurrentUser] = useAtom(currentUser);
  const [, setMessages] = useAtom(messages);
  useEffect(() => {
    if (!loadRequested) {
      loadRequested = true;
      import("~/data/firestore").then(({ default: FireStore }) => {
        firestore = new FireStore({
          setAuthenticating,
          setSupportModal,
          setCurrentUser,
          setMyMessage: (message: Message) => {
            setMessages((value) => {
              return {
                ...value,
                myMessage: message,
              };
            });
          },
          setMessages: (messages: Message[]) => {
            setMessages((value) => {
              return {
                ...value,
                messageList: messages,
              }
            });
          },
          setMessageCount: (count: number) => {
            setMessages((value) => {
              return {
                ...value,
                messageCount: count,
              };
            });
          }
        });
        setFireStore(firestore);
      });
    }
  }, [setAuthenticating, setSupportModal, setCurrentUser, setMessages]);
  return fireStore;
}
