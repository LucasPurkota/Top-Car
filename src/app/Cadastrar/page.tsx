import React from "react";
import './Cadastrar.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";

export default function Cadastrar() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Cadastro</h1>
          <form className="dados">
          <div className="dados-campos">
              <label htmlFor="">CPF:</label>
              <input type="text" placeholder="Informe seu CPF" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Nome:</label>
              <input type="text" placeholder="Informe seu nome" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">E-mail:</label>
              <input type="email" placeholder="Informe seu e-mail" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Celular:</label>
              <input type="tel" placeholder="Informe seu numero celular" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Data de Nascimento:</label>
              <input type="date" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Endereço:</label>
              <input type="text" placeholder="Informe seu endereço" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Senha:</label>
              <input type="password" placeholder="Informe sua senha" required/>
            </div>
            <div className="dados-campos">
              <label htmlFor="">Confirmação de Senha:</label>
              <input type="password" placeholder="Confirme sua senha" required/>
            </div>
            <Button name="Cadastrar" />
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}