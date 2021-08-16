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
        
    </>
    )
}

export default VideoBox