import React from "react";
import './Cadastrar.css';
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";

export default function Cadastrar() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Cadastro</h1>
          <form className="dados">
            <div className="dados-campos">
              <label htmlFor="">Nome:</label>
              <input type="text" placeholder="Informe seu nome" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">E-mail:</label>
              <input type="email" placeholder="Informe seu e-mail" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Data de Nascimento:</label>
              <input type="date" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Senha:</label>
              <input type="password" placeholder="Informe sua senha" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Confirmação de Senha:</label>
              <input type="password" placeholder="Confirme sua senha" />
            </div>
            <button className="btn-cadastro">Cadastrar</button>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}