"use client"

import React, { useEffect } from "react";
import './Comprar.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";
import { useStore } from "@/app/store/store";

export default function(){
  const {vendas, getSaleDataDBAll, getUserDataDBAll} = useStore();

  useEffect(() => {
    getUserDataDBAll()
    getSaleDataDBAll()
  })
  return(
    <>
    <Header/>
    <main>
    <div className="carrosVenda">
        <h1 className="my-2">Carros a Venda</h1>
        <div className="cardsCarrosVenda">
          {vendas.map((venda, index) => <Cards key={index} id={venda.id} idVendedor={venda.vendedor} titulo={venda.marca} texto1={venda.modelo} subtitulo={venda.valor}
          texto2={venda.ano} local={venda.cidade}/>)}
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}