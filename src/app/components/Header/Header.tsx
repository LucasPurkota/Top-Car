
'use client'
import React, {useState} from "react";
import './Header.css';
import Link from "next/link";

export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMobile = () =>{
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
        <Link className="perfil" href="/Perfil"><img src="./user.png" alt="Perfil" /></Link>
        <Link className="login" href="/Login">Login</Link>
        <Link className="cadastro" href="/Cadastrar">Cadastrar</Link>
      </div>
      <div className="navigation-mobile">
        <button onClick={openMobile} className="menu-hamburguer">
          <img src="menu-hamburguer.png" alt="" />
        </button>
        {isOpen && <div className="navigation-hamburguer">
          <Link className="links-mobile" href="/Comprar">Comprar</Link>
          <Link className="links-mobile" href="/Vender">Vender</Link>
          <Link className=" links-mobile login" href="/Login">Login</Link>
          <Link className="links-mobile cadastro" href="/Cadastrar">Cadastrar</Link>
        </div>}
      </div>
    </header>
  );
}