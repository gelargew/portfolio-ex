import { navigate } from 'gatsby';
import React, { useState } from 'react';


const WORKS = [
    {
        title: 'Portfolio',
        year: 2021,
        type: 'WebApp, 3D Web',
        tech: 'WebGL, ThreeJS, React, Gatsby, Vercel'
    },
    {
        title: 'Kpauli/Tes Koran',
        year: 2020,
        type: 'WebApp & Mobile App',
        tech: 'React, Django, React Native, Heroku'
    },
    {
        title: 'Construe',
        year: 2020,
        type: 'Library Management System / WebApp',
        tech: 'React, Django'
    },
    {
        title: 'Tes Potensi Akademik',
        year: 2020,
        type: 'Website',
        tech: 'Django, Heroku'
    }
    
]

export default function Works({ setShowWorks } : { setShowWorks?: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [clicked, setClicked] = useState(false)

    return (
        <div className='work-list'>
            <h2 className='close-work-list' onClick={() => navigate('/')}>X</h2>
            {WORKS.map(work => 
                <Work work={work} setClicked={setClicked} />
            )}
        </div>
    )
}

const Work = ({work, setClicked}: { work: typeof WORKS[0], setClicked: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className='work' onClick={() => setClicked(true)}>
            <h3>{work.title}</h3>
            <p><small>{work.year}</small></p>
            <p>{work.type}</p>
            <p><small>{work.tech}</small></p>
        </div>
    )
}