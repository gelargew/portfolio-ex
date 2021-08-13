import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import MainBackground from '../components/MainBackground'
import Works from '../components/Works'

export default function index() {
    const [showWorks, setShowWorks] = useState(false)
    useEffect(() => {
        console.log(showWorks)
    }, [showWorks])

    return (
        <Layout setShowWorks={setShowWorks}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>A curious developer | Gelar Rustiawan</title>
            </Helmet>
            <MainBackground />
            {showWorks ? <Works setShowWorks={setShowWorks} /> : ''}
        </Layout>
    )
}

