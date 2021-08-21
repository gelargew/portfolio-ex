import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'


import MainCamera from './meshes/MainCamera'
import RoomMesh from './meshes/RoomMesh'
import Obj2 from './meshes/Obj2'
import Landscape from './meshes/Landscape'
import VideoBox from './meshes/videoBox'
import GhostsMesh from './meshes/GhostsMesh'
import LowPolyHead from './meshes/LowPolyHead'
import { Box, MeshDistortMaterial, TorusKnot } from '@react-three/drei'

export default function MainBackground() {
    const [level, setLevel] = useState(new THREE.Vector3(0, 0, 0))

    return (
        <div id='main-background'>
            <Canvas id='home'>   
                <MainCamera level={level} />       
                <Suspense fallback={null}>
                    <Level1 onClick={() => setLevel(new THREE.Vector3(0, -60, 0))} />
                </Suspense>    
                <ambientLight intensity={1} />
                <Box args={[5, 5, 5, 5,5,5]} position={[0, -50, 0]} onClick={() => setLevel(new THREE.Vector3(0, 0, 0))} />
            </Canvas>    
        </div>
         
    )
}

const Level1 = (props: JSX.IntrinsicElements['group']) => {
    return (
        <group {...props} dispose={null}>
            <group scale={3} castShadow>
                <Box args={[6, 6, 6, 30, 30, 30]} position={[0, 3, 0]}>
                    <MeshDistortMaterial distort={0.3} speed={1} skinning={true} color='blue' />
                </Box>
                
            </group>
            <Landscape />
        </group>
    )
}

const Level2 = (props: JSX.IntrinsicElements['group']) => {
    return (
        <group {...props} dispose={null}>
            <Landscape position={[0, -20, 0]} />
        </group>
    )
}