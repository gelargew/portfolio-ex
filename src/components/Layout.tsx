import '../global.css'
import React from 'react'
import { Link } from 'gatsby'
import { useGLTF } from '@react-three/drei'


export default function Layout({children}) {

    return (
        <>
            <div className='nav'>
                <Link to='/'>index</Link>
                <Link to='/room'>Room</Link>
                <Link to='/mapcon'>Mapcon</Link>
                <Link to='/alpha'>alpha</Link>
                <Link to='/home'>kan</Link>
            </div>
            <main>
                {children}
            </main>
        </>
    )
}

useGLTF.preload('/kaonashi/scene.gltf')