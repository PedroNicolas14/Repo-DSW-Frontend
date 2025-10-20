import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Encabezado } from './componentes/Encabezado.js'
import { Inicio } from './pages/Inicio/Inicio.js'
import { PieDePagina } from './componentes/PieDePag.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Usuario } from './pages/Usuario/usuario.js'
import { Explorar } from './pages/Explorar/explorar.js'
import { CartProvider } from './context/CarritoContext'
import { Carrito } from './pages/Carrito/carrito.js'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <CartProvider>
        <Encabezado />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        <PieDePagina />
        </CartProvider>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
