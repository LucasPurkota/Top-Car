"use client"

import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
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
      <div>
        <h1>Carros a Venda</h1>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="./lancer.jpg" />
          <Card.Body>
            <Card.Title>Mitsubishi Lancer</Card.Title>
            <Card.Text>
              2.0 HL-T 16V GASOLINA 4P AUTOMÁTICO
            </Card.Text>
            <Card.Subtitle>R$ 64.000</Card.Subtitle>
            <Card.Text>
              2018/2018
              188.000 KM
            </Card.Text>
            <Card.Footer>São Paulo - SP</Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
}