import React, { useEffect, useState } from 'react'
import Button from '../../atoms/button/button'
import InputRange from '../../atoms/input-range/input-range'
import './simulator.scss'
import SubCategory from '../../atoms/subcategory/subcategory'
import { getSizeScreen } from '../../../utils/handleResize'
import ResultOperation from '../result-operation/result-opration'
import { sendGaPush } from '../../../utils/classGtmUtil'

export default function Simulator({ type, setType }) {
  const [amount, setAmount] = useState(70000)
  const [isResetSimulator, setIsResetSimulator] = useState(false)
  const [time, setTime] = useState(1)
  const [goal, setGoal] = useState('casa')
  const getInfoLimit = goalP => {
    if (type === 0) {
      return 5000000
    } else if (goalP === 'viaje' || goalP === 'estudio') {
      return 500000000
    } else {
      return 100000000
    }
  }
  const goals = [
    { title: 'Casa propia', label: 'casa' },
    { title: 'Viaje', label: 'viaje' },
    { title: 'Libre inversión', label: 'libre' },
    { title: 'Estudio', label: 'estudio' },
    { title: 'Patrimonio para el futuro', label: 'patrimonio' }
  ]
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  const setData = () => {
    setAmount(type === 0 ? 70000 : 2000000)
    setTime(1)
  }
  const resetSimulator = () => {
    setGoal('casa')
    setData()
    setIsResetSimulator(true)
  }

  useEffect(() => {
    setData()
  }, [type])

  useEffect(() => {
    if (isResetSimulator) {
      setIsResetSimulator(false)
    }
  }, [isResetSimulator])

  const handleSubCategoryClick = subcategoryId => {
    const titleGoal = goals.find(item => item.label === subcategoryId)
    sendGaPush('Ahorro', 'ClicSimulador-SuenoAlcanzar', titleGoal.title)
    setGoal(subcategoryId)
    setData()
  }

  const calculate = (amountP, timeP) => {
    if (amountP >= (type === 0 ? 70000 : 2000000) && timeP >= 1) {
      let result = 0
      const meses = timeP * 12
      const numerador = Math.pow(1 + 0.0032737398, meses) - 1
      if (type === 0) {
        result = Math.round(amountP * (numerador / 0.0032737398))
      } else {
        const numerador2 = amountP * 0.0032737398
        result = Math.round(numerador2 / numerador)
      }

      return formatter.format(result).replace(/,/g, '.')
    } else {
      return 'Calculando...'
    }
  }

  return (
    <div className="container-simulator" id="container-simulator">
      {type === 1 ? (
        <div>
          <h4
            id="container-simulator-goals-title"
            className="container-simulator-reserva-content-options-title"
          >
            ¿Qué sueño quieres alcanzar?
          </h4>

          <div
            id="container-simulator-goals-items1"
            style={{ marginBottom: 12 }}
            className="container-simulator-goals-items"
          >
            {goals.map((text, index) => {
              return (
                <SubCategory
                  isActive={goal === text.label}
                  onClick={handleSubCategoryClick}
                  key={text.label}
                  subcategoryId={text.label}
                  classGtm={''}
                  titlle={text.title}
                />
              )
            })}
          </div>
        </div>
      ) : null}
      <div className="d-flex">
        <InputRange
          isResetInputRange={isResetSimulator}
          classGtm={
            type === 1
              ? 'gtmAhorroSimSueAlcMonAhorrMes'
              : 'gtmAhorroSimCapAhorrMonAhorrMes'
          }
          min={type === 0 ? 70000 : 2000000}
          max={getInfoLimit(goal)}
          style={{ marginRight: 16 }}
          isSetData={amount === (type === 0 ? 70000 : 2000000)}
          input={true}
          label={
            type === 0
              ? '¿Cuánto estás dispuesto a ahorrar mensualmente?'
              : '¿Cuánto necesitas ahorrar para tu sueño?'
          }
          inputPosition="top"
          formatInput="currency"
          className="container-simulator-input"
          width="321px"
          step={500000}
          onChange={e => {
            let value = parseInt(e)
            setAmount(value)
          }}
          alert={
            type === 0
              ? '*El valor mínimo a ahorrar en el producto Mi Reserva es $70.000 pesos'
              : null
          }
        />

        <InputRange
          isResetInputRange={isResetSimulator}
          min={1}
          max={20}
          classGtm={
            type === 1
              ? 'gtmAhorroSimSueAlcTiemAhorr'
              : 'gtmAhorroSimCapAhorrTiemAhorr'
          }
          isSetData={time === 1}
          input={true}
          className="container-simulator-input"
          label="¿Por cuánto tiempo quieres ahorrar?"
          inputPosition="top"
          width="321px"
          formatInput="año"
          step={1}
          onChange={e => {
            let value = parseInt(e)
            setTime(value)
          }}
          alert={
            type === 0 ? '*El tiempo en este campo se calcula en años' : null
          }
        />
      </div>
      <div className="container-simulator-result">
        <ResultOperation
          title={
            type === 1
              ? 'Valor que debes aportar mensualmente'
              : 'Valor acumulado en tu ahorro'
          }
          className=""
          value={calculate(amount, time)}
          toottipText={
            type === 0
              ? 'Una suma proyectada de tu ahorro total'
              : 'Una suma proyectada de tu ahorro mensual'
          }
        />

        <Button
          style={{
            cursor: 'pointer',
            width: 200,
            height: 48,
            padding: '13px 26px'
          }}
          title={'Reiniciar simulador'}
          onClick={resetSimulator}
          classGtm={
            type === 1
              ? 'gtmAhorroSimSueAlcReinSim'
              : 'gtmAhorroSimCapAhorrReinSim'
          }
          className={`secondary`}
          id="mi-reserva-button"
        />
      </div>
    </div>
  )
}
