import * as THREE from 'three'
import React, { useRef, useMemo, useState, useEffect, useLayoutEffect } from 'react'
import { Canvas, InstancedMeshProps, useFrame } from '@react-three/fiber'
import { MeshSurfaceSampler } from 'three-stdlib'
import { Group } from 'three'
import { useStorage } from '../storage'


const COLORS = [
  'red',
  'blue',
  'yellow',
  'gray',
  'purple',
  'green'
]




export default function ParticleWave({
    n=2000,
    colors=COLORS
}: { n?: number, colors?: typeof COLORS }) {
  const geometries = [
    new THREE.BoxGeometry(10, 10, 10, 50, 50, 50),
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.TorusGeometry(5, 5, 40),
    new THREE.TorusKnotGeometry(5),
    new THREE.RingGeometry(18, 20, 20),
    new THREE.RingGeometry(9, 15, 20)
  ]
  const [geometry, setGeometry] = useState<any>(geometries[0])
  const mesh = useRef<InstancedMeshProps>(null)
  const group = useRef<Group>(null)
  const obj = useMemo(() => new THREE.Mesh(geometry), [geometry]) 
  const sampler = useMemo(() => new MeshSurfaceSampler(obj).build(), [obj])
  const _matrix = new THREE.Matrix4()
  const instancesData = useMemo(() => ([...Array(n).keys()].map(i => {
    const position = new THREE.Vector3()
    sampler.sample(position)
    return position
  })), [sampler])
  const [noiseX, noiseY, noiseZ] = useMemo(() => ([Math.random(), Math.random(), Math.random()]), [sampler])
  const speed = useMemo(() => Math.floor(Math.random()*20), [sampler])
  const material = useRef<THREE.MeshPhongMaterial>(null)
  const storage = useStorage()

  useLayoutEffect(() => {
    setInterval(() => {

      setGeometry(geometries[Math.floor(Math.random()*(geometries.length))])
    }, 6000)

  }, [])


  useFrame(state => {
    group.current.rotateX(0.01)
    for (let i = 0; i < n; i++) {
        const noise = Math.cos(state.clock.getElapsedTime() + i)*(Math.sin(state.clock.getElapsedTime())*speed)
        _matrix.makeTranslation(instancesData[i].x + noiseX , instancesData[i].y + noise * noiseY, instancesData[i].z + noise * noiseZ)
        mesh.current.setMatrixAt(i, _matrix)
        
      }
      mesh.current.instanceMatrix.needsUpdate = true
    
  })


  return (
    <group position={[30, 0, 0]} scale={2} ref={group}  >
        <instancedMesh  ref={mesh} args={[null, null, n]} >
            <dodecahedronBufferGeometry args={[0.02, 0]} />
            <meshPhongMaterial ref={material} />
        </instancedMesh>
    </group>
  )
}