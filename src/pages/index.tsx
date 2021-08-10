import { MapControls, OrbitControls, OrbitControlsProps, PerspectiveCamera, Plane, Sphere, TorusKnot } from '@react-three/drei'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import Layout from '../components/Layout'
import * as THREE from 'three'

export default function Home() {
   
    return (
        <Layout>
            <Canvas id='home'>
                
                
                <Suspense fallback={null}>
                    <Room />
                </Suspense>
                
            </Canvas>
        </Layout>
    )
}

const Room = () => {
    const { camera, mouse, viewport } = useThree()
    const light = useRef<THREE.PointLight>(null!)
    const obj1 = useRef<THREE.Object3D>(null!)
    const ca = useRef<THREE.PerspectiveCamera>(null)
    const sph = useRef<THREE.Object3D>(null)
    const alpha = useLoader(THREE.TextureLoader, '/drex4.png')


    useLayoutEffect(() => {
        camera.position.set(0, 7, 5)
        ca.current?.lookAt(5, 5, 0)
    }, [])

    useFrame(({ clock }) => {
        obj1.current.translateY(Math.sin(clock.getElapsedTime()) * 0.03)
        sph.current?.rotateY(0.01)
        sph.current.rotateX(Math.sin(clock.getElapsedTime())*0.002)
    })

    

    return (
        <>
            <Sphere ref={sph} args={[50, 5, 5]}>
                <PerspectiveCamera ref={ca} makeDefault position={[-5, 10, 20]} />
                <meshPhongMaterial wireframe />
                <OrbitControls />
            </Sphere>
            <mesh onPointerMove={e => light.current.position.set(e.point.x - 1, e.point.y + 1, e.point.z + 1)} >
            
                <pointLight ref={light} decay={2} intensity={0.4} color='lightblue' />
                <Plane 
                rotation={[Math.PI * 1.5, 0, 0]} 
                args={[20, 10, 20, 10]} 
                position={[0, 0, 0]}
                >
                    <meshPhongMaterial color='white' />
                </Plane>
                <Plane args={[20, 10, 20, 10]} position={[0, 5, -5]} >
                    <meshPhongMaterial color='brown' alphaMap={alpha} alphaTest={0.9} side={THREE.DoubleSide} />
                </Plane>
                <Plane rotation={[0, Math.PI * 1.5, 0]} args={[10, 10, 10, 10]} position={[10, 5, 0]} >
                    <meshPhongMaterial color='brown' />
                </Plane>
                <TorusKnot ref={obj1} scale={0.5} position={[3, 3, 0]} >

                </TorusKnot>
            </mesh>
        </>
    )
}