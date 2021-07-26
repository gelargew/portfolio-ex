import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Layout from '../components/Layout'
import Kaonashi from '../components/Kaonashi'
import { Box, OrbitControls } from '@react-three/drei'


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

const GhostMesh = () => {
    const { camera, mouse } = useThree()
    const kaoRef = useRef<THREE.Mesh>()
    const box = useRef<THREE.Object3D>()
    const box2 = useRef<THREE.Object3D>()
    const [pointer, setPointer] = useState(new THREE.Vector3(0, 0, 0))
    const prev = new THREE.Vector3(0, 0, 0)
    const prevQ = new THREE.Quaternion()

    useEffect(() => {
        camera.position.set(0, 0, 10)
    }, [])



    useFrame(({ clock }) => {
        kaoRef.current.translateZ(0.04)
        kaoRef.current.translateY(Math.sin(clock.getElapsedTime()) * 0.01)
        prev.set(...prev.lerp(pointer, 0.01).toArray())
        kaoRef.current.lookAt(prev)
    })
    
    
    

    return (
        
        <Box ref={box} args={[20, 20, 20, 20, 20, 20]} position={[0, 4, 0]} onPointerMove={e => setPointer(e.point)} >
            <meshPhongMaterial wireframe side={THREE.DoubleSide} />
            <mesh   ref={kaoRef} scale={0.01} position={[0, -10, 0]}>
                <Kaonashi rotation={[0, Math.PI, 0]}  />
            </mesh>         
            <Box ref={box2} scale={0.5} position={[0, -9, 4]} />
        </Box>
        
    )
}