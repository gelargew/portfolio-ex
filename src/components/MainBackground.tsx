import { Canvas, useLoader, extend, useThree, useFrame } from '@react-three/fiber'
import React, { Suspense, useState, useRef, useLayoutEffect } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'


import MainCamera from './meshes/MainCamera'
import RoomMesh from './meshes/RoomMesh'
import Obj2 from './meshes/Obj2'
import Landscape from './meshes/Landscape'
import VideoBox from './meshes/videoBox'
import GhostsMesh from './meshes/GhostsMesh'
import LowPolyHead from './meshes/LowPolyHead'
import { Box, MeshDistortMaterial, Plane, shaderMaterial, TorusKnot, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import ParticleWave from './ParticleWave'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'


export default function MainBackground() {
    const [level, setLevel] = useState(new THREE.Vector3(0, 0, 0))
    
    useLayoutEffect(() => {
        
    }, [])

    return (
        <div id='main-background'>
            <Canvas id='home' shadows>   
                <MainCamera level={level} />       
                <Suspense fallback={null}>
                    {/* <GhostsMesh />
                    <RoomMesh /> */}
                    <ParticleWave />
                </Suspense>    
                <ambientLight intensity={1} />
                <Box args={[5, 5, 5, 5,5,5]} position={[0, -50, 0]} onClick={() => setLevel(new THREE.Vector3(0, 0, 0))} />
            </Canvas>    
        </div>
         
    )
}


const Level1 = (props: JSX.IntrinsicElements['group']) => {
    const [texture, alpha] = useLoader(THREE.TextureLoader, ['/images/abstract1.jpg', '/images/cracked_glass.jpg'])
    const { clock, size } = useThree()
    const wall = useRef<THREE.Object3D>()
    const [frag, setFrag] = useState(`
    #ifdef GL_ES
    precision mediump float;
    #endif

    uniform float time;
    uniform vec2 u_resolution;

    void main() {

        vec2 st = gl_FragCoord.xy / u_resolution;
        gl_FragColor = vec4(st.x,st.y,0.0,1.0);
    }
    `)
    const ref = useRef<THREE.ShaderMaterial>(null)
    const wallSize = new THREE.Vector3()
    // useEffect(() => {
    //     new THREE.Box3().setFromObject(wall.current).getSize(wallSize)
    //     console.log(wallSize)
    //     ref.current.uniforms.u_resolution.value = new THREE.Vector2(wallSize.x, wallSize.y)
    // }, [])
    useFrame(({ clock }) => {
        ref.current.uniforms.time.value = clock.getElapsedTime()
        
    })

    return (
        <group receiveShadow castShadow {...props} dispose={null}>
            <group receiveShadow  castShadow>
                {/* <Plane castShadow scale={30} position={[5, 5, -15]}>
                    <meshStandardMaterial map={texture} alphaMap={alpha} alphaTest={0.2} />
                </Plane> */}
                <Plane ref={wall} scale={30} position={[-10, 10, -10]}>
                    <shaderMaterial
                    attach='material'
                    ref={ref}
                    uniforms={{
                        time: { value: clock.elapsedTime},
                        u_resolution: { value: [2.0, 2.0] }
                        
                    }}
                    fragmentShader={frag}
                    />
                </Plane>
                
            </group>
            
            {/* <Landscape /> */}
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