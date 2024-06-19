import React, { ReactNode } from "react";
import './Button.css';

interface params{
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "submit" | "reset" | "button" | undefined
  className?: "confirm" | "delete"
  img?: string
}

const Button = (values: params): ReactNode => {
  return(<button className={values.className} type={values.type} onClick={values.onClick}> {values.name} <img src={values.img} alt="" /></button>)
}

export default Button;