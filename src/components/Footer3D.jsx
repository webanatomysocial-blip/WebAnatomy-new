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
      cursor.x = ((e.clientX - rect.left) / container.clientWidth - 0.5) * 20;
      cursor.y = -((e.clientY - rect.top) / container.clientHeight - 0.5) * 0.7;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let sphereMesh;
    let reqFrame;

    // ─── Fonts ─────────────────────────────────────────────────────────
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://raw.githubusercontent.com/danielyl123/person/refs/heads/main/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textStr = "WEB ANATOMY";
        const textGroup = new THREE.Group();
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

        const fontSize = 3;
        const letterSpacing = 0.2; // Custom spacing between letters
        const spaceWidth = 1.5;    // Manual width for space character
        let xOffset = 0;

        for (let i = 0; i < textStr.length; i++) {
          const char = textStr[i];

          if (char === " ") {
            xOffset += spaceWidth + letterSpacing;
            continue;
          }

          const charGeometry = new TextGeometry(char, {
            font,
            size: fontSize,
            depth: 0,
            curveSegments: 5,
            bevelEnabled: true,
            bevelThickness: 0,
            bevelSize: 0,
            bevelOffset: 0,
            bevelSegments: 4,
          });

          const charMesh = new THREE.Mesh(charGeometry, textMaterial);
          charMesh.position.x = xOffset;
          textGroup.add(charMesh);

          // Calculate next character's position
          charGeometry.computeBoundingBox();
          if (charGeometry.boundingBox) {
            const charWidth = charGeometry.boundingBox.max.x - charGeometry.boundingBox.min.x;
            xOffset += charWidth + letterSpacing;
          } else {
            xOffset += fontSize * 0.6 + letterSpacing; // Fallback width
          }
        }

        // Center the group
        const box = new THREE.Box3().setFromObject(textGroup);
        const center = box.getCenter(new THREE.Vector3());
        textGroup.position.x = -center.x;
        textGroup.position.y = -center.y;

        scene.add(textGroup);
      },
    );

    // ─── Sphere ─────────────────────────────────────────────────────────
    const sphereGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const sphereMaterial = new THREE.MeshPhysicalMaterial();
    sphereMaterial.metalness = 0;
    sphereMaterial.roughness = 0;
    sphereMaterial.iridescence = 1;
    sphereMaterial.iridescenceIOR = 1.5;
    sphereMaterial.iridescenceThicknessRange = [100, 324];
    sphereMaterial.transmission = 1;
    sphereMaterial.ior = 1.2;
    sphereMaterial.thickness = 0.8;

    sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphereMesh.position.z = 0.2;
    scene.add(sphereMesh);

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

      // Smooth sphere follow cursor (lerp for ease-in/ease-out feel)
      if (sphereMesh) {
        sphereMesh.position.x += (cursor.x - sphereMesh.position.x) * 0.05;
        sphereMesh.position.y += (cursor.y - sphereMesh.position.y) * 0.05;
        sphereMesh.rotation.x = elapsedTime * 0.5;
        sphereMesh.rotation.y = elapsedTime * 0.1;
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
      sphereGeometry.dispose();
      sphereMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="footer-webgl-canvas" />;
};

export default Footer3D;
