import { Link } from "react-router-dom";
import '../assets/styles/Game.css'
import '../assets/styles/Button.css'
// Importe de los estilos .css

import ImgPiedra from '../assets/images/piedra1.png'
import ImgPapel from '../assets/images/papel1.png'
import ImgTijera from '../assets/images/tijera1.png'
// Importe de las imagenes

import Jugador from "./Jugador";
import Maquina from "./Maquina";
// Importe de las paginas de funciones

import { useState } from "react";

export default function Game() {
  let TIE = 0; //El valor "0" representa un empate
  let WINJ1 = 1; //El valor "1" representa una victoria del jugador 1
  let WINJ2 = 2; //El valor "2" representa una victoria del jugador 2

  const arrayImage = [ImgPiedra, ImgPapel, ImgTijera]; //Se guardan las imagenes de eleccion en un Arrray

  const [imagenJ1, setImagenJ1] = useState(ImgPiedra);
  const [imagenJ2, setImagenJ2] = useState(ImgPiedra);
  //Se establecen los jugadores con imagen de piedra representando la preparación al juego

  const [puntajeJ1, setPuntajeJ1] = useState(0);
  const [puntajeJ2, setPuntajeJ2] = useState(0);
  //Se establece el puntaje "0" para ambos jugadores al inicio

  const [mensaje, setMensaje] = useState("Listo para jugar");

  function Play() {
    let eleccion1 = Math.floor(Math.random() * 3);//Numero random para jugador 1
    let eleccion2 = Math.floor(Math.random() * 3);//Numero random para jugador 2

    const resultado = calcResult(eleccion1, eleccion2); //Llamado a la funcion CalcResult con los valores de eleccion1 y eleccion2

    switch (resultado) {
      case TIE:
          setMensaje("Empate"); //En caso del resultado ser TIE (0) se proyecta el mensaje  "Empate"
          break;
      case WINJ1:
          setPuntajeJ1(puntajeJ1 + 1); //El puntaje del jugador 1 aumenta una unidad
          setMensaje("Ganó Jugador 1"); //En caso del resultado ser WINJ1 (1) se proyecta el mensaje "Ganó jugador 1"
          break;
      case WINJ2:
          setPuntajeJ2(puntajeJ2+ 1); //El puntaje del jugador 2 aumenta una unidad
          setMensaje("Ganó Jugador 2"); //En caso del resultado ser WINJ2 (2) se proyecta el mensaje "Ganó jugador 2"
          break;
    }

    eleccionJ1(eleccion1);
    eleccionJ2(eleccion2);
  }

  function RePlay() { //Reinicio del juego
    setMensaje("Listo para jugar");
    setPuntajeJ1(0);
    setPuntajeJ2(0);
    //El puntaje de ambos jugadores se reinicia a 0
    setImagenJ1(ImgPiedra);
    setImagenJ2(ImgPiedra);
    //La imagen de ambos jugadores vuelve a ser la de piedra
  }

  function calcResult(userOption, machineOption) {
    let ROCK = 0; //El valor "0" representa a piedra
    let PAPER = 1; //El valor "1" representa a papel
    let SCISSORS = 2; //El valor "2" representa a tijeras
    if (userOption === machineOption) { 
      return TIE;
      //Sí eleccion del jugador 1 = eleccion jugador 2. Es un empate

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return WINJ2; 
        //Sí elección del jugador1 es piedra y la del jugador2 es papel. Gana jugador2 
        if (machineOption === SCISSORS) return WINJ1; 
        //Sí elección del jugador1 es piedra y la del jugador2 es tijeras. Gana jugador1

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return WINJ2;
        //Sí elección del jugador1 es papel y la del jugador2 es tijeras. Gana jugador2 
        if (machineOption === ROCK) return WINJ1;
        //Sí elección del jugador1 es papel y la del jugador2 es piedra. Gana jugador1 

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return WINJ2;
        //Sí elección del jugador1 es tijeras y la del jugador2 es piedra. Gana jugador2 
        if (machineOption === PAPER) return WINJ1;
        //Sí elección del jugador1 es tijeras y la del jugador2 es papel. Gana jugador1 
    }
  }

  function eleccionJ1(numeroRandom) {
    setImagenJ1(arrayImage[numeroRandom]);
    console.log("Jugador1 " + numeroRandom);
    //Se proyecta la imagen y texto correspondiente a la eleccion aleatoria del jugador1: 0=Piedra, 1=Papel, 2=Tijeras
  }

  function eleccionJ2(numeroRandom) {
    setImagenJ2(arrayImage[numeroRandom]);
    console.log("Jugador2 " + numeroRandom);
    //Se proyecta la imagen y texto correspondiente a la eleccion aleatoria del jugador2: 0=Piedra, 1=Papel, 2=Tijeras
  }

  return (
    // Sección "Jugar"
    <div className="container">
        <h1>Piedra Papel o tijera</h1>
        <div className="jugadores">
            <Jugador 
                titulo="Jugador 1"
                imagen={imagenJ1}
                puntaje={puntajeJ1}
                // Titulo, imagen y puntaje del jugador1
            />
            <div className="result">
                <h3>Resultado</h3>
                <p>{mensaje}</p>
            </div>
            <Maquina 
                titulo="Jugador 2"
                imagen={imagenJ2}
                puntaje={puntajeJ2}
                // Titulo, imagen y puntaje del jugador2
            />
        </div>
        <div className="botones">
          <Link onClick={Play} className="btn">Jugar</Link> 
          <Link onClick={RePlay} className="btn">Reiniciar</Link>
          <Link to={"/"} className="btn">
            Inicio
          </Link> 
        </div>
    </div>
    // Botón 'Jugar' con enlace a la funcion "Play"
    // Botón 'Reiniciar' con enlace a la funcion "RePlay"
    // Botón 'Inicio' con enlace a la página anterior. "Home"
  );
}
