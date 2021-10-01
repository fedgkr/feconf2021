import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Component from '@egjs/component';

export interface ThreeProps {
    background: number;
    minWidth?: number;
}
export interface MeshObject {
    mesh: THREE.Mesh;
    geometry: THREE.BufferGeometry;
    material: THREE.Material;
}


export function cloneAttributes(geometry: THREE.SphereGeometry | THREE.EdgesGeometry | THREE.ParametricBufferGeometry) {
    const attributes = geometry.attributes;

    
    const clonedAttributes: Record<string, THREE.BufferAttribute>  = {};


    for (const name in attributes) {
        clonedAttributes[name] = attributes[name].clone();
    }

    return clonedAttributes;
}


export function useThree(props: ThreeProps) {
    const ref = useRef<HTMLDivElement>();
    const threeRef = useRef<Three>();

    useEffect(() => {
        threeRef.current = new Three(ref.current, props);

        return () => {
            threeRef.current.destroy();
        };
    }, []);
    return {
        ref,
        threeRef,
    }
}
export default class Three extends Component<{
    render: { now: number };
    resize: { width: number; height: number; };
}> {
    public width = 0;
    public height = 0;
    public canvasWidth = 0;
    public canvasHeight = 0;
    public scene: THREE.Scene;
    public camera: THREE.OrthographicCamera;
    public renderer: THREE.WebGLRenderer;
    public datas: Record<string, any> = {};
    private rafId = 0;


    constructor(private container: HTMLElement, public props: ThreeProps) {
        super();
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(0, 0, 0, 0, 1, 10000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        const scene = this.scene;
        const renderer = this.renderer;
        const camera = this.camera;

        scene.add(new THREE.AmbientLight(0xffffff));
        camera.position.set(0, 0, 2000);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);


        scene.background = new THREE.Color(this.props.background);


        this.width = container.clientWidth;
        this.height = container.clientHeight;
        this.rafId = requestAnimationFrame((now) => {
            this.onWindowResize();
            this.onAnimate(now);
            window.addEventListener("resize", this.onWindowResize);
        });
    }
    public add(...objects: any[]) {
        this.scene.add(...objects);
    }
    public addMesh(geometry: THREE.BufferGeometry, material: THREE.Material) {
        const mesh = new THREE.Mesh(geometry, material);

        mesh.castShadow = true;
        this.scene.add(mesh);
    }
    public destroy() {
        this.off();
        this.renderer.clear();
        this.container.removeChild(this.renderer.domElement);
        window.cancelAnimationFrame(this.rafId);
        window.removeEventListener("resize", this.onWindowResize);
        this.scene.clear();
    }

    private onAnimate = (now: any) => {
        this.rafId = requestAnimationFrame(this.onAnimate);
        this.onRender(now);
    }
    private onRender = (now: number) => {
        this.trigger("render", { now });
        this.renderer.render(this.scene, this.camera);
    }
    private onWindowResize = () => {
        const camera = this.camera;
        const renderer = this.renderer;
        const container = this.container;
        const props = this.props;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const canvasWidth = Math.max(props.minWidth || 0,  width);

        camera.left = -canvasWidth / 2;
        camera.right = canvasWidth / 2;
        camera.top = height / 2;
        camera.bottom = -height / 2;
        camera.updateProjectionMatrix();


        this.width = width;
        this.height = height;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = height;

        this.trigger("resize", { width, height });

        renderer.setSize(canvasWidth, height, false);
    }
}