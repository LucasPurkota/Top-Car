'use client'

import React, { FormEvent, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import './Perfil.css'
import { useState } from "react";
import Modal from "react-modal"
import { Usuario, useStore } from "../store/store";

export default function Perfil() {

  
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Login efetuado com sucesso');
  
  const { updateUserDB, usuarioEscolhido, deleteUserDB } = useStore();
  useEffect(() =>{
    console.log(usuarioEscolhido.id)
  })

  const [cpf, setCpf] = useState<string>(usuarioEscolhido.cpf || '');
  const [nome, setNome] = useState<string>(usuarioEscolhido.nome || '');
  const [email, setEmail] = useState<string>(usuarioEscolhido.email || '');
  const [celular, setCelular] = useState<string>(usuarioEscolhido.celular || '');
  const [dataNascimento, setDataNascimento] = useState<string>();
  const [cidade, setCidade] = useState<string>(usuarioEscolhido.cidade || '');



  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const usuario: Usuario = {
      id: usuarioEscolhido.id,
      cpf: cpf,
      nome: nome,
      email: email,
      celular: celular,
      dataNascimento: dataNascimento,
      cidade: cidade,
      senha: usuarioEscolhido.senha,
    }
    console.log(usuario)
    try {
      updateUserDB(usuario);
      setMessage('Alteração realizada com sucesso');
      setShowMessage(true);
    } catch (error) {
      setMessage('Erro ao fazer login. Tente novamente.');
    }
  }

  const deleteUser = (event: FormEvent) => {
    event.preventDefault();
    deleteUserDB(usuarioEscolhido.id || "")
    setMessage('usuario deletado com sucesso');
    setShowMessage(true);
  }
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Perfil</h1>
          <form className="dados">
            <div className="dados-campos">
              <label htmlFor="">CPF:</label>
              <input value={cpf} onChange={(e) => setCpf(e.target.value)} type="text" placeholder="Informe seu CPF" required />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Nome:</label>
              <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Informe seu nome" required />
            </div>
            <div className="dados-campos">
              <label htmlFor="">E-mail:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Informe seu e-mail" required />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Celular:</label>
              <input value={celular} onChange={(e) => setCelular(e.target.value)} type="tel" placeholder="Informe seu numero celular" required />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Data de Nascimento:</label>
              <input value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} type="date" required />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Cidade:</label>
              <input value={cidade} onChange={(e) => setCidade(e.target.value)} type="text" placeholder="Informe seu endereço" required />
            </div>
            <Button onClick={handleSubmit} className="confirm" type="submit" name="Editar Perfil" />
            <Button onClick={deleteUser} className="delete" type="button" name="Excluir Perfil" />
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
  )
}