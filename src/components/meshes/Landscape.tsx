import { Plane, MeshDistortMaterial, Box, Reflector } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'


export default function Landscape(props: JSX.IntrinsicElements['boxGeometry'] & JSX.IntrinsicElements['mesh']) {
    const planeRef = useRef<THREE.Object3D>(null)
    const box = new THREE.BoxGeometry(1, 1, 1, 3, 3, 3)
    const mate = new THREE.MeshLambertMaterial()
    const instances = useRef<THREE.InstancedMesh>(null)
    const landscapeColor = new THREE.Color('rgb(40,40,40)')
    

    return (
        <>
            <Plane castShadow ref={planeRef} args={[10, 10, 300, 300]} scale={200} rotation={[Math.PI*1.5, 0, 0]} {...props}>
                <meshLambertMaterial attach='material' color={landscapeColor} wireframe />
            </Plane>
    </>
    )
}
