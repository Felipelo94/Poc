import React from 'react'
import PropTypes from 'prop-types'
import './internal-bite.scss'
import Image from '../image/image'
import { useCurrentWidth } from 'react-socks'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents,
  sendGaPush
} from '../../../utils/classGtmUtil'
import Anchor from '../anchor/anchor'

function InternalBiteText(props) {
  return (
    <div
      className={`internal-bite-container__text${
        props.id
          ? props.id.node
            ? props.id.node.contentful_id === props.active.node.contentful_id
              ? ' internal-bite-container__text--active' +
                (props.line === 'Inversión' ? '-black' : '')
              : ''
            : ''
          : ''
      } gtmCesantiasContenSupSugeridos`}
      id="internal-bite__text"
    >
      <p
        className="internal-bite-container__text-value gtmCesantiasContenSupSugeridos"
        id="internal-bite__text-value"
        style={{ fontFamily: '22px' }}
      >
        {props.text}
      </p>
    </div>
  )
}

function InternalBiteDecorator(props) {
  return (
    <div
      className={
        props.id
          ? props.id.node
            ? props.id.node.contentful_id === props.active.node.contentful_id
              ? 'internal-bite-container-icono-verde gtmCesantiasContenSupSugeridos'
              : 'gtmCesantiasContenSupSugeridos'
            : ''
          : ''
      }
      id="icono-verde"
    />
  )
}

export default function InternalBite(props) {
  function active() {
    sendGaPush(
      removeAccents(props.line),
      `Clic${props.typeCustomer}${getSubCategoryNameWhenIsPensionAndPerson(
        props.typeCustomer === 'Persona' ? 1 : 2,
        removeAccents(props.line),
        props?.subcategorySelectedUser ?? ''
      )}-ContenidosSuperiorSugeridos`,
      props.text
    )
    props.onClick(props.id, props.index)
  }

  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  return (
    <Anchor
      onClick={active}
      role="menuitem"
      onKeyDown={active}
      href={
        props.id
          ? props.id.node
            ? prefix + `${props.id.node.urlSeo}/`
            : prefix
          : prefix
      }
    >
      <div
        id="internal-bite-container"
        style={{ position: 'relative' }}
        className="gtmCesantiasContenSupSugeridos"
      >
        <div
          id="internal-bite"
          data-testid="internal-bite"
          className={`internal-bite-container${
            props.id
              ? props.id.node
                ? props.id.node.contentful_id ===
                  props.active.node.contentful_id
                  ? ' internal-bite-container--active'
                  : ''
                : ''
              : ''
          }   gtmCesantiasContenSupSugeridos`}
          tabIndex={props.id}
        >
          <div
            className={
              props.id
                ? props.id.node
                  ? props.id.node.contentful_id ===
                    props.active.node.contentful_id
                    ? 'internal-bite-container__gradient--active gtmCesantiasContenSupSugeridos'
                    : 'internal-bite-container__gradient gtmCesantiasContenSupSugeridos'
                  : ''
                : ''
            }
            style={{
              background: props.line === 'Inversión' ? '#292730' : '#0033a0'
            }}
            id="internal-bite__gradient"
          />
          <Image
            className="internal-bite-container__image gtmCesantiasContenSupSugeridos"
            id="internal-bite__image"
            imagen={props.image}
            alt={props.text}
            width={useCurrentWidth() > 1024 ? '380px' : 'auto'}
            height={'150px'}
            classGtm="gtmCesantiasContenSupSugeridos"
          />
          {InternalBiteText(props)}
        </div>
        {props.id ? (
          props.id.node ? (
            props.id.node.contentful_id === props.active.node.contentful_id &&
            useCurrentWidth() > 1024 ? (
              <div
                style={{ width: '100%', height: '12px', background: '#e3e829' }}
              />
            ) : null
          ) : null
        ) : null}
        {InternalBiteDecorator(props)}
      </div>
    </Anchor>
  )
}

InternalBite.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
