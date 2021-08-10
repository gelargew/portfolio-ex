import { Text, useProgress, Html, TorusKnot, OrbitControls, Torus } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import Layout from '../components/Layout'
import * as THREE from 'three'


export default function Alpha() {

    return (
        <Layout>
            <Canvas>
                <Canv />
            </Canvas>
        </Layout>
    )
}

const Canv = () => {
    const Loader = () => {
        const { progress } = useProgress()
        return <Html ><div style={{ color: 'white'}}>{progress} % loading</div> </Html>
    }


    return (
        <Suspense fallback={<Loader />}>
            <ambientLight />
            <OrbitControls />
            <Model />
        </Suspense>
    )
}

const Model = () => {
    const texture = useLoader(THREE.TextureLoader, '/paperColor.jpg')
    const alpha = useLoader(THREE.TextureLoader, '/alpha.png')
    const mesh = useRef<THREE.MeshLambertMaterial>(null!)
        

    return (
        <TorusKnot>
            <meshLambertMaterial ref={mesh} map={texture} alphaMap={alpha} />
        </TorusKnot>
    )
}