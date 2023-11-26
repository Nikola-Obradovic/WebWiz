import * as THREE from "three";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/iphone4.glb");
  const computer = useGLTF("./desktop_pc/iphone_14_pro_max.glb");
  // const containerRef = useRef(null);
  // const raycaster = useRef(new THREE.Raycaster());
  // const mouse = useRef(new THREE.Vector2());

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     45,
  //     window.innerWidth / window.innerHeight,
  //     0.25,
  //     20
  //   );
  //   const renderer = new THREE.WebGLRenderer({ antialias: true });

  //   // Set up your scene, camera, and renderer here

  //   // Handle mouse click event
  //   const onClick = (event) => {
  //     event.preventDefault();
  //     // Calculate coordinates
  //     mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
  //     mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  //     // console.log(raycaster.current);
  //     raycaster.current.setFromCamera(mouse.current, camera);

  //     // Perform intersection check with your objects
  //     const intersects = raycaster.current.intersectObjects(
  //       computer.scene.children,
  //       true
  //     );
  //     // console.log(intersects);

  //     if (intersects.length > 0) {
  //       console.log("Intersection:", intersects[0]);
  //     }
  //   };

  //   // Add event listener for mouse click
  //   window.addEventListener("click", onClick);

  //   // Clean up event listener on component unmount
  //   return () => {
  //     window.removeEventListener("click", onClick);
  //   };
  // }, []);

  return (
    <mesh /*ref={containerRef}*/>
      <hemisphereLight intensity={8} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={1.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} />
      <primitive
        object={computer.scene}
        // scale={1}
        // scale={isMobile ? 1.5 : 1}
        scale={isMobile ? 30 : 35}
        // position={[0, -2.25, -1.5]}
        // position={isMobile ? [(0, -2.25, -1.5)] : [0, -2.25, -1.5]}
        position={isMobile ? [0, -5.25, -0.1] : [0, -2.75, -3.5]}
        // rotation={isMobile ? [0, 1.3, 0] : [0, 0.5, -0.1]}
        rotation={isMobile ? [0, 4.5, 0] : [0.1, 4, 0.2]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    console.log(mediaQuery);
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
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
