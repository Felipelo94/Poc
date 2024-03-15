import React from 'react'
import renderer from 'react-test-renderer'
import Tooltip from './tooltip'

describe('toltip', () => {
  it('renders correctly without props', () => {
    const tree = renderer
      .create(
        <Tooltip
          text="Pedimos tus datos para entregarte información a tu medida. Recuerda que esto no es un inicio de sesión y para acceder a
    la zona transaccional deberás ingresar tus datos nuevamente"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
