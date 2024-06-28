'use client'
import React, { ReactNode, useState } from "react";
import './Cards.css';
import Button from "../Button/Button";
import { useStore } from "@/app/store/store";
import Modal from "react-modal";
import { Venda } from "@/app/store/store";
import { FormEvent } from "react";


interface params {
  id: string;
  img?: string;
  titulo?: string;
  texto1?: string;
  subtitulo?: number;
  texto2?: string;
  local?: string;
  idVendedor: string;
}

const Cards = (values: params): ReactNode => {
  const { getSaleData, getUserData, updateSaleDB, deleteSaleDB, vendaEscolhida, vendedor, usuarioEscolhido } = useStore();
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVendedor, setIsVendedor] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Cadastro realizado com sucesso');

  const handleClick = (id: string, idVendedor: string) => {
    getSaleData(id);
    getUserData(idVendedor)
    if (idVendedor == usuarioEscolhido.id) {
      setIsVendedor(true)
    } else {
      setIsOpen(true);
    }
  }

  const [marca, setMarca] = useState<string>(vendaEscolhida.marca || '');
  const [modelo, setModelo] = useState<string>(vendaEscolhida.modelo || '');
  const [ano, setAno] = useState<string>(vendaEscolhida.ano || '');
  const [km, setKm] = useState<number>(vendaEscolhida.km || 0);
  const [combustivel, setCombustivel] = useState<string>(vendaEscolhida.combustivel || '');
  const [detalhes, setDetalhes] = useState<string>(vendaEscolhida.detalhes || '');
  const [valor, setValor] = useState<number>(vendaEscolhida.valor || 0);


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

      const venda: Venda = {
        id: vendaEscolhida.id,
        marca:marca,
        modelo: modelo,
        ano: ano,
        km:km,
        combustivel: combustivel,
        detalhes: detalhes,
        valor: valor,
        cidade: usuarioEscolhido.cidade,
        vendedor: usuarioEscolhido.id,
      }
      try {
        updateSaleDB(venda);
        setMessage('Alteração realizada com sucesso');
        setShowMessage(true);
      } catch (error) {
        setMessage('Erro ao fazer login. Tente novamente.');
      }
  }
  
  const deleteSale = (event: FormEvent) => {
    event.preventDefault();
    console.log(vendaEscolhida)
    deleteSaleDB(vendaEscolhida.id || "")
    setMessage('vendedor deletado com sucesso');
    setShowMessage(true);
  }

  return (
    <div className="card">
      <img src={values.img} alt="" />
      <div className="cardBody">
        <h2>{values.titulo}</h2>
        <p>{values.texto1}</p>
        <h3>{values.subtitulo}</h3>
        <p>{values.texto2}</p>
        <p className="localidade">{values.local}</p>
        <Button onClick={() => handleClick(values.id, values.idVendedor)} name="Ver detalhes" />
        <Modal
          isOpen={isOpen}
          contentLabel="Modal"
        >
          <Button onClick={() => setIsOpen(false)} name="Fechar" />
          <div className="detalhes">
            {/* <img src={vendaEscolhida.imagem} alt="" /> */}
            <div className="cardBody">
              <h2>{vendaEscolhida.marca} {vendaEscolhida.modelo}</h2>
              <h4><strong>Valor:</strong> R${vendaEscolhida.valor}</h4>
              <p><strong>Ano:</strong> {vendaEscolhida.ano}</p>
              <p><strong>Km:</strong> {vendaEscolhida.km}</p>
              <p><strong>Combustivel:</strong> {vendaEscolhida.combustivel}</p>
              <p><strong>Detalhes:</strong> {vendaEscolhida.detalhes}</p>
              <p><strong>Vendedor:</strong> {vendedor.nome}</p>
              <p><strong>Telefone:</strong> {vendedor.celular}</p>
              <p><strong>Local:</strong> {vendedor.cidade}</p>

            </div>
          </div>
        </Modal>
        <Modal
          isOpen={isVendedor}
          contentLabel="Modal"
        >
          <div className="container">
          <h1>Cadastro de Venda</h1>
          <form className="dados">
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
            <Button onClick={() => setIsVendedor(false)} name="Fechar" />
            <Button onClick={handleSubmit} className="confirm" type="submit" name="Editar Venda" />
            <Button onClick={deleteSale} className="delete" type="button" name="Excluir Venda" />
            <Modal
              isOpen={showMessage}
              contentLabel="Modal"
            >
              <p>{message}</p>
              <button onClick={() => setShowMessage(false)}>Fechar</button>
            </Modal>
          </form>
        </div>
        </Modal>
      </div>
    </div>
  );
}

export default Cards;