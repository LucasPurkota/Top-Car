'use client'

import React, { FormEvent } from "react";
import './Cadastrar.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import { Usuario, useStore } from "../store/store";
import { useState } from "react";
import Modal from 'react-modal'

export default function Cadastrar() {

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Cadastro realizado com sucesso');

  const [cpf, setCpf] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [celular, setCelular] = useState<string>('');
  const [dataNascimento, setDataNascimento] = useState<string>();
  const [cidade, setCidade] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confSenha, setConfSenha] = useState<string>('');

  const { createUserDB } = useStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (confSenha == senha) {
      const usuario: Usuario = {
        cpf: cpf,
        nome: nome,
        email: email,
        celular: celular,
        dataNascimento: dataNascimento,
        cidade: cidade,
        senha: senha,
      }
      createUserDB(usuario);
      setMessage('Cadastro realizado com sucesso');
      setShowMessage(true);
    } else {
      setMessage('Senhas são diferentes');
      setShowMessage(true);
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit} className="dados">
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
            <div className="dados-campos">
              <label htmlFor="">Senha:</label>
              <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Informe sua senha" required />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Confirmação de Senha:</label>
              <input value={confSenha} onChange={(e) => setConfSenha(e.target.value)} type="password" placeholder="Confirme sua senha" required />
            </div>
            <Button type="submit" name="Cadastrar" />
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