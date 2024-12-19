import React, { useState } from "react";

const OperadorAnd = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Renderizado Condicional con AND</h1>
      <button onClick={() => setMostrarMensaje(!mostrarMensaje)}>
        {mostrarMensaje ? "Ocultar Mensaje" : "Mostrar Mensaje"}
      </button>
      {mostrarMensaje && (
        <p style={{ color: "green", fontSize: "18px" }}>
          ¡Hola, bienvenido a la aplicación!
        </p>
      )}
    </div>
  );
};

export default OperadorAnd;
