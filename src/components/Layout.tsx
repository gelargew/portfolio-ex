import React from 'react'
import { Link } from 'gatsby'


export default function Layout({children}) {

    return (
        <>
            <div className='nav'>
                <Link to='/'>index</Link>
                <Link to='/home'>Home</Link>
                <Link to='/room'>Room</Link>
            </div>
            <main>
                {children}
            </main>
        </>
    )
}