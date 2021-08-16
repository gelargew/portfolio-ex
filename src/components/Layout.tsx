import '../global.css'
import React from 'react'
import { useGLTF } from '@react-three/drei'

import MainBackground from './MainBackground'


export default function Layout({children, setShowWorks} : {children: any, setShowWorks?: React.Dispatch<React.SetStateAction<boolean>>}) {

    
    return (
        <>         
            <MainBackground />
            <main onClick={() => console.log('main')} onWheel={e => console.log(e)}>
                {children}
            </main>          
        </>
    )
}

useGLTF.preload('/kaonashi/scene.gltf')