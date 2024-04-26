import React, {ReactNode} from "react";
import './Cards.css';
import Button from "../Button/Button";

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
      <img src={values.img} alt="lancer"/>
      <div className="cardBody">
      <h2>{values.titulo}</h2>
      <p>{values.texto1}</p>
      <h3>{values.subtitulo}</h3>
      <p>{values.texto2}</p>
      <p className="localidade">{values.local}</p>
      <Button name="Ver detalhes"/>
      </div>
    </div>
  );
}

export default Cards;