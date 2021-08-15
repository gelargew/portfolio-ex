import { Plane, Sphere, TorusKnot } from '@react-three/drei'
import {  useFrame,useLoader } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import * as THREE from 'three'

type RoomMeshProps = {
    position?: [x: number, y: number, z: number]
}

export default function RoomMesh({ position=[0, 0, 0]}: RoomMeshProps) {
    const light = useRef<THREE.PointLight>(null!)
    const obj1 = useRef<THREE.Object3D>(null!)
    const alpha = useLoader(THREE.TextureLoader, '/drex4.png')
    const container = useRef<THREE.Mesh>(null)
    const [torusSpeed, setTorusSpeed] = useState(0.1)

    useFrame(({ clock }) => {
        obj1.current.translateY(Math.sin(clock.getElapsedTime()) * 0.03)
        obj1.current.rotateY(torusSpeed)
        
    })

    return (
        <>
            <mesh ref={container} position={position} onPointerMove={e => light.current.position.set(e.point.x - 1, e.point.y + 1, e.point.z + 1)} >
                <pointLight ref={light} decay={3} intensity={1} distance={50} color='lightblue' position={[0, 10, 0]} />
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
                <TorusKnot ref={obj1} scale={0.5} position={[3, 3, 0]} onPointerEnter={() => setTorusSpeed(0.4)} onPointerLeave={() => setTorusSpeed(0.1)} >
                    <meshPhongMaterial color='lightyellow' />
                </TorusKnot>
            </mesh>
        </>
    )
}