import React, {ReactNode} from "react";
import './Cards.css';

interface params{
  img: string;
  titulo: string;
  texto1: string;
  subtitulo: string;
  texto2: string;
  local: string;
}

const Cards = (values: params): ReactNode => {
  return(
    <div className="card">
      <img src={values.img} alt="lancer" height={50} width={90}/>
      <div className="cardBody">
      <h2>{values.titulo}</h2>
      <p>{values.texto1}</p>
      <h3>{values.subtitulo}</h3>
      <p>{values.texto2}</p>
      <p className="localidade">{values.local}</p>
      </div>
    </div>
  );
}

export default Cards;