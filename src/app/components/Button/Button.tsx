import React, { ReactNode } from "react";
import './Button.css';

interface params{
  name: string;
}

const Button = (values: params, /*onClick:any*/): ReactNode => {
  return(<button /*onClick={onClick}*/> {values.name} </button>)
}

export default Button;