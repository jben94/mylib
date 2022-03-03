import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{fontSize: '60px'}}>{props.label}</button>;
};

export default Button;