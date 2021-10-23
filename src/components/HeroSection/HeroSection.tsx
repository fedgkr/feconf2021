import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  container, videoWrap, headingWrap,
  headingContainer, dimmed, scrollDown,
  circle,
  fixed, down,
} from './HeroSection.module.scss';
import flagImage from '~/images/flag.png';
import * as THREE from "three";
import { getFlagFunction } from './three/flag';
import { cloneAttributes, useThree } from '../Three/Three';
import { ZOOM_FRAGMENT_SHADER, ZOOM_VERTEX_SHADER } from './three/zoom';
import { useScrollEffect } from '../useWindow/useWindowScroll';

interface HeroSectionProps { }

const easeOutCubic = (t: number) => (--t) * t * t + 1;

const HeroSection: React.FC<HeroSectionProps> = () => {
  const containerRef = useRef<HTMLDivElement>();
  const {
    ref,
    threeRef,
  } = useThree({});
  const isRendered = useRef(false);
  const [background, setBackground] = useState('#000000');
  let scale = 1;
  let zoomSize = -1;
  let zoomEffectDone = false;

  const increaseZoomSize = useCallback((start: ReturnType<typeof Date.now>, duration: number, target: number) => {
    const three = threeRef.current;
    const increase = () => {
      const now = Date.now();
      const progress = easeOutCubic((now - start) / duration);
      zoomSize = target * progress;
      three.datas.zoomMaterial.uniforms.zoomSize.value = zoomSize;
      if (target > zoomSize) {
        requestAnimationFrame(() => increase());
      } else {
        zoomEffectDone = true;
      }
    };
    increase();
  }, []);

  const updateZoom = useCallback(() => {
    const three = threeRef.current;
    const { width, height } = three;
    const offset = 80;
    const scrollTop = three.datas.scrollTop;
    const fixedArea = [offset, 500 + offset];
    const isMobile = false; // width < 1024;
    const ratio = isMobile ? 1.2 : Math.min(1.2, Math.max(0, scrollTop - fixedArea[0]) / 2000);
    const target = (240 / Math.sqrt(width * width + height * height)) * (1 + ratio * 10);
    three.datas.zoomMaterial.uniforms.scrollRatio.value = ratio;
    if (zoomEffectDone) {
      three.datas.zoomMaterial.uniforms.zoomSize.value = target;
    }
  }, []);

  useEffect(() => {
    const three = threeRef.current;

    const textureLoader = new THREE.TextureLoader();
    const flagTexture = textureLoader.load(flagImage);

    flagTexture.anisotropy = 16;

    const flagXSegments = 20;
    const flagYSegments = 10;
    const flagWidth = 50 * flagXSegments;
    const flagHeight = 50 * flagYSegments;

    const flagMaterial = new THREE.MeshLambertMaterial({
      map: flagTexture,
      side: THREE.DoubleSide,
      alphaTest: 0.5
    });
    const flagGeometry = new THREE.ParametricBufferGeometry(
      getFlagFunction(flagWidth, flagHeight),
      flagXSegments,
      flagYSegments,
    );

    const zoomMaterial = new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: ZOOM_VERTEX_SHADER,
      fragmentShader: ZOOM_FRAGMENT_SHADER,
      uniforms: {
        scrollRatio: { value: 0 },
        aspectRatio: { value: null },
        zoomSize: { value: null },
        zoomX: { value: 0.5 },
        zoomY: { value: 0.5 },
      },
    });
    const zoomGeometry = new THREE.PlaneGeometry(512, 512);

    zoomGeometry.translate(0, 0, 400);
    three.datas.zoomMaterial = zoomMaterial;

    const flagAttributes = cloneAttributes(flagGeometry);

    three.addMesh(flagGeometry, flagMaterial);
    three.addMesh(zoomGeometry, zoomMaterial);

    function onMouseMove(e: MouseEvent) {
      const zoomX = e.clientX / three.width;
      const zoomY = 1.0 - e.clientY / three.height;

      zoomMaterial.uniforms.zoomX.value = zoomX;
      zoomMaterial.uniforms.zoomY.value = zoomY;

      if (zoomSize === -1) {
        const { width, height } = three;
        const offset = 80;
        const scrollTop = three.datas.scrollTop;
        const fixedArea = [offset, 500 + offset];
        const isMobile = false; // width < 1024;
        const ratio = isMobile ? 1.2 : Math.min(1.2, Math.max(0, scrollTop - fixedArea[0]) / 2000);
        zoomSize = 0;
        three.datas.zoomMaterial.uniforms.zoomSize.value = 0;
        const target = (240 / Math.sqrt(width * width + height * height)) * (1 + ratio * 10);
        increaseZoomSize(Date.now(), 600, target)
      }
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onMouseMove);
    three.on("render", ({ now }) => {
      if (!isRendered.current) {
        isRendered.current = true;
        setBackground('linear-gradient(95.06deg, #8280E3 2.38%, #5590ED 100.44%)');
      }
      // const { width } = three;
      const elements = [-1, 0, 0, 0, 0, -0.9950371980667114, 0.09950371831655502, 0, 0, 0.09950371831655502, 0.9950371980667114, 0, -0, -0, -1.0049875974655151, 1];

      const positionAttribute = flagAttributes.position;
      const flagCount = positionAttribute.count;

      // https://github.com/rarietta/WebGL
      for (let i = 0; i < flagCount; ++i) {
        const x = -positionAttribute.getX(i) / (flagWidth / 2);
        const y = -positionAttribute.getY(i) / (flagHeight / 2);
        let s_contrib = 0.7 * Math.sin(x * 5 + now / 600);
        let t_contrib = 0.5 * Math.cos(y * 1.5 + now / 500);

        const vec4 = [x, y, s_contrib * t_contrib, 1];
        const dest = [
          elements[0] * vec4[0] + elements[4] * vec4[1] + elements[8] * vec4[2] + elements[12] * vec4[3],
          elements[1] * vec4[0] + elements[5] * vec4[1] + elements[9] * vec4[2] + elements[13] * vec4[3],
          elements[2] * vec4[0] + elements[6] * vec4[1] + elements[10] * vec4[2] + elements[14] * vec4[3],
          elements[3] * vec4[0] + elements[7] * vec4[1] + elements[11] * vec4[2] + elements[15] * vec4[3],
        ];
        flagGeometry.attributes.position.setXYZ(i, dest[0] * (flagWidth / 2), dest[1] * (flagHeight / 2), dest[2])
      }

      flagGeometry.scale(scale, scale, 1);
      flagGeometry.attributes.position.needsUpdate = true;
      flagGeometry.computeVertexNormals();
    });
    three.on("resize", ({ width, height }) => {
      const position = zoomGeometry.attributes.position as THREE.BufferAttribute;

      position.setXY(0, -width / 2 - 2, height / 2 + 2);
      position.setXY(1, width / 2 + 2, height / 2 + 2);
      position.setXY(2, -width / 2 - 2, -height / 2 - 2);
      position.setXY(3, width / 2 + 2, -height / 2 - 2);
      position.needsUpdate = true;

      zoomMaterial.uniforms.aspectRatio.value = width / height;

      // 1000 / 500
      scale = Math.min(width, height * 2) / 1200;
      updateZoom();
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onMouseMove);
    };
  }, []);

  useScrollEffect(() => {
    const scrollTop = document.documentElement.scrollTop;
    const three = threeRef.current;
    const offset = 80;

    const fixedArea = [offset, 500 + offset];
    const isMobile = false; // width < 1024;

    three.datas.scrollTop = scrollTop;

    if (!isMobile && scrollTop > fixedArea[1]) {
      containerRef.current.className = `${container} ${down}`;
    } else if (!isMobile && scrollTop > fixedArea[0]) {
      containerRef.current.className = `${container} ${fixed}`;
    } else {
      containerRef.current.className = `${container}`;
    }
    updateZoom();
  });
  return (
    <section className={container} ref={containerRef} style={{ background: background }}>
      <div className={videoWrap}>
        <div className="stretch">
          <div className={dimmed} />
        </div>
      </div>
      <div className={headingWrap}>
        <div className={headingContainer} ref={ref}>
          { isRendered.current ?  <div className={circle}/> : null }
          <div className={scrollDown}>scroll</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
