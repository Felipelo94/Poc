import React, { useEffect, useState } from 'react'
import Input from '../../../atoms/input/input'
import './calculator-cesatias.scss'
import calendar from '../../../../assets/images/calendar.svg'
import dollar from '../../../../assets/images/dollar.svg'
import ResultOperation from '../../result-operation/result-opration'
import { getFormat } from '../../../../utils/stringUtil'

const CalculatorCesatias = () => {
  const [amount, setAmount] = useState()
  const [day, setDay] = useState()
  const [result, setResult] = useState(0)

  useEffect(() => {
    if (amount > 0 && day > 0) {
      setResult(Math.round((day * amount * 30) / 360))
    } else {
      setResult(0)
    }
  }, [amount, day])

  return (
    <div
      className="container-calculator-cesantias"
      id="container-calculator-cesantias"
    >
      <Input
        id="calculator-cesantias-amount"
        icon={dollar}
        max={9999999999}
        format="currency"
        onlyNumber={true}
        classGtm="gtmCesantiasContenSimSalMen"
        label="Salario por día"
        className="container-calculator-cesantias-input"
        value={amount}
        setValue={setAmount}
      ></Input>
      <Input
        id="calculator-cesantias-days"
        icon={calendar}
        max={360}
        onlyNumber={true}
        classGtm="gtmCesantiasContenSimDiasTrab"
        label="Días trabajados"
        className="container-calculator-cesantias-input"
        value={day}
        setValue={setDay}
      ></Input>
      {result > 0 ? (
        <ResultOperation
          title="Valor de Cesantías a liquidar"
          className="container-calculator-cesantias-result"
          value={getFormat(result, 'currency')}
          toottipText="Valor aproximado para efectos de esta simulación"
        />
      ) : (
        <ResultOperation
          title="Valor de Cesantías a liquidar"
          className="container-calculator-cesantias-result"
          value={getFormat(0, 'currency')}
          toottipText="Valor aproximado para efectos de esta simulación"
        />
      )}
    </div>
  )
}
export default CalculatorCesatias
