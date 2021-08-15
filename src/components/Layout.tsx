import '../global.css'
import React from 'react'
import { navigate } from 'gatsby'
import { useGLTF } from '@react-three/drei'

import MainBackground from './MainBackground'


export default function Layout({children, setShowWorks} : {children: any, setShowWorks?: React.Dispatch<React.SetStateAction<boolean>>}) {

    
    return (
        <>         
            <MainBackground />
            <div id='navigation'>
                <div className='logo'>
                    <h3>Gelar Rustiawan</h3>
                    <p>Creative Developer</p>
                </div>
                <h3 className='show-works' onClick={() => navigate('/about/')} >Works</h3>
                <p id='wip'>*under construction</p>
                <div className='contact'>
                    <a href='https://github.com/gelargew'>GitHub</a>
                    <p>gelargew@gmail.com</p>
                </div>
            </div>
            <main>
                {children}
            </main>          
        </>
    )
}

useGLTF.preload('/kaonashi/scene.gltf')