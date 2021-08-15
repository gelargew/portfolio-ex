import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'

function index() {
    const [showWorks, setShowWorks] = useState(false)
    useEffect(() => {
        console.log(showWorks)
    }, [showWorks])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>A curious developer | Gelar Rustiawan</title>
            </Helmet>
            <h1>hello</h1>
        </>
    )
}


index.Layout = Layout
export default index
