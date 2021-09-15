import React, { useCallback, useEffect, useRef, useState } from 'react';
import { container, overflowWrap, messageItem, active, visible, upperShadow, bottomShadow } from './RotatingMessageList.module.scss';
import { useMessages } from "~/data/states/message.state";
import classcat from "classcat";
import MessageUI from "~/components/FEConfFightingSection/components/MessageUI/MessageUI";

interface RotatingMessageListProps {}

const intervalTime = 1700;
const firstIntervalTime = 2400;

const useRotateList = (messageList, active: boolean) => {
  const listRef = useRef<HTMLDivElement>();
  const intervalTimeRef = useRef(firstIntervalTime);
  const [messages, setMessages] = useState(messageList);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [mouseOverState, setMouseOverState] = useState(false);
  const onMouseOver = useCallback(() => {
    setMouseOverState(true);
  }, []);
  const onMouseOut = useCallback(() => {
    setMouseOverState(false);
  }, []);
  useEffect(() => {
    if (active && !mouseOverState) {
      let timeout;
      const turnPoint = Math.floor(messageList.length / 2);
      const callNext = () => {
        if (currentIdx > turnPoint) {
          const origin = messages.concat([]);
          const head = origin.splice(0, currentIdx);
          setMessages([...origin, ...head]);
          setYOffset(0);
          intervalTimeRef.current = 50;
          return setCurrentIdx(0);
        }
        const currentEl = listRef.current.children[currentIdx];
        const { height } = currentEl.getBoundingClientRect();
        const offset = height + 16;
        setYOffset(val => val + offset);
        setCurrentIdx(currentIdx + 1);
        intervalTimeRef.current = intervalTime;
      };
      // timeout = setTimeout(callNext, intervalTimeRef.current);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIdx, active, messages, mouseOverState]);
  useEffect(() => {
    setMessages(messageList);
    setCurrentIdx(0);
    setYOffset(0);
    intervalTimeRef.current = firstIntervalTime;
  }, [messageList]);
  return { listRef, yOffset, messages, currentIdx, onMouseOver, onMouseOut };
}

const RotatingMessageList: React.FC<RotatingMessageListProps> = () => {
  const { messageList } = useMessages();
  const { listRef, yOffset, messages, currentIdx, onMouseOver, onMouseOut } = useRotateList(messageList, true);
  const listStyle = {
    transform: `translateY(-${yOffset}px)`,
    transition: currentIdx === 0 ? '' : 'transform .5s cubic-bezier(0, 0.55, 0.45, 1)',
  };
  return (
    <div className={container}>
      <div
        className={overflowWrap}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <div ref={listRef} style={listStyle}>
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={classcat({
                [messageItem]: true,
                [active]: idx === currentIdx,
                [visible]: Math.abs(idx - currentIdx) <= 3,
              })}
            >
              <MessageUI message={message} index={idx}/>
            </div>
          ))}
        </div>
        <div className={upperShadow}/>
        <div className={bottomShadow}/>
      </div>
    </div>
  );
}

export default RotatingMessageList;
