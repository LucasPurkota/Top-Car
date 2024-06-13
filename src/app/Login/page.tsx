'use client'

import React, { FormEvent } from "react";
import './Login.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import { useStore, Usuario } from "../store/store";
import { useState } from "react";
import Modal from "react-modal"


export default function Login() {

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('Login efetuado com sucesso');

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const {getUserDataDB, usuarioEscolhido} = useStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const usuario: Usuario = {
      email: email,
      senha: senha,
    }
    getUserDataDB(usuario);
    console.log(usuarioEscolhido.senha);
    if(usuarioEscolhido.senha == senha){
      setMessage('Login efetuado com sucesso');
      setShowMessage(true);
    }else{
      setMessage('Usuario ou senha incorretos');
      setShowMessage(true);
    }
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
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Informe seu e-mail" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Senha:</label>
              <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Informe sua senha" required/>
            </div>
            <Button className="confirm" type="submit" name="Entrar"/>
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
      <Footer/>
    </>
  );
}