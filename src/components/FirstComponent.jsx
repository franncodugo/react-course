import React from 'react'
import PropTypes from 'prop-types'

export const FirstComponent = ({title, subtitle = 'Default subtitle'}) => {
  return (
    <>
      <h2>{ title }</h2>
      <h3>{ subtitle }</h3>
    </>
  )
}

FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}


// const string = "This is a text"
// const number = 123456
// const array = ['Course', 'Fran', 1, 100000]
// const boolean = true
// const funct = () => 1+1
// const obj = { nombre: 'franco', apellido: 'dv', age: 30 }
// const fecha = new Date()
/* 
<h2>{ array }</h2>
<h2>{ boolean }</h2>
<h2>{ funct() }</h2>
<h2>{ JSON.stringify(obj) }</h2>
<h2>{ JSON.stringify(fecha) }</h2> 
*/