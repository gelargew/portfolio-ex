import React, { useLayoutEffect, useState } from 'react'
import { Plane } from "@react-three/drei"
import * as THREE from 'three'



const VideoBox = () => {
    const [video, setVideo] = useState(() => Object.assign(document.createElement('video'), {
        src: '/videos/spline.mp4',
        muted: true,
        loop: true
    }))
    
    return (
    <>
        <Plane args={[10, 10, 10, 10]} position={[5, 10, -5]}>
            <meshPhongMaterial wireframe />
        </Plane>
    </>
    )
}

export default VideoBox