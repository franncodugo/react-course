import React from 'react'

const string = "This is a text"
const number = 123456
const array = ['Course', 'Fran', 1, 100000]
const boolean = true
const funct = () => 1+1
const obj = { nombre: 'franco', apellido: 'dv', age: 30 }
const fecha = new Date()

export const FirstComponent = () => {
  return (
    <>
      <h2>{ string }</h2>
      <h2>{ number }</h2>
      <h2>{ array }</h2>
      <h2>{ boolean }</h2>
      <h2>{ funct() }</h2>
      <h2>{ JSON.stringify(obj) }</h2>
      <h2>{ JSON.stringify(fecha) }</h2>
    </>
  )
}
