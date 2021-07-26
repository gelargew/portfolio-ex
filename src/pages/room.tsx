import { Box, OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import Layout from '../components/Layout'
import { Canvas } from '@react-three/fiber'
import Kaonashi from '../components/kaonashi'


export default function Room() {

    return (
        <Layout>
            <Canvas>
                <hemisphereLight intensity={0.4} />
                <Suspense fallback={null}>
                    <RoomMesh />
                </Suspense>
            </Canvas>
        </Layout>
    )
}


const RoomMesh = () => {

    return (
        <mesh>
            <OrbitControls />
            <Box args={[10, 5, 5, 10, 5, 5]} >
                <meshPhongMaterial wireframe />
                <ambientLight intensity={2} />
                <Kaonashi />
            </Box>
        </mesh>
    )
}