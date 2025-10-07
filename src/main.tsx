import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './componentes/App.js'
import { Inicio } from './componentes/Inicio.js'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App/>
      <Inicio/>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
