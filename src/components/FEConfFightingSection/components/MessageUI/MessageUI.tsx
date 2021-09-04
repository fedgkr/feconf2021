import React from 'react';
import { container, profile, image, name, messageWrap } from './MessageUI.module.scss';
import friendly from '~/images/messages/friendly.png';
import happy from '~/images/messages/happy.png';
import hospitable from '~/images/messages/hospitable.png';
import love from '~/images/messages/love.png';

interface MessageUIProps {
  message: Message;
  index: number;
}

const images = [friendly, happy, hospitable, love];

const MessageUI: React.FC<MessageUIProps> = ({ message: { user, message }, index }) => {
  const displayName = (user.displayName || user.username) || '';
  const messageIcon = images[index % images.length];
  return (
    <div className={container}>
      <div className={profile}>
        <img className={image} src={messageIcon} alt={displayName}/>
        <span className={name}>{displayName}</span>
      </div>
      <p className={messageWrap}>
        {message}
      </p>
    </div>
  );
}

export default MessageUI;
