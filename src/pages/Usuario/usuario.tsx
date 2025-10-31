import { useState } from "react";
import { guardarUsuario } from "../../services/usuario.service.js";
import "../../pages/formulario.css";

export function Usuario() {
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [contraseña, setContrasena] = useState("");
	const [telefono, setTelefono] = useState("");

	const nuevoUsuario = {
      nombre: nombre,
      apellido: apellido,
			email: email,
			contraseña: contraseña,
			telefono: telefono
    }

const enviarFormulario = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await guardarUsuario(nuevoUsuario);
			alert('Usuario registrado con exito!');
			//Limpiar formulario al registrarse correctamente
			setNombre("");
			setApellido("");
			setEmail("");
			setContrasena("");
			setTelefono("");
		} catch (error) {
			console.error('Error registrando usuario:', error);
			alert('Error registrando usuario...');
		}
	};

	return (
		<section className="formulario-page">
			<h2>Registro de Usuario</h2>
			<form className="formulario-form" onSubmit={enviarFormulario}>
				<div className="form-row">
					<label>Nombre</label>
					<input value={nombre} onChange={e => setNombre(e.target.value)} required/>
				</div>

				<div className="form-row">
					<label>Apellido</label>
					<input value={apellido} onChange={e => setApellido(e.target.value)} required/>
				</div>

				<div className="form-row">
					<label>Email</label>
					<input value={email} onChange={e => setEmail(e.target.value)} type="email" required/>
				</div>

				<div className="form-row">
					<label>Contraseña</label>
					<input value={contraseña} onChange={e => setContrasena(e.target.value)} type="password" required/>
				</div>

				<div className="form-row">
					<label>Teléfono</label>
					<input value={telefono} onChange={e => setTelefono(e.target.value)} required/>
				</div>

				<div className="form-actions">
					<button type="submit" className="boton-registrar">Registrar</button>
				</div>
			</form>
		</section>
	);
}
