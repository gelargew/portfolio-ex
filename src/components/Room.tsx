import { Box, OrbitControls, MeshWobbleMaterial, PerspectiveCamera, Plane, Sphere, TorusKnot, MeshDistortMaterial, useProgress } from '@react-three/drei'
import { Canvas, useFrame, useThree, useLoader, ThreeEvent } from '@react-three/fiber'
import React, { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import Kaonashi from './meshes/Kaonashi'

export default function Room() {
    

    return (      
        <Canvas id='home'>   
            <MainCamera />
            <Suspense fallback={null}>
                <RoomMesh />
            </Suspense>
            <Suspense fallback={null}>
                <GhostMesh />
            </Suspense>
        </Canvas>
        
    )
}

function MainCamera() {
    const container = useRef<THREE.Object3D>(null)
   
    useFrame(({clock}) => {
        container.current.rotateY(0.01)
        container.current.rotateX(Math.sin(clock.getElapsedTime())*0.002)
    })
    return (
        <Sphere ref={container} args={[50, 5, 5]}>
            <PerspectiveCamera makeDefault position={[-10, 15, 40]} />
            <meshPhongMaterial wireframe />
            <OrbitControls />
        </Sphere> 
    )
}


const RoomMesh = () => {
    const { camera } = useThree()
    const { progress } = useProgress()
    const light = useRef<THREE.PointLight>(null!)
    const obj1 = useRef<THREE.Object3D>(null!)
    const alpha = useLoader(THREE.TextureLoader, '/drex4.png')

    useLayoutEffect(() => {
        camera.lookAt(5, 5, 0)
        camera.zoom = camera.zoom * 0.001
        camera.updateProjectionMatrix()
        console.log(camera.zoom)
        setTimeout(() => {
    
        }, 1000)
    }, [progress])

    useFrame(({ clock }) => {
        if (camera.zoom < 1) {
            camera.zoom = camera.zoom + (0.0001*(20 - clock.getElapsedTime()))
            camera.updateProjectionMatrix()
        }
        obj1.current.translateY(Math.sin(clock.getElapsedTime()) * 0.03)
        
    })

    

    return (
        <>
            <mesh onPointerMove={e => light.current.position.set(e.point.x - 1, e.point.y + 1, e.point.z + 1)} >
            
                <pointLight ref={light} decay={2} intensity={0.4} color='lightblue' position={[0, 10, 0]} />
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
    const kaoRef = useRef<THREE.Mesh>(null!)
    const box = useRef<THREE.Object3D>()
    const box2 = useRef<THREE.Object3D>()
    const pointer = new THREE.Vector3(20, -6, 0)
    const direction = new THREE.Vector3(0, -6, -4)
    const groupp = useRef<THREE.Group>(null!)
    const baseVectors = new THREE.Vector3(40, -10, 40)
    const bVectors = new THREE.Vector3(-0.5, 0, -0.5)
    const randomVectors = [
        new THREE.Vector3().random().add(bVectors).multiply(baseVectors),
        new THREE.Vector3().random().add(bVectors).multiply(baseVectors),
        new THREE.Vector3().random().add(bVectors).multiply(baseVectors),
        new THREE.Vector3().random().add(bVectors).multiply(baseVectors),
        new THREE.Vector3().random().add(bVectors).multiply(baseVectors)
    ]

    useEffect(() => {
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
        groupp.current.children.forEach((obj, idx) => {
            if (obj.position.distanceTo(direction) < 10) null
            else if (obj.position.distanceTo(direction) > 10) {
                obj.translateZ(0.02)
                obj.translateZ(0.02)
            }
            obj.translateY(Math.sin((idx + clock.getElapsedTime()) * 2) * 0.02)      
        })
        direction.lerp(pointer, 0.005)

    })
 
    return (
        <>
            
            <Box ref={box} args={[40, 20, 40, 40, 20, 40]} position={[0, -20, 0]} onPointerMove={handleClick} >
                <pointLight intensity={10} color='blue' position={[0, 5, 0]} />
                <MeshDistortMaterial attach='material' color='grey' distort={0.2} wireframe opacity={0.5} speed={0} skinning={false} side={THREE.DoubleSide} alphaTest={0.4} />
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