/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Riccardo Mazzi (https://sketchfab.com/jena)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/bc0b122ee31a4909b3b2cee99c824ad0
title: Kaonashi (No-Face)
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { TorusKnot, useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    Empty_Mesh_Corpo_0: THREE.Mesh
    Empty_Mesh_Ombra_0: THREE.Mesh
  }
  materials: {
    Corpo: THREE.MeshBasicMaterial
    Ombra: THREE.MeshBasicMaterial
  }
}

export default function Kaonashi(props: JSX.IntrinsicElements['mesh']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/kaonashi/scene.gltf') as GLTFResult
  useEffect(() => {
    group.current.rotateY(Math.PI)
  }, [])

  return (
    <mesh {...props}>
      <group ref={group} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Empty_Mesh_Corpo_0.geometry} material={materials.Corpo} />
            <mesh geometry={nodes.Empty_Mesh_Ombra_0.geometry} material={materials.Ombra} />
          </group>
        </group>
      </group>
    </mesh>
  )
}

useGLTF.preload('/kaonashi/scene.gltf')