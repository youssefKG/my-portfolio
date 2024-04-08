import { useState, useEffect, userRef, useRef } from 'react'
import * as THREE from 'three';

const MyThree = () => {
    const ref = useRef();
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGL1Renderer();
        renderer.setSize(window.innerWidth / 6, window.innerHeight / 6)
        ref.current && ref.current.appendChild(renderer.domElement);
        const geometry = new THREE.BoxGeometry(4, 4, 4);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 6;
        camera.lookAt(0, 0, 0);
        // camera.position.x = 4
        // camera.position.y = -2
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate()
    }, [])
    return (
        <div
            ref={ref}
        >
        </div>
    )
}
export default MyThree; 