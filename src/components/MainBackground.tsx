import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'


import MainCamera from './meshes/MainCamera'
import RoomMesh from './meshes/RoomMesh'
import GhostsMesh from './meshes/GhostsMesh'
import Obj2 from './meshes/Obj2'
import { MeshDistortMaterial, Plane } from '@react-three/drei'
import Landscape from './meshes/Landscape'
import Kaonashi from './meshes/Kaonashi'

export default function MainBackground() {
   
    return (
        <div id='main-background'>
            <Canvas id='home'>   
                <MainCamera />       
                <Suspense fallback={null}>
                    <RoomMesh position={[0, -10, 0]} />
                </Suspense>
                {/* <Suspense fallback={null}>
                    <GhostsMesh />
                </Suspense> */}
                <Obj2 />
                <Landscape position={[0, -10, 0]} />      
            </Canvas>    
        </div>
         
    )
}