import React, { ReactNode } from "react";
import './Button.css';

interface params{
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "submit" | "reset" | "button" | undefined
}

const Button = (values: params): ReactNode => {
  return(<button type={values.type} onClick={values.onClick}> {values.name} </button>)
}

export default Button;