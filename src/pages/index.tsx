import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Room from '../components/Room'
import Works from '../components/Works'

export default function index() {
    const [showWorks, setShowWorks] = useState(false)
    useEffect(() => {
        console.log(showWorks)
    }, [showWorks])

    return (
        <Layout setShowWorks={setShowWorks}>
            <Room />
            {showWorks ? <Works setShowWorks={setShowWorks} /> : ''}
        </Layout>
    )
}

