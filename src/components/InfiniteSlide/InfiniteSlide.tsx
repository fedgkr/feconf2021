import React, { useEffect, useRef, useState } from 'react';
import { container } from './InfiniteSlide.module.scss';
import { a, useSpring } from 'react-spring';

interface InfiniteSlideProps {}

const InfiniteSlide: React.FC<InfiniteSlideProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>();
  const [targetX, setTargetX] = useState(0);
  const [currentIdx, current] = useState(0);
  const styled = useSpring({
    loop: true,
    from: { translateX: 0 },
    to: { translateX: -targetX },
    config: {
      decay: true
    },
  });
  useEffect(() => {
    if (ref.current?.firstElementChild) {
      const wrap = ref.current.clientWidth;
      const inner = ref.current.firstElementChild.clientWidth;
      setTargetX(Math.max(0, inner - wrap));
    }
  }, []);
  return (
    <a.div ref={ref} className={container} style={{ ...styled }}>
      { children }
    </a.div>
  );
}

export default InfiniteSlide;
