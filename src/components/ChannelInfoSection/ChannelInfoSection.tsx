import React, { useEffect, useRef } from 'react';
import { container, visible, wrap, textContainer, circle, backgroundImage } from './ChannelInfoSection.module.scss';
import right from '~/images/icon/right-black.svg';
import { YOUTUBE_CHANNEL_URL } from "~/data/const/links";
import SafeLink from "~/components/SafeLink/SafeLink";
import * as THREE from 'three';
import { useThree, cloneAttributes } from '../Three/Three';
import sphereImage from '~/images/sphere.png';
import { useIntersection } from "use-intersection";
import classcat from "classcat";

interface ChannelInfoSectionProps {}

const ChannelInfoSection: React.FC<ChannelInfoSectionProps> = () => {
  const ref = useRef();
  const isVisible = useIntersection(ref.current, { once: true, rootMargin: '-200px 0px' });
  const {
    ref: containerRef,
    threeRef,
  } = useThree({
    minWidth: 540,
    minHeight: 540,
  });


  useEffect(() => {
    const three = threeRef.current;


    const textureLoader = new THREE.TextureLoader();
    const sphereTexture = textureLoader.load(sphereImage);

    sphereTexture.anisotropy = 16;


    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: sphereTexture,
      side: THREE.DoubleSide,
      alphaTest: 0.01,
    });
    const sphereGeometry = new THREE.PlaneGeometry(520, 520, 1, 1);

    sphereGeometry.translate(0, 0, 0)
    three.addMesh(sphereGeometry, sphereMaterial);

    const edgeGeometry = new THREE.EdgesGeometry(new THREE.SphereGeometry(256, 20, 20));
    const edgeMaterial = new THREE.LineBasicMaterial( {
      linewidth: 1,
      color: 0xffffff,
    });
    const edgeCloned = cloneAttributes(edgeGeometry);
    const edgeMesh = new THREE.LineSegments(edgeGeometry, edgeMaterial);


    three.add(edgeMesh);

    three.on("render", ({ now }) => {
      edgeGeometry.attributes.position = edgeCloned.position.clone();
      edgeGeometry.rotateY(now / 3000);
      edgeGeometry.rotateX(Math.PI / 5);
      edgeGeometry.rotateZ(Math.PI / 8);

    });
  }, []);

  return (
    <div ref={ref} className={classcat([container, isVisible ? visible : ''])} >
      <div className={wrap}>
        <div className={textContainer}>
          <h2>
            ??????????????? <br/>
            ????????? ?????????
          </h2>
          <p>
            ???????????? ???????????? FEConf2021??? ????????????<br/>
            ????????? ??? ?????????. <br/>
            FEConf ????????? ?????? ?????? ???????????? ??????????????????
          </p>
          <SafeLink href={YOUTUBE_CHANNEL_URL}>
            <button><span>????????? ????????????</span><img src={right}/></button>
          </SafeLink>
        </div>
        <div className={circle} ref={containerRef}>
          <div className={backgroundImage}/>
        </div>
      </div>
    </div>
  );
}

export default ChannelInfoSection;
