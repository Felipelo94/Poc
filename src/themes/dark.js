// Dark theme
import ActiveTutorialWhite from '../../src/assets/images/active-ver-tutorial-mega-menu-white.svg'
import bgWhiteUserType from '../../src/assets/images/bg-icono-tipo-publico-white.svg'
import bgYellowUserTypeMobile from '../../src/assets/images/bg-icono-tipo-publico.svg'
import MoreIconoGris from '../../src/assets/images/boton-gray.svg'
import CerrarPerfilamientoMobile from '../../src/assets/images/Cerrar-sesion-mobile-azul.svg'
import VerTutorialMobile from '../../src/assets/images/eye-ver-tutorial-mobile-azul.svg'
import PQRSMobile from '../../src/assets/images/file-pqrs-ver-tutorial-mobile-azul.svg'
import iconBlanco from '../../src/assets/images/Icon-backgorud-blanco-mega-menu.svg'
import AccessibilityBGIconClosed from '../../src/assets/images/menu-accessibility/bg_accessibility_closed_person.svg'
import AccessibilityBGIconOpened from '../../src/assets/images/menu-accessibility/bg_accessibility_opened_person.svg'
import MoreIconBlue from '../../src/assets/images/see-more-blue.svg'
import IconoSubmenuMobile from '../../src/assets/images/icons/chevron-right-mobile-submenu-negro.svg'
import XCerrarSubmenuMobile from '../../src/assets/images/icons/x-icon-menu-azul.svg'

export default {
  name: 'dark',
  animation: 'all 0.2s ease-out',
  colors: {
    background: '#1E1C23',
    backgroundInversion: '#1B191F',
    cardBackground: '#292730',
    progressBar: '#E3E829',
    cardTitle: '#FFFFFF',
    cardTitleInversion: '#E3E829',
    cardTitleInforme: '#FFFFFF',
    cardButtonInforme: '#5CD9E3',
    cardDescription: '#FFFFFF',
    cardSubtitle: '#CBD1DE',
    cardButton: '#13236F',
    cardButtonBorder: '#13236F',
    cardButtonText: '#FFFFFF',
    cardButtonInversion: '#292730',
    cardButtonBorderInversion: '#FFFFFF',
    cardButtonTextInversion: '#FFFFFF',
    cardButtonHoverText: '#FFFFFF',
    cardButtonHover: '#3F66B3',
    cardButtonHoverTextInversion: '#292730',
    cardButtonHoverInversion: '#FFFFFF',
    cardBoxShadow:
      '0px 4px 5px rgb(0 0 0 / 14%), 0px 1px 10px rgb(0 0 0 / 12%), 0px 2px 4px rgb(0 0 0 / 20%)',
    cardImageBoxShadowHover:
      '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12),0px 8px 10px rgba(0, 0, 0, 0.2)',
    header: {
      menuColor: '#FFFFFF',
      borderTop: '1px #1E1C23 solid',
      borderAccessibiltyTop: '1px #626277 solid',
      lineAccessibility: '#626277',
      borderBottom: '1px #1E1C23 solid',
      borderMenu: '2px',
      filterImg:
        'invert(93%) sepia(4%) saturate(929%) hue-rotate( 189deg) brightness(224%) contrast(160%)',
      quickAccess: {
        background: '#292730',
        color: '#E3E829',
        colorInactive: '#CBD1DE'
      },
      menu: {
        background: '#292730',
        boxShadow:
          '0px 8px 10px rgb(0 0 0 / 14%), 0px 3px 14px rgb(0 0 0 / 12%), 0px 5px 5px rgb(0 0 0 / 20%)',
        colorTitle: '#CBD1DE',
        colorSubTitle: '#5CD9E3',
        colorSubTitleHover: '#CBD1DE',
        filterClose:
          'invert(93%) sepia(4%) saturate(929%) hue-rotate(189deg) brightness(188%) contrast(53%)',
        color: '#CBD1DE',
        itemHoverInactive: 'grayscale(0)',
        itemHover: 'none',
        opacityItem: '',
        filterSubtitle:
          'invert(78%) sepia(55%) saturate(437%) hue-rotate(135deg) brightness(105%) contrast(64%)',
        filterCloseAccessibility:
          'invert(5%) sepia(1%) saturate(6788%) hue-rotate(185deg) brightness(167%) contrast(62%)',
        hoverSubMenu: '#1E1C23',
        borderSubMenu: '1px solid #464454',
        filterBackground: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2))'
      }
    },

    menuDesktop: {
      bgIconPeperoni: `url(${bgYellowUserTypeMobile})`,
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
      colorSubtitleSubopciones: '#292730',
      iconoVerTutorialMobile: `url(${VerTutorialMobile})`,
      iconoSubmenuMobile: `url(${IconoSubmenuMobile})`,
      iconoCerrarSubmenuMobile: `url(${XCerrarSubmenuMobile})`,
      iconoPQRS: `url(${PQRSMobile})`,
      iconoCerrarPerfilamiento: `url(${CerrarPerfilamientoMobile})`,
      bgIconUserType: `url(${bgYellowUserTypeMobile})`
    },
    menuAccessibility: {
      bgIconAccessibilityActive: `url(${AccessibilityBGIconOpened})`,
      bgIconAccessibilityInactive: `url(${AccessibilityBGIconClosed})`,
      bgIconUserTypeActive: `url(${bgWhiteUserType})`,
      colorLabelUserTypeActive: '#0033A0',
      colorLabelUserTypeInactive: '#292730',
      colorIconUserTypeActive: '#0033A0',
      colorIconUserTypeInactive: '#292730',
      colorIconAccessibilityActive: '#0033A0',
      colorIconAccessibilityInactive: '#FFFFFF',
      colorLabelAccessibility: '#0033A0',
      colorLabelAccessibilityItem: '#0033A0',
      colorLabelAccessibilityItemDesktop: '#CBD1DE',
      colorIconAccessibilityItemDesktop: '#CBD1DE',
      colorBorderBottomAccessibilityItem: '#F5F548',
      backgroundContainerMobile: '#E3E829',
      colorIconsAccessibilityItem: '#0033A0',
      colorSwitchAccessibilityItem: '#0033A0',
      colorCheckedSwitchAccessibilityItem: '#FFFFFF',
      bgColorTrackAccessibilityItem: '#FFFFFF',
      borderColorTrackAccessibilityItem: '#0033A0',
      bgColorCheckedTrackAccessibilityItem: '#3F66B3',
      borderColorCheckedTrackAccessibilityItem: '#3F66B3'
    },
    opciones: {
      colorOpcionesBackground: '#E3E829',
      colorOpcionesTitulo: '#292730',
      colorOpcionesParaph: '#292730',
      colorOpcionesParaphHover: '#0033A0',
      colorBordeHrMenu: '#F5F548',
      colorOpcionesIconosActive: '#0033A0',
      colorOpcionesIconosInactive: '#292730',
      opcionesIconoBackground: `url(${ActiveTutorialWhite})`,
      colorSeparator: '#464454'
    },
    categorias: {
      colorCategoriaBackground: '#E3E829',
      colorCategoriaNameTitulo: '#292730',
      colorCategoriaLink: '#0033A0',
      colorCategoriaActive: '#0033A0',
      colorCategoriaInactive: '#292730',
      categoriaIconoBackground: `url(${iconBlanco})`,
      colorCategoriaIconoBackgroundFill: '#0033A0'
    },
    footer: {
      detail: '#1B191F',
      title: '#FFF',
      subtitle: '#CBD1DE',
      subtitleHover: '#5CD9E3',
      lineSeparator: '#464454',
      filter:
        'invert(24%) sepia(8%) saturate(1108%) hue-rotate(208deg) brightness(6%) contrast(21%)'
    },
    textColor: '#E3E829',
    textColorInversion: '#E3E829',
    textSubtitleColor: '#FFFF',
    textSubtitleColorInversion: '#CBD1DE',
    textColorInactive: '#CBD1DE',
    filterImg: 'none',
    filterImgInactive:
      'invert(93%) sepia(4%) saturate(929%) hue-rotate( 189deg)  brightness(224%) contrast(51%)',
    filterImgInactiveUser:
      'invert(93%) sepia(4%) saturate(929%) hue-rotate( 189deg)  brightness(224%) contrast(51%)',
    input: {
      border: '1px solid #CBD1DE',
      color: '#ffffff'
    },
    modal: {
      background: '#292730',
      box: 'none',
      colorTitle: '#5CD9E3',
      colorSubTitle: '#CBD1DE',
      titlePerson: {
        color: '#ffffff',
        colorSubTitle: '#FAFBFC',
        colorName: '#CBD1DE'
      },
      input: {
        color: '#FFFFFF',
        hover: '#ffffff',
        colorHover: '#292730',
        colorButton: '#1B191F'
      },
      category: {
        inactive: '#CBD1DE',
        colorInactive: '#CBD1DE',
        colorActive: '#E3E829',
        hoverInactivo: '#ffffff'
      },
      subcategory: {
        border: '1px solid #0033a0',
        backgroundHoverColor: '#335cb3',
        color: '#ffffff',
        colorhover: '#ffffff',
        backgroundColor: '#13236F',
        active: '#0033a0'
      },
      genero: {
        backgroundColor: '#13236F',
        backgroundHoverColor: '#335cb3',
        colorhover: '#ffffff',
        color: '#ffffff',
        border: '1px solid #0033a0'
      },
      type: {
        colorInactive: '#CBD1DE',
        coloractive: '#E3E829',
        iconoactive: '#0033a0'
      }
    },
    homeMobile: {
      dots: {
        dotsInactive: '#E3E829',
        inversion: '#E3E829'
      },
      quickAccess: {
        quickAcessActive: '#292730',
        quickAcessInactive: '#292730',
        quickAcessActiveColor: '#CBD1DE',
        quickAcessInactiveColor: '#FFFFFF',
        opcionColor: '#464454',
        iconColor: '#ffffff'
      },
      biteResponsive: {
        colorDescripcion: '#CBD1DE',
        ExitStreetColor: '#1E1C23',
        tutorial: '#5CD9E3'
      },
      opcionMenuBurger: {
        backgroundActive: '#0B2987',
        backgroundInactive: '#1B191F',
        subItem: '#292730',
        colorActive: '#FFFFFF',
        colorInactive: '#CBD1DE',
        subMenu: '#13236F',
        colorSubMenu: '#FFFFFF',
        accessibility: '#E3E829',
        accessibilityInactive: 'rgb(203, 209, 222)',
        iconActive: '#FFFFFF',
        iconInactive: '#FFFFFF'
      }
    },
    menuChannels: {
      iconclose: '#FFFFFF',
      iconCloseServicesLine: '#FFFFFF',
      titleLineas: '#CBD1DE',
      contentLineas: '#5CD9E3'
    }
  }
}
