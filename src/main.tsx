import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Encabezado } from './components/Encabezado.js'
import { Inicio } from './pages/Inicio/Inicio.js'
import { PieDePagina } from './components/PieDePag.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegistrarUsuario } from './pages/Usuario/registrar.js'
import { Usuario } from './pages/Usuario/usuario.js'
import { Explorar } from './pages/Explorar/explorar.js'
import { CarritoProvider } from './context/CarritoContext'
import { Carrito } from './pages/Carrito/carrito.js'
import { Login } from './pages/Login/login.js'
import { Envio } from './pages/Envio/envio'
import { Pago } from './pages/Pago/pago'
import { UsuarioProvider } from './context/UsuarioContext'
import { AuthProvider } from './auth/authContext.js'
import { ProtectedRoute } from './auth/protectedRoute.js'
import { AdminPanel } from './pages/Admin/adminPanel.js'
import { UsuariosAdmin } from './pages/Admin/usuarios.js'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
        <CarritoProvider>
        <UsuarioProvider>
        <Encabezado />
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<RegistrarUsuario />} />
          
          {/* Rutas protegidas */}
          <Route path="/carrito" element={
            <ProtectedRoute>
            <Carrito />
            </ProtectedRoute>
          } />

          <Route path="/usuario" element={
            <ProtectedRoute>
              <Usuario />
            </ProtectedRoute>
          } />

          <Route path="/envio" element={
            <ProtectedRoute>
              <Envio />
              </ProtectedRoute>
            } />

          <Route path="/pago" element={
            <ProtectedRoute>
              <Pago />
              </ProtectedRoute>
            } />

          <Route path="/admin" element={
            <ProtectedRoute roles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          } />

          <Route path="/admin/usuarios" element={
            <ProtectedRoute roles={['admin']}>
              <UsuariosAdmin />
            </ProtectedRoute>
          } />
        </Routes>
        <PieDePagina />
        </UsuarioProvider>
        </CarritoProvider>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
