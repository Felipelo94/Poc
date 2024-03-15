import React, { useEffect, useState } from 'react'
import './simulator-mutuo-colombia.scss'
import { ReactComponent as InfoIcon } from '../../../assets/images/incon-info.svg'
import { ReactComponent as Modena } from '../../../assets/images/icons/moneda_simulador_mutuo_colombia.svg'
import Tooltip from '../../atoms/tooltip/tooltip'
import { getSizeScreen, getSizeScreenClass } from '../../../utils/handleResize'
import InputRange from '../../atoms/input-range/input-range'
import CardDesktop from '../bite/card-desktop/card-desktop'
import { getFormat } from '../../../utils/stringUtil'
import { ReactComponent as InfoIconSmall } from '../../../assets/images/icons/info-small.svg'
import { ReactComponent as Ahorro } from '../../../assets/images/icons/too-many-coins.svg'
import Button from '../../atoms/button/button'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'

export default function SimulatorMutuoColombia({ setChangeTab }) {
  const [showInfo, setShowInfo] = useState(false)
  const [indexActivo, setIndexActivo] = useState(null)
  const [dataCardSimulater, setDataCardSimulater] = useState(null)
  const [aportePatrocinador, setAportePatrocinador] = useState(0)
  const [valuePatrocinador, setValuePatrocinador] = useState(0)
  const [aportePaticipe, setAportePaticipe] = useState(0)
  const [posibilidadPaticipe, setPosibilidadPaticipe] = useState(0)
  const [isResetSimulator, setIsResetSimulator] = useState(false)
  const [
    dataPossibilityCardSimulater,
    setDataPossibilityCardSimulater
  ] = useState(null)
  const [valueOrdinario, setValueOrdinario] = useState(0)

  useEffect(() => {
    setChangeTab(null)
  }, [])

  const Resultados_patrocinadora = valor => {
    let aporte_patrocinadora = parseInt(valor)
    var suma_aporte = 0
    for (var x = 36; x >= 1; x--) {
      var aporte_valor_anioo_patrocinadora = (
        parseFloat(aporte_patrocinadora) * Math.pow(1 + 0.004867550565343, x)
      ).toFixed(2)
      suma_aporte += parseFloat(aporte_valor_anioo_patrocinadora)
    }
    let valorfinal = (
      Math.round((parseFloat(suma_aporte) * 1000) / 10) / 100
    ).toFixed(2)

    return valorfinal
  }

  const Resultados_participe = valor => {
    let aporte_participe = parseInt(valor)
    let calValorizacion = 0
    for (let i = 36; i >= 1; i--) {
      let aporte_valor_anio_participe = Math.round(
        parseFloat(aporte_participe) * Math.pow(1 + 0.004867550565343, i)
      )

      let valorizacion_participe =
        aporte_valor_anio_participe - aporte_participe

      calValorizacion += valorizacion_participe
    }

    return calValorizacion
  }

  const calculateMutuoColombia = salario => {
    let salaryMin = process.env.MINIMUM_SALARY
      ? parseInt(process.env.MINIMUM_SALARY)
      : 908526
    let numSalary = salario / salaryMin

    let aporteThreeSalary =
      numSalary < parseFloat(3.0) ? salario * 0.05 : salaryMin * 3 * 0.05

    let aporteFourSalary =
      numSalary <= parseFloat(3.0)
        ? 0
        : numSalary > parseFloat(3.0) && numSalary <= parseFloat(5.0)
        ? (salario - salaryMin * 3) * 0.03
        : numSalary > parseFloat(5.0)
        ? (salaryMin * 5 - salaryMin * 3) * 0.03
        : 0

    let aporteFiveSalary =
      numSalary > parseFloat(5.0)
        ? (salario - salaryMin * 5) * 0.01 > 0
          ? (salario - salaryMin * 5) * 0.01
          : 0
        : 0

    let TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION =
      parseFloat(aporteThreeSalary + aporteFourSalary + aporteFiveSalary) >
      parseFloat(salario * 0.05)
        ? salario * 0.05
        : aporteThreeSalary + aporteFourSalary + aporteFiveSalary

    let APORTE_DE_LA_PATROCINADORA =
      TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION * 0.5

    let POSIBILIDAD_DE_APORTE_EXTRAORDINARIO_MENSUAL_DEL_PARTICIPE =
      salario * 0.1 - TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION

    let APORTE_MÁXIMO_MENSUAL_DEL_PARTICIPE =
      POSIBILIDAD_DE_APORTE_EXTRAORDINARIO_MENSUAL_DEL_PARTICIPE +
      TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION

    setAportePatrocinador(Math.round(APORTE_DE_LA_PATROCINADORA, -1))
    setAportePaticipe(Math.round(TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION, -1))
    setValueOrdinario(Math.round(TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION, -1))
    setValuePatrocinador(0)
    setPosibilidadPaticipe(
      Math.round(POSIBILIDAD_DE_APORTE_EXTRAORDINARIO_MENSUAL_DEL_PARTICIPE, -1)
    )

    Resultados_participe(
      TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION +
        POSIBILIDAD_DE_APORTE_EXTRAORDINARIO_MENSUAL_DEL_PARTICIPE
    )

    const dataCard = [
      {
        title: 'Partícipe',
        subtitle: 'Total aporte ordinario Partícipe',
        value: Math.round(TOTAL_PARTICIPLE_ORDINARY_CONTRIBUTION, -1),
        style: 1,
        tooltip: 'Aporte total ordinario que realizas como afiliado',
        position: { left: '202px', top: '-84px' },
        positionMobile: { left: '202px', top: '-84px', width: 0 }
      },
      {
        title: 'Patrocinadora',
        subtitle: 'Aporte de la Patrocinadora',
        value: Math.round(APORTE_DE_LA_PATROCINADORA, -1),
        style: 1,
        tooltip:
          'Aporte que realiza tu empresa, y equivale a la mitad de tu aporte ordinario',
        position: { left: '173px', top: '-103px' },
        positionMobile: { left: '173px', top: '-103px', width: 0 }
      }
    ]

    const dataPossibility = [
      {
        title: `Hasta el 10% del salario básico mensual `,
        subtitle: 'Posibilidad de aporte extraordinario mensual del Partícipe',
        value: Math.round(
          POSIBILIDAD_DE_APORTE_EXTRAORDINARIO_MENSUAL_DEL_PARTICIPE,
          -1
        ),
        style: 2,
        tooltip:
          'Aportes adicionales al ordinario, y sobre los cuales tu empresa no realiza una contribución',
        titleTwo: `${APORTE_MÁXIMO_MENSUAL_DEL_PARTICIPE}`,
        position: { left: '236px', top: '-117px' },
        positionMobile: { left: '173px', top: '-116px', width: 0 }
      }
    ]
    setDataCardSimulater(dataCard)
    setDataPossibilityCardSimulater(dataPossibility)
  }

  const resetSimulator = () => {
    setIsResetSimulator(true)
    setDataCardSimulater(null)
  }

  useEffect(() => {
    if (isResetSimulator) {
      setIsResetSimulator(false)
    }
  }, [isResetSimulator])

  return (
    <div
      id="simulator-mutuo-colombia-container"
      className="simulator-mutuo-colombia-container"
    >
      <div
        id="simulator-mutuo-colombia-container-minimum-salary"
        className="simulator-mutuo-colombia-container-minimum-salary"
      >
        <div
          id="simulator-mutuo-colombia-container-minimum-salary-header"
          className="simulator-mutuo-colombia-container-minimum-salary-header"
        >
          <span style={{ marginRight: 14 }}>
            Salario mínimo {new Date().getFullYear()}
          </span>
          <div
            id="container-result-operation-icon"
            style={{ cursor: 'pointer' }}
            role="presentation"
            onMouseOut={() => {
              if (getSizeScreenClass() > 1024) {
                setShowInfo(false)
              }
            }}
            onMouseOver={() => {
              if (getSizeScreenClass() > 1024) {
                setShowInfo(true)
              }
            }}
            onFocus={() => {
              if (getSizeScreenClass() > 1024) {
                setShowInfo(true)
              }
            }}
            onBlur={() => {
              if (getSizeScreenClass() > 1024) {
                setShowInfo(false)
              }
            }}
            onClick={() => {
              if (getSizeScreenClass() <= 1024) {
                setShowInfo(!showInfo)
              }
            }}
            onKeyDown={() => {
              if (getSizeScreenClass() <= 1024) {
                setShowInfo(!showInfo)
              }
            }}
          >
            <InfoIcon />
          </div>
          {showInfo ? (
            <Tooltip
              styleText={{ padding: 8, width: 141 }}
              positionArrow="left"
              style={
                getSizeScreen() > 1024
                  ? {
                      right: 27,
                      position: 'absolute',
                      top: 0,
                      left: 220,
                      width: 0
                    }
                  : {
                      width: 0,
                      right: 0,
                      position: 'absolute',
                      top: -64,
                      left: 196,
                      marginLeft: 0
                    }
              }
              text={'Sobre este valor se realiza el cálculo'}
            />
          ) : null}
        </div>
        <div
          id="simulator-mutuo-colombia-container-minimum-salary-content"
          className="simulator-mutuo-colombia-container-minimum-salary-content"
        >
          <span>
            {getFormat(parseInt(process.env.MINIMUM_SALARY), 'currency')}
          </span>
        </div>
      </div>
      <div
        style={{
          border: '1px solid #E2E7ED',
          boxSizing: 'border-box',
          marginTop: 32,
          marginBottom: 40
        }}
      />
      <div
        id="simulator-mutuo-colombia-container-minimum-salary-input"
        className="simulator-mutuo-colombia-container-minimum-salary-input"
      >
        <InputRange
          isResetInputRange={isResetSimulator}
          min={0}
          max={999999999}
          style={{ marginRight: 16 }}
          input={true}
          label={'Ingresa el valor de tu salario básico'}
          inputPosition="top"
          formatInput="currency"
          className="container-simulator-input"
          width="321px"
          onChange={e => {
            let value = parseInt(e)
            if (value > 0) {
              calculateMutuoColombia(value)
            }
          }}
          alert={'Si es integral, ingresa el 100% de tu salario básico'}
          isRange={false}
        />
      </div>
      {dataCardSimulater ? (
        <React.Fragment>
          <div
            style={
              getSizeScreen() > 1024
                ? { marginTop: 44, marginBottom: 16 }
                : { marginTop: 12, marginBottom: 16 }
            }
          >
            <CardDesktop
              title="Aporte ordinario mensual"
              data={dataCardSimulater}
              icon={<Modena />}
              formatInput="currency"
            />
          </div>
          <div>
            <CardDesktop
              title="Aporte extraordinario mensual"
              data={dataPossibilityCardSimulater}
              icon={<Ahorro />}
              formatInput="currency"
            />
          </div>

          <div
            id="simulator-mutuo-colombia-container-minimum-salary-projection"
            className="simulator-mutuo-colombia-container-minimum-salary-projection"
          >
            <div
              id="simulator-mutuo-colombia-container-minimum-salary-projection-title"
              className="simulator-mutuo-colombia-container-minimum-salary-projection-title"
            >
              <span>Proyéctate con el Plan Mutuocolombia</span>
            </div>
            <div
              id="simulator-mutuo-colombia-container-minimum-salary-projection-subtitle"
              className="simulator-mutuo-colombia-container-minimum-salary-projection-subtitle"
            >
              <span>Plan Mutuocolombia</span>
            </div>
            <div
              id="simulator-mutuo-colombia-container-minimum-salary-projection-decripcion"
              className="simulator-mutuo-colombia-container-minimum-salary-projection-decripcion"
            >
              <span>Ingresa los valores en los siguientes campos:</span>
            </div>
            <div
              id="simulator-mutuo-colombia-container-minimum-salary-projection-input"
              className="simulator-mutuo-colombia-container-minimum-salary-projection-input"
            >
              <div
                id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input"
                className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input"
              >
                <InputRange
                  defualtValue={parseInt(aportePaticipe)}
                  min={30000}
                  max={parseInt(aportePaticipe)}
                  style={{ marginRight: 16 }}
                  input={true}
                  label={'Ingresa el valor de tu aporte ordinario mensual'}
                  inputPosition="top"
                  formatInput="currency"
                  className="container-simulator-input"
                  width="321px"
                  onChange={e => {
                    let value = parseInt(e)
                    setValueOrdinario(value)
                    setAportePatrocinador(value * 0.5)
                  }}
                  alert={'*Valor mínimo de aporte es $30.000 pesos'}
                  isRange={false}
                  changesMax={true}
                />
                <div
                  id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info"
                  className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info"
                  style={getSizeScreen() <= 1024 ? {} : { marginLeft: 64 }}
                >
                  <div
                    id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-title"
                    className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-title"
                    style={{
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        marginRight: 13
                      }}
                    >
                      Aporte de la Patrocinadora
                    </span>
                    <div
                      id="container-result-operation-icon"
                      style={{ cursor: 'pointer' }}
                      role="presentation"
                      onMouseOver={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(1)
                        }
                      }}
                      onMouseOut={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(null)
                        }
                      }}
                      onBlur={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(null)
                        }
                      }}
                      onClick={() => {
                        if (getSizeScreenClass() <= 1024) {
                          setIndexActivo(indexActivo !== 1 ? 1 : null)
                        }
                      }}
                      onFocus={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(1)
                        }
                      }}
                      onKeyDown={() => {
                        if (getSizeScreenClass() <= 1024) {
                          setIndexActivo(indexActivo !== 1 ? 1 : null)
                        }
                      }}
                    >
                      <InfoIconSmall />
                    </div>
                    {indexActivo === 1 ? (
                      <Tooltip
                        styleText={{ padding: 8, width: 141 }}
                        text={
                          'Aporte que realiza tu empresa, y equivale a la mitad de tu aporte ordinario'
                        }
                        style={
                          getSizeScreen() <= 1024
                            ? { left: '172px', top: '-104px', width: 0 }
                            : { left: '172px', top: '-104px' }
                        }
                      />
                    ) : null}
                  </div>
                  <div
                    id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-subtitle-aporte-patrocinador"
                    className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-subtitle"
                  >
                    <span>{`${getFormat(
                      parseInt(
                        !isNaN(aportePatrocinador) ? aportePatrocinador : 0
                      ),
                      'currency'
                    )}`}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simulator-mutuo-colombia-container-minimum-salary-projection-input"
              id="simulator-mutuo-colombia-container-minimum-salary-projection-input"
            >
              <div
                className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input"
                id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input"
              >
                <InputRange
                  min={0}
                  max={parseInt(posibilidadPaticipe)}
                  defualtValue={parseInt(posibilidadPaticipe)}
                  input={true}
                  style={{ marginRight: 16 }}
                  inputPosition="top"
                  label={'Ingresa el valor de tu aporte extraordinario mensual'}
                  className="container-simulator-input"
                  formatInput="currency"
                  width="321px"
                  onChange={e => {
                    let value = parseInt(e)
                    setValuePatrocinador(value)
                  }}
                  isRange={false}
                  alert={`*Valor de aporte no debe superar ${getFormat(
                    parseInt(posibilidadPaticipe),
                    'currency'
                  )}`}
                  isResetInputRange={true}
                />
                <div
                  className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info"
                  id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info"
                  style={getSizeScreen() <= 1024 ? {} : { marginLeft: 64 }}
                >
                  <div
                    className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-title"
                    id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-title"
                    style={{
                      position: 'relative'
                    }}
                  >
                    <span
                      style={{
                        marginRight: 13,
                        maxWidth: 137
                      }}
                    >
                      Valor total aportado mensualmente
                    </span>
                    <div
                      role="presentation"
                      style={{ cursor: 'pointer' }}
                      onMouseOut={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(null)
                        }
                      }}
                      id="container-result-operation-icon"
                      onMouseOver={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(2)
                        }
                      }}
                      onFocus={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(2)
                        }
                      }}
                      onClick={() => {
                        if (getSizeScreenClass() <= 1024) {
                          setIndexActivo(indexActivo !== 2 ? 2 : null)
                        }
                      }}
                      onKeyDown={() => {
                        if (getSizeScreenClass() <= 1024) {
                          setIndexActivo(indexActivo !== 2 ? 2 : null)
                        }
                      }}
                      onBlur={() => {
                        if (getSizeScreenClass() > 1024) {
                          setIndexActivo(null)
                        }
                      }}
                    >
                      <InfoIconSmall />
                    </div>
                    {indexActivo === 2 ? (
                      <Tooltip
                        styleText={{ padding: 8, width: 141 }}
                        text={
                          'Corresponde a la suma de tus aportes ordinarios y extraordinarios, y el valor del aporte mensual de tu empresa'
                        }
                        style={
                          getSizeScreen() <= 1024
                            ? { left: '125px', top: '-155px', width: 0 }
                            : { left: '125px', top: '-155px' }
                        }
                      />
                    ) : null}
                  </div>
                  <div
                    className="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-subtitle"
                    id="simulator-mutuo-colombia-container-minimum-salary-projection-input-input-info-subtitle-total"
                  >
                    <span>{`${getFormat(
                      parseInt(
                        !isNaN(valueOrdinario) &&
                          !isNaN(valuePatrocinador) &&
                          !isNaN(aportePatrocinador)
                          ? valueOrdinario +
                              valuePatrocinador +
                              aportePatrocinador
                          : isNaN(valueOrdinario)
                          ? valuePatrocinador + aportePatrocinador
                          : isNaN(valuePatrocinador)
                          ? valueOrdinario + aportePatrocinador
                          : isNaN(aportePatrocinador)
                          ? valueOrdinario + valuePatrocinador
                          : 0
                      ),
                      'currency'
                    )}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="simulator-mutuo-colombia-container-minimum-salary-valorizacion"
            className="simulator-mutuo-colombia-container-minimum-salary-valorizacion"
            style={{ marginTop: 12 }}
          >
            <div style={{ display: 'flex' }}>
              <div
                id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info"
                className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info"
                style={getSizeScreen() > 1024 ? { marginRight: 126 } : {}}
              >
                <div
                  id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-title"
                  className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-title"
                  style={{
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      marginRight: 13
                    }}
                  >
                    Tasa promedio de rentabilidad
                  </span>
                  <div
                    onMouseOut={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(null)
                      }
                    }}
                    role="presentation"
                    style={{ cursor: 'pointer' }}
                    id="container-result-operation-icon"
                    onFocus={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(3)
                      }
                    }}
                    onMouseOver={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(3)
                      }
                    }}
                    onClick={() => {
                      if (getSizeScreenClass() <= 1024) {
                        setIndexActivo(indexActivo !== 3 ? 3 : null)
                      }
                    }}
                    onBlur={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(null)
                      }
                    }}
                    onKeyDown={() => {
                      if (getSizeScreenClass() <= 1024) {
                        setIndexActivo(indexActivo !== 3 ? 3 : null)
                      }
                    }}
                  >
                    <InfoIconSmall />
                  </div>
                  {indexActivo === 3 ? (
                    <Tooltip
                      styleText={{ padding: 8, width: 141 }}
                      style={
                        getSizeScreen() <= 1024
                          ? { left: '198px', top: '-87px', width: 0 }
                          : { left: '198px', top: '-87px' }
                      }
                      text={
                        'Es la tasa promedio estimada de rentabilidad del plan'
                      }
                    />
                  ) : null}
                </div>
                <div
                  id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-subtitle-porcentaje"
                  className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-subtitle"
                  style={getSizeScreen() <= 1024 ? { marginBottom: 24 } : {}}
                >
                  <span>6%</span>
                </div>
              </div>
              <div
                className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info"
                id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info"
              >
                <div
                  className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-title"
                  id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-title"
                  style={{
                    position: 'relative'
                  }}
                >
                  <span
                    style={{
                      marginRight: 13
                    }}
                  >
                    Valorización
                  </span>
                  <div
                    onMouseOut={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(null)
                      }
                    }}
                    role="presentation"
                    style={{ cursor: 'pointer' }}
                    id="container-result-operation-icon"
                    onFocus={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(4)
                      }
                    }}
                    onMouseOver={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(4)
                      }
                    }}
                    onClick={() => {
                      if (getSizeScreenClass() <= 1024) {
                        setIndexActivo(indexActivo !== 4 ? 4 : null)
                      }
                    }}
                    onBlur={() => {
                      if (getSizeScreenClass() > 1024) {
                        setIndexActivo(null)
                      }
                    }}
                    onKeyDown={() => {
                      if (getSizeScreenClass() <= 1024) {
                        setIndexActivo(indexActivo !== 4 ? 4 : null)
                      }
                    }}
                  >
                    <InfoIconSmall />
                  </div>
                  {indexActivo === 4 ? (
                    <Tooltip
                      styleText={{ padding: 8, width: 141 }}
                      style={
                        getSizeScreen() <= 1024
                          ? { left: '75px', top: '-141px', width: 0 }
                          : { left: '75px', top: '-141px' }
                      }
                      text={
                        'Corresponde al beneficio que reciben los aportes, de acuerdo a la rentabilidad promedio estimada del plan'
                      }
                    />
                  ) : null}
                </div>
                <div
                  className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-subtitle"
                  id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-info-subtitle-value"
                >
                  <span>
                    {getFormat(
                      parseInt(
                        !isNaN(valueOrdinario) && !isNaN(valuePatrocinador)
                          ? Resultados_participe(
                              valueOrdinario + valuePatrocinador
                            )
                          : isNaN(valueOrdinario)
                          ? Resultados_participe(0 + valuePatrocinador)
                          : isNaN(valuePatrocinador)
                          ? Resultados_participe(valueOrdinario + 0)
                          : 0
                      ),
                      'currency'
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{ margin: '32px 0px', background: '#E2E7ED', height: 1 }}
            />
            <div
              id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-ganancias"
              className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-ganancias"
            >
              <div
                id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-ganancias-item"
                className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-ganancias-item"
              >
                <span>
                  Esto es lo que ganarías en 3 años si estás en el Plan
                  Mutuocolombia
                </span>
              </div>
              <div
                id="simulator-mutuo-colombia-container-minimum-salary-valorizacion-ganancias-value"
                className="simulator-mutuo-colombia-container-minimum-salary-valorizacion-ganancias-value"
              >
                <span>
                  {getFormat(
                    parseInt(
                      parseInt(
                        !isNaN(valueOrdinario) && !isNaN(valuePatrocinador)
                          ? Resultados_participe(
                              valueOrdinario + valuePatrocinador
                            )
                          : isNaN(valueOrdinario)
                          ? Resultados_participe(0 + valuePatrocinador)
                          : isNaN(valuePatrocinador)
                          ? Resultados_participe(valueOrdinario + 0)
                          : 0
                      )
                    ) +
                      parseInt(
                        !isNaN(aportePatrocinador)
                          ? Resultados_patrocinadora(aportePatrocinador)
                          : 0
                      ),
                    'currency'
                  )}
                </span>
              </div>
            </div>
          </div>
          <div
            id="simulator-mutuo-colombia-container-minimum-salary-botton"
            className="simulator-mutuo-colombia-container-minimum-salary-botton"
          >
            <Button
              title={'Limpiar para una nueva simulación'}
              className={'secondary'}
              onClick={() => {
                resetSimulator()
                clickWithScrollCenter(
                  document.getElementById(
                    getSizeScreenClass() > 1024
                      ? `container-header-container-sub-title-sesion`
                      : `container-meal-title-value-${2}`
                  )
                )
              }}
              isnotValidate={true}
              style={
                getSizeScreen() > 1024
                  ? { marginRight: 24 }
                  : { marginBottom: 24 }
              }
            />
            <Button
              title={'Afíliate al Plan Mutuocolombia'}
              className={'primary'}
              onClick={() => {
                setChangeTab(4)
              }}
              isnotValidate={true}
            />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  )
}
