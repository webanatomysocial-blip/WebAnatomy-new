import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const Footer3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas.parentElement;

    // ─── Scene ─────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000);

    // ─── Cursor tracking ─────────────────────────────────────────────────
    const cursor = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      cursor.x = ((e.clientX - rect.left) / container.clientWidth - 0.5) * 4;
      //   cursor.y = -((e.clientY - rect.top) / container.clientHeight - 0.5) * 4;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let torusMesh;
    let reqFrame;

    // ─── Fonts ─────────────────────────────────────────────────────────
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://raw.githubusercontent.com/danielyl123/person/refs/heads/main/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textGeometry = new TextGeometry("Webanatomy", {
          font,
          size: 3,
          depth: 0,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 0,
          bevelSize: 0,
          bevelOffset: 0,
          bevelSegments: 4,
        });
        textGeometry.computeBoundingBox();
        textGeometry.center();

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        textMaterial.wireframe = false;
        const text = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(text);
      },
    );

    // ─── Torus ─────────────────────────────────────────────────────────
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.4, 100, 60);
    const torusMaterial = new THREE.MeshPhysicalMaterial();
    torusMaterial.metalness = 0;
    torusMaterial.roughness = 0;
    torusMaterial.iridescence = 1;
    torusMaterial.iridescenceIOR = 1.5;
    torusMaterial.iridescenceThicknessRange = [100, 324];
    torusMaterial.transmission = 1;
    torusMaterial.ior = 1.2;
    torusMaterial.thickness = 0.8;

    torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.z = 1;
    scene.add(torusMesh);

    // ─── Lights ─────────────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(-1, 2, 0);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 10);
    pointLight2.position.set(-1, -2, 0);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffffff, 10);
    pointLight3.position.set(1, -2, 0);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xffffff, 10);
    pointLight4.position.set(1, 2, 0);
    scene.add(pointLight4);

    // ─── Animation Loop ─────────────────────────────────────────────────
    const timer = new THREE.Timer();

    const tick = () => {
      timer.update();
      const elapsedTime = timer.getElapsed();

      // Smooth torus follow cursor (lerp for ease-in/ease-out feel)
      if (torusMesh) {
        torusMesh.position.x += (cursor.x - torusMesh.position.x) * 0.05;
        torusMesh.position.y += (cursor.y - torusMesh.position.y) * 0.05;
        torusMesh.rotation.x = elapsedTime * 0.5;
        torusMesh.rotation.y = elapsedTime * 0.1;
      }

      renderer.render(scene, camera);
      reqFrame = requestAnimationFrame(tick);
    };
    tick();

    // ─── Resize ──────────────────────────────────────────────────────────
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // ─── Cleanup ─────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(reqFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="footer-webgl-canvas" />;
};

export default Footer3D;
