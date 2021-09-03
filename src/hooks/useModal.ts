import {useEffect, useState} from "react";
import * as bodyScrollLock from 'body-scroll-lock';

export const useModal = (active: boolean) => {
  const [, forceRender] = useState();
  useEffect(() => {
    if (active) {
      bodyScrollLock.disableBodyScroll(document.body);
    } else if (!active) {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  }, [active]);
  useEffect(() => {
    setTimeout(() => forceRender(null), 20);
  }, []);
}
