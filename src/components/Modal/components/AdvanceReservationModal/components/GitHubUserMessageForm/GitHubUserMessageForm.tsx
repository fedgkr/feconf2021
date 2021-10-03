import React, { useCallback, useRef, useState } from 'react';
import { container, username, email, form, description, register, loading } from './GitHubUserMessageForm.module.scss';
import { useAuthenticating, useCurrentUser } from "~/data/states/auth.state";
import { useMessages } from "~/data/states/message.state";
import { useFirebase } from "~/hooks/useFirestore";
import loadingImage from '~/images/icon/loading.png';

interface GitHubUserMessageFormProps {}

const defaultSupportMessage = 'FEConf2021 응원합니다!';
const maxMessageLength = 140;

const useSubmit = (myMessage: Message, message: string) => {
  const postableRef = useRef(true);
  const firebase = useFirebase();
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
      firebase.post(message || defaultSupportMessage);
    }
  }, [myMessage, message]);
  return { onSubmit };
};

const GitHubUserMessageForm: React.FC<GitHubUserMessageFormProps> = () => {
  const { myMessage } = useMessages();
  const [currentMessage, setMessage] = useState(myMessage?.message || '');
  const currentUser = useCurrentUser();
  const [authenticating] = useAuthenticating();
  const { onSubmit } = useSubmit(myMessage, currentMessage);
  return (
    authenticating ?
    <img className={loading} src={loadingImage}/> :
    <div className={container}>
      <h4 className={username}>{currentUser?.displayName || currentUser?.username}</h4>
      <p className={email}>{currentUser?.email}</p>
      <form className={form} onSubmit={onSubmit}>
        <textarea
          placeholder={defaultSupportMessage}
          value={currentMessage}
          maxLength={maxMessageLength}
          onChange={evt => setMessage(evt.target.value)}
        />
        <div className={description}>
          <span>FEconf2021에게 응원 메세지를 남겨주세요!</span>
          <span>{(currentMessage).length}/{maxMessageLength}</span>
        </div>
        <button className={register} type="submit">
          { myMessage ? '응원 메세지 수정하기' : '사전 등록하기' }
        </button>
      </form>
    </div>
  );
}

export default GitHubUserMessageForm;
