import { Box, OrbitControls, MeshWobbleMaterial, PerspectiveCamera, Plane, Sphere, TorusKnot, MeshDistortMaterial, useProgress } from '@react-three/drei'
import { Canvas, useFrame, useThree, useLoader, ThreeEvent } from '@react-three/fiber'
import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'


export default function RoomMesh() {
    const { camera } = useThree()
    const { progress } = useProgress()
    const light = useRef<THREE.PointLight>(null!)
    const obj1 = useRef<THREE.Object3D>(null!)
    const alpha = useLoader(THREE.TextureLoader, '/drex4.png')
    const container = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        obj1.current.translateY(Math.sin(clock.getElapsedTime()) * 0.03)
        
    })

    return (
        <>
            <mesh ref={container} onPointerMove={e => light.current.position.set(e.point.x - 1, e.point.y + 1, e.point.z + 1)} >
            
                <pointLight ref={light} decay={0.4} intensity={0.2} color='lightblue' position={[0, 10, 0]} />
                <Plane 
                rotation={[Math.PI * 1.5, 0, 0]} 
                args={[20, 10, 20, 10]} 
                position={[0, 0, 0]}
                >
                    <meshPhongMaterial color='white' />
                </Plane>
                <Plane args={[20, 10, 20, 10]} position={[0, 5, -5]} >
                    <meshPhongMaterial color='brown' alphaMap={alpha} alphaTest={0.9} side={THREE.DoubleSide} />
                </Plane>
                <Plane rotation={[0, Math.PI * 1.5, 0]} args={[10, 10, 10, 10]} position={[10, 5, 0]} >
                    <meshPhongMaterial color='brown' />
                </Plane>
                <TorusKnot ref={obj1} scale={0.5} position={[3, 3, 0]} >

                </TorusKnot>
            </mesh>
        </>
    )
}