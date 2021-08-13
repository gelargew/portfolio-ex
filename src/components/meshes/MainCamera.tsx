import React, { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, PerspectiveCamera, OrbitControlsProps } from '@react-three/drei'
import * as THREE from 'three'

export default function MainCamera() {
    const { camera } = useThree()
    const container = useRef<THREE.Object3D>(null)
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(5, 5, 0))
    const controlRef = useRef<any>(null)

    useLayoutEffect(() => {
        camera.zoom = camera.zoom * 0.001
        camera.updateProjectionMatrix()
        controlRef.current.target = cameraTarget
    }, [])

    useEffect(() => {
        controlRef.current.target = cameraTarget
        container.current.position.set(...cameraTarget.toArray())
    }, [cameraTarget])

    useFrame(({clock}) => {
        container.current.rotateY(0.005)
        container.current.rotateX(Math.sin(clock.getElapsedTime())*0.002)
        if (camera.zoom < 1) {
            camera.zoom = camera.zoom + (clock.getElapsedTime() / 4000)
            camera.updateProjectionMatrix()
        }
    })
    
    return (
        <Sphere ref={container} args={[1000, 5, 5]} onClick={() => camera.lookAt(50, -10, -100)}>
            <PerspectiveCamera makeDefault position={[-10, 15, 40]} />
            <meshPhongMaterial wireframe />
            <OrbitControls ref={controlRef} />
        </Sphere> 
    )
}