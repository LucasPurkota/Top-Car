import React, { ReactNode } from "react";
import './Button.css';

interface params{
  name: string;
}

const Button = (values: params): ReactNode => {
  return(<button> {values.name} </button>)
}

export default Button;