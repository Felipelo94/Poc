import React from 'react'
import circlegreensvg from '../../../assets/images/circle-green.svg'
import { ReactComponent as PlusIcon } from '../../../assets/images/plus-big-btn.svg'
import './button-icon-filter-pills.scss'
import Anchor from '../anchor/anchor'

export default function ButtonIconFilterPills({ title, link }) {
  return (
    <Anchor href={link} className={'noneTextDecoration'} tabIndex="0">
      <div className="low-relevance-filter-see-more">
        <div
          style={{ color: '#0033a0' }}
          className={'low-relevance-filter-see-more-icon'}
          id="container-see-more-icon"
        >
          <figure className="low-relevance-filter-see-more-icon-figure">
            <img
              id="low-relevance-filter-see-more-icon-figure-img"
              className={'low-relevance-filter-see-more-icon-figure-img'}
              alt={'ver-mas'}
              src={circlegreensvg}
            />
          </figure>
          <PlusIcon
            id="imgBtn-text"
            className={'low-relevance-filter-see-more-icon-plus'}
            alt={`Ícono del símbolo "más" para ver más contenidos, al darle clic se enlistan todos los contenidos relacionados al negocio, según el perfilamiento`}
            title={`Ícono de Ver más contenidos`}
          />
        </div>
        <div className="low-relevance-filter-see-more-title">
          <span
            id="imgBtn-text"
            className={'low-relevance-filter-see-more-text'}
          >
            {title}
          </span>
        </div>
      </div>
    </Anchor>
  )
}
