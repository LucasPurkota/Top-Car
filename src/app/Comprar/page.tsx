"use client"

import React from "react";
import './Comprar.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
import { useStore } from "@/app/store/store";

export default function(){
  const {vendas} = useStore();
  return(
    <>
    <Header/>
    <main>
    <div className="carrosVenda">
        <h1 className="my-2">Carros a Venda</h1>
        <div className="cardsCarrosVenda">
          {vendas.map((venda, index) => <Cards key={index} id={venda.id} img={venda.imagem} titulo={venda.marca} texto1={venda.modelo} subtitulo={venda.valor}
          texto2={venda.ano} local={venda.vendedor?.cidade}/>)}
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}