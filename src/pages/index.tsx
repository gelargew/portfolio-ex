import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'
import { navigate } from 'gatsby'

import Layout from '../components/Layout'
import Level1 from '../components/level1'

function index() {
    const [showWorks, setShowWorks] = useState(false)
    useEffect(() => {
        console.log(showWorks)
    }, [showWorks])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gelar Rustiawan</title>
            </Helmet>
            <div id='navigation'>
                <div className='logo'>
                    <h3>Gelar Rustiawan</h3>
                    <p>Creative Developer</p>
                </div>
                <h3 className='show-works' onClick={() => navigate('/about/')} >Works</h3>
                <p id='wip'>*under construction</p>
                <div className='contact'>
                    <a href='https://github.com/gelargew'>GitHub</a>
                    <p>gelargew@gmail.com</p>
                </div>
            </div>
        </>
    )
}


index.Layout = Layout
export default index
