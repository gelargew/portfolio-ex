import React, { useEffect, useRef } from 'react';
import useOnscreen from '../hooks/useOnscreen';
import '../styles/level1.css'


const Level1 = () => {
    const a = useRef()
    const isVisible = useOnscreen(a)

    useEffect(() => {
        console.log(isVisible)
    }, [isVisible])

    return (
        <div id='level1' onClick={e => console.log(e)} >
            <h1 ref={a}>LEVEL 1</h1>
            {/* <div id='navigation'>
                <div className='logo'>
                    <h3>Gelar Rustiawan</h3>
                    <p>Creative Developer</p>
                </div>
                <h3 className='show-works' >Works</h3>
                <p id='wip'>*under construction</p>
                <div className='contact'>
                    <a href='https://github.com/gelargew'>GitHub</a>
                    <p>gelargew@gmail.com</p>
                </div>
            </div> */}
        </div>
    )    
}

export default Level1