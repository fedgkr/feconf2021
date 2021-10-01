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
  const isVisible = useIntersection(ref.current, { once: true, threshold: .3 });
  const {
    ref: containerRef,
    threeRef,
  } = useThree({
    background: 0x0B0D0D,
  });


  useEffect(() => {
    const three = threeRef.current;


    const textureLoader = new THREE.TextureLoader();
    const sphereTexture = textureLoader.load(sphereImage);

    sphereTexture.anisotropy = 16;


    const sphereMaterial = new THREE.MeshBasicMaterial({
      map: sphereTexture,
      side: THREE.DoubleSide,
      alphaTest: 1,
    });
    const sphereGeometry = new THREE.PlaneGeometry(406, 406, 1, 1);

    sphereGeometry.translate(0, 0, 0)
    three.addMesh(sphereGeometry, sphereMaterial);

    const edgeGeometry = new THREE.EdgesGeometry(new THREE.SphereGeometry(200, 20, 20));
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
            온라인에서 <br/>
            생생한 경험을
          </h2>
          <p>
            유튜브로 공개되는 2021 FECONF 어디서든 <br/>
            만나볼 수 있어요. <br/><br/>
            FECONF가 5주년을 맞이해 이벤트를 진행합니다. <br/>
            유튜브 채널을 구독하시면 추첨을 통해 다양한<br/>
            상품을 드립니다.
          </p>
          <SafeLink href={YOUTUBE_CHANNEL_URL}>
            <button><span>유튜브 구독하기</span><img src={right}/></button>
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
