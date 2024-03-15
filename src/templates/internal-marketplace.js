import React, { useState, useEffect } from 'react'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import { get } from '../services/service-general/service-general'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { isAndroid, isIOS } from 'react-device-detect'
import { selectTheme } from '../utils/select-theme'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { graphql } from 'gatsby'
import { Script } from 'gatsby-script'
import Header from '@components/molecules/header/header'
import BreadCrumb from '@components/atoms/bread-crumb/bread-crumb'
import MarketplaceBanner from '@components/organisms/marketplace-banner/marketplace-banner'
import useComplementaryOfferData from '../hooks/useComplementaryOfferData/useComplementaryOfferData'
import MarketplacePortfolio from '../components/organisms/marketplace-portfolio/marketplace-portfolio'
import MarketplaceScheduling from '@components/organisms/marketplace-scheduling/marketplace-scheduling'
import LikeShare from '../components/internal-pages/common/like-share/like-share'
import Footer from '@components/molecules/footer/footer'
import Seo from '@components/internal-pages/common/seo/seo'
import useCurrentWidth from '../hooks/useCurrentWidth/useCurrentWidth'
import PortfolioFilter from '../components/organisms/portfolio-filter/portfolio-filter'
import './internal-marketplace.scss'

function InternalMarketplace(props) {
  const { data, dispatch, location, pageContext } = props

  const [indexDBUserName, setIndexDBUserName] = useState('')
  const [showOptionsShare, setShowOptionsShare] = useState(false)
  const [filteredPortfolioData, setFilteredPortfolioData] = useState(null)

  const currentWidth = useCurrentWidth()
  const marketplaceContent = useComplementaryOfferData(data, pageContext.id)

  const resultUser = user => {
    setIndexDBUserName(user)
  }

  useEffect(() => {
    sendUserDataRedux(getDataIb, resultUser, get, dispatch, addInfoUser)
  }, [dispatch])

  useEffect(() => {
    if (!marketplaceContent) return

    setFilteredPortfolioData({
      main: marketplaceContent.portfolioData,
      secondary: marketplaceContent.general
    })
  }, [marketplaceContent])

  return (
    <>
      <Seo pageContext={pageContext} />
      {marketplaceContent && (
        <ThemeProvider theme={selectTheme()}>
          <div className="hidden-lable">Oferta Complementaria</div>
          <div className="internal-marketplace">
            <Header
              isOpenMenu={false}
              showTypePerson={true}
              defaultTypeUser={1}
              defaultCategoryUser="Pensión"
              defaultSubcategoryUser="pension-vejez"
              indexDBUserName={indexDBUserName.nameuser}
              indexDBUser={indexDBUserName}
              showQuickAccess={true}
            />
            <div className="internal-marketplace__bread-crumb">
              <BreadCrumb location={location} />
            </div>
            <MarketplaceBanner {...marketplaceContent.topBanner} />
            <PortfolioFilter
              setFilteredData={setFilteredPortfolioData}
              content={marketplaceContent}
            />
            <div className="internal-marketplace__portfolios">
              {filteredPortfolioData?.main?.map(itemsPortfolioData => (
                <MarketplacePortfolio
                  portfolioData={itemsPortfolioData}
                  title={marketplaceContent.title}
                />
              ))}
              {filteredPortfolioData?.secondary?.map(itemsGeneral => (
                <MarketplacePortfolio
                  portfolioData={itemsGeneral}
                  title={marketplaceContent.title}
                />
              ))}
            </div>
            {marketplaceContent.showSalesforceForm && (
              <MarketplaceScheduling {...marketplaceContent} />
            )}
            <MarketplaceBanner {...marketplaceContent.bottomBanner} />
            <div className="internal-marketplace__like-share">
              <LikeShare
                location={location}
                setShowOptionsShare={setShowOptionsShare}
                showOptionsShare={showOptionsShare}
                title={marketplaceContent.title}
                indexDBUser={indexDBUserName}
                showQuickAccess={true}
              />
            </div>
            <Footer
              isAndroid={isAndroid}
              isIOS={isIOS}
              isShare={false}
              isInterna={true}
              colorFooter={'#FAFBFC'}
            />
          </div>
        </ThemeProvider>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    accessibility: state.accesibility
  }
}

InternalMarketplace = connect(mapStateToProps)(InternalMarketplace)

export default InternalMarketplace

export const pageQuery = graphql`
  query PageContentBySlugMarketplace($ids: [String!]) {
    allContentfulOfertaComplementaria(filter: { contentful_id: { in: $ids } }) {
      edges {
        node {
          contentful_id
          ImagenPrincipalEscritorio {
            file {
              url
            }
          }
          ImagenPrincipalMobile {
            file {
              url
            }
          }
          ImagenSecundariaEscritorio {
            file {
              url
            }
          }
          ImagenSecundariaMobile {
            file {
              url
            }
          }
          lineaDeProducto {
            nombre
          }
          contenido {
            titulo
            imagenes {
              file {
                url
                fileName
              }
              description
              title
            }
            descripcioncorta
            descripcioncalltoaction
            TextoCallToActionSuperior
            LinkCallToActionSuperior

            textoCallToAction
            linkCallToAction
            cuerpocontenido {
              json
            }
            cuerpocontenido2 {
              json
            }
          }
          Agendamiento {
            Agendamiento
          }
          filtros {
            filtros
          }
        }
      }
    }
  }
`
