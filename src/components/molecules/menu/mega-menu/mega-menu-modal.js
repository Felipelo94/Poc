import React from 'react'
import ButtonOpenModal from '../../../atoms/button-open-modal/button-open-modal'
import './mega-menu.scss'

export default function MegaMenuModal({
  icon,
  titleMainMenu,
  subcategory,
  typeUser,
  setclick,
  setsoluciones,
  onToggleModalSalesforce,
  soluciones,
  selectedMenu,
  selectedTitle,
  setmodalClosed,
  overModal,
  options,
  servicesUser,
  blackTheme
}) {
  const [nameClass, setNameClass] = React.useState('')
  const [nameId, setNameId] = React.useState('')
  const [nameTitle, setNameTitle] = React.useState('')

  const switchOptions = iconValue => {
    switch (iconValue) {
      case 1:
        setNameClass('gtmHomeMenuTenemosParaTi')
        setNameId('button-open-modal-comntainer')
        setNameTitle('Explora')
        break
      case 2:
        setNameClass('gtmHomeMenuAfiliateProteccion')
        setNameId('gtmHomeMenuAfiliateProteccion')
        setNameTitle('Accesos rápidos')
        break
      case 3:
        setNameClass('gtmHomeMenuCanalesDeServicio')
        setNameId('gtmHomeMenuCanalesDeServicio')
        setNameTitle('Accesos rápidos')
        break
      default:
        setNameClass('gtmHomeMenuAccesosRapidos')
        setNameId('gtmHomeMenuSolucionesUnClic')
        setNameTitle('Accesos rápidos')
        break
    }
  }

  React.useEffect(() => {
    switchOptions(icon)
  }, [icon])

  return (
    <div
      role="presentation"
      className={nameClass}
      id={nameId}
      onClick={() => {
        setsoluciones(!soluciones)
        setclick(false)
      }}
      style={{
        position: 'fixed'
      }}
    >
      <ButtonOpenModal
        titleMainMenu={titleMainMenu}
        classGtm={nameClass}
        onToggleModalSalesforce={onToggleModalSalesforce}
        statusOver={selectedMenu && selectedTitle === icon ? true : false}
        tittle={nameTitle}
        setmodalClosed={setmodalClosed}
        overModal={overModal}
        services={typeUser}
        servicesUser={servicesUser}
        subcategory={subcategory}
        idIcon={icon}
        options={options}
        typeUser={typeUser}
        className={`container-buton-open-test-${icon}`}
        blackTheme={blackTheme}
      />
    </div>
  )
}
