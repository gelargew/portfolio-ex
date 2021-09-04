import React, { useEffect, useRef } from "react"

export default function Cursor() {
    const cursor = useRef<HTMLDivElement>()

    const handlePointerMove = (e: PointerEvent) => {
        cursor.current.style.top = e.pageY - 25 + 'px'
        cursor.current.style.left = e.pageX - 25 + 'px'
    }

    useEffect(() => {
        document.addEventListener('pointermove', handlePointerMove)

        return () => document.removeEventListener('pointermove', handlePointerMove)
    }, [])

    return <div ref={cursor} style={{
        backgroundColor: 'black',
        borderRadius: 25,
        height: 50,
        width: 50,
        display: 'block',
        position: 'absolute',
        filter: 'invert(1)',
        mixBlendMode: 'difference',
        zIndex: 200
    }}></div>
}