import React from 'react'
import responsiveCarusel from './settings-responsive.json'
import styled from 'styled-components'
import PrevNextButton from './../../components/atoms/prev-next-button/prev-next-button'

const ContainerUl = styled.ul`
  & > li {
    border: 1px solid
      ${props =>
        props.theme.colors && props.isInversion
          ? props.theme.colors.homeMobile.dots.inversion
          : props.theme.colors.homeMobile.dots.dotsInactive} !important;
  }
  & > li.slick-active {
    background-color: ${props =>
      props.theme.colors && props.isInversion
        ? props.theme.colors.homeMobile.dots.inversion
        : props.theme.colors.homeMobile.dots.dotsInactive} !important;
  }
`

const ContainerUlInvert = styled.ul`
  & > li {
    border: 1px solid #fff !important;
  }
  & > li.slick-active {
    background-color: #fff !important;
  }
`

export const settingsResponsive = {
  infinite: false,
  speed: 500,
  variableWidth: true,
  className: 'slider variable-width',
  adaptiveHeight: true,
  arrows: false,
  // appendDots: dots => (
  //   <div style={{ margin: "-20px 0px 50px 0px", position: "initial" }}>
  //     <ContainerUl className="carusel-container-dots">{dots}</ContainerUl>
  //   </div>
  // ),
  responsive: responsiveCarusel
}

const AppendDotsResponse = ({
  id,
  dots,
  isDarkInvert,
  clickAction,
  showArrow,
  classDots,
  classContainerDots,
  isUseContainerDotsInvert = false,
  isDark = false
}) => {
  return (
    <section
      className={`${
        classContainerDots
          ? `carousel-container-section-dots ${classContainerDots}`
          : 'carousel-container-section-dots'
      }`}
    >
      {showArrow && (
        <PrevNextButton
          isDarkInvert={isDarkInvert}
          isDark={isDark}
          id={id}
          clickAction={clickAction}
          tipo={1}
        />
      )}
      {isUseContainerDotsInvert && (
        <ContainerUlInvert className={classDots}>{dots}</ContainerUlInvert>
      )}
      {!isUseContainerDotsInvert && (
        <ContainerUl isInversion={isDarkInvert} className={classDots}>
          {dots}
        </ContainerUl>
      )}
      {showArrow && (
        <PrevNextButton
          isDarkInvert={isDarkInvert}
          isDark={isDark}
          id={id}
          clickAction={clickAction}
          tipo={2}
        />
      )}
    </section>
  )
}

export const getSettingsResponsive = ({
  id,
  showArrow,
  clickAction,
  classContainerDots,
  isDarkInvert = false
}) => {
  return {
    ...settingsResponsive,
    appendDots: dots => (
      <AppendDotsResponse
        dots={dots}
        id={id}
        isDarkInvert={isDarkInvert}
        clickAction={clickAction}
        showArrow={showArrow}
        classContainerDots={classContainerDots}
        classDots="carusel-container-dots"
      />
    )
  }
}

export const settingsContenidos = {
  infinite: false,
  speed: 500,
  variableWidth: true,
  className: 'slider variable-width',
  adaptiveHeight: true,
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const settingsBites = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
  // appendDots: dots => (
  //   <div style={{ margin: "-20px 0px 50px 0px", position: "initial" }}>
  //     <ContainerUl className="carusel-container-dots">{dots}</ContainerUl>
  //   </div>
  // ),
}

export const getSettingsBites = ({
  id,
  showArrow,
  clickAction,
  classContainerDots,
  isDarkInvert = false
}) => {
  return {
    ...settingsBites,
    appendDots: dots => (
      <AppendDotsResponse
        dots={dots}
        id={id}
        classContainerDots={classContainerDots}
        isDarkInvert={isDarkInvert}
        clickAction={clickAction}
        showArrow={showArrow}
        classDots="carusel-container-dots"
      />
    )
  }
}

export const settingsBitesDark = {
  infinite: false,
  dots: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 1
  // appendDots: dots => (
  //   <div style={{ margin: "-20px 0px 50px 0px", position: "initial" }}>
  //     <ContainerUl className="carusel-container-dots-dark-invert">
  //       {dots}
  //     </ContainerUl>
  //   </div>
  // ),
}

export const getSettingsBitesDark = ({
  id,
  showArrow,
  clickAction,
  classContainerDots,
  isDarkInvert = false
}) => {
  return {
    ...settingsBitesDark,
    appendDots: dots => (
      <AppendDotsResponse
        dots={dots}
        id={id}
        classContainerDots={classContainerDots}
        isDarkInvert={isDarkInvert}
        clickAction={clickAction}
        showArrow={showArrow}
        classDots="carusel-container-dots-dark-invert"
      />
    )
  }
}

// export const settingsResponsive = {
//   infinite: false,
//   speed: 500,
//   variableWidth: true,
//   className: "slider variable-width",
//   adaptiveHeight: true,
//   arrows: false,
//   // appendDots: dots => (
//   //   <div style={{ margin: "-20px 0px 50px 0px", position: "initial" }}>
//   //     <ContainerUl className="carusel-container-dots">{dots}</ContainerUl>
//   //   </div>
//   // ),
//   responsive: responsiveCarusel,
// }

export const settingsResponsiveDark = {
  infinite: false,
  speed: 500,
  variableWidth: true,
  className: 'slider variable-width',
  adaptiveHeight: true,
  arrows: false,
  // appendDots: dots => (
  //   <div style={{ position: "initial" }}>
  //     <ContainerUlInvert className="carusel-container-dots-dark">
  //       {dots}
  //     </ContainerUlInvert>
  //   </div>
  // ),
  responsive: responsiveCarusel
}

export const getSettingsResponsiveDark = ({
  id,
  showArrow,
  clickAction,
  classContainerDots,
  isDarkInvert = false,
  isDark = false,
  isUseContainerDotsInvert = false
}) => {
  return {
    ...settingsResponsiveDark,
    appendDots: dots => (
      <AppendDotsResponse
        dots={dots}
        id={id}
        isDarkInvert={isDarkInvert}
        isDark={isDark}
        clickAction={clickAction}
        showArrow={showArrow}
        isUseContainerDotsInvert={isUseContainerDotsInvert}
        classContainerDots={classContainerDots}
        classDots="carusel-container-dots-dark"
      />
    )
  }
}

export const settingsResponsiveDarkInvert = {
  infinite: false,
  speed: 500,
  variableWidth: true,
  className: 'slider variable-width',
  adaptiveHeight: true,
  arrows: false,
  // appendDots: dots => (
  //   <div style={{ margin: "-20px 0px 50px 0px", position: "initial" }}>
  //     <ContainerUl className="carusel-container-dots-dark-invert">
  //       {dots}
  //     </ContainerUl>
  //   </div>
  // ),
  responsive: responsiveCarusel
}

export const getSettingsResponsiveDarkInvert = ({
  id,
  showArrow,
  clickAction,
  isDarkInvert = false
}) => {
  return {
    ...settingsResponsiveDarkInvert,
    appendDots: dots => (
      <AppendDotsResponse
        id={id}
        dots={dots}
        isDarkInvert={isDarkInvert}
        clickAction={clickAction}
        showArrow={showArrow}
        classDots="carusel-container-dots-dark-invert"
      />
    )
  }
}

export const settingsResponsiveStrett = {
  infinite: false,
  speed: 500,
  variableWidth: false,
  className: 'slider variable-width',
  adaptiveHeight: false,
  arrows: false,
  // appendDots: dots => (
  //   <div style={{ margin: "-20px 0px 50px 0px", position: "initial" }}>
  //     <ContainerUl className="carusel-container-dots">{dots}</ContainerUl>
  //   </div>
  // ),
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: true,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 544,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        dots: true,
        centerPadding: '0px'
      }
    }
  ]
}

export const getSettingsResponsiveStreet = ({ isInversion = false }) => {
  return {
    ...settingsResponsiveStrett,
    appendDots: dots => (
      <div style={{ margin: '-20px 0px 50px 0px', position: 'initial' }}>
        <ContainerUl
          isInversion={isInversion}
          className="carusel-container-dots"
        >
          {dots}
        </ContainerUl>
      </div>
    )
  }
}

export const getSettingsResponsiveStrett = ({
  id,
  showArrow,
  clickAction,
  isDarkInvert = false
}) => {
  return {
    ...settingsResponsiveStrett,
    appendDots: dots => (
      <AppendDotsResponse
        dots={dots}
        id={id}
        isDarkInvert={isDarkInvert}
        clickAction={clickAction}
        showArrow={showArrow}
        classDots="carusel-container-dots"
      />
    )
  }
}

export const settingsResponsiveStrettDark = {
  infinite: false,
  speed: 500,
  variableWidth: false,
  className: 'slider variable-width',
  adaptiveHeight: false,
  arrows: false,
  // appendDots: dots => (
  //   <div style={{ margin: "-20px 0px 50px 0px", position: "initial" }}>
  //     <ContainerUl className="carusel-container-dots-dark-invert">
  //       {dots}
  //     </ContainerUl>
  //   </div>
  // ),
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 544,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '0px'
      }
    }
  ]
}

export const getSettingsResponsiveStrettDark = ({
  id,
  showArrow,
  clickAction,
  isDarkInvert = false
}) => {
  return {
    ...settingsResponsiveStrettDark,
    appendDots: dots => (
      <AppendDotsResponse
        id={id}
        dots={dots}
        isDarkInvert={isDarkInvert}
        clickAction={clickAction}
        showArrow={showArrow}
        classDots="carusel-container-dots-dark-invert"
      />
    )
  }
}
