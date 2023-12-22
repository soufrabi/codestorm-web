import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import HomePage from './components/homepage.jsx'
import CodeEditor from './components/editor'
import LoginPage from './components/LoginPage.jsx'


function App() {

    return (
        <>
            <Router>

                <Header />
                <main>

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/ide" element={<CodeEditor />} />
                    </Routes>

                </main>
                <Footer />
            </Router>
        </>
    )
}

export default App
