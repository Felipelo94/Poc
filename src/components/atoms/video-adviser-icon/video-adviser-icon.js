import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Events } from 'react-scroll'
import styled from 'styled-components'
import { ReactComponent as VideoDarkIcon } from '../../../assets/images/video-asesoria-icon-dark.svg'
import { ReactComponent as VideoIcon } from '../../../assets/images/video-asesoria-icon.svg'
import {
  HEIGHT_FOOTER_DESKTOP,
  HEIGHT_FOOTER_MOBILE
} from '../../../const/dictionary/footer-const'
import { sendGaPush } from '../../../utils/classGtmUtil'
import {
  getCurrentHost,
  getCurrentPathPrefix,
  getPathClean
} from '../../../utils/redirectUtil'
import { useStaticQuery, graphql } from 'gatsby'
import Anchor from '../anchor/anchor'
import './video-adviser-icon.scss'

const ContainerModalStyled = styled.div`
  background: ${props =>
    props.theme.colors && props.theme.colors.cardBackground} !important;
  box-shadow: ${props =>
    props.theme.colors && props.theme.colors.cardBoxShadow} !important;
  transition: ${props => props.theme.animation};
  a {
    .container-videoadviser-title {
      color: ${props =>
        props.theme.colors && props.theme.colors.cardTitle} !important;
    }
  }
`

export let VideoAdviser = ({
  footerIsExpanded,
  accessibility,
  dataUrlVideoAsesoria
}) => {
  const isBrowser = typeof window !== 'undefined'
  const [isNotFooter, setisNotFooter] = useState(false)
  const [path, setPath] = useState('')
  const animatePosition = openParam => {
    window.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setisNotFooter(
        clientHeight + scrollTop >=
          scrollHeight -
            (openParam ? HEIGHT_FOOTER_DESKTOP : HEIGHT_FOOTER_MOBILE)
      )
    })
  }

  Events.scrollEvent.register('end', function() {
    animatePosition(footerIsExpanded)
  })
  useEffect(() => {
    animatePosition(footerIsExpanded)
  }, [footerIsExpanded])

  useEffect(() => {
    setPath(getPathClean())
  }, [isNotFooter])

  return (
    <ContainerModalStyled
      className={`container-videoadviser gtmfooterVideoAsesoria  container-videoadviser-${
        isNotFooter ? 'no-' + getCurrentPathPrefix(path) : ''
      }flotante `}
      id="container-videoadviser"
    >
      <Anchor
        href={
          getCurrentHost() +
          `/canales/${dataUrlVideoAsesoria.allContentfulCanal.edges?.[0].node.urlSeo}`
        }
        id="container-videoadviser-link"
        onClick={() => {
          sendGaPush('Home', 'ClicInferior', 'Videoasesoria')
        }}
        className="container-videoadviser-link gtmfooterVideoAsesoria"
        tabIndex={!isNotFooter ? '-1' : '0'}
      >
        {accessibility ? (
          accessibility.darkMode &&
          (isBrowser
            ? window.location.pathname.indexOf('home') >= 0
            : false) ? (
            <VideoDarkIcon
              alt={`Ícono con figura de asesor y la palabra "Videoasesoría", lleva a este servicio`}
              title="Ícono de videoasesoría"
              className="container-videoadviser-img gtmfooterVideoAsesoria"
            />
          ) : (
            <VideoIcon
              alt={`Ícono con figura de asesor y la palabra "Videoasesoría", lleva a este servicio`}
              title="Ícono de videoasesoría"
              className="container-videoadviser-img gtmfooterVideoAsesoria"
            />
          )
        ) : (
          <VideoIcon
            className="container-videoadviser-img gtmfooterVideoAsesoria"
            alt={`Ícono con figura de asesor y la palabra "Videoasesoría", lleva a este servicio`}
            title="Ícono de videoasesoría"
          />
        )}

        <h3 className="container-videoadviser-title gtmfooterVideoAsesoria">
          Videoasesoría
        </h3>
      </Anchor>
    </ContainerModalStyled>
  )
}

function mapStateToProps(state) {
  return {
    accessibility: state.accesibility
  }
}

VideoAdviser = connect(mapStateToProps)(VideoAdviser)

const VideoAdviserIcon = props => {
  const dataUrlVideoAsesoria = useStaticQuery(graphql`
    query QueryVideoAdviser {
      allContentfulCanal(
        filter: {
          contentful_id: {
            nin: [
              "6jE41usupqw773MH9JWlMl"
              "2vn2SgPCl0kmJMiXjTU58N"
              "5JLi7v4HSJnhZGWiEjjfcP"
              "6NgqzQSfDywLkdsILYXFWB"
              "6sg8keLI1FmaVVKxouylPb"
              "31JYCa3KmNmAmNH2Pj5Zxm"
            ]
          }
        }
      ) {
        edges {
          node {
            contentful_id
            urlSeo
          }
        }
      }
    }
  `)
  return <VideoAdviser {...props} dataUrlVideoAsesoria={dataUrlVideoAsesoria} />
}

export default VideoAdviserIcon
