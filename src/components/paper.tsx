import { Plane, OrbitControls, Torus, TorusKnot, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function Paper({position=[0, 0, 0]}: { position: [ x:number, y:number, z:number]}) {
    return (
        <mesh position={position} >    
            <Suspense fallback={null}>
                <PaperModel />
                <TorusModel />
            </Suspense>
            
        </mesh>
    )
}

const PaperModel = () => {

    return (
        <Plane
        args={[5, 10000, 5, 10000]}
        rotation={[Math.PI * 1.5, 0, 0]}
        >
            <meshPhongMaterial color='teal' />
        </Plane>
    )
}

const TorusModel = () => {
    const ref = useRef<THREE.Object3D>(null!)
    const light = useRef<THREE.SpotLight>(null!)

    useEffect(() => {
        light.current.lookAt(5, 5, 0)
    }, [])

    useFrame(({ clock }) => {
        ref.current.rotateY(0.01)
    })

    return (
        <>
            <TorusKnot scale={0.1} ref={ref} args={[5, 1, 30, 20, 3, 7]}  position={[0, 3, 0]} >
                <meshPhongMaterial wireframe />
            </TorusKnot>
            <Sphere ref={light} scale={0.1} position={[0, 5, 0]} >
                <meshPhongMaterial color='yellow' />
                <spotLight color='yellow'  intensity={20} />
            </Sphere>
            
        </>
    )
}