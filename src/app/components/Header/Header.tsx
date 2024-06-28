
'use client'
import React, { useState } from "react";
import './Header.css';
import Link from "next/link";
import { useStore } from "@/app/store/store";
import Button from "../Button/Button";

export default function Header() {

  const { isLogged, usuarioEscolhido } = useStore();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMobile = () => {
    setIsOpen(!isOpen);
  }

  const logout = () => {
    useStore.setState({ isLogged: false });
    useStore.setState({ usuarioEscolhido: {id:""} });
  }

  return (
    <header>
      <div className="logo">
        <Link href="/" className="link-home">
          <img src="./top-car-logo.png" alt="logo" />
          <p>Top Car</p>
        </Link>
      </div>
      <nav className="navigation">
        <Link href="/Comprar">Comprar</Link>
        {isLogged && <Link href="/Vender">Vender</Link>}
      </nav>
      <div className="log">
        {!isLogged && <Link className="login" href="/Login">Login</Link>}
        {!isLogged && <Link className="cadastro" href="/Cadastrar">Cadastrar</Link>}
        {isLogged && <Link className="perfil" href="/Perfil"><img src="./user.png" alt="Perfil" /></Link>}
        {isLogged && <button onClick={logout} className="log-out"><img src="./logout.png" alt="logout" /></button>}
      </div>
      <div className="navigation-mobile">
        <button onClick={openMobile} className="menu-hamburguer">
          <img src="menu-hamburguer.png" alt="" />
        </button>
        {isOpen && <div className="navigation-hamburguer">
          <Link className="links-mobile" href="/Comprar">Comprar</Link>
          {isLogged && <Link className="links-mobile" href="/Vender">Vender</Link>}
          {!isLogged && <Link className="login" href="/Login">Login</Link>}
          {!isLogged && <Link className="cadastro" href="/Cadastrar">Cadastrar</Link>}
          {isLogged && <Link className="perfil" href="/Perfil">Perfil</Link>}
          {isLogged && <button onClick={logout} className="log-out">Log out</button>}
        </div>}
      </div>
    </header>
  );
}