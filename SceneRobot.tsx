/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 public/alien/scene.gltf -t -r public
Author: Ndevisuals (https://sketchfab.com/Wade23)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cute-alien-character-42fe1c5cd5724fd6ad34c6fd56daf892
Title: Cute Alien Character
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_32: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export function ModelRobot(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/alien/scene.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        scale={0.791}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.003"]}
        position={[0.08, -0.045, 0.249]}
        scale={[0.022, 0.04, 0.029]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["Material.001"]}
        position={[0, 0.339, -0.013]}
        rotation={[-0.207, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials["Material.002"]}
        scale={0.811}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials["Material.004"]}
        position={[0, 0.012, 0]}
        scale={0.776}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials["Material.004"]}
        position={[0, -0.38, 0.318]}
        scale={[0.024, 0.024, 0.012]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials["Material.004"]}
        position={[0, -0.464, 0.318]}
        scale={[0.024, 0.024, 0.012]}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials["Material.002"]}
        position={[0, -0.018, 0]}
        scale={0.791}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials["Material.004"]}
        position={[0, -0.014, 0]}
        scale={0.791}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials["Material.004"]}
        position={[0, -0.014, 0]}
        scale={0.791}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials["Material.001"]}
        position={[0.525, -0.503, 0]}
        rotation={[1.864, -0.217, 0.065]}
        scale={0.024}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials["Material.005"]}
        position={[0, -0.086, 0.244]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.029}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials["Material.002"]}
        position={[0.376, -0.424, 0]}
        rotation={[0, 0, 1.112]}
        scale={0.088}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials["Material.002"]}
        position={[0.378, -0.424, 0]}
        rotation={[0, 0, 1.112]}
        scale={0.088}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials["Material.001"]}
        position={[0.011, 0.511, -0.058]}
        scale={0.086}
      />
    </group>
  );
}

useGLTF.preload("/alien/scene.gltf");
