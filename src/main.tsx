import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Encabezado } from './componentes/Encabezado.js'
import { Inicio } from './componentes/Inicio.js'
import { PieDePagina } from './componentes/PieDePag.js'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Encabezado/>
      <Inicio/>
      <PieDePagina/>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
