import React from 'react'

function Maquina({titulo, imagen, puntaje}) {
  return (
    <div className="maquina">
        <p>{titulo}</p>
        <div className="imagen">
            <img src={imagen} alt="manos"></img>
        </div>
        <div className="punto">
            <p>Puntos: {puntaje}</p>
        </div>
    </div>
    // Bloques de titulo, imagen y puntaje del jugador 2
  )
}

export default Maquina
// Exporte bajo valor "Maquina"