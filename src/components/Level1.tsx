import React from 'react';
import '../styles/level1.css'


const Level1 = () => {

    return (
        <div id='level1' onWheel={e => console.log(e)} onClick={e => console.log(e)} >
            <h1 onClick={() => alert('yo')}>LEVEL 1</h1>
        </div>
    )    
}

export default Level1