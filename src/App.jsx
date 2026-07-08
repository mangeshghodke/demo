import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import ScrollToHash from './components/ScrollToHash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import GalleryPage from './pages/GalleryPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/demo">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
