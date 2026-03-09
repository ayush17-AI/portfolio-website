"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Float, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ position, color, args, type }: { position: [number, number, number], color: string, args: any, type: string }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const speed = useRef(Math.random() * 0.4 + 0.2);
    const offset = useRef(Math.random() * Math.PI * 2);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();

        // Floating movement
        meshRef.current.position.y = position[1] + Math.sin(t * speed.current + offset.current) * 0.5;
        meshRef.current.position.x = position[0] + Math.cos(t * speed.current * 0.5 + offset.current) * 0.3;

        // Subtle rotation
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position}>
                {type === "sphere" ? (
                    <sphereGeometry args={args} />
                ) : (
                    <torusGeometry args={args} />
                )}
                <meshStandardMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    roughness={0.1}
                    metalness={0.2}
                />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="w-full h-full min-h-[600px]">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {/* Background Floating Shapes */}
                <FloatingShape position={[-5, 2, 0]} color="#d2bab0" args={[1, 32, 32]} type="sphere" />
                <FloatingShape position={[6, -3, -2]} color="#bfa094" args={[1.5, 0.4, 16, 100]} type="torus" />
                <FloatingShape position={[-4, -4, 2]} color="#eaddd7" args={[0.5, 0.2, 16, 100]} type="torus" />
                <FloatingShape position={[3, 4, -4]} color="#a18072" args={[0.8, 32, 32]} type="sphere" />
                <FloatingShape position={[0, -5, -6]} color="#d2bab0" args={[2, 0.5, 16, 100]} type="torus" />

                <Environment preset="studio" />
            </Canvas>
        </div>
    );
}
