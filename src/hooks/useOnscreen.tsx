import React, { useEffect, useState } from 'react'

export default function useOnscreen(ref: React.MutableRefObject<any>) {
    const [isIntersecting, setIntersecting] = useState(false)
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))

    useEffect(() => {
        observer.observe(ref.current)
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}

