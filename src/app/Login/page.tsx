import React from "react";
import './Login.css';
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";

export default function Login() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Login</h1>
          <form className="dados">
            <div className="dados-campos">
              <label htmlFor="">E-mail:</label>
              <input type="email" placeholder="Informe seu e-mail" />
            </div>
            <div className="dados-campos">
              <label htmlFor="">Senha:</label>
              <input type="password" placeholder="Informe sua senha" />
            </div>
            <button className="btn-login">Entrar</button>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}