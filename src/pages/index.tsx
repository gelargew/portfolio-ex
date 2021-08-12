import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Room from '../components/Room'
import Works from '../components/Works'
import {Helmet} from 'react-helmet'

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
            <Room />
            {showWorks ? <Works setShowWorks={setShowWorks} /> : ''}
        </Layout>
    )
}

