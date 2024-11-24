import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
// @ts-ignore
import * as THREE from 'three';

type Model3DProps = {
  modelPath: string
  color?: string
  fromScale?: [number, number, number]
  toScale?: [number, number, number]
  spin?: boolean
};

type ModelProps = Model3DProps

const Model: React.FC<ModelProps> = ({ modelPath, color = 'white', fromScale = [2, 2, 2], toScale = [4, 4, 4], spin }) => {
  const { scene } = useGLTF(modelPath);
  const scaleRef = useRef(new THREE.Vector3(fromScale[0], fromScale[1], fromScale[2]));

   // Rotation
   useFrame(() => {
    if (spin) {
      scene.rotation.y += 0.01; // Rotate the model by 0.01 radians per frame
    }
  });

  useEffect(() => {
    // Change color
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        ((child as THREE.Mesh).material as THREE.MeshStandardMaterial).color.set(color);
      }
    });

    const targetScale = new THREE.Vector3(toScale[0], toScale[1], toScale[2]); // Target scale set to 4
    const duration = 1000; // Duration of 1 second
    const startTime = Date.now();

    const animateScale = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newScale = scaleRef.current.lerpVectors(new THREE.Vector3(2, 2, 2), targetScale, progress);
      scene.scale.set(newScale.x, newScale.y, newScale.z);
      if (progress < 1) {
        requestAnimationFrame(animateScale);
      }
    };

    animateScale();
  }, [scene]);

  return <primitive object={scene} />;
};

const Model3D: React.FC<Model3DProps> = ({ modelPath, color, fromScale, toScale, spin }) => {

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} color={color} fromScale={fromScale} toScale={toScale} spin={spin}/>
      </Suspense>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Model3D;
