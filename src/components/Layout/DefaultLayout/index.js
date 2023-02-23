import './index.css'

import React from 'react'

import Header from '../DefaultLayout/Header'
import SideBar from '../DefaultLayout/SideBar'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />

            <SideBar />

            <div className="main">{children}</div>
        </div>
    )
}

export default DefaultLayout;
