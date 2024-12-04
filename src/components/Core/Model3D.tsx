import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
// @ts-ignore
import * as THREE from 'three';

type Model3DProps = {
  modelPath: string;
  color?: string;
  fromScale?: [number, number, number];
  toScale?: [number, number, number];
  spin?: boolean;
};

type ModelProps = Model3DProps;

const Model: React.FC<ModelProps> = ({ modelPath, color = 'white', spin }) => {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    // Center the model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center); // Adjust model to rotate around its middle point
  }, [scene]);

  // Self Rotation
  useFrame(() => {
    if (spin && groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Rotate around Y-axis
    }
  });

  useEffect(() => {
    // Change color of the model
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).color.set(color);
      }
    });
  }, [scene, color]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
};

const Model3D: React.FC<Model3DProps> = ({ modelPath, color, spin }) => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} color={color} spin={spin} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};



export default Model3D;
