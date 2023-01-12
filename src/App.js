import logo from './logo.svg'
import './App.css'
import './reset.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Reserve from './pages/Reserve'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/reserve" element={<Reserve />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
