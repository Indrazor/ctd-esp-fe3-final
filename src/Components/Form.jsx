import React, { useState } from "react";

const FormularioContacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validar nombre
    if (!nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      newErrors.nombre = "El nombre solo puede contener letras y espacios";
    }

    // Validar email
    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Ingrese un correo electrónico válido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
    } else {
      // Enviar formulario
      console.log("Formulario enviado:", { nombre, email });
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="confirmacion">
          <h1>Gracias {nombre} te contactaremos cuanto antes!</h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario">
          <div className="campo">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errors.nombre && <p className="error">{errors.nombre}</p>}
          </div>

          <div className="campo">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <button type="submit" className="boton">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default FormularioContacto;
