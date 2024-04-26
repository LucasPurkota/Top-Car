import React from "react";
import './Vender.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import { useStore } from "../store/store";
import { Venda } from "../store/store";


export default function Vender() {
  // const{createSale}=useStore()

  // const handleSubmit = (data:Venda) =>{
  //   console.log(data)
  // }
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
              <input type="text" placeholder="Informe a descrição do veiculo" /> 
            </div>
            <div className="dados-campos">
              <label htmlFor="">Valor:</label>
              <input type="number" placeholder="Informe o valor" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Vendedor:</label>
              <input type="text" placeholder="Informe o vendedor" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Imagens:</label>
              <input type="text" />
            </div>
            <Button /*onClick={handleSubmit}*/ name="Cadastrar venda"/>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}