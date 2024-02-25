import React from 'react'
import { FaPumpSoap } from "react-icons/fa6";
import { FaSoap } from "react-icons/fa6";
import { GiTowel } from "react-icons/gi";
import { GiDelicatePerfume } from "react-icons/gi";

export const Propositosection = () => {
  return (
    <div className="custom-component mt-5">
    <div className="text-section">
      <h1>Creemos objetos simples con propósito.</h1>
      <p style={{fontSize:"1.2rem"}}><b>Somos un estudio creativo en México enfocado en crear objetos de uso cotidiano para complementar espacios y momentos activando los sentidos a través de aromas y texturas.</b></p>
    </div>
    <div className="icon-section">
        <FaPumpSoap style={{fontSize: "4rem"}}/>
        <FaSoap style={{fontSize: "4rem"}}/>
        <GiTowel style={{fontSize: "4rem"}} />
        <GiDelicatePerfume style={{fontSize: "4rem"}}/>
    </div>
  </div>
  )
}
