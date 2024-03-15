// Light theme
import ActiveTutorialGreen from '../../src/assets/images/active-ver-tutorial-mega-menu.svg'
import bgYellowUserType from '../../src/assets/images/bg-icono-tipo-publico.svg'
import MoreIconoGris from '../../src/assets/images/boton-gray.svg'
import CerrarPerfilamientoMobile from '../../src/assets/images/Cerrar-sesion-mobile-azul.svg'
import VerTutorialMobile from '../../src/assets/images/eye-ver-tutorial-mobile-azul.svg'
import PQRSMobile from '../../src/assets/images/file-pqrs-ver-tutorial-mobile-azul.svg'
import iconVerde from '../../src/assets/images/Icon-backgorud-verde-mega-menu.svg'
import AccessibilityBGIconClosed from '../../src/assets/images/menu-accessibility/bg_accessibility_closed_company_and_inversion.svg'
import AccessibilityBGIconOpened from '../../src/assets/images/menu-accessibility/bg_accessibility_opened_company_and_inversion.svg'
import MoreIconBlue from '../../src/assets/images/see-more-blue.svg'
import IconoSubmenuMobile from '../../src/assets/images/icons/chevron-right-mobile-submenu-azul.svg'
import XCerrarSubmenuMobile from '../../src/assets/images/icons/x-icon-menu-azul.svg'

export default {
  name: 'company',
  animation: 'all 0.2s ease-out',
  colors: {
    background: '#FFFFFF',
    backgroundInversion: '#1B191F',
    cardBackground: '#FFFFFF',
    progressBar: '#868686',
    cardTitle: '#0033a0',
    cardTitleInversion: '#292730',
    cardTitleInforme: '#292730',
    cardButtonInforme: '#0033a0',
    cardDescription: '#626277',
    cardSubtitle: '#626277',
    cardButton: 'transparent',
    cardButtonBorder: '#0033a0',
    cardButtonText: '#0033a0',
    cardButtonInversion: '#FFFFFF',
    cardButtonBorderInversion: '#292730',
    cardButtonTextInversion: '#292730',
    cardButtonHoverText: '#FFFFFF',
    cardButtonHover: '#0033a0',
    cardButtonHoverTextInversion: '#FFFFFF',
    cardButtonHoverInversion: '#292730',
    cardBoxShadow:
      '0px 2px 4px rgb(149 150 153 / 20%), 0px 1px 10px rgb(149 150 153 / 12%), 0px 4px 5px rgb(149 150 153 / 14%)',
    cardImageBoxShadowHover:
      '0px 16px 24px rgba(149, 150, 153, 0.14), 0px 6px 30px rgba(149, 150, 153, 0.12),0px 8px 10px rgba(149, 150, 153, 0.2)',
    header: {
      menuColor: '#0033a0',
      borderTop: '1px #e2e7ed solid',
      borderBottom: '1px #e2e7ed solid',
      borderMenu: '1px',
      lineAccessibility: '#E2E7ED',
      filterImg: 'none',
      quickAccess: {
        background: '#eef2f7',
        color: '#0033a0',
        colorInactive: '#626277'
      },
      menu: {
        background: '#ffffff',
        boxShadow: '0px 12px 15px rgb(0 0 0 / 14%)',
        colorTitle: '#0033A0',
        colorSubTitle: '#0033a0',
        colorSubTitleHover: '#0033a0',
        filterClose: 'none',
        itemHoverInactive: 'grayscale(1)',
        itemHover: 'grayscale(0)',
        opacityItem: '0.5',
        color: '#1e1f47',
        filterSubtitle: 'none',
        filterCloseAccessibility:
          'invert(38%) sepia(20%) saturate(342%) hue-rotate(202deg) brightness(97%) contrast(97%)',
        hoverSubMenu: '#eef2f7',
        borderSubMenu: '1px solid #E2E7ED',
        filterBackground: 'drop-shadow(0px 8px 10px rgba(149, 150, 153, 0.14))'
      }
    },
    menuDesktop: {
      bgIconPeperoni: `url(${bgYellowUserType})`,
      bgIconMoreInactive: `url(${MoreIconoGris})`,
      bgIconMoreActive: `url(${MoreIconBlue})`,
      colorNoTouchPeperoni: '#626277',
      colorHoverPeperoniTitle: '#0033A0',
      colorHoverPeperoniIcon: '#0033A0',
      colorHoverAnotherPeperoni: '#B4BCCE'
    },
    menuMobile: {
      opcionesTitleH4: '#626277',
      colorBorderButtonClose: '#0033A0',
      colorButtonClose: '#0033A0',
      colorOpcionesTitle: '#0033A0',
      colorTitleIconosActive: '#292730',
      colorTitleIconosInactive: '#626277',
      colorSubtitleSubopciones: '#0033A0',
      iconoVerTutorialMobile: `url(${VerTutorialMobile})`,
      iconoSubmenuMobile: `url(${IconoSubmenuMobile})`,
      iconoCerrarSubmenuMobile: `url(${XCerrarSubmenuMobile})`,
      iconoPQRS: `url(${PQRSMobile})`,
      iconoCerrarPerfilamiento: `url(${CerrarPerfilamientoMobile})`,
      bgIconUserType: `url(${bgYellowUserType})`
    },
    menuAccessibility: {
      bgIconAccessibilityActive: `url(${AccessibilityBGIconOpened})`,
      bgIconAccessibilityInactive: `url(${AccessibilityBGIconClosed})`,
      bgIconUserTypeActive: `url(${bgYellowUserType})`,
      colorLabelUserTypeActive: '#FFFFFF',
      colorLabelUserTypeInactive: '#B6C5DF',
      colorIconUserTypeActive: '#0033A0',
      colorIconUserTypeInactive: '#B6C5DF',
      colorIconAccessibilityActive: '#0033A0',
      colorIconAccessibilityInactive: '#0033A0',
      colorLabelAccessibility: '#FFFFFF',
      colorLabelAccessibilityItem: '#FFFFFF',
      colorLabelAccessibilityItemDesktop: '#626277',
      colorIconAccessibilityItemDesktop: '#626277',
      colorBorderBottomAccessibilityItem: '#3F66B3',
      backgroundContainerMobile: '#0033A0',
      colorIconsAccessibilityItem: '#FFFFFF',
      colorSwitchAccessibilityItem: '#0033A0',
      colorCheckedSwitchAccessibilityItem: '#FFFFFF',
      bgColorTrackAccessibilityItem: '#FFFFFF',
      borderColorTrackAccessibilityItem: '#0033A0',
      bgColorCheckedTrackAccessibilityItem: '#3F66B3',
      borderColorCheckedTrackAccessibilityItem: '#3F66B3'
    },
    opciones: {
      colorOpcionesBackground: '#0033A0',
      colorOpcionesTitulo: '#FFFFFF',
      colorOpcionesParaph: '#B6C5DF',
      colorOpcionesParaphHover: '#FFFFFF',
      colorBordeHrMenu: '#3F66B3',
      colorOpcionesIconosActive: '#0033A0',
      colorOpcionesIconosInactive: '#B6C5DF',
      opcionesIconoBackground: `url(${ActiveTutorialGreen})`,
      colorSeparator: '#3F66B3'
    },
    categorias: {
      colorCategoriaBackground: '#0033A0',
      colorCategoriaNameTitulo: '#FFFFFF',
      colorCategoriaLink: '#5CD9E3',
      colorCategoriaActive: '#FFFFFF',
      colorCategoriaInactive: '#B6C5DF',
      categoriaIconoBackground: `url(${iconVerde})`,
      colorCategoriaIconoBackgroundFill: '#0033A0'
    },
    footer: {
      detail: '#FAFBFC',
      title: '#292730',
      subtitle: '#626277',
      subtitleHover: '#0033a0',
      lineSeparator: '#e2e7ed',
      filter: 'none'
    },
    textColor: '#0033a0',
    textColorInversion: '#fff',
    textSubtitleColor: '#0033a0',
    textSubtitleColorInversion: '#626277',
    textColorInactive: '#626277',
    filterImg: 'none',
    filterImgInactive: 'none',
    filterImgInactiveUser:
      'invert(93%) sepia(4%) saturate(929%) hue-rotate( 189deg)  brightness(224%) contrast(51%)',
    input: {
      border: '1px solid #e2e7ed',
      color: null
    },
    modal: {
      background: '#ffffff',
      box:
        '0px 2px 4px rgb(149 150 153 / 20%), 0px 1px 10px rgb(149 150 153 / 12%), 0px 4px 5px rgb(149 150 153 / 14%)',
      colorTitle: '#0033a0',
      colorSubTitle: '#626277',
      titlePerson: {
        color: '#292730',
        colorSubTitle: '#626277',
        colorName: '#626277'
      },
      input: {
        color: '#0033a0',
        hover: '#0033a0',
        colorHover: '#ffffff',
        colorButton: '#ffffff'
      },
      category: {
        inactive: '#626277',
        colorInactive: '#626277',
        colorActive: '#0033a0',
        hoverInactivo: '#0033a0'
      },
      subcategory: {
        border: '1px solid #0033a0',
        backgroundHoverColor: '#335cb3',
        color: '#0033a0',
        colorhover: '#0033a0',
        backgroundColor: '#ffffff',
        active: '#0033a0'
      },
      genero: {
        backgroundHoverColor: '#335cb3',
        border: '1px solid #0033a0',
        colorhover: '#ffffff',
        color: '#0033a0',
        backgroundColor: '#ffffff'
      },
      type: {
        colorInactive: '#0033a0',
        coloractive: '#0033a0',
        iconoactive: '#0033a0'
      }
    },
    homeMobile: {
      dots: {
        dotsInactive: '#0b2987',
        inversion: '#292730'
      },
      quickAccess: {
        quickAcessActive: '#EEF2F7',
        quickAcessInactive: '#EEF2F7',
        quickAcessActiveColor: '#0033A0',
        quickAcessInactiveColor: '#626277',
        opcionColor: '#FFFFFF',
        iconColor: null
      },
      biteResponsive: {
        colorDescripcion: '#626277',
        ExitStreetColor: '#FAFBFC',
        tutorial: '#0033a0'
      },
      opcionMenuBurger: {
        backgroundActive: '#0033A0',
        backgroundInactive: '#FFFFFF',
        subItem: '#E2E7ED',
        colorActive: '#FFFFFF',
        colorInactive: '#0033A0',
        subMenu: '#EEF2F7',
        colorSubMenu: null,
        accessibility: '#0033A0',
        accessibilityInactive: null,
        iconActive: '#FFFFFF',
        iconInactive: '#0033A0'
      }
    },
    menuChannels: {
      iconclose: '#0033A0',
      iconCloseServicesLine: '#626277',
      titleLineas: '#292730',
      contentLineas: '#0033A0'
    }
  }
}
