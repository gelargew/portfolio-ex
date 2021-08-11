import { Box, OrbitControls, MeshWobbleMaterial, PerspectiveCamera, Plane, Sphere, TorusKnot, MeshDistortMaterial } from '@react-three/drei'
import { Canvas, useFrame, useThree, useLoader, ThreeEvent } from '@react-three/fiber'
import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import Kaonashi from './Kaonashi'

export default function Room() {
   
    return (      
        <Canvas id='home'>          
            <Suspense fallback={null}>
                <RoomMesh />
            </Suspense>
            <Suspense fallback={null}>
                    <GhostMesh />
            </Suspense>
        </Canvas>
        
    )
}

const RoomMesh = () => {
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


const GhostMesh = ({positions=[[0, 0], [5, 0], [10, 0], [20,1], [-8, 2], [-19, -5], [-19, 10], [-10, 5]]
}) => {
    const { camera, mouse } = useThree()
    const kaoRef = useRef<THREE.Mesh>(null!)
    const box = useRef<THREE.Object3D>()
    const box2 = useRef<THREE.Object3D>()
    const pointer = new THREE.Vector3(20, -6, 0)
    const direction = new THREE.Vector3(0, -6, -4)
    const groupp = useRef<THREE.Group>(null!)
    const clones = []

    useEffect(() => {
        camera.position.set(0, 0, 10)
        console.log(kaoRef.current)
        if (positions.length > 0) {
            positions.forEach(val => {   
                const newMesh = kaoRef.current.clone()          
                newMesh.position.set(val[0], -10 , val[1])
                groupp.current.add(newMesh)
            })
        }
    }, [])

    const handleClick = (e:ThreeEvent<PointerEvent>) => {
        
        pointer.copy(e.point).setY(-6)
    }

    useFrame(({ clock }) => {
        groupp.current.children.forEach(obj => {
            if (obj.position.distanceTo(pointer) > 10) {
                obj.translateZ(0.02)
                obj.translateY(Math.sin(clock.getElapsedTime() * 2) * 0.02)
            }     
            obj.lookAt(direction)    
        })
        direction.lerp(pointer, 0.005)

    })
 
    return (
        <>
            
            <Box ref={box} args={[40, 20, 40, 40, 20, 40]} position={[0, -20, 0]} onPointerMove={handleClick} >
                <pointLight intensity={0.5} />
                <MeshWobbleMaterial attach='material' factor={1} speed={0.1} skinning={false} wireframe side={THREE.DoubleSide} alphaTest={0.4} />
                <group ref={groupp}>
                    <mesh  ref={kaoRef} scale={0.01} position={[0, -10, 0]}>
                        <Kaonashi />
                    </mesh> 
                </group>      
                        
                <Box ref={box2} scale={0.5} position={[0, -9, 4]} />
            </Box>
        </>
        
    )
}