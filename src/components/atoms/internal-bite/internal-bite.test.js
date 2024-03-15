import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'
import InternalBite from './internal-bite'
import * as useCurrentWidth from '../../../hooks/useCurrentWidth/useCurrentWidth'

const dataTest1 = {
  id: {
    node: {
      contenful_id: 0
    }
  },
  active: {
    node: {
      contenful_id: 0
    }
  },
  typeCustomer: 'Persona'
}

const dataTest2 = {
  id: {
    node: {
      contenful_id: 1
    }
  },
  active: {
    node: {
      contenful_id: 'idTest'
    }
  },
  typeCustomer: 'Test'
}

describe('InternalBite', () => {
  it('captures click', done => {
    function handleClick() {
      done()
    }

    const { getByTestId } = render(
      <InternalBite id={0} active={0} onClick={handleClick} />
    )
    const node = getByTestId('internal-bite')
    fireEvent.click(node)
    const tree = renderer.create(<InternalBite />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render correctly', () => {
    const tree = renderer
      .create(<InternalBite id={0} active={1} onClick={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render correctly with id === active', () => {
    jest.spyOn(useCurrentWidth, 'default').mockImplementation(() => 720)
    const container = render(
      <InternalBite
        id={dataTest1.id}
        active={dataTest1.active}
        line="Inversión"
        onClick={() => {}}
        typeCustomer={dataTest1.typeCustomer}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('render correctly with id !== active', () => {
    jest.spyOn(useCurrentWidth, 'default').mockImplementation(() => 1280)
    const container = render(
      <InternalBite
        id={dataTest2.id}
        active={dataTest2.active}
        line=""
        onClick={() => {}}
        typeCustomer={dataTest2.typeCustomer}
      />
    )
    expect(container).toMatchSnapshot()
  })

  afterEach(cleanup)
})
