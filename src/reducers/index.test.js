import index from './index'
import { initialState as initialStatePageContext } from './page-context/page-context'

describe('todos index', () => {
  it('welcome ', () => {
    expect(
      index(undefined, {
        internalCategoria: {
          dataInternal: []
        },
        welcome: {
          nameValue: '',
          typeUser: 1
        },
        youcantmiss: {
          userValue: []
        },
        home: {
          categoria: '',
          subCategoria: ''
        },
        menu: {
          status: false
        },
        tourguide: {
          status: false
        },
        accesibility: {
          fontSize: 2,
          lineSize: 1,
          darkMode: false
        }
      })
    ).toEqual({
      internalCategoria: {
        dataInternal: []
      },
      welcome: {
        nameValue: '',
        typeUser: 1
      },
      youcantmiss: {
        userValue: []
      },
      home: {
        categoria: '',
        subCategoria: ''
      },
      menu: {
        status: false
      },
      tourguide: {
        status: false
      },
      pageContext: initialStatePageContext,
      accesibility: {
        fontSize: 2,
        lineSize: 1,
        darkMode: false
      },
      profitability: expect.anything()
    })
  })
})
