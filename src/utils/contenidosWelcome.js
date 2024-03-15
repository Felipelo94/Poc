const isBrowser = typeof window !== 'undefined'
const prefix =
  process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'
export const dataWelcome = {
  allContentfulContenidosPaginas: {
    edges: [
      {
        node: {
          nombreTexto: 'texto-nombre',
          valorTexto: {
            internal: {
              content: '¿Cómo te llamas?'
            }
          }
        }
      },
      {
        node: {
          nombreTexto: 'titulo-secundario',
          valorTexto: {
            internal: {
              content: 'Cuéntanos...'
            }
          }
        }
      },
      {
        node: {
          nombreTexto: 'texto-tipo-persona',
          valorTexto: {
            internal: {
              content: '¿Quién eres?'
            }
          }
        }
      },
      {
        node: {
          nombreTexto: 'titulo-principal',
          valorTexto: {
            internal: {
              content: 'Te damos la bienvenida a Proteccion.com'
            }
          }
        }
      },
      {
        node: {
          nombreTexto: 'descripcion',
          valorTexto: {
            internal: {
              content:
                'Sabemos que cada situación y momento de la vida requiere respuestas diferentes. Por eso creamos una experiencia personalizada. \nResponde estas sencillas preguntas que nos permitirán conocerte mejor.'
            }
          }
        }
      },
      {
        node: {
          nombreTexto: 'alert-info',
          valorTexto: {
            internal: {
              content:
                'Si la consulta que deseas realizar es para otra persona, selecciona las opciones a continuación según sus datos.'
            }
          }
        }
      },
      {
        node: {
          nombreTexto: 'titulo-categorias',
          valorTexto: {
            internal: {
              content: '¿Qué quieres hacer hoy?'
            }
          }
        }
      }
    ]
  }
}
