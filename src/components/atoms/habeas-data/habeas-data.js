import React, { useState } from 'react'
import './habeas-data.scss'
import { withStyles } from '@material-ui/core/styles'
import { grey, indigo } from '@material-ui/core/colors'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import Anchor from '../anchor/anchor'

const GreenCheckbox = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: indigo[900]
    }
  },
  checked: {}
})(props => <Checkbox id={props.id} color="default" {...props} />)

export default function HabeasData({ style, setState }) {
  const [check, setCheck] = useState(false)
  const handleChangeChk = event => {
    setCheck(event.target.checked)
    setState(event.target.checked)
  }

  return (
    <div
      id={'container-habeas-data'}
      style={style}
      className={'container-habeas-data '}
    >
      <FormControlLabel
        id="container-habeas-data-check-form"
        className="container-habeas-data-input"
        control={
          <GreenCheckbox
            id="container-habeas-data-check"
            checked={check}
            onChange={handleChangeChk}
            name="checkedG"
          />
        }
      />
      <p className="container-habeas-data-text">
        Al hacer clic en el botón AGENDAR declaro que conozco y acepto la
        autorización sobre Protección de datos personales que se encuentra en:
        <Anchor
          target="_blank"
          rel="noreferrer"
          href="https://www.proteccion.com/contenidos/persona/cesantias/ley-proteccion-datos-personales"
        >
          {' '}
          <bold>Ley de Protección de Datos Personales.</bold>
        </Anchor>{' '}
        Con el envío de esta información autorizo a Protección S.A. para
        contactarme.
      </p>
    </div>
  )
}
