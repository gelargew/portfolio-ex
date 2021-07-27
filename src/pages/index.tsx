import '../global.css'
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Layout from '../components/Layout'
import Kaonashi from '../components/Kaonashi'
import { Box, OrbitControls, Plane } from '@react-three/drei'


export default function Index() {

    return (
        <Layout>
            <Canvas>
                <OrbitControls />
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <GhostMesh />
                </Suspense>
            </Canvas>
        </Layout>
    )
}

const spreadPosition = [[0, 0], [5, 0], [10, 0], [20,1], [-8, 2], [-19, -5], [-19, 10], [-10, 5]]

const GhostMesh = ({positions=spreadPosition}) => {
    const { camera, mouse } = useThree()
    const kaoRef = useRef<THREE.Mesh>(null!)
    const box = useRef<THREE.Object3D>()
    const box2 = useRef<THREE.Object3D>()
    const pointer = new THREE.Vector3(20, -6, 0)
    const direction = new THREE.Vector3(0, -6, -4)
    const group = useRef<THREE.Group>(null!)


    useEffect(() => {
        camera.position.set(0, 0, 10)
        const me = kaoRef.current.clone()
        positions.forEach(val => {
            const newMesh = kaoRef.current.clone()
            newMesh.position.set(val[0], -10 , val[1])
            group.current.add(newMesh)
        })
        console.log(group.current)
    }, [])

    const handleClick = (e:ThreeEvent<PointerEvent>) => {
        
        pointer.copy(e.point).setY(-6)
    }

    useFrame(({ clock }) => {
        group.current.children.forEach(obj => {
            obj.lookAt(direction)
            obj.translateZ(0.02)
            obj.translateY(Math.sin(clock.getElapsedTime() * 2) * 0.02)
        })
        direction.lerp(pointer, 0.005)

    })
 
    return (
        
        <Box ref={box} args={[40, 20, 40, 40, 20, 40]} position={[0, 4, 0]} onPointerMove={handleClick} >
            <meshPhongMaterial wireframe side={THREE.DoubleSide} />  
            <group ref={group}>
                <mesh  ref={kaoRef} scale={0.01} position={[0, -10, 0]}>
                    <Kaonashi />
                </mesh> 
            </group>      
                      
            <Box ref={box2} scale={0.5} position={[0, -9, 4]} />
        </Box>
        
    )
}