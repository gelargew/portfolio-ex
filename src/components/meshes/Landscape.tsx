import { Plane, MeshDistortMaterial, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { PositionProps } from './commons.type';


export default function Landscape(props: JSX.IntrinsicElements['planeGeometry'] & JSX.IntrinsicElements['mesh']) {
    const planeRef = useRef<THREE.Object3D>(null)


    return (
        <Plane ref={planeRef} args={[200, 200, 200, 200]} rotation={[Math.PI*1.5, 0, 0]} scale={5} {...props}>
            <MeshDistortMaterial attach='material' distort={0.3} speed={0} color='lightblue' skinning={true} />
        </Plane>
    )
}
