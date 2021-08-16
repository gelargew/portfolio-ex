import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'


import MainCamera from './meshes/MainCamera'
import RoomMesh from './meshes/RoomMesh'
import Obj2 from './meshes/Obj2'
import Landscape from './meshes/Landscape'


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
                <Obj2 position={[0, 15, 0]} />
                <Landscape position={[0, -10, 0]} />    

                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>  
            </Canvas>    
        </div>
         
    )
}