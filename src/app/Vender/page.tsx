import React from "react";
import './Vender.css';
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";

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
              <input type="text" placeholder="Informe a marca" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Modelo:</label>
              <input type="text" placeholder="Informe o modelo" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Ano:</label>
              <input type="text" placeholder="Informe o Ano"/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">KM:</label>
              <input type="number" placeholder="Informe a quilometragem" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Combustível:</label>
              <input type="text" placeholder="Informe o Combustível" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Detalhes:</label>
              <input type="text" placeholder="Informe o Combustível" /> 
            </div>
            <div className="dados-campos">
              <label htmlFor="">Imagens:</label>
              <input type="image" placeholder="Informe o Combustível" />
            </div>
            <button className="btn-cadastro">Cadastrar venda</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}