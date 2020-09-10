import React from 'react'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'

import './App.css'
import '../components/assets/font-awesome'

export default props => 
    <HashRouter >
        <div className='app'>
            <Logo />
            <Routes />
            <Nav />
            <Footer />  
        </div>
    </HashRouter>