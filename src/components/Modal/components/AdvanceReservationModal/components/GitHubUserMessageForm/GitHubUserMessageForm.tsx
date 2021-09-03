import React, { useCallback, useRef, useState } from 'react';
import { container, username, email, form, description, register } from './GitHubUserMessageForm.module.scss';
import { useCurrentUser } from "~/data/states/auth.state";
import { useMessages } from "~/data/states/message.state";

interface GitHubUserMessageFormProps {}

const defaultSupportMessage = 'FEConf2021 응원합니다!';
const maxMessageLength = 140;

const useSubmit = (myMessage: Message, message: string) => {
  const postableRef = useRef(true);
  const textRef = useRef<HTMLTextAreaElement>();
  // const { fireStoreRef } = useFirebase();
  const onSubmit = useCallback((evt) => {
    evt.preventDefault();
    if (postableRef.current) {
      postableRef.current = false;
      message = message.trim();
      if (message.length > maxMessageLength) {
        return alert('응원 메세지는 140자 이내로 입력 가능합니다.')
      }
      if (message === myMessage?.message) {
        return;
      }
      // fireStoreRef.fireStore?.post(message || defaultSupportMessage);
    }
  }, [myMessage]);
  return { onSubmit };
};

const GitHubUserMessageForm: React.FC<GitHubUserMessageFormProps> = () => {
  const { myMessage } = useMessages();
  const [currentMessage, setMessage] = useState(myMessage?.message || '');
  const currentUser = useCurrentUser();
  const { onSubmit } = useSubmit(myMessage, currentMessage);

  return (
    <div className={container}>
      <h4 className={username}>Jooyoung Moon</h4>
      <p className={email}>hckrmoon@gmail.com</p>
      <form className={form} onSubmit={onSubmit}>
        <textarea
          placeholder={defaultSupportMessage}
          value={currentMessage}
          maxLength={maxMessageLength}
          onChange={evt => setMessage(evt.target.value)}
        />
        <div className={description}>
          <span>2021 FECONF에게 응원 메세지를 남겨주세요!</span>
          <span>{(myMessage?.message || currentMessage).length}/{maxMessageLength}</span>
        </div>
        <button className={register} type="submit">
          { myMessage ? '응원 메세지 수정하기' : '사전 등록하기' }
        </button>
      </form>
    </div>
  );
}

export default GitHubUserMessageForm;
