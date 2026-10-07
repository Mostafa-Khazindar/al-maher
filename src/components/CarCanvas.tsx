"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface CarCanvasProps {
  paintColor?: string;
}

export default function CarCanvas({ paintColor = "#2563eb" }: CarCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeColor, setActiveColor] = useState(paintColor);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Clean previous canvases if any
    while (mount.firstChild) {
      mount.removeChild(mount.firstChild);
    }

    const width = mount.clientWidth || 500;
    const height = mount.clientHeight || 420;

    // 1. Scene with clean studio background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f5f9);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(4.5, 2.8, 6.0);
    camera.lookAt(0, 0.6, 0);

    // 3. Renderer with high compatibility
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "default" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mount.appendChild(renderer.domElement);

    // 4. Studio Floor with clean reflective grid
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.2,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);

    const gridHelper = new THREE.GridHelper(20, 20, 0x3b82f6, 0xe2e8f0);
    gridHelper.position.y = 0.005;
    scene.add(gridHelper);

    // 5. Lighting Setup (Bright high-end automotive studio)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(6, 9, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 1.5);
    fillLight.position.set(-6, 5, -5);
    scene.add(fillLight);

    const blueAccent = new THREE.PointLight(0x2563eb, 2.0, 15);
    blueAccent.position.set(0, 4, 3);
    scene.add(blueAccent);

    // 6. Car Model (Executive Sedan Chassis)
    const carGroup = new THREE.Group();

    // Body Paint Material
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(activeColor),
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.9,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e293b,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.75,
      transparent: true,
      opacity: 0.9,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.95,
      roughness: 0.1,
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.8,
    });

    // Lower Main Body
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(4.3, 0.65, 2.0), bodyMat);
    lowerBody.position.y = 0.58;
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    carGroup.add(lowerBody);

    // Cabin / Windows
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.68, 1.7), glassMat);
    cabin.position.set(-0.25, 1.15, 0);
    cabin.castShadow = true;
    carGroup.add(cabin);

    // Roof Panel
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.08, 1.65), bodyMat);
    roof.position.set(-0.25, 1.51, 0);
    roof.castShadow = true;
    carGroup.add(roof);

    // Aerodynamic Hood
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.14, 1.8), bodyMat);
    hood.position.set(1.4, 0.84, 0);
    hood.rotation.z = -0.06;
    hood.castShadow = true;
    carGroup.add(hood);

    // Front Grill (Chrome finish)
    const grill = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.35, 1.2), chromeMat);
    grill.position.set(2.16, 0.55, 0);
    carGroup.add(grill);

    // LED Headlights
    const lightMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    const headlightR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.45), lightMat);
    headlightR.position.set(2.16, 0.68, 0.7);
    const headlightL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.45), lightMat);
    headlightL.position.set(2.16, 0.68, -0.7);
    carGroup.add(headlightR);
    carGroup.add(headlightL);

    // LED Taillights
    const tailMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const taillightR = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.5), tailMat);
    taillightR.position.set(-2.16, 0.68, 0.7);
    const taillightL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.5), tailMat);
    taillightL.position.set(-2.16, 0.68, -0.7);
    carGroup.add(taillightR);
    carGroup.add(taillightL);

    // 4 Wheels
    const wheels = [
      [1.35, 0.38, 1.05],
      [1.35, 0.38, -1.05],
      [-1.35, 0.38, 1.05],
      [-1.35, 0.38, -1.05],
    ];

    wheels.forEach(([x, y, z]) => {
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.3, 32), tireMat);
      tire.rotation.x = Math.PI / 2;
      tire.position.set(x, y, z);
      tire.castShadow = true;

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.31, 16), chromeMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.set(x, y, z);

      carGroup.add(tire);
      carGroup.add(rim);
    });

    scene.add(carGroup);

    // Mouse Interaction
    let targetRotationY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      targetRotationY = x * 1.5;
    };
    mount.addEventListener("mousemove", onMouseMove);

    // Resize handler
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let reqId: number;
    let clock = new THREE.Clock();
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();
      carGroup.rotation.y = THREE.MathUtils.lerp(
        carGroup.rotation.y,
        delta * 0.2 + targetRotationY,
        0.05
      );
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(reqId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeColor]);

  const colorPalettes = [
    { name: "أزرق الماهر الملكي", hex: "#1d4ed8" },
    { name: "أرجواني كاديلاك ATS", hex: "#3b1e54" },
    { name: "رمادي تيتانيوم", hex: "#475569" },
    { name: "أبيض لؤلؤي", hex: "#f8fafc" },
    { name: "أحمر ميتاليك", hex: "#991b1b" },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div ref={mountRef} className="w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden" />
      {/* Interactive Paint Palette Controls */}
      <div className="mt-3 flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-xs">
        <span className="font-bold text-slate-700">تغيير لون الدهان الحراري:</span>
        <div className="flex items-center gap-2">
          {colorPalettes.map((c) => (
            <button
              key={c.hex}
              onClick={() => setActiveColor(c.hex)}
              className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                activeColor === c.hex ? "scale-125 border-blue-600 shadow" : "border-slate-300"
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
