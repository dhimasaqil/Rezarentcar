import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CarProvider } from './context/CarContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router>
      <CarProvider>
        <div className="App flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </CarProvider>
    </Router>
  )
}

export default App
