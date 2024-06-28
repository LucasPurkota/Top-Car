'use client'

import React, { FormEvent, useEffect } from "react";
import './Vender.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import { Usuario, Venda, useStore } from "../store/store";
import { useState } from "react";
import Modal from 'react-modal';
import Cards from "../components/Cards/Cards";



export default function Vender() {

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Cadastro realizado com sucesso');

  const [marca, setMarca] = useState<string>('');
  const [modelo, setModelo] = useState<string>('');
  const [ano, setAno] = useState<string>('');
  const [km, setKm] = useState<number>(0);
  const [combustivel, setCombustivel] = useState<string>('');
  const [detalhes, setDetalhes] = useState<string>('');
  const [valor, setValor] = useState<number>();
  // const [imagem, setImagem] = useState<string>('');

  const { createSaleDB, usuarioEscolhido} = useStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

      const venda: Venda = {
        id: "",
        marca:marca,
        modelo: modelo,
        ano: ano,
        km:km,
        combustivel: combustivel,
        detalhes: detalhes,
        valor: valor,
        vendedor: usuarioEscolhido.id,
      }
      console.log(venda);
      createSaleDB(venda);
      setMessage('Venda cadastrada realizado com sucesso');
      setShowMessage(true);
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Cadastro de Venda</h1>
          <form onSubmit={handleSubmit} className="dados">
            <div className="dados-campos">
              <label htmlFor="">Marca:</label>
              <input value={marca} onChange={(e) => setMarca(e.target.value)} type="text" id="marca" placeholder="Informe a marca" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Modelo:</label>
              <input value={modelo} onChange={(e) => setModelo(e.target.value)} type="text" placeholder="Informe o modelo" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Ano:</label>
              <input value={ano} onChange={(e) => setAno(e.target.value)} type="text" placeholder="Informe o Ano" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">KM:</label>
              <input value={km} onChange={(e) => setKm(e.target.valueAsNumber)} type="number" placeholder="Informe a quilometragem" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Combustível:</label>
              <input value={combustivel} onChange={(e) => setCombustivel(e.target.value)} type="text" placeholder="Informe o Combustível" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Detalhes:</label>
              <input value={detalhes} onChange={(e) => setDetalhes(e.target.value)} type="text" placeholder="Informe a descrição do veiculo" required/> 
            </div>
            <div className="dados-campos">
              <label htmlFor="">Valor:</label>
              <input value={valor} onChange={(e) => setValor(e.target.valueAsNumber)} type="number" placeholder="Informe o valor" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Imagens:</label>
              <input type="file"/>
            </div>
            <Button className="confirm" type="submit" name="Cadastrar venda"/>
            <Modal
              isOpen={showMessage}
              contentLabel="Modal"
            >
              <p>{message}</p>
              <button onClick={() => setShowMessage(false)}>Fechar</button>
            </Modal>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}