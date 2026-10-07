import './css/estilo.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Pix from "./pages/AreaPix.jsx"
import Error from "./pages/Error.jsx"
import Caixa from "./pages/CaixaForte.jsx"

function App() {
  return (
    <Router>
      <div className="container">
        <div className="nav-area">
          <Navbar />
        </div>
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pix" element={<Pix />} />
            <Route path="/caixa" element={<Caixa />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <div className="footer-area">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
