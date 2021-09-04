import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef, useMemo, useState, useEffect, useLayoutEffect } from 'react'
import { Canvas, InstancedMeshProps, useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import { MeshSurfaceSampler } from 'three-stdlib'

const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()


export default function ParticleWave({
    n=10000,
    geometry=new THREE.BoxGeometry(10, 10, 10, 20, 20, 20)
}: { n?: number, geometry?: any }) {
  const mesh = useRef<InstancedMeshProps>(null)
  const group = useRef(null)
  const obj = useMemo(() => new THREE.Mesh(geometry), [geometry]) 
  const sampler = useMemo(() => new MeshSurfaceSampler(obj).build(), [obj])
  const _position = new THREE.Vector3()
  const _matrix = new THREE.Matrix4()
  const instancesData = useMemo(() => ([...Array(n).keys()].map(i => {
    const position = new THREE.Vector3()
    sampler.sample(position)
    return position
  })), [sampler])
  const [noiseX, noiseY, noiseZ] = useMemo(() => ([Math.random(), Math.random(), Math.random()]), [sampler])
  const speed = useMemo(() => Math.floor(Math.random()*20), [sampler])
  


  useLayoutEffect(() => {
    
  }, [sampler])

  useFrame(state => {
    for (let i = 0; i < n; i++) {
        const noise = Math.sin(state.clock.getElapsedTime() + i)*(Math.sin(state.clock.getElapsedTime())*speed)
        _matrix.makeTranslation(instancesData[i].x + noise * noiseX , instancesData[i].y + noiseY, instancesData[i].z + noise * noiseZ)
        mesh.current.setMatrixAt(i, _matrix)
      }
      mesh.current.instanceMatrix.needsUpdate = true
    
  })


  return (
    <group ref={group} >
        <instancedMesh ref={mesh} args={[null, null, n]} >
            <dodecahedronBufferGeometry args={[0.1, 0]} />
            <meshPhongMaterial color='blue' />
        </instancedMesh>
    </group>
  )
}