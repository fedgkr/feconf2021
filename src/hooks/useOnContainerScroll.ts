import { MutableRefObject, useEffect } from "react";

interface ScrollInfo {
  scrollY: number;
  progress: number;
}

export default function useOnContainerScroll(container: MutableRefObject<HTMLElement>, onScroll: (info: ScrollInfo) => void) {
  const dimension = {
    top: 0,
    width: 0,
    height: 0,
    scrollHeight: 0,
  };
  const scrollInfo: ScrollInfo = {
    scrollY: 0,
    progress: 0,
  };
  const onFireScroll = () => {
    requestAnimationFrame(() => {
      const scrolled = window.pageYOffset + window.innerHeight;
      scrollInfo.scrollY = Math.max(scrolled - dimension.top, 0);
      scrollInfo.progress = Math.min(scrollInfo.scrollY / dimension.scrollHeight, 1);
      onScroll(scrollInfo);
    });
  }
  const setDimension = () => {
    if (container.current) {
      dimension.width = container.current.clientWidth;
      dimension.height = container.current.clientHeight;
      dimension.scrollHeight = container.current.clientHeight;
      dimension.top = container.current.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    }
    onFireScroll();
  }
  useEffect(() => {
    window.addEventListener('scroll', onFireScroll);
    window.addEventListener('resize',  setDimension);
    setDimension();
    return () => {
      window.removeEventListener('scroll', onFireScroll);
      window.removeEventListener('resize',  setDimension);
    };
  }, []);
  return {
    dimension,
    scrollInfo,
  };
}
