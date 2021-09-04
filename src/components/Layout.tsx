import '../global.css'
import React, { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

import MainBackground from './MainBackground'
import Cursor from './Cursor'
import Works from './Works'


export default function Layout({children, setShowWorks} : {children: any, setShowWorks?: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [scrollAmount, SetScrollAmount] = useState(0)

    const handleScroll = (e:Event) => {
        
    }
    useEffect(() => {
        window.addEventListener('wheel', handleScroll)

        return () => window.removeEventListener('wheel', handleScroll)
    }, [])
    
    return (
        <>         
            <MainBackground />
            <Cursor />
            <main >
                {children}
            </main>      
            <Works />    
        </>
    )
}

useGLTF.preload('/kaonashi/scene.gltf')