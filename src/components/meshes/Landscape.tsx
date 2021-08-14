import { Plane, MeshDistortMaterial, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { PositionProps } from './commons.type';


export default function Landscape({position=[0, 0, 0]}: PositionProps) {
    const planeRef = useRef<THREE.Object3D>(null)

    useFrame(() => {
        planeRef.current.translateX(0.05)
    })

    return (
        <Plane ref={planeRef} args={[200, 200, 200, 200]} rotation={[Math.PI*1.5, 0, 0]} scale={5} position={position}>
            <MeshDistortMaterial attach='material' distort={0.3} speed={0} color='lightblue' skinning={true} />
            <Box args={[2, 2, 2, 3, 3, 3]} position={[0 ,0 ,0]}>
                <meshPhongMaterial color='lightblue' />
            </Box>
        </Plane>
    )
}
