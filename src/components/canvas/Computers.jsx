import React from "react";
// importanje useState, useEffect pa Suspense za loadanje
import { Suspense, useEffect, useState } from "react";
// importanje Canvas pa drugih zadev potrebne za 3d render
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// 3d render za isMobile propon
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./pce/scene.gltf");

  // mesh za render s svetlobo
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow={true}
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.75} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 1.95}
        position={isMobile ? [-0.3, -3.1, -0.2] : [1, -5.45, 1.8]}
        rotation={isMobile ? [-3.1, -4.1, -15.75] : [0.13, 0.81, -0.095]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmouted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // nekše stvari ka so potrebne za render
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 30, 10], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
