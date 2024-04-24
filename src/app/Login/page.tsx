import React from "react";
import './Login.css';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";

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
            <Button name="Entrar"/>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}