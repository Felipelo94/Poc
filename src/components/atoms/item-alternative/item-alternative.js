import React from 'react'
import Button from '../button/button'
import './item-alternative.scss'
import bell from '../../../assets/images/icons/bell-alternative.svg'
import fileText from '../../../assets/images/icons/file-text-alternative.svg'
import RichText from '../../../utils/rich-text/rich-text'
import Anchor from '../anchor/anchor'

export default function ItemAlternative({ data, accessibility }) {
  return (
    <div id="container-item-alternative" className="container-item-alternative">
      <div
        id="container-item-alternative-description"
        className="container-item-alternative-description"
      >
        <div className="container-item-alternative-description-line" />
        <p className="container-item-alternative-description-text">
          {data.descripcion.descripcion}
        </p>
      </div>
      <div
        id="container-item-alternative-btns"
        className="container-item-alternative-btns"
      >
        {data.TextoCallToAction1 ? (
          <Anchor
            style={{ marginBottom: 8 }}
            target="_blank"
            rel="noreferrer"
            className="noneTextDecoration"
            href={data.LinkCallToAction1.LinkCallToAction1}
          >
            <Button
              style={{
                marginRight: 16,
                height: 28,
                padding: '3px 8px',
                fontSize: 13,
                lineHeight: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              title={data.TextoCallToAction1}
              className="secondary-dark"
              icon={bell}
            />{' '}
          </Anchor>
        ) : null}
        {data.TextoCallToAction2 ? (
          <Anchor
            target="_blank"
            rel="noreferrer"
            className="noneTextDecoration"
            href={data.LinkCallToAction2.LinkCallToAction2}
          >
            <Button
              style={{
                marginRight: 16,
                height: 28,
                padding: '3px 8px',
                fontSize: 13,
                lineHeight: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              title={data.TextoCallToAction2}
              className="secondary-dark"
              icon={fileText}
            />
          </Anchor>
        ) : null}
      </div>
      <div
        id="container-item-alternative-p"
        className="container-item-alternative-p"
      >
        <RichText
          accessibility={accessibility}
          text={data.CuerpoContenido.json}
          line={'Inversión'}
        />
      </div>
    </div>
  )
}
