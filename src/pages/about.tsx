import React, { useEffect, useState } from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import Works from '../components/Works'

function about() {


    return (
        <>
            <Helmet>
                <title>Gelar Rustiawan | About</title>
            </Helmet>
            <Works />
        </>
    )
}

about.Layout = Layout
export default about

