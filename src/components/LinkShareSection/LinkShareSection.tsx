import React, { useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import { container, visible, textContainer, shareContainer, circle, shareSection } from './LinkShareSection.module.scss';
import { useThree, cloneAttributes } from '../Three/Three';
import sphereImage from '~/images/sphere.png';
import * as THREE from 'three';
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface LinkShareSectionProps {}

const LinkShareSection: React.FC<LinkShareSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
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


    const textureLoader = new THREE.TextureLoader();
    const flagTexture = textureLoader.load(sphereImage);

    flagTexture.anisotropy = 16;


    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: flagTexture,
      side: THREE.DoubleSide,
    });
    const sphereGeometry = new THREE.PlaneGeometry(406, 406, 1, 1);

    sphereGeometry.translate(-1, 0, 0)
    // three.addMesh(sphereGeometry, sphereMaterial);

    const edgeGeometry = new THREE.EdgesGeometry(new THREE.SphereGeometry(200, 20, 20));
    const edgeMaterial = new THREE.LineBasicMaterial( {
      linewidth: 1,
      color: 0xffffff,
    });
    const edgeMesh = new THREE.LineSegments(edgeGeometry, edgeMaterial);

    edgeGeometry.rotateX(Math.PI / 5);
    edgeGeometry.rotateZ(Math.PI / 8);
    three.add(edgeMesh);

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
          <span>주변 친구에게 FEConf를 공유해보세요!</span>
          <button id="share-link" data-clipboard-text={link}>링크 복사</button>
        </div>
      </div>
    </section>
  );
}

export default LinkShareSection;
