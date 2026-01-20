export const loginRequest = async (email: string, contraseña: string) => {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, contraseña }),
  });

  if (!res.ok) {
    throw new Error("Credenciales inválidas");
  }

  return res.json(); // { token, usuario }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
