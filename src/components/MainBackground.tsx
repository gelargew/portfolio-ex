import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'


import MainCamera from './meshes/MainCamera'
import RoomMesh from './meshes/RoomMesh'
import GhostsMesh from './meshes/GhostsMesh'
import Obj2 from './meshes/Obj2'

export default function MainBackground() {
   
    return (      
        <Canvas id='home'>   
            <MainCamera />       
            <Suspense fallback={null}>
                <RoomMesh />
            </Suspense>
            <Suspense fallback={null}>
                <GhostsMesh />
            </Suspense>
            <Obj2 />
        </Canvas>
        
    )
}