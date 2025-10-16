import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Encabezado } from './componentes/Encabezado.js'
import { Inicio } from './componentes/Inicio.js'
import { PieDePagina } from './componentes/PieDePag.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Usuario } from './pages/Usuario/usuario.js'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Encabezado />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuario" element={<Usuario />} />
        </Routes>
        <PieDePagina />
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
