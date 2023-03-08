import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight
        intensity={1}
        position={[0, 1, 0]}
        angle={Math.PI / 2}
        penumbra={1}
        castShadow
      />
      <spotLight
        position={[0, 1, 0]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight color="white" intensity={0.5} position={[10, 10, 10]} />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={1}
        rotation-x={0.6}
        receiveShadow
        castShadow
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
