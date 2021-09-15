import React, { MouseEventHandler, useMemo } from 'react';
import { container, dimmed, portal, open, closeBtn, overflowWrap, wrapper } from './Modal.module.scss';
import classcat from "classcat";
import { useModal } from "~/hooks/useModal";
import { useClientRendering } from "~/hooks/useClientRendering";
import { createPortal } from "react-dom";

interface ModalProps {
  active: boolean;
  needWrap?: boolean;
  maxWidth?: number;
  onClose: MouseEventHandler;
}

const Modal: React.FC<ModalProps> = ({ children, active, maxWidth, needWrap = true, onClose }) => {
  useModal(active);
  return (
    <Portal>
      <div className={classcat([portal, active ? open : ''])} onClick={onClose}>
        <div className={dimmed}/>
        { active && needWrap ?
          <ModalContents active={active} maxWidth={maxWidth}>
            {children}
          </ModalContents> : null }
        { active && !needWrap ? children : null }
      </div>
    </Portal>
  );
}

const Portal: React.FC = ({ children }) => {
  const { isClientRendering } = useClientRendering();
  const element = useMemo(() => (typeof document === 'object' ? document : undefined)?.getElementById('portal'), []);
  if (isClientRendering && element) {
    return createPortal(children, element);
  }
  return null;
}

const ModalContents: React.FC<{ active: boolean; maxWidth: number }> = ({ children, active, maxWidth }) => {
  return (
    <div
      className={container}
      onClick={e => e.stopPropagation()}
    >
      <div className={closeBtn}>
      </div>
      <div className={overflowWrap}>
        <div className={wrapper} style={ maxWidth ? { maxWidth } : {}}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
