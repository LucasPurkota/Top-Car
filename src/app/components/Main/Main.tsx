"use client"

import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Cards from "../Cards/Cards";
import './Main.css';
import { useStore } from "@/app/store/store";


export default function Main() {
  const {vendas, vendedor, getSaleDataDBAll, getUserDataDBAll, getUserData} = useStore();

  useEffect(() => {
    getUserDataDBAll()
    getSaleDataDBAll()
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  return (
    <main className="container" >
      <Carousel className="carrosel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="./carros1.jpeg" alt="carros1" />
          <Carousel.Caption className="texto">
            <h3>Carros de qualidade</h3>
            <p>Adquira hoje mesmo seu carro em um presso acessivel</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./carros2.jpeg" alt="carros2" />
          <Carousel.Caption> 
            <h3>Escolha hoje seu novo carro</h3>
            <p>Descubra os melhores veículos para cada estilo de vida.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./carros3.jpeg" alt="carros3" />
          <Carousel.Caption>
            <h3>Hoje é o dia para conquistar seu sonho</h3>
            <p>
              Navegue por nossa galeria de carros de última geração.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="carrosVenda">
        <h1 className="">Carros a Venda</h1>
        <div className="cardsCarrosVenda">
          {vendas.map((venda, index) => <Cards key={index} id={venda.id} idVendedor={venda.vendedor} titulo={venda.marca} texto1={venda.modelo} subtitulo={venda.valor}
          texto2={venda.ano} local={venda.cidade}/>)}
        </div>
      </div>
    </main>
  );
}