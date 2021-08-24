import React, { useRef, useState, useLayoutEffect, useEffect, Suspense } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Sphere, PerspectiveCamera, OrbitControlsProps } from '@react-three/drei'
import * as THREE from 'three'

export default function MainCamera({ level = new THREE.Vector3(0, 0, 0) }) {
    const { camera } = useThree()
    const container = useRef<THREE.Object3D>(null)
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(5, 5, 0))
    const controlRef = useRef<any>(null)

    useLayoutEffect(() => {
        camera.zoom = camera.zoom * 0.001
        camera.updateProjectionMatrix()
        controlRef.current.target = cameraTarget
    }, [camera])
   

    useFrame(({clock}) => {
        // container.current.rotateY(0.005)
        // container.current.rotateX(Math.sin(clock.getElapsedTime())*0.002)
        if (camera.zoom < 1) {
            camera.zoom = camera.zoom + 0.003*(Math.pow(0.1, camera.zoom))
            camera.updateProjectionMatrix()
        }
        container.current.position.lerp(level, 0.05)
        controlRef.current.target = container.current.position
    })
    
    return (
        <group ref={container} onClick={() => camera.lookAt(50, -10, -100)}>
            <pointLight castShadow receiveShadow decay={2} intensity={2} distance={300} color='lightblue' position={[40, 17, 35]} />
            <PerspectiveCamera far={500} makeDefault position={[-10, 15, 40]} />
            <meshPhongMaterial wireframe />
            <OrbitControls ref={controlRef} />
        </group> 
    )
}