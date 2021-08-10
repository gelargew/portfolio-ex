import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Layout from '../components/Layout'
import Kaonashi from '../components/Kaonashi'
import { Box, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls } from '@react-three/drei'

export default function Index() {

    return (
        <Layout>
            <Canvas id='index'>
                <OrbitControls />
                <Suspense fallback={null}>
                    <GhostMesh />
                </Suspense>
            </Canvas>
        </Layout>
    )
}

const GhostMesh = ({positions=[[0, 0], [5, 0], [10, 0], [20,1], [-8, 2], [-19, -5], [-19, 10], [-10, 5]]
}) => {
    const { camera, mouse } = useThree()
    const kaoRef = useRef<THREE.Mesh>(null!)
    const box = useRef<THREE.Object3D>()
    const box2 = useRef<THREE.Object3D>()
    const pointer = new THREE.Vector3(20, -6, 0)
    const direction = new THREE.Vector3(0, -6, -4)
    const groupp = useRef<THREE.Group>(null!)
    const clones = []

    useEffect(() => {
        camera.position.set(0, 0, 10)
        console.log(kaoRef.current)
        if (positions.length > 0) {
            positions.forEach(val => {   
                const newMesh = kaoRef.current.clone()          
                newMesh.position.set(val[0], -10 , val[1])
                groupp.current.add(newMesh)
            })
        }
    }, [])

    const handleClick = (e:ThreeEvent<PointerEvent>) => {
        
        pointer.copy(e.point).setY(-6)
    }

    useFrame(({ clock }) => {
        // group.current.children.forEach(obj => {
        //     if (obj.position.distanceTo(pointer) > 10) {
        //         obj.translateZ(0.02)
        //         obj.translateY(Math.sin(clock.getElapsedTime() * 2) * 0.02)
        //     }     
        //     obj.lookAt(direction)    
        // })
        // direction.lerp(pointer, 0.005)

    })
 
    return (
        <>
            <ambientLight intensity={0.5} />
            <Box ref={box} args={[40, 20, 40, 40, 20, 40]} position={[0, 4, 0]} onPointerMove={handleClick} >
                <MeshWobbleMaterial attach='material' factor={1} speed={0.1} skinning={false} wireframe side={THREE.DoubleSide} alphaTest={0.4} />
                <group ref={groupp}>
                    <mesh  ref={kaoRef} scale={0.01} position={[0, -10, 0]}>
                        <Kaonashi />
                    </mesh> 
                </group>      
                        
                <Box ref={box2} scale={0.5} position={[0, -9, 4]} />
            </Box>
        </>
        
    )
}