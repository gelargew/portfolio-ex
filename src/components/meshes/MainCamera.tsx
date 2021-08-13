import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

export default function MainCamera() {
    const container = useRef<THREE.Object3D>(null)
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(0, 0, 0))
   
    useFrame(({clock}) => {
        container.current.rotateY(0.01)
        container.current.rotateX(Math.sin(clock.getElapsedTime())*0.002)
    })
    return (
        <Sphere ref={container} args={[50, 5, 5]}>
            <PerspectiveCamera makeDefault position={[-10, 15, 40]} />
            <meshPhongMaterial wireframe />
            <OrbitControls />
        </Sphere> 
    )
}