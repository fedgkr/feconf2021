import React, { useEffect, useRef, useState } from 'react';
import { container } from './FadeInImage.module.scss';

interface FadeInImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {

}

const FadeInImage: React.FC<FadeInImageProps> = (props) => {
  const ref = useRef<HTMLImageElement>();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (ref.current?.complete) {
      setLoaded(true);
    }
  }, []);
  return (
    <img className={container} ref={ref} {...props} style={{ ...props.style, opacity: loaded ? 1 : 0 }} onLoad={() => setLoaded(true)}/>
  );
}

export default FadeInImage;
