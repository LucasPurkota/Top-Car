'use client'

import React, { use } from "react";
import './Vender.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";


export default function Vender() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Cadastro de Venda</h1>
          <form className="dados">
            <div className="dados-campos">
              <label htmlFor="">Marca:</label>
              <input type="text" id="marca" placeholder="Informe a marca" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Modelo:</label>
              <input type="text" placeholder="Informe o modelo" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Ano:</label>
              <input type="text" placeholder="Informe o Ano" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">KM:</label>
              <input type="number" placeholder="Informe a quilometragem" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Combustível:</label>
              <input type="text" placeholder="Informe o Combustível" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Detalhes:</label>
              <input type="text" placeholder="Informe a descrição do veiculo" required/> 
            </div>
            <div className="dados-campos">
              <label htmlFor="">Valor:</label>
              <input type="number" placeholder="Informe o valor" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Vendedor:</label>
              <input type="text" placeholder="Informe o vendedor" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Imagens:</label>
              <input type="text" required/>
            </div>
            <Button name="Cadastrar venda"/>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}