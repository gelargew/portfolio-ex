import '../global.css'
import React from 'react'
import { Link } from 'gatsby'
import { useGLTF } from '@react-three/drei'


export default function Layout({children}) {

    return (
        <>
            <div className='logo'>
                <h3>Gelar Rustiawan</h3>
                <p>Creative Developer</p>
            </div>
            <main>
                {children}
            </main>
            <h3 className='works'>Works</h3>
            <div className='contact'>
                <a href='https://github.com/gelargew'>GitHub</a>
                <p>gelargew@gmail.com</p>
            </div>
        </>
    )
}

useGLTF.preload('/kaonashi/scene.gltf')