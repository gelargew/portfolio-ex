import React, { useLayoutEffect, useState } from 'react'
import { Plane } from "@react-three/drei"
import * as THREE from 'three'
import videoUrl from '../../videos/spline.mp4'



const VideoBox = () => {
    const [video] = useState(() => {
        const vid = document.createElement('video')
        vid.src = videoUrl
        vid.crossOrigin = 'Anonymous'
        vid.loop = true
        vid.muted = true
        vid.play()

        return vid
    })

    return (
    <>
        <Plane args={[10, 10, 10, 10]} position={[5, 10, -5]}>
            <meshStandardMaterial side={THREE.DoubleSide}>
                <videoTexture attach='map' args={[video]} />
            </meshStandardMaterial>
        </Plane>
    </>
    )
}

export default VideoBox