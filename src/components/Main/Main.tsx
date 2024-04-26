"use client"

import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Cards from "@/components/Cards/Cards";
import './Main.css';


export default function Main() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
  return (
    <main>
      <Carousel className="carrosel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="./carros1.jpeg" alt="lancer" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./carros2.jpeg" alt="lancer" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="./carros3.jpeg" alt="lancer" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="carrosVenda">
        <h1 className="my-2">Carros a Venda</h1>
        <div className="cardsCarrosVenda">
          <Cards img="./lancer.jpg" titulo="Mitsubishi Lancer" texto1="2.0 HL-T 16V GASOLINA 4P AUTOMÁTICO"
            subtitulo="R$ 64.000" texto2="2018/2018 188.000 KM" local="São Paulo - SP" />
          <Cards img="./lancer.jpg" titulo="Mitsubishi Lancer" texto1="2.0 HL-T 16V GASOLINA 4P AUTOMÁTICO"
            subtitulo="R$ 64.000" texto2="2018/2018 188.000 KM" local="São Paulo - SP" />
          <Cards img="./lancer.jpg" titulo="Mitsubishi Lancer" texto1="2.0 HL-T 16V GASOLINA 4P AUTOMÁTICO"
            subtitulo="R$ 64.000" texto2="2018/2018 188.000 KM" local="São Paulo - SP" />
          <Cards img="./lancer.jpg" titulo="Mitsubishi Lancer" texto1="2.0 HL-T 16V GASOLINA 4P AUTOMÁTICO"
            subtitulo="R$ 64.000" texto2="2018/2018 188.000 KM" local="São Paulo - SP" />
          <Cards img="./lancer.jpg" titulo="Mitsubishi Lancer" texto1="2.0 HL-T 16V GASOLINA 4P AUTOMÁTICO"
            subtitulo="R$ 64.000" texto2="2018/2018 188.000 KM" local="São Paulo - SP" />
        </div>
      </div>
    </main>
  );
}