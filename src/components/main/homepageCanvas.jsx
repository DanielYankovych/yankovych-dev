"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export const HomepageCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      50, // FOV
      window.innerWidth / window.innerHeight,
      0.5,
      1000,
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const light = new THREE.DirectionalLight(0xf3f3f3, 4.5);
    light.position.set(3, 3, 3);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xf3f3f3, 1.5);
    scene.add(ambient);

    const BAR_LENGTH = 0.7;
    const BAR_THICKNESS = 0.12;
    const BAR_DEPTH = 0.12;
    const SLASH_LENGTH = 1.0;

    const slashGeom = new THREE.BoxGeometry(
      SLASH_LENGTH,
      BAR_THICKNESS,
      BAR_DEPTH,
    );
    const barGeom = new THREE.BoxGeometry(BAR_LENGTH, BAR_THICKNESS, BAR_DEPTH);
    const mat = new THREE.MeshStandardMaterial({
      color: "#131010",
      roughness: 5,
    });

    const leftTop = new THREE.Mesh(barGeom, mat);
    leftTop.rotation.z = Math.PI / 4;
    leftTop.position.set(-0.9, 0.21, 0);

    const leftBottom = new THREE.Mesh(barGeom, mat);
    leftBottom.rotation.z = -Math.PI / 4;
    leftBottom.position.set(-0.9, -0.21, 0);

    const slash = new THREE.Mesh(slashGeom, mat);
    slash.rotation.z = Math.PI / 2.5; // 45°
    slash.position.set(0.3, 0, 0);

    const rightTop = new THREE.Mesh(barGeom, mat);
    rightTop.rotation.z = -Math.PI / 4;
    rightTop.position.set(1, 0.21, 0);

    const rightBottom = new THREE.Mesh(barGeom, mat);
    rightBottom.rotation.z = Math.PI / 4;
    rightBottom.position.set(1, -0.21, 0);

    const group = new THREE.Group();
    group.add(leftTop, leftBottom, slash, rightTop, rightBottom);

    group.scale.set(0.9, 0.9, 0.9);
    // group.position.set(-1.5, -0.8, 0);
    scene.add(group);

    let geoMesh = group;

    const toLight = () => {
      gsap.to(mat.color, {
        r: 0,
        g: 0,
        b: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const toDark = () => {
      gsap.to(mat.color, {
        r: 0.9529,
        g: 0.9529,
        b: 0.9529,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("canvas-dark", toLight);
    window.addEventListener("canvas-light", toDark);

    let baseRotX = 0.002;
    let baseRotY = 0.002;

    let boostX = 0;
    let boostY = 0;
    let lastScrollY = window.scrollY || 0;

    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      const delta = currentY - lastScrollY;
      lastScrollY = currentY;
      boostY += delta * 0.00005;
      boostX += delta * 0.00005;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      if (geoMesh) {
        geoMesh.rotation.x += baseRotX + boostX;
        geoMesh.rotation.y += baseRotY + boostY;
        boostX *= 0.9;
        boostY *= 0.9;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("canvas-dark", toLight);
      window.removeEventListener("canvas-light", toDark);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="homepage-canvas"
      className="homepage-canvas"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};
