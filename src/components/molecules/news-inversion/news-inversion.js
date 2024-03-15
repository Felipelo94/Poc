import React from 'react'
import styled from 'styled-components'
import { getCurrentHost } from '../../../utils/redirectUtil'
import {
  scaleText,
  SCALE_SIZE_15PX,
  SCALE_SIZE_22PX
} from '../../../utils/scaleText'
import Anchor from '../../atoms/anchor/anchor'
import Button from '../../atoms/button/button'
import Podcast from '../podcast/podcast'
import './news-inversion.scss'

export const ContainerCardStyled = styled.div`
  .contaianer-news-inversion-actulidad-title {
    color: ${props =>
      props.theme.colors && props.theme.colors.cardTitleInforme};
  }
  .contaianer-news-inversion-actulidad-description {
    color: ${props => props.theme.colors && props.theme.colors.cardSubtitle};
  }
`

const NewsInversion = ({ data, accessibility }) => {
  return (
    <div id="contaianer-news-inversion" className="contaianer-news-inversion">
      <Podcast
        data={data}
        categoryGA="Inversion"
        actionGA="ClicInformeSemanal"
      />
      <ContainerCardStyled
        id="contaianer-news-inversion-actulidad"
        className="contaianer-news-inversion-actulidad"
      >
        <h4
          style={{
            fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_22PX, 1.5)
              .fontSize
          }}
          id="contaianer-news-inversion-actulidad-title"
          className="contaianer-news-inversion-actulidad-title"
        >
          Actualidad de Inversiones
        </h4>
        <p
          style={{
            fontSize: scaleText(accessibility.fontSize, SCALE_SIZE_15PX, 1.5)
              .fontSize
          }}
          id="contaianer-news-inversion-actulidad-description"
          className="contaianer-news-inversion-actulidad-description"
        >
          Sea un inversionista bien informado. Conozca y manténgase enterado
          sobre la actualidad del mercado, eventos, portafolios y más.
        </p>
        <Anchor
          id="contaianer-news-inversion-actulidad-btn"
          href={getCurrentHost() + '/persona/inversion/actualidad-inversiones/'}
          className="noneTextDecoration gtmInversionActualidad"
        >
          <Button
            style={{ width: 200 }}
            title={'Más información'}
            className={`secondary-dark`}
            classGtm="gtmInversionActualidad"
          />
        </Anchor>
      </ContainerCardStyled>
    </div>
  )
}

export default NewsInversion
