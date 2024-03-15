import React, { useState } from 'react'
import MenuMeal from '../../menu-meal/menu-meal'
import simula from '../../../../assets/images/simulator_simulator.png'
import agenda from '../../../../assets/images/simulator_schedule.png'
import selecciona from '../../../../assets/images/simulator_select.png'
import './reserva.scss'
import Simulator from '../simulator'
import { sendGaPush } from '../../../../utils/classGtmUtil'
import {
  scaleLine,
  scaleText,
  SCALE_SIZE_15PX,
  SCALE_SIZE_22PX,
  SCALE_SIZE_30PX
} from '../../../../utils/scaleText'

export default function Reserva({ line, type, accessibility }) {
  const menuOptions = [
    {
      titulo: 'Proyecta tu ahorro pensando en lo que puedes ahorrar',
      value: 0
    },
    {
      titulo: 'Proyecta tu ahorro pensando en lo que quieres alcanzar',
      value: 1
    }
  ]
  const infoOptions = [
    {
      title: 'Selecciona tu camino',
      showDivider: true,
      description: 'Elige la opción que se acomoda más a tu momento de vida.',
      img: selecciona
    },
    {
      title: 'Simula el ahorro',
      showDivider: true,
      description:
        'Selecciona el monto que estás dispuesto o necesitas ahorrar, y el tiempo que quieres ahorrar.',
      img: simula
    },
    {
      title: 'Agenda una cita',
      showDivider: false,
      description:
        'Uno de nuestros asesores se contactará contigo para darte el acompañamiento y asesoría que requieras para acercarte a tu sueño.',
      img: agenda
    }
  ]
  const [itemOption, setitemOption] = useState(0)
  const setItemSelected = item => {
    setitemOption(item)
    sendGaPush(
      'Ahorro',
      'ClicSimulador',
      item === 0
        ? 'AhorroPensandoCapacidadAhorro'
        : 'AhorroPensandoSuenoAlcanzar'
    )
  }
  return (
    <div
      id="container-simulator-reserva"
      className="container-simulator-reserva"
    >
      <h2
        style={{
          fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_30PX, 1.5)
            .fontSize,
          lineHeight: scaleLine(accessibility.lineSize + 5)
        }}
        id="container-simulator-reserva-title"
        className="container-simulator-reserva-title"
      >
        Simula tu ahorro
      </h2>
      <p
        id="container-simulator-reserva-title-paragraph"
        style={{
          fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1.5)
            .fontSize,
          lineHeight: scaleLine(accessibility.lineSize)
        }}
        className="container-simulator-reserva-paragraph"
      >
        Sabemos que tomar la decisión y empezar a ahorrar no es fácil, pero
        también sabemos que no es imposible, es cuestión de tener compromiso y
        dedicación.
      </p>
      <div
        id="container-simulator-reserva-cards-info"
        className="container-simulator-reserva-cards-info"
      >
        {infoOptions.map(item => {
          return (
            <div className="d-flex align-items-center">
              <img
                src={item.img}
                alt={item.title}
                className="container-simulator-reserva-cards-info-item-img"
              />
              <p className="container-simulator-reserva-cards-info-item-desc">
                {item.description}
              </p>
              {item.showDivider ? (
                <div className="container-simulator-reserva-cards-info-item-divider" />
              ) : null}
            </div>
          )
        })}
      </div>
      <div
        id="container-simulator-reserva-content"
        className="container-simulator-reserva-content"
      >
        <div
          id="container-simulator-reserva-content-options"
          className="container-simulator-reserva-content-options"
        >
          <h4
            style={{
              fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_22PX, 1.5)
                .fontSize,
              lineHeight: scaleLine(accessibility.lineSize + 5)
            }}
            id="container-simulator-reserva-content-options-title"
            className="container-simulator-reserva-content-options-title"
          >
            ¿Cuándo piensas en ahorrar, qué es lo que te motiva?
          </h4>
          <MenuMeal
            accessibility={accessibility}
            data={menuOptions}
            type={type}
            indexTitle={itemOption}
            line={'InternaAhorro'}
            clickEvent={setItemSelected}
          />
        </div>
        <div
          id="container-simulator-reserva-content-info"
          className="container-simulator-reserva-content-info"
        >
          {<Simulator type={itemOption} setType={setitemOption} />}
        </div>
      </div>
    </div>
  )
}
