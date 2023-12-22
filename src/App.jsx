import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import CodeEditor from './components/editor'
import LoginPage from './components/LoginPage.jsx'


function App() {

    return (
        <>
            <Router>

                <Header />
                <main>

                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/editor" element={<CodeEditor />} />
                    </Routes>

                </main>
                <Footer />
            </Router>
        </>
    )
}

export default App
