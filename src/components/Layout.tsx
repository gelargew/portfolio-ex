import '../global.css'
import React from 'react'
import { Link } from 'gatsby'
import { useGLTF } from '@react-three/drei'


export default function Layout({children, setShowWorks} : {children: any, setShowWorks?: React.Dispatch<React.SetStateAction<boolean>>}) {

    
    return (
        <>
            <div className='logo'>
                <h3>Gelar Rustiawan</h3>
                <p>Creative Developer</p>
            </div>
            <main>
                {children}
            </main>
            <h3 className='show-works' onClick={() => setShowWorks(prev => !prev)} >Works</h3>
            <p id='wip'>*under construction</p>
            <div className='contact'>
                <a href='https://github.com/gelargew'>GitHub</a>
                <p>gelargew@gmail.com</p>
            </div>
        </>
    )
}

useGLTF.preload('/kaonashi/scene.gltf')