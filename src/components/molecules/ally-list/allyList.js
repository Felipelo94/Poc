import React from 'react'
import { Breakpoint } from 'react-socks'
import BiteDesktop from '../bite/bite-desktop/bite-desktop'
import BiteResposive from '../bite/bite-resposive/bite-resposive'
import './allyList.scss'

export const AllyList = ({ allyListData, accessibility, line = {} }) => {
  return (
    <div className="ally-list-container">
      {allyListData
        ? allyListData.map(ally => {
            return (
              <div className="ally-list-container__item">
                <Breakpoint customQuery="(max-width: 1024px)">
                  <div className="ally-list-container__item__containerMobile">
                    <BiteResposive
                      accessibility={accessibility}
                      imgalt={ally.imageName}
                      imgTitle={ally.imageTittle}
                      slug={ally.linkCallToAction}
                      title={ally.titulo}
                      img={ally.imageUrl ? ally.imageUrl : ''}
                      content={ally.descripcion}
                      line={{ category: line }}
                      btn={ally.textoCallToAction}
                      type="producto"
                      date={allyListData.updatedAt}
                      gtmCategory={ally?.gtmClass?.event?.category}
                      gtmAction={ally?.gtmClass?.event?.action}
                      gtmLabel={ally?.gtmClass?.event?.label}
                    />
                  </div>
                </Breakpoint>
                <Breakpoint customQuery="(min-width: 1025px)">
                  <div className="ally-list-container__item__container">
                    <BiteDesktop
                      accessibility={accessibility}
                      imgalt={ally.imageName}
                      imgTitle={ally.imageTittle}
                      slug={ally.linkCallToAction}
                      title={ally.titulo}
                      img={ally.imageUrl ? ally.imageUrl : ''}
                      content={ally.descripcion}
                      line={{ category: line }}
                      btn={ally.textoCallToAction}
                      type="producto"
                      date={allyListData.updatedAt}
                      gtmCategory={ally?.gtmClass?.event?.category}
                      gtmAction={ally?.gtmClass?.event?.action}
                      gtmLabel={ally?.gtmClass?.event?.label}
                    />
                  </div>
                </Breakpoint>
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default AllyList
