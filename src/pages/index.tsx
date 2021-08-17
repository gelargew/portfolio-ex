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
                <link rel="icon" type="svg" href="/GR-4.svg" sizes="16x16" />
            </Helmet>
            <h1>HAI</h1>
            <Level1 />
            <Level1 />
        </>
    )
}


index.Layout = Layout
export default index
