import '../global.css'
import React, { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'

import MainBackground from './MainBackground'
import Cursor from './Cursor'
import { StorageProvider, useStorage } from '../storage'


export default function Layout({children, setShowWorks} : {children: any, setShowWorks?: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [scrollAmount, SetScrollAmount] = useState(0)
    const storage = useStorage()    
    
    useEffect(() => {
        console.log(storage)
    }, [])
    
    return (
        <StorageProvider>         
            <MainBackground />
            <Cursor />
            <main >
                {children}
            </main>      
        </StorageProvider>
    )
}
