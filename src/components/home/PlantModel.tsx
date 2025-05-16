import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const PlantModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const leavesRef = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      leavesRef.current.forEach((leaf, i) => {
        leaf.position.y = Math.sin(state.clock.elapsedTime + i * 0.5) * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Stem */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color="#2E7D32" />
      </mesh>

      {/* Leaves */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 0.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = i * 0.3 - 0.5;

        return (
          <mesh
            key={i}
            position={[x, y, z]}
            rotation={[0, -angle + Math.PI / 2, Math.PI / 4]}
            ref={(el) => {
              if (el) leavesRef.current[i] = el;
            }}
          >
            <coneGeometry args={[0.3, 1, 32]} />
            <meshStandardMaterial color="#AED581" />
          </mesh>
        );
      })}

      {/* Water droplets */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(i * 1000) * 0.5;

        return (
          <mesh key={`droplet-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#81D4FA" transparent opacity={0.6} />
          </mesh>
        );
      })}
    </group>
  );
};

export default PlantModel;