import { Link } from "react-router-dom";
import '../assets/styles/Team.css'
import '../assets/styles/Button.css'
// Importe de los estilos .css
import ImgDesMAM from '../assets/images/MaxiMamani.jpg'
import ImgDesMGO from '../assets/images/Matias_Ortega.jpg'
import ImgDesMLB from '../assets/images/MaxiBustamante.jpg'
import ImgDesAMAM from '../assets/images/AgusMorales.jpg'
import ImgDesMACA from '../assets/images/ImagenEjemplo.jpg'
// Importe de las imagenes

export default function Team() {
    return (
        // Sección "Desarrolladores"
        <div className="container-team">
            <h1>Equipo de Trabajo</h1>
            <div className="team">
            <div className="NyF">
                    <img src={ImgDesMAM} alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/MaxAbelMamani"> Mamani Maximiliano Abel </a>
                </div>
                <div className="NyF">
                    <img src={ImgDesMGO}  alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/MatiasGrrrOrtega"> Ortega Matias Gabriel </a>
                </div>
                <div className="NyF">
                    <img src={ImgDesMLB} alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/MaxLeonel"> Bustamante Maximiliano L.</a>
                </div>
                <div className="NyF">
                    <img src={ImgDesAMAM}  alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/Agmor03"> Morales Agustina M. A. </a>  
                </div>
                <div className="NyF">
                    <img src={ImgDesMACA}  alt="..."/>
                    <a className="perfil-github" target='_blank' rel="noreferrer" href="https://github.com/Agmor03"> Cruz Aruzamen Matias A. </a> 
                </div>
            </div>
            <div className="boton-team">
                <Link to={'/'} className="btn">Inicio</Link>
            </div>
        </div>
        //Bloques con enlace, nombre e imagen de los Desarrolladores
        //Boton 'Inicio' con enlace a la página "Home"
    )
}