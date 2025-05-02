import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from '@react-spring/three'
import { useFrame } from "@react-three/fiber";


const Sky = ({ isRotating, ...props }) => {
  const { nodes, materials } = useGLTF("/3D/sky.glb");

  const ref = useRef()

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.25 * delta
    }
  })

  return (
    <a.group {...props} ref={ref} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={50000}
        />
      </group>
    </a.group>
  );
}

// useGLTF.preload("/sky.glb");
export default Sky;