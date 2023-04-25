import React from 'react'

const getStyleName = btn => {
 
  const className = {
    '=' : 'equals',
    'x' : 'operator',
    '-' : 'operator',
    '+' : 'operator',
    '÷' : 'operator',
  }
  return className[btn] // button values + = +
}

const Button = ({value}) => {

  const handleBtnClick = () => {
    // console.log(value);
    const result = {
      '.' : commaClick 
    }
    return results[value]
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button