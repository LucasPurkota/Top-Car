'use client'

import React, { FormEvent, useEffect } from "react";
import './Login.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import { useStore, Usuario } from "../store/store";
import { useState } from "react";
import Modal from "react-modal"
import { link } from "fs";


export default function Login() {

  const { getUserDataDB, usuarioEscolhido } = useStore();

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Login efetuado com sucesso');

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const usuario: Usuario = {
      id: "",
      email: email,
      senha: senha,
    }
    try {
      const data = await getUserDataDB(usuario);
      if (data && data.senha === senha) {
        setMessage('Login efetuado com sucesso');
        useStore.setState({ isLogged: true });
      } else {
        setMessage('Usuario ou senha incorretos');
      }
    } catch (error) {
      setMessage('Erro ao fazer login. Tente novamente.');
    }
    setShowMessage(true);
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="dados">
            <div className="dados-campos">
              <label htmlFor="">E-mail:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Informe seu e-mail" required />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Senha:</label>
              <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Informe sua senha" required />
            </div>
            <Button className="confirm" type="submit" name="Entrar" />
            <Modal
              isOpen={showMessage}
              contentLabel="Modal"
            >
              <p>{message}</p>
              <Button className="confirm" onClick={() => setShowMessage(false)} name="Fechar" />
            </Modal>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}