// import React from "react";

// export default function Modal(){
//   return(
//     <>
//     <p>Modal</p>
//     </>
//   );
// }

import React from 'react';
import Modal from 'react-modal';
import { Usuario } from '@/app/store/store';
import { useStore } from "@/app/store/store";

interface detalhes{
  id?: number;
  marca?: string;
  modelo?: string;
  ano?: string;
  km?: number;
  combustivel?: string;
  detalhes?: string;
  valor?: number;
  vendedor?: string;
  telefone?: string;
  local?: string;
  imagem?: string;
}

// Componente Modal
const CustomModal = ({ isOpen, closeModal, children }: any) => {

  const {vendaEscolhida} = useStore();
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      {vendaEscolhida && (<Detalhes imagem={vendaEscolhida.imagem} marca={vendaEscolhida.marca} modelo={vendaEscolhida.modelo} ano={vendaEscolhida.ano} km={vendaEscolhida.km}
          combustivel={vendaEscolhida.combustivel} detalhes={vendaEscolhida.detalhes} valor={vendaEscolhida.valor} vendedor={vendaEscolhida.vendedor?.nome} 
          telefone={vendaEscolhida.vendedor?.celular} local={vendaEscolhida.vendedor?.endereco}/>)}
      <button onClick={closeModal}>Fechar</button>
      {children}
    </Modal>
  );
};

const Detalhes = (values: detalhes) => {
  return(
    <div className="detalhes">
      <img src={values.imagem} alt=""/>
      <div className="cardBody">
      <h2>{values.marca}{values.modelo}</h2>
      <p>{values.ano}{values.km}</p>
      <p>{values.combustivel}</p>
      <p>{values.detalhes}</p>
      <h3>{values.valor}</h3>
      <p>{values.vendedor}</p>
      <p>{values.telefone}</p>
      <p>{values.local}</p>
      </div>
    </div>
  );
}

export default CustomModal;