import React from "react";

export const ItemPaciente = ({ id, nombre, propietario, correo, alta, sintomas, onDeletePost}) => {
  return (
    <article className="Paciente">
      <div className="Paciente-Content">
        <ul>
          <li>
            <strong>Nombre: </strong>
            {nombre}
          </li>
          <li>
            <strong> Propietario: </strong>
            {propietario}
          </li>
          <li>
            <strong> Email: </strong>
            {correo}
          </li>
          <li>
            <strong> Fecha alta:</strong>
            {alta}
          </li>
          <li>
            <strong> Sintomas: </strong>
            {sintomas}
          </li>
        </ul>
      </div>
      <div className="Paciente-Actions">
        <button className="Button Button--Editar">Editar</button>
        <button onClick={ () =>  onDeletePost( id )} className="Button Button--Eliminar">Eliminar</button>
      </div>
    </article>
  );
};
