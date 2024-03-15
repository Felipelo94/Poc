import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import bolsillo from '../../../assets/images/bolsillo.png'
import { ReactComponent as NextSliderIcon } from '../../../assets/images/next-yellow.svg'
import { ReactComponent as PrevYellowIcon } from '../../../assets/images/prev-yellow.svg'
import { EMBEDDED_ENTRY_BLOCK } from '../../../const/rich-text'
import PortfolioCard from '../../molecules/portfolio-card/portfolio-card'
import Breakpoint from '../../../utils/breakpoint'
import CardsSlider from '../../organisms/cards-slider/cards-slider'
import './marketplace-portfolio.scss'

const SampleNextArrow = ({
  className,
  style,
  onClick,
  setBtnSwitch,
  nextCarrusel,
  containerSwitch,
  btnSwitch,
  title
}) => {
  if (nextCarrusel) {
    return (
      nextCarrusel && (
        <NextSliderIcon
          id="btn-next-featured"
          alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
          title="Ícono de avanzar hacia la izquierda o derecha"
          style={{
            ...style,
            display: 'block',
            width: 48,
            height: 48,
            zIndex: 6
          }}
          onMouseEnter={e => {
            setBtnSwitch(true)
          }}
          onMouseOut={e => {
            setBtnSwitch(false)
          }}
          className={`${className} next-arrow ${
            containerSwitch || btnSwitch ? 'btn-realce' : 'btn-realce-back'
          }`}
          onClick={() => {
            if (onClick) {
              onClick()
            }
          }}
          role="presentation"
          onKeyDown={onClick}
        />
      )
    )
  }
}

const SamplePrevArrow = props => {
  const {
    className,
    style,
    onClick,
    prevCarrusel,
    containerSwitch,
    btnSwitch
  } = props

  return (
    prevCarrusel && (
      <PrevYellowIcon
        id="prev-featured"
        alt="Ícono de flecha dentro de un círculo, para avanzar hacia la izquierda o derecha entre los contenidos del sitio según el perfilamiento"
        title="Ícono de avanzar hacia la izquierda o derecha"
        className={`${className} prev-arrow ${
          containerSwitch || btnSwitch
            ? 'btn-prev-realce'
            : 'btn-prev-realce-back'
        } `}
        style={{
          ...style,
          display: 'block',
          width: 48,
          height: 48,
          zIndex: 6
        }}
        onMouseEnter={e => {
          props.setBtnSwitch(true)
        }}
        onMouseOut={e => {
          props.setBtnSwitch(false)
        }}
        role="presentation"
        onKeyDown={onClick}
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
      />
    )
  )
}

const CarouselMobile = ({ linksOfInterest }) => (
  <CardsSlider>
    {linksOfInterest.map((linkOfInterest, index) => {
      const linkOfInterestFields = linkOfInterest.data.target.fields
      return (
        linkOfInterestFields && (
          <PortfolioCard
            linkOfInterestFields={linkOfInterestFields}
            key={index}
          />
        )
      )
    })}
  </CardsSlider>
)

const CardsWithCarousel = ({ linksOfInterest, title }) => {
  const [indexSlider, setIndexSlider] = useState(0)
  const [nextCarousel, setNextCarousel] = useState(false)
  const [prevCarousel, setPrevCarousel] = useState(false)
  const [containerSwitch, setContainerSwitch] = useState(false)
  const [btnSwitch, setBtnSwitch] = useState(false)
  const [containerPrevSwitch, setContainerPrevSwitch] = useState(false)
  const [btnPrevSwitch, setBtnPrevSwitch] = useState(false)
  const [idCarousel] = useState('contendio-relevante')

  const ref = useRef(null)
  const sliderRef = useRef(null)

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    arrows: false,
    beforeChange: (current, next) => setIndexSlider(next),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1075,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  const createGtmmarketplace = linkOfInterestFields => {
    let classGtm = `${title}${linkOfInterestFields.TextoCallToAction['en-US']}${linkOfInterestFields.titulo['en-US']}`
    return classGtm.replace(/ /g, '')
  }

  const next = () => {
    ref.current.slickNext()
  }

  const previous = () => {
    ref.current.slickPrev()
  }

  useEffect(() => {
    if (linksOfInterest) {
      setNextCarousel(linksOfInterest.length > 3)
    }
  }, [linksOfInterest])

  useEffect(() => {
    setPrevCarousel(indexSlider !== 0)
  }, [indexSlider])

  useEffect(() => {
    if (linksOfInterest) {
      const limitBite = 5
      const limitBiteDynamic = 3
      const validationShow =
        indexSlider < linksOfInterest.length - limitBiteDynamic &&
        indexSlider < limitBite
      setNextCarousel(validationShow)
    }
  }, [indexSlider, linksOfInterest])

  return (
    <div ref={sliderRef}>
      <div className="portfolioSliderCarrusel">
        <div
          id="prev-btn"
          onMouseEnter={() => setContainerPrevSwitch(true)}
          onMouseOut={() => setContainerPrevSwitch(false)}
          className={`portfolio-prev ${
            containerPrevSwitch || btnPrevSwitch
              ? 'prev-realce'
              : 'prev-realce-back'
          }`}
        >
          <img
            className="bolsillo-rotate"
            height="120%"
            src={bolsillo}
            alt="bolsillo-prev"
          />
          <SamplePrevArrow
            setprevCarrusel={setPrevCarousel}
            indexSlider={indexSlider}
            prevCarrusel={prevCarousel}
            setBtnSwitch={setBtnPrevSwitch}
            btnSwitch={btnPrevSwitch}
            containerSwitch={containerPrevSwitch}
            onClick={previous}
            style={{
              position: 'absolute',
              margin: '30px',
              cursor: 'pointer'
            }}
          />
        </div>

        {nextCarousel && (
          <div
            id="next-btn"
            className={`next ${
              containerSwitch || btnSwitch ? 'div-realce' : 'div-realce-back'
            }`}
            onMouseEnter={() => setContainerSwitch(true)}
            onMouseOut={() => setContainerSwitch(false)}
          >
            <img
              width="250px"
              height="120%"
              src={bolsillo}
              alt="bolsillo-next"
              style={{ position: 'absolute' }}
            />
            <SampleNextArrow
              setnextCarrusel={setNextCarousel}
              indexSlider={indexSlider}
              nextCarrusel={nextCarousel}
              setBtnSwitch={setBtnSwitch}
              btnSwitch={btnSwitch}
              containerSwitch={containerSwitch}
              onClick={next}
              style={{
                position: 'absolute',
                margin: '30px',
                cursor: 'pointer'
              }}
            />
          </div>
        )}
        <div
          id={idCarousel}
          className="Portfolio-Bannerbite_perder Bannerbite_perder"
        >
          <Slider ref={ref} {...settings}>
            {linksOfInterest.map((linkOfInterests, index) => {
              const linkOfInterestClass = createGtmmarketplace(
                linkOfInterests.data.target.fields
              )
              return (
                <PortfolioCard
                  linkOfInterestFields={linkOfInterests.data.target.fields}
                  linkOfInterestClass={linkOfInterestClass}
                  key={index}
                />
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

const MarketplacePortfolio = ({ portfolioData, title }) => {
  const [portfolioInfo, setPortfolioInfo] = useState(null)

  const transformData = () => {
    if (portfolioData) {
      const title = portfolioData.content.find(e => e.nodeType === 'heading-2')
        .content[0].value

      const description = portfolioData.content.find(
        e =>
          e.nodeType === 'paragraph' &&
          e.content[0].value !== EMBEDDED_ENTRY_BLOCK
      ).content[0].value

      const linksOfInterest = portfolioData.content.filter(
        e => e.nodeType === EMBEDDED_ENTRY_BLOCK
      )

      const splittedLinksOfInterest = splitLinksOfInterestByGroups(
        linksOfInterest
      )

      const portfolioInfo = {
        title,
        description,
        splittedLinksOfInterest
      }

      setPortfolioInfo(portfolioInfo)
    }
  }

  const splitLinksOfInterestByGroups = linksOfInterest => {
    if (!linksOfInterest.length) return null
    if (linksOfInterest.length <= 8) return [linksOfInterest]

    const splittedLinksOfInterest = []
    for (let i = 0; i < linksOfInterest.length; i += 8) {
      const splittedArray = linksOfInterest.slice(i, i + 8)
      splittedLinksOfInterest.push(splittedArray)
    }

    return splittedLinksOfInterest
  }

  useEffect(() => {
    transformData()
  }, [portfolioData])

  return (
    portfolioInfo &&
    portfolioInfo.splittedLinksOfInterest && (
      <article className="marketplace-portfolio">
        <h2 className="marketplace-portfolio__title">{portfolioInfo.title}</h2>
        <p className="marketplace-portfolio__description">
          {portfolioInfo.description}
        </p>
        <Breakpoint to={1023}>
          {portfolioInfo.splittedLinksOfInterest.map(linksOfInterest => (
            <CarouselMobile linksOfInterest={linksOfInterest} />
          ))}
        </Breakpoint>
        <Breakpoint from={1024}>
          {portfolioInfo.splittedLinksOfInterest.map(linksOfInterest => (
            <CardsWithCarousel
              linksOfInterest={linksOfInterest}
              title={title}
            />
          ))}
        </Breakpoint>
      </article>
    )
  )
}

export default MarketplacePortfolio
