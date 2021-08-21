import '../global.css'
import React, { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

import MainBackground from './MainBackground'


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
            <main >
                {children}
            </main>          
        </>
    )
}

useGLTF.preload('/kaonashi/scene.gltf')