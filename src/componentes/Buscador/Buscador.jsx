import React from "react";

const Buscador = ({ buscador, setBuscador, texto }) => {
  return (
    <div>
      <h3>{texto}</h3>
      <br />
      <input
        type="text"
        placeholder="Escribe su nombre"
        value={buscador}
        className="buscador"
        onChange={(e) => {
          setBuscador(e.target.value);
        }}
      />
    </div>
  );
};

export default Buscador;
