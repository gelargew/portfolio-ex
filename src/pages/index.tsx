import '../global.css'
import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Box, OrbitControls, PerspectiveCamera, Sphere, MapControls, useTessellation, Stats } from '@react-three/drei'
import * as THREE from 'three'
import { useState } from 'react'
import { EffectComposer, Noise, SSAO } from '@react-three/postprocessing'
import Paper from '../components/paper'
import Layout from '../components/Layout'


const Index = () => {
  const camera = useRef<THREE.PerspectiveCamera>(null!)
  const delta = useState(0)

  const lookat = (e:React.WheelEvent<HTMLDivElement>) => {
    camera.current.rotateX(5)
  }

  return (
    <Layout>
      <Stats className='stats' />
      
      <Canvas camera={camera.current}>
        <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 10]} onUpdate={self => self.updateProjectionMatrix()} />
        <hemisphereLight intensity={5} color='lightyellow'  />
        <MapControls />
        <mesh position={[0, 0, 0]}>
          <spotLight position={[0, 0, 0]} intensity={5} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </mesh>
        <mesh position={[10, 0, 0]}>  
          <spotLight position={[0, 0, 0]} intensity={5} />
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </mesh>
        <Paper position={[20, -2, 0]} />
        <EffectComposer>
          
        </EffectComposer>
      </Canvas>
      
    </Layout>
  )
}

export default Index


const Earth = () => {
  const erth = useRef<THREE.SphereGeometry>(null!)
  const bx = useRef<THREE.Object3D>(null!)
  const texture = useLoader(THREE.TextureLoader, 'https://unpkg.com/three-globe@2.18.5/example/img/earth-dark.jpg')
  const aus = latlonToCoor(25, 133, 2)
  const a = new THREE.Vector3().setFromSphericalCoords(2, 180, 0)
  useFrame(() => {
    erth.current.rotateY(0.007)
    erth.current.rotateZ(0.01)
    bx.current
  })
  const tess = useTessellation(2, 4)
  
  return (
    
      <Sphere ref={erth} args={[2, 300, 300]}>
        <meshPhongMaterial map={texture} side={THREE.DoubleSide} />
        <Box ref={tess} position={a} scale={0.2} />
      </Sphere>
     
  )
  
}

const latlonToCoor = (lat:number, lon:number, r:number): [x: number, y:number, z:number] => {
  lat = Math.PI / 2 - lat
  const x = Math.sin(lat) * Math.sin(lon)
  const y = Math.cos(lat)
  const z = Math.sin(lat) * Math.cos(lon)

  return [x, y, z]
}