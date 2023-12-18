import React from 'react'
import './App.css'

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import CodeEditor from './components/editor'

function App() {

    return (
        <>
            <Header />
            <main>
                <CodeEditor />
            </main>
            <Footer />
        </>
    )
}

export default App
