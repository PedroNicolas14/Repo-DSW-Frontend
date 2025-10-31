import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Encabezado } from './components/Encabezado.js'
import { Inicio } from './pages/Inicio/Inicio.js'
import { PieDePagina } from './components/PieDePag.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Usuario } from './pages/Usuario/usuario.js'
import { Explorar } from './pages/Explorar/explorar.js'
import { CarritoProvider } from './context/CarritoContext'
import { Carrito } from './pages/Carrito/carrito.js'
import { Login } from './pages/Login/login.js'
import { Envio } from './pages/Envio/envio'
import { Pago } from './pages/Pago/pago'
import { UsuarioProvider } from './context/UsuarioContext'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <CarritoProvider>
        <UsuarioProvider>
        <Encabezado />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/envio" element={<Envio />} />
          <Route path="/pago" element={<Pago />} />
        </Routes>
        <PieDePagina />
        </UsuarioProvider>
        </CarritoProvider>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
