//Importing necessary dependencies from react-three-fiber & drei libraries
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

//Importing a custom loader component that will be used as a fallback for Suspense component
import CanvasLoader from "../Loader";

//Ball Component declared which is being used in the BallCanvas Component props are given when called upon
const Ball = (props) => {
  //useTexture hook is used to get texture images and store them in the decal variable
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* ambientLight and directionalLight components define lighting exposure through out the component */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      {/* mesh component renders our model here through geometry arguments and material arguments defined with colour, polygonOffsetFactor and flatshading directives followed by using the Decal component from drei library including texture data */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    // The Canvas component renders a 3D canvas with an equipped camera ready for models to render both 2d and 3d objects
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/*The Suspense component monitors rendering of the canvas while also providing our custom loader if the rendering fails */}
      <Suspense fallback={<CanvasLoader />}>
        {/*Orbit control enables orbit feature on rendered 3D objects*/}
        <OrbitControls enableZoom={false} />
        {/*Ball component from previous defined component that takes in image url as props */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/*Preload components.
      This removes load times and ensures that all resources are loaded before attempting to render components*/}
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
