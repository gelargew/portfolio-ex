import React, { useEffect, useRef } from "react"
import { useStorage } from "../storage"


export default function Cursor() {
    const cursor = useRef<HTMLDivElement>()
    const {cursorSize} = useStorage()


    const handlePointerMove = (e: PointerEvent) => {
        cursor.current.style.top = e.pageY - cursorSize/2 + 'px'
        cursor.current.style.left = e.pageX - cursorSize/2 + 'px'
    }
    useEffect(() => {
        document.addEventListener('pointermove', handlePointerMove)

        return () => document.removeEventListener('pointermove', handlePointerMove)
    }, [])

    return <div ref={cursor} style={{
        backgroundColor: 'black',
        borderRadius: cursorSize/2,
        height: cursorSize,
        width: cursorSize,
        display: 'block',
        position: 'absolute',
        filter: 'invert(1)',
        mixBlendMode: 'difference'
    }}></div>
}