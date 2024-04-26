"use client"

import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Cards from "../Cards/Cards";
import './Main.css';
import Modal from "../Modal/Modal";
import { useStore } from "@/app/store/store";


export default function Main() {
  const {vendas} = useStore();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  return (
    <main>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./carros3.jpeg" alt="carros3" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="carrosVenda">
        <h1 className="">Carros a Venda</h1>
        <div className="cardsCarrosVenda">
          {vendas.map((venda) => <Cards img={venda.imagem} titulo={venda.marca} texto1={venda.modelo} subtitulo={venda.valor}
          texto2={venda.ano} local={venda.vendedor?.endereco}/>)}
        </div>
        <Modal/>
      </div>
    </main>
  );
}