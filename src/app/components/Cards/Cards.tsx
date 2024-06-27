'use client'
import React, { ReactNode, useState } from "react";
import './Cards.css';
import Button from "../Button/Button";
import { useStore } from "@/app/store/store";
import Modal from "react-modal";


interface params {
  id: string;
  img?: string;
  titulo?: string;
  texto1?: string;
  subtitulo?: number;
  texto2?: string;
  local?: string;
}

const Cards = (values: params): ReactNode => {
  const { getSaleData, getUserData, vendaEscolhida, vendedor } = useStore();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (id: string) => {
    getSaleData(id);
    setIsOpen(true);
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
        <Button onClick={() => handleClick(values.id)} name="Ver detalhes" />
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
      </div>
    </div>
  );
}

export default Cards;