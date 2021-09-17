import React, { useEffect, useRef} from 'react';
import '../animation.css'
import anime from 'animejs'

export default function HeroText({text='', delay=1000, withLine=false, ...props}) {
    const letters = useRef<HTMLSpanElement>()
    const line = useRef<HTMLSpanElement>()

    const animate = () => {
        anime.timeline().add({delay: delay})
        .add({
          targets: line.current,
          scaleX: [0,1],
          opacity: [0.5,1],
          easing: "easeInOutExpo",
          duration: 900
        }).add({
          targets: letters.current.children,
          opacity: [0,1],
          translateX: [40,0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 800,
          offset: '-=600',
          delay: anime.stagger(400)
        })
    }

    useEffect(() => {
        animate()
    }, [])

    return (
        <h1 className="ml14" {...props}>
            <span className="text-wrapper">
                <span ref={letters} className="letters">
                    {text.split(/(\s+)/).map(l => <span className='letter'>{l}</span>)}
                </span>
                {withLine && <span ref={line} className="line"></span>}
            </span>
        </h1>
    )
}