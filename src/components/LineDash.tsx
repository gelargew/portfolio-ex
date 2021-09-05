import { Line } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

export default function LineDash({points= [[0, 0, 0], [5, 0, 0]]}) {
    const material = new THREE.LineDashedMaterial

    return (
        <Line
        points={[[2,3,4], [7,1,4], [19,4,2]]}
        >
            <lineDashedMaterial gapSize={5} />
        </Line>
    )
}