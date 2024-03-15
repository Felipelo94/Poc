import React from 'react'
import { Report } from './report'
import { screen, render, fireEvent, createEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const reportData = {
  node: {
    data: {
      target: {
        fields: {
          titulo: {
            'en-US': 'title'
          },
          textoIntroductorioBite: {
            'en-US': 'introductoryTextBite'
          },
          contenido: {
            'en-US': {
              fields: {
                urlSeo: {
                  'en-US': 'http://test.testUrlSeo'
                }
              }
            }
          },
          linkCallToActionInformes: {
            'en-US': 'http://test.testCallToAction'
          },
          textoCallToActionInformes: {
            'en-US': 'callToActionText'
          }
        },
        sys: {
          updatedAt: '01/01/2000'
        },
        gtmTSHStepperAllies: {
          event: {
            category: 'testEvent',
            action: 'testAction',
            label: 'testLabel'
          }
        }
      }
    }
  },
  accessibilityInfo: {
    fontSize: 2,
    lineSize: 5
  }
}

const reportDataEmptyUrl = {
  node: {
    data: {
      target: {
        fields: {
          titulo: {
            'en-US': 'title'
          },
          textoIntroductorioBite: {
            'en-US': 'introductoryTextBite'
          },
          contenido: {
            'en-US': {
              fields: {
                urlSeo: {}
              }
            }
          },
          linkCallToActionInformes: {
            'en-US': 'http://test.testCallToAction'
          },
          textoCallToActionInformes: {
            'en-US': 'callToActionText'
          }
        },
        sys: {
          updatedAt: '01/01/2000'
        },
        gtmTSHStepperAllies: {
          event: {
            category: 'testEvent',
            action: 'testAction',
            label: 'testLabel'
          }
        }
      }
    }
  },
  accessibilityInfo: {
    fontSize: 2,
    lineSize: 5
  }
}

const reportDataAllEmptyUrl = {
  node: {
    data: {
      target: {
        fields: {
          titulo: {
            'en-US': 'title'
          },
          textoIntroductorioBite: {
            'en-US': 'introductoryTextBite'
          },
          contenido: {
            'en-US': {
              fields: {
                urlSeo: {}
              }
            }
          },
          linkCallToActionInformes: {
            'en-US': ''
          }
        },
        sys: {
          updatedAt: '01/01/2000'
        },
        gtmTSHStepperAllies: {
          event: {
            category: 'testEvent',
            action: 'testAction',
            label: 'testLabel'
          }
        }
      }
    }
  },
  accessibilityInfo: {
    fontSize: 2,
    lineSize: 5
  }
}

const reportDataNoContent = {
  node: {
    data: {
      target: {
        fields: {
          titulo: {},
          textoIntroductorioBite: {}
        },
        sys: {
          updatedAt: '01/01/2000'
        },
        gtmTSHStepperAllies: {
          event: {
            category: 'testEvent',
            action: 'testAction',
            label: 'testLabel'
          }
        }
      }
    }
  },
  accessibilityInfo: {
    fontSize: 2,
    lineSize: 5
  }
}

describe('Report', () => {
  test('renders with proper props', () => {
    render(
      <Report
        node={reportData.node}
        accessibilityInfo={reportData.accessibilityInfo}
      />
    )
  })

  test('renders with no Url', () => {
    render(
      <Report
        node={reportDataEmptyUrl.node}
        accessibilityInfo={reportDataEmptyUrl.accessibilityInfo}
      />
    )
    fireEvent.click(screen.getByTestId('container-parrafo__card-reports'))
  })

  test('renders with all url empty', () => {
    render(
      <Report
        node={reportDataAllEmptyUrl.node}
        accessibilityInfo={reportDataAllEmptyUrl.accessibilityInfo}
      />
    )
  })

  test('renders with no content', () => {
    render(
      <Report
        node={reportDataNoContent.node}
        accessibilityInfo={reportDataNoContent.accessibilityInfo}
      />
    )
    const link = screen.getByTestId('container-parrafo__card-reports')
    const clickEvent = createEvent.click(link)

    fireEvent(link, clickEvent)

    expect(clickEvent.defaultPrevented).toBe(false)
  })
})
