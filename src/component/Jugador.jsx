import React from 'react'

function Jugador({titulo, imagen, puntaje}) {
  return (
    <div className="player">
      <p>{titulo}</p>
      <div className="imagen">
        <img src={imagen} alt="manos"></img> 
      </div>
      <div className="punto">
        <p>Puntos: {puntaje}</p>
      </div>
    </div>
    // Bloques de titulo, imagen y puntaje del jugador 1
  )
}

export default Jugador
// Exporte bajo valor "Jugador"