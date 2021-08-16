import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'


import MainCamera from './meshes/MainCamera'
import RoomMesh from './meshes/RoomMesh'
import Obj2 from './meshes/Obj2'
import Landscape from './meshes/Landscape'
import VideoBox from './meshes/videoBox'
import GhostsMesh from './meshes/GhostsMesh'

export default function MainBackground() {
   
    return (
        <div id='main-background'>
            <Canvas id='home'>   
                <MainCamera />       
                <Suspense fallback={null}>
                    <RoomMesh position={[0, -10, 0]} />
                </Suspense>
                <Suspense fallback={null}>
                    <GhostsMesh />
                </Suspense>
                <Obj2 position={[0, 15, 0]} />
                <Landscape position={[0, -10, 0]} /> 
                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={200} />
                </EffectComposer>  
                
            </Canvas>    
        </div>
         
    )
}