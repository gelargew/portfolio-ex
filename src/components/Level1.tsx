import React from 'react';
import '../styles/level1.css'


const Level1 = () => {

    return (
        <div id='level1' onWheel={e => console.log(e)} onClick={e => console.log(e)} >
            <h1 onClick={() => alert('yo')}>LEVEL 1</h1>
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