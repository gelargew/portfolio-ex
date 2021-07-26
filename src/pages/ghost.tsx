import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import Layout from '../components/Layout'
import Kaonashi from '../components/kaonashi'
import { Box, OrbitControls } from '@react-three/drei'


export default function Ghost() {

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
    const kaoRef = useRef<THREE.Group>()
    const [pointer, setPointer] = useState(new THREE.Vector3(0, -10, 0))
    const dum = new THREE.Vector3(10, -10, -10)

    useEffect(() => {
        camera.position.set(0, 5, 5)
    }, [])



    // if (kaoRef) {
    //     kaoRef.current.translateOnAxis(dum, 0.01)
    //     kaoRef.current.lookAt(dum)
    // }
    

    return (
        
        <Box args={[20, 20, 20, 20, 20, 20]} onPointerMove={e => setPointer(e.point)} onClick={() => console.log(kaoRef.current)} >
            <meshPhongMaterial wireframe />
            <Kaonashi ref={kaoRef} scale={0.01} position={[0, -10, 0]} />
        </Box>
        
    )
}