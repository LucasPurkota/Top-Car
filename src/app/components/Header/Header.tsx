
'use client'
import React, { useState } from "react";
import './Header.css';
import Link from "next/link";
import { useStore } from "@/app/store/store";

export default function Header() {

  const { isLogged } = useStore();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMobile = () => {
    setIsOpen(!isOpen);
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
        <Link href="/Vender">Vender</Link>
      </nav>
      <div className="log">
        {!isLogged && <Link className="login" href="/Login">Login</Link>}
        {!isLogged && <Link className="cadastro" href="/Cadastrar">Cadastrar</Link>}
        {isLogged && <Link className="perfil" href="/Perfil"><img src="./user.png" alt="Perfil" /></Link>}
      </div>
      <div className="navigation-mobile">
        <button onClick={openMobile} className="menu-hamburguer">
          <img src="menu-hamburguer.png" alt="" />
        </button>
        {isOpen && <div className="navigation-hamburguer">
          <Link className="links-mobile" href="/Comprar">Comprar</Link>
          <Link className="links-mobile" href="/Vender">Vender</Link>
          {!isLogged && <Link className="login" href="/Login">Login</Link>}
          {!isLogged && <Link className="cadastro" href="/Cadastrar">Cadastrar</Link>}
          {isLogged && <Link className="perfil" href="/Perfil">Perfil</Link>}
        </div>}
      </div>
    </header>
  );
}