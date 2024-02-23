"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function Cube() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={1}></ambientLight>
        <directionalLight intensity={5} position={[2, 1, 1]} />
        <Object />
      </Canvas>
    </div>
  );
}

function Object() {
  const mesh = useRef(null);
  const [color, setColor] = useState("pink");
  const [scale, setScale] = useState(false);
  const [height, setHeight] = useState(1);
  useFrame((state, delta) => {
    // @ts-ignore
    mesh.current.rotation.x += delta * 0.4;
    // @ts-ignore
    mesh.current.rotation.y += delta * 0.4;
    // @ts-ignore
    mesh.current.rotation.z += delta * 0.4;
  });
  return (
    <motion.mesh ref={mesh} position={[0, 0, 0]} whileHover={{ scaleX: 3 }}>
      <boxGeometry args={[1, 1, 1]} />
      <motion.meshStandardMaterial
        initial={{ color: "blue" }}
        animate={{ color: "white", transition: { duration: 2, delay: 4 } }}
      />
    </motion.mesh>
  );
}
