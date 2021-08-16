import { Plane, MeshDistortMaterial, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'


export default function Landscape(props: JSX.IntrinsicElements['planeGeometry'] & JSX.IntrinsicElements['mesh']) {
    const planeRef = useRef<THREE.Object3D>(null)
    const box = new THREE.BoxGeometry(1, 1, 1, 3, 3, 3)
    const mate = new THREE.MeshLambertMaterial()
    const instances = useRef<THREE.InstancedMesh>(null)
    const landscapeColor = new THREE.Color('rgb(168,0,0)')
    

    return (
        <Plane ref={planeRef} args={[200, 200, 200, 200]} rotation={[Math.PI*1.5, 0, 0]} scale={5} {...props}>
            <MeshDistortMaterial attach='material' distort={0.3} speed={0} color={landscapeColor} skinning={true} />
            <instancedMesh ref={instances} args={[box, mate, 100]} position={[0, 5, 0]} />
        </Plane>
    )
}
