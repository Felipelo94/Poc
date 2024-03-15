import React from 'react'
import { useSelector } from 'react-redux'
import { addInfointernal } from '../../../actions/internal-categoria/internal-categoria'
import { getSettingsResponsiveStreet } from '../../../const/dictionary/settingCarruselMobile'
import useInternalPathPages from '../../../hooks/useInternalPathPages'
import { getLinkCallToActionFromPathPages } from '../../../utils/call-to-action-utils'
import {
  getClassGTMSeeMoreContentHOME,
  getSubCategoryNameWhenIsPensionAndPerson,
  getTypeName,
  removeAccents
} from '../../../utils/classGtmUtil'
import {
  removeInitialAndEndSlash,
  removePathUrlProfiling
} from '../../../utils/general-utils'
import { getCategory } from '../../../utils/get-category-alternativas'
import { getCurrentHost } from '../../../utils/redirectUtil'
import Anchor from '../../atoms/anchor/anchor'
import SeeMore from '../../atoms/see-more/see-more'
import { Container } from '../../FlexBox/FlexBox'
import BiteDesktop from '../bite/bite-desktop/bite-desktop'
import BiteResposive from '../bite/bite-resposive/bite-resposive'
import MoreContent from '../more-content/more-content'
import SliderGeneral from '../slider-general/slider-general'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'

const ExitStreet = ({
  dataUtils,
  options,
  widthScreen,
  pageContext,
  line,
  indexDBUserName,
  accessibility,
  title = ''
}) => {
  const userInfoPageContext = useSelector(state => state.pageContext)
  const pathPages = useInternalPathPages()
  const userInfo = useGetUserInfoIndexDBState()

  let gtmAction = 'ClicPersona-ContenidosInferiorSugeridos'
  let gtmCategory

  if (userInfo.type && userInfo.category && userInfo.subcategory) {
    gtmAction = `Clic${getTypeName(
      userInfo.type
    )}${getSubCategoryNameWhenIsPensionAndPerson(
      userInfo.type,
      removeAccents(userInfo.category),
      userInfo.subcategory
    )}-ContenidosInferiorSugeridos`
  }

  if (userInfo.category) {
    gtmCategory = removeAccents(userInfo.category)
  } else {
    gtmCategory = removeAccents(getCategory('Inversión'))
  }

  if (line === 'talento') {
    gtmCategory = 'LandingOfertas'
    gtmAction = `ClicPersona-ContenidosInferiorSugeridos-${title}`
  }

  const getIdDiv = titleChanged => {
    return titleChanged
      ? titleChanged
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      : ''
  }

  return (
    <div className="container-internal-content-more-content">
      {dataUtils && (dataUtils[1] || dataUtils[2]) && (
        <MoreContent line={line} options={options}>
          {widthScreen > 1200 && widthScreen < 9999 && (
            <Container style={{ paddingLeft: 90 }}>
              {dataUtils[1] && (
                <div
                  style={{ paddingRight: 140 }}
                  id="calles-salida-container-bite-1"
                >
                  <div id="bite-subcategoria" style={{ display: 'none' }}>
                    {dataUtils[1]
                      ? dataUtils[1]['categoriaCliente']
                        ? dataUtils[1].categoriaCliente.map(itemType => {
                            return (
                              <div>
                                {`${itemType.contentful_id}-${itemType.descripcion}`}
                              </div>
                            )
                          })
                        : null
                      : null}
                  </div>
                  <div id="bite-line" style={{ display: 'none' }}>
                    {dataUtils[1]
                      ? dataUtils[1]['category']
                        ? dataUtils[1].category.map(itemType => {
                            return (
                              <div>
                                {`${itemType.contentful_id}-${itemType.nombre}`}
                              </div>
                            )
                          })
                        : null
                      : null}
                  </div>
                  <div id="bite-type-bite" style={{ display: 'none' }}>
                    {dataUtils[1] ? dataUtils[1].tipoBite : null}
                  </div>
                  {dataUtils[1] && (
                    <BiteDesktop
                      imgTitle={dataUtils[1].imagenpequena.title}
                      accessibility={accessibility}
                      title={dataUtils[1].tituloCorto}
                      imgalt={dataUtils[1].nombreimagen}
                      img={
                        dataUtils?.[1]?.imagenpequena
                          ? dataUtils?.[1]?.imagenpequena.fluid
                            ? dataUtils?.[1]?.imagenpequena?.fluid?.src ?? ''
                            : dataUtils?.[1]?.imagenpequena?.file?.url ?? ''
                          : ''
                      }
                      content={dataUtils[1].descripcioncorta}
                      slug={removeInitialAndEndSlash(
                        getLinkCallToActionFromPathPages(
                          pathPages,
                          removePathUrlProfiling(
                            dataUtils[1].urlSeo
                              ? dataUtils[1].urlSeo.toLowerCase()
                              : null
                          ),
                          userInfoPageContext,
                          indexDBUserName
                        )
                      )}
                      btn={dataUtils[1].textoBoton}
                      gtmClass=""
                      gtmAction={gtmAction}
                      gtmCategory={gtmCategory}
                      line={{ category: line }}
                    />
                  )}
                </div>
              )}
              <div
                style={{ paddingRight: 40 }}
                id="calles-salida-container-bite-2"
              >
                <div id="bite-subcategoria" style={{ display: 'none' }}>
                  {dataUtils[2]
                    ? dataUtils[2]['categoriaCliente']
                      ? dataUtils[2].categoriaCliente.map(itemType => {
                          return (
                            <div>
                              {`${itemType.contentful_id}-${itemType.descripcion}`}
                            </div>
                          )
                        })
                      : null
                    : null}
                </div>
                <div id="bite-line" style={{ display: 'none' }}>
                  {dataUtils[2]
                    ? dataUtils[2]['category']
                      ? dataUtils[2].category.map(itemType => {
                          return (
                            <div>
                              {`${itemType.contentful_id}-${itemType.nombre}`}
                            </div>
                          )
                        })
                      : null
                    : null}
                </div>
                <div id="bite-type-bite" style={{ display: 'none' }}>
                  {dataUtils[2] ? dataUtils[2].tipoBite : null}
                </div>
                {dataUtils[2] && (
                  <BiteDesktop
                    accessibility={accessibility}
                    imgTitle={dataUtils[2].imagenpequena.title}
                    title={dataUtils[2].tituloCorto}
                    line={{ category: line }}
                    imgalt={dataUtils[2].nombreimagen}
                    img={
                      dataUtils?.[2]?.imagenpequena
                        ? dataUtils?.[2]?.imagenpequena.fluid
                          ? dataUtils?.[2]?.imagenpequena?.fluid?.src ?? ''
                          : dataUtils?.[2]?.imagenpequena?.file?.url ?? ''
                        : ''
                    }
                    content={dataUtils[2].descripcioncorta}
                    slug={removeInitialAndEndSlash(
                      getLinkCallToActionFromPathPages(
                        pathPages,
                        removePathUrlProfiling(
                          dataUtils[2].urlSeo
                            ? dataUtils[2].urlSeo.toLowerCase()
                            : null
                        ),
                        userInfoPageContext,
                        indexDBUserName
                      )
                    )}
                    btn={dataUtils[2].textoBoton}
                    gtmClass=""
                    gtmAction={gtmAction}
                    gtmCategory={gtmCategory}
                  />
                )}
              </div>
              <Anchor
                className="link-see-more "
                href={
                  indexDBUserName
                    ? getCurrentHost() +
                      `/${getIdDiv(
                        indexDBUserName.type === 1 ? 'personas' : 'empresas'
                      )}/${getIdDiv(indexDBUserName.category)}/`
                    : getCurrentHost() +
                      `/${getIdDiv(
                        pageContext.cliente === 1 ? 'personas' : 'empresas'
                      )}/${getIdDiv(
                        pageContext.line === 'talento'
                          ? pageContext.category
                          : pageContext.line
                      )}/`
                }
              >
                <div
                  id="btn-show-more-escritorio"
                  role="presentation"
                  onClick={() => {
                    dispatch(addInfointernal(dataUtils[0]))
                  }}
                  className="container-see-more-youcantmiss gtmCesantiasMasContenQuieVerMas"
                >
                  <SeeMore
                    classGtm={getClassGTMSeeMoreContentHOME(pageContext.line)}
                    title="Ver más contenidos"
                    symbol="+"
                    bottom={true}
                    green={true}
                    isDark={
                      pageContext.line === 'talento'
                        ? pageContext.category === 'Inversión'
                        : pageContext.line === 'Inversión'
                    }
                  />
                </div>
              </Anchor>
            </Container>
          )}
        </MoreContent>
      )}
      {widthScreen <= 1200 && dataUtils && (dataUtils[1] || dataUtils[2]) && (
        <SliderGeneral
          settings={getSettingsResponsiveStreet({
            isInversion:
              pageContext.line === 'talento'
                ? pageContext.category === 'Inversión'
                : pageContext.line === 'Inversión'
          })}
        >
          {dataUtils &&
            dataUtils.map((bite, index) => {
              return (
                !Array.isArray(bite) && (
                  <div id={`calles-salida-container-bite-${index}`}>
                    <BiteResposive
                      accessibility={accessibility}
                      title={bite ? bite.tituloCorto : null}
                      imgalt={bite ? bite.nombreimagen : null}
                      img={
                        bite?.imagenpequena
                          ? bite.imagenpequena.fluid
                            ? bite.imagenpequena?.fluid?.src ?? ''
                            : bite.imagenpequena?.file?.url ?? ''
                          : ''
                      }
                      imgTitle={
                        bite.imagenpequena ? bite.imagenpequena.title : ''
                      }
                      content={bite ? bite.descripcioncorta : null}
                      btn={bite ? bite.textoBoton : null}
                      slug={removeInitialAndEndSlash(
                        getLinkCallToActionFromPathPages(
                          pathPages,
                          removePathUrlProfiling(
                            bite ? bite.urlSeo.toLowerCase() : null
                          ),
                          userInfoPageContext,
                          indexDBUserName
                        )
                      )}
                      classGtm="gtmCesantiasMasContenSugeridos"
                      gtmAction={gtmAction}
                      gtmCategory={gtmCategory}
                      line={{ category: line }}
                    />
                  </div>
                )
              )
            })}
          <Anchor
            className="link-see-more "
            href={
              indexDBUserName
                ? getCurrentHost() +
                  `/${getIdDiv(
                    indexDBUserName.type === 1 ? 'personas' : 'empresas'
                  )}/${getIdDiv(indexDBUserName.category)}/`
                : getCurrentHost() +
                  `/${getIdDiv(
                    pageContext.cliente === 1 ? 'personas' : 'empresas'
                  )}/${getIdDiv(
                    pageContext.line === 'talento'
                      ? pageContext.category
                      : pageContext.line
                  )}/`
            }
          >
            <div
              id="btn-show-more-mobile"
              role="presentation"
              onClick={() => {
                dataUtils && dispatch(addInfointernal(dataUtils[0]))
              }}
              className="container-see-more-youcantmiss gtmCesantiasMasContenQuieVerMas"
            >
              <SeeMore
                title="Quiero ver más"
                symbol="+"
                bottom={true}
                green={
                  pageContext.line === 'talento'
                    ? pageContext.category === 'Inversión'
                    : pageContext.line === 'Inversión'
                }
                isDark={
                  pageContext.line === 'talento'
                    ? pageContext.category === 'Inversión'
                    : pageContext.line === 'Inversión'
                }
                styleText={
                  pageContext.line === 'Inversión'
                    ? { marginLeft: '-38px' }
                    : null
                }
              />
            </div>
          </Anchor>
        </SliderGeneral>
      )}
    </div>
  )
}

export default ExitStreet
