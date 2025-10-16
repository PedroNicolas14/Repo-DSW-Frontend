import { useState, useEffect } from "react";
import { api } from "../../services/api";
import './usuario.css';

type Localidad = {
	_id: string;
	codPostal: string;
	ciudad: string;
};

export function Usuario() {
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [email, setEmail] = useState("");
	const [contraseña, setContrasena] = useState("");
	const [direccion, setDireccion] = useState("");
	const [telefono, setTelefono] = useState("");
	const [localidadId, setLocalidadId] = useState("");
	const [localidades, setLocalidades] = useState<Localidad[]>([]);

	useEffect(() => {
		api.get('/localidades')
			.then(res => setLocalidades(res.data))
			.catch(error => console.error('Error fetching localidades', error));
	}, []);

const enviarFormulario = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await api.post('/usuarios', {
				nombre,
				apellido,
				email,
				contraseña,
				localidad:localidadId,
				direccion,
				telefono,
			});
			alert('Usuario registrado con exito!');
		} catch (error) {
			console.error('Error registrando usuario:', error);
			alert('Error registrando usuario...');
		}
	};

	return (
		<section className="usuario-page">
			<h2>Registro de Usuario</h2>
			<form className="usuario-form" onSubmit={enviarFormulario}>
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
					<label>Dirección</label>
					<input value={direccion} onChange={e => setDireccion(e.target.value)} required/>
				</div>

				<div className="form-row">
					<label>Teléfono</label>
					<input value={telefono} onChange={e => setTelefono(e.target.value)} required/>
				</div>

				<div className="form-row">
					<label>Localidad</label>
					<select value={localidadId} onChange={e => setLocalidadId(e.target.value)} required>
						<option value="">Seleccionar localidad</option>
						{localidades.map(loc => (
							<option key={loc._id} value={loc._id}>{loc.ciudad} ({loc.codPostal})</option>
						))}
					</select>
				</div>

				<div className="form-actions">
					<button type="submit" className="boton-registrar">Registrar</button>

				</div>
			</form>
		</section>
	);
}
