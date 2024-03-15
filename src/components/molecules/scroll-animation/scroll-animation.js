import React, { useState, useEffect } from 'react'
import BiteResposive from '../../molecules/bite/bite-resposive/bite-resposive'
import { Breakpoint } from 'react-socks'
import InfiniteScroll from 'react-infinite-scroll-component'
import imageDefault from '../../../assets/images/CT1C1-Todos-los-puìblicos_Cesantiìas_Queì-son-AJUSTADO.png'
import BiteDesktop from '../../molecules/bite/bite-desktop/bite-desktop'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents
} from '../../../utils/classGtmUtil'

export default function ScrollAnimation(props) {
  const [items, setItems] = useState(Array.from({ length: 20 }))
  const [hasMore, setHasMore] = useState(true)

  

  let slugPart = '';
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  const fetchMoreData = () => {
    if (items.length >= props.data.length) {
      setHasMore(false)
      return
    }
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })))
    }, 500)
  }

  useEffect(() => {
    if (!hasMore) {
      fetchMoreData()
    }
  }, [props.data])
  
  return (
    <div>
      <InfiniteScroll
        id="scroll-contenido"
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        {items.map((i, index) => {
          if (index <= props.data.length) {
            return (
              <div className="container-categoria-internal-container">
                <div className="container-categoria-internal-container-bite">
                  
                      <div key={index}>
                    {props.data.map((items, indexItems) => {
                      const itemsBite = items.contenido
                        ? items.contenido
                        : items

                        if (items.contenido?.Tema?.[0]) {
                          items.contenido?.urlEspecial
                          ? (slugPart = `${prefix}${items.contenido?.urlSeo}`)
                          : (slugPart = `${
                          items.contenido?.tipoDeCliente[0].nombre === 'Afiliado'
                          ? `${prefix}persona/`
                          : `${prefix}empresa/`
                        }${
                          items.contenido?.Tema[0].lineaDeProducto[0]
                          .tituloAgrupadorContenidos === 'Cesantías'
                           ? 'cesantias/'
                      : items.contenido?.Tema[0].lineaDeProducto[0]
                          .tituloAgrupadorContenidos === 'Ahorro'
                      ? 'ahorro/'
                      : items.contenido?.Tema[0].lineaDeProducto[0]
                          .tituloAgrupadorContenidos === 'Pensión'
                      ? 'pension/'
                      : items.contenido?.Tema[0].lineaDeProducto[0]
                          .tituloAgrupadorContenidos === 'Inversión'
                      ? 'inversion/'
                      : ''
                  }${items.contenido?.urlSeo}`)
                        }
                      if (index === indexItems) {
                        return (
                          <div>
                            <Breakpoint customQuery="(max-width: 1024px)">
                              <div
                                className="container-categoria-internal-container-bite-lightcontent-mobile"
                                id="container-categoria-internal-container-bite-lightcontent-mobile"
                              >
                                {itemsBite.tema ? (
                                  itemsBite.tema.length > 0 ? (
                                    <div
                                      class="hidden-lable"
                                      id="tema-contenido"
                                    >
                                      {itemsBite.tema.map(x => {
                                        return (
                                          <span>
                                            {x.tituloCorto
                                              ? x.tituloCorto
                                              : x.titulo
                                              ? x.titulo
                                              : ''}
                                          </span>
                                        )
                                      })}
                                    </div>
                                  ) : null
                                ) : null}
                                <BiteResposive
                                  accessibility={props.accessibility}
                                  line={props.line}
                                  slug={slugPart}
                                  link={items.contenido?.linkCallToActionBite}
                                  title={
                                    itemsBite.tituloCorto
                                      ? itemsBite.tituloCorto
                                      : ''
                                  }
                                  imgalt={itemsBite.nombreImagen}
                                  img={
                                    itemsBite?.imagenpequena
                                      ? itemsBite.imagenpequena.fluid
                                        ? itemsBite.imagenpequena?.fluid?.src ??
                                          ''
                                        : itemsBite.imagenpequena?.file?.url ??
                                          ''
                                      : ''
                                  }
                                  imgTitle={
                                    itemsBite.imagenpequena
                                      ? itemsBite.imagenpequena.title
                                      : ''
                                  }
                                  content={
                                    itemsBite.textoIntroductorio
                                      ? itemsBite.textoIntroductorio
                                      : ''
                                  }
                                  btn={itemsBite.textoCallToActionBite}
                                  type={
                                    itemsBite.tipoBite ? itemsBite.tipoBite : ''
                                  }
                                  date={itemsBite.updatedAt}
                                  internal={true}
                                  gtmCategory={removeAccents(
                                    props.line ? props.line.category : ''
                                  )}
                                  gtmAction={`Clic${
                                    props.type === 1 ? 'Persona' : 'Empresa'
                                  }${getSubCategoryNameWhenIsPensionAndPerson(
                                    props.type,
                                    removeAccents(
                                      props.line ? props.line.category : ''
                                    ),
                                    props?.subcategorySelectedUser ?? ''
                                  )}-ContenidosContenido`}
                                  classGtm={''}
                                />
                              </div>
                            </Breakpoint>
                            <Breakpoint customQuery="(min-width: 1025px)">
                              <div
                                className="container-categoria-internal-container-bite-lightcontent-desktop"
                                id="container-categoria-internal-container-bite-lightcontent-desktop"
                              >
                                {itemsBite.tema ? (
                                  itemsBite.tema.length > 0 ? (
                                    <div
                                      class="hidden-lable"
                                      id="tema-contenido"
                                    >
                                      {itemsBite.tema.map(x => {
                                        return (
                                          <span>
                                            {x.tituloCorto
                                              ? x.tituloCorto
                                              : x.titulo
                                              ? x.titulo
                                              : ''}
                                          </span>
                                        )
                                      })}
                                    </div>
                                  ) : null
                                ) : null}
                                <BiteDesktop
                                  slug={slugPart}
                                  link={items.contenido?.linkCallToActionBite}
                                  accessibility={props.accessibility}
                                  line={props.line}
                                  imgTitle={
                                    itemsBite.imagenpequena
                                      ? itemsBite.imagenpequena.title
                                      : ''
                                  }
                                  title={
                                    itemsBite.tituloCorto
                                      ? itemsBite.tituloCorto
                                      : ''
                                  }
                                  imgalt={itemsBite.nombreImagen}
                                  img={
                                    itemsBite?.imagenpequena
                                      ? itemsBite.imagenpequena.fluid
                                        ? itemsBite.imagenpequena?.fluid?.src ??
                                          imageDefault
                                        : itemsBite.imagenpequena?.file?.url ??
                                          imageDefault
                                      : imageDefault
                                  }
                                  date={itemsBite.updatedAt}
                                  content={
                                    itemsBite.textoIntroductorio
                                      ? itemsBite.textoIntroductorio
                                      : imageDefault
                                  }
                                  btn={itemsBite.textoCallToActionBite}
                                  type={
                                    itemsBite.tipoBite ? itemsBite.tipoBite : ''
                                  }
                                  internal={true}
                                  gtmCategory={removeAccents(
                                    props.line ? props.line.category : ''
                                  )}
                                  gtmAction={`Clic${
                                    props.type === 1 ? 'Persona' : 'Empresa'
                                  }${getSubCategoryNameWhenIsPensionAndPerson(
                                    props.type,
                                    removeAccents(
                                      props.line ? props.line.category : ''
                                    ),
                                    props?.subcategorySelectedUser ?? ''
                                  )}-ContenidosContenido`}
                                  classGtm={''}
                                />
                              </div>
                            </Breakpoint>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              </div>
            )
          }
        })}
      </InfiniteScroll>
    </div>
  )
}
