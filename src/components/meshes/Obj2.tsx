import { Box } from '@react-three/drei'
import React from 'react'
import { BoxBufferGeometry } from 'three'

type Obj2Props = {
    position?: [x: number, y: number, z: number]
}


export default function Obj2({ position=[50, -10, -100]}: Obj2Props) {

    return (
        <Box args={[10, 10, 100, 100, 100, 100]} position={position} >
            <meshPhongMaterial color='yellow' />
        </Box>
    )
}