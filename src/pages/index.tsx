import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'
import { navigate } from 'gatsby'

import Layout from '../components/Layout'
import Level1 from '../components/level1'
import HeroText from '../components/HeroText'

export default function index() {
    const [showWorks, setShowWorks] = useState(false)
    useEffect(() => {
        console.log(showWorks)
    }, [showWorks])

    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gelar Rustiawan</title>
                <link rel="icon" type="svg" href="/GR-5.svg" sizes="16x16" />
            </Helmet>
            <div>               
                <HeroText text='Gelar Rustiawan' withLine />
                <HeroText  text='Web Developer' style={{ fontSize: '2em' }} delay={3000}/>
            </div>
        </Layout>
    )
}


