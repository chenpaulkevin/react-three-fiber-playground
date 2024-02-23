"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function Cube() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Canvas>
        <PerspectiveCamera position={[0, 0, 10]} makeDefault>
          {" "}
        </PerspectiveCamera>
        <ambientLight intensity={1}></ambientLight>
        <directionalLight intensity={5} position={[2, 1, 1]} />
        <Object />
      </Canvas>
    </div>
  );
}

function Object() {
  const mesh = useRef(null);
  return (
    <motion.mesh
      ref={mesh}
      position={[0, 0, 0]}
      whileHover={{
        scaleX: 3,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <motion.meshStandardMaterial
        initial={{ color: "blue" }}
        animate={{ color: "white", transition: { duration: 2, delay: 4 } }}
      />
    </motion.mesh>
  );
}
