import React, { useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import { container, visible, textContainer, shareContainer, circle, shareSection } from './LinkShareSection.module.scss';
import { useThree, cloneAttributes } from '../Three/Three';
import * as THREE from 'three';
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface LinkShareSectionProps {}

const LinkShareSection: React.FC<LinkShareSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, threshold: .3 });
  const [link, setLink] = useState('');
  const clipboard = useRef<ClipboardJS>();

  const {
    ref: containerRef,
    threeRef,
  } = useThree({
    background: 0x000000,
  });


  useEffect(() => {
    const three = threeRef.current;

    const edgeGeometry = new THREE.EdgesGeometry(new THREE.SphereGeometry(200, 20, 20));
    const edgeMaterial = new THREE.LineBasicMaterial( {
      linewidth: 1,
      color: 0xffffff,
    });
    const edgeCloned = cloneAttributes(edgeGeometry);
    const mesh = new THREE.LineSegments(edgeGeometry, edgeMaterial);

    three.add(mesh);

    three.on("render", ({ now }) => {
      edgeGeometry.attributes.position = edgeCloned.position.clone();
      // edgeGeometry.attributes.normal = clonedEdge.normal.clone();
      // edgeGeometry.attributes.uv = clonedEdge.uv.clone();
      edgeGeometry.rotateY(now / 2000);
      edgeGeometry.rotateX(Math.PI / 5);
      edgeGeometry.rotateZ(Math.PI / 8);
    });
  }, []);

  useEffect(() => {
    setLink(location.origin);
    if (link && !clipboard.current) {
      clipboard.current = new ClipboardJS('#share-link');
      clipboard.current.on('success', () => {
      });
    }
  }, [link]);

  return (
    <section ref={ref} className={classcat([container, isVisible ? visible : ''])}>
      <div className={textContainer}>
        <strong>2021. 10. 30</strong>
        <h3>FECONF</h3>
      </div>
      <div className={shareContainer}>
        <div className={circle} ref={containerRef}>
        </div>
        <div className={shareSection}>
          <span>주변 친구에게 FECONF를 공유해보세요!</span>
          <button id="share-link" data-clipboard-text={link}>링크 복사</button>
        </div>
      </div>
    </section>
  );
}

export default LinkShareSection;
