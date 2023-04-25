import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

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

  const {calc, setCalc} = useContext(CalcContext);
  // console.log(setCalc)

  // User Click Comma
  const commaClick = () => {
    setCalc({
      ...calc,
      // num : 89
      num : !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }

  // User reset
  const resetClick = () => {
    setCalc({ sign : '', num: 0, res : 0})
  }
  
  // User click number
  const handleClickButton = () =>{
    const numberString =value.toString();

    // duplicate 0 is not allowed
    let numberValue;
    if(numberString === '0' && calc.num === 0){
      numberValue = "0"
    }else{
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num : numberValue
    })
  }

  // user click operation button
  const signClick = () => {
    setCalc({
      sign : value,
      res : !calc.res && calc.num ? calc.num : calc.res,
      num : 0
    })
  }

  // user clicks equals
  const equalsClick = () => {
    if(calc.res && calc.num){
      const math = (a, b, sign) => {
        const result = {
          '+' : (a,b) => a + b,
          '-' : (a,b) => a - b,
          'x' : (a,b) => a * b,
          '÷' : (a,b) => a / b,
        }
        return result[sign](a,b); // props
      }

      setCalc({
        res : math(calc.res, calc.num, calc.sign),
        sign : '',
        num : 0
      })
    }
  }

  // modular button
  const percentClick = () => {
    setCalc({
      num : (calc.num / 100),
      res : (calc.res / 100),
      sign : ''
    })
  }

  // arithmetic button
  const arithmeticClick = () => {
    setCalc({
      num : calc.num ? calc.num * -1 : 0,
      res : calc.res ? calc.num * -1 : 0,
      sign : ''
    })
  }

  const handleBtnClick = () => {
    // console.log(value);
    const results = {
      '.' : commaClick ,
      'AC' : resetClick,
      '÷' : signClick,
      'x' : signClick,
      '-' : signClick,
      '+' : signClick,
      '=' : equalsClick,
      '%' : percentClick,
      '+/-' : arithmeticClick
    }
    
    if(results [value]){
      return results[value]() 
    }else{
      return handleClickButton()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button