import React, { Suspense } from "react";
// Imports Canvas component from react-three-fiber library
import { Canvas } from "@react-three/fiber";
// Imports OrbitControls, Preload and useGLTF components from drei library
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// Custom Loader component for fallback during loading process
import CanvasLoader from "../Loader";

const Earth = () => {
  // Hooks into the GLTF model loader with the specified path to the earth model file
  const earth = useGLTF("./pc/scene.gltf");

  return (
    <mesh>
      {/* HemisphereLight positioned above the model for ambient lighting */}
      <hemisphereLight intensity={1} position={[0, 1, 0]} />
      {/* SpotLight positioned above the model for a more focused beam of light */}
      <spotLight
        position={[0, 1, 0]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      {/* PointLight positioned outside the scene to brighten up shadows */}
      <pointLight color="white" intensity={0.5} position={[10, 10, 10]} />
      {/* The primitive mesh for the imported earth model */}
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
      // Enables support for shadows in the scene
      shadows
      // Sets the frameloop attribute to demand, skipping unnecessary rendering cycles (useful in low-performance devices)
      frameloop="demand"
      // Enables to preserve drawing buffer to take screenshots or download an image rendering of the canvas
      gl={{ preserveDrawingBuffer: true }}
      // Sets FOV, near and far planes and initial camera position values for the camera object in the Canvas instance
      camera={{
        fov: 60,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Wraps the Earth component inside the Suspense component along with the OrbitControls user interaction */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          // Restricts up / down orbit angles for the camera view
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
