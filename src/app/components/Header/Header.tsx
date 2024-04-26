import React from "react";
import './Header.css';
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="" className="link-home">
          <img src="./top-car-logo.png" alt="logo" />
          <p>Top Car</p>
        </Link>
      </div>
      <nav className="navegation">
        <a href="/Comprar">Comprar</a>
        <Link href="/Vender">Vender</Link>
      </nav>
      <div className="log">
        <Link className="login" href="/Login">Login</Link>
        <Link className="cadastro" href="/Cadastrar">Cadastrar</Link>
      </div>
    </header>
  );
}