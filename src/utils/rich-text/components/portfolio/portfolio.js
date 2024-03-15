import React, { useState } from 'react'
import { ReactComponent as FileText } from '@assets/images/icons/file-text-alternative.svg'
import { sendEventGA } from '@utils/classGtmUtil'
import { clickWithScrollCenter } from '@utils/commons-event-content'
import Anchor from '@components/atoms/anchor/anchor'
import ItemAcordion from '@components/atoms/item-acordion/item-acordion'
import RichText from '@utils/rich-text/rich-text'
import './portfolio.scss'

export const Portfolio = ({ node, accessibility = {}, lineUser }) => {
  const technicalSheets = node?.data?.target?.fields?.fichastecnicas?.['en-US']

  const [indexActive, setIndexActive] = useState(0)

  return (
    <div className="technical-sheets-container">
      {technicalSheets?.map((ts, tsIndex) => {
        const ctaTextProspecto =
          ts.fields?.textoCallToActionProspecto?.['en-US']
        const ctaLinkProspecto = ts.fields?.LinkCallToActionProspecto?.['en-US']
        const ctaTextTS = ts.fields?.TextoCallToActionFichaTecnica?.['en-US']
        const ctaLinkTS = ts.fields?.LinkCallToActionFichaTecnica?.['en-US']
        const historicalTS =
          ts.fields?.HistoricoFichasTecnicas?.['en-US']?.content ?? []

        const getFichasTecnicas = (dataContentful = []) => {
          let yearWithSheets = []

          let counter = -1

          for (let i = 0; i < dataContentful.length; i++) {
            if (
              dataContentful[i]?.content[0]?.nodeType === 'text' &&
              dataContentful[i]?.content[0]?.value &&
              dataContentful[i]?.content[0]?.value.indexOf('\n') === -1
            ) {
              counter++
              const yearSheet = {
                year: dataContentful[i]?.content[0]?.value,
                fichas: []
              }
              yearWithSheets.push(yearSheet)
            }
            if (
              dataContentful[i]?.content[1]?.nodeType === 'hyperlink' ||
              dataContentful[i]?.content[1]?.nodeType === 'asset-hyperlink'
            ) {
              yearWithSheets[counter]?.fichas.push(dataContentful[i].content[1])
            }
          }

          return yearWithSheets
        }

        const fichasTecnicas = getFichasTecnicas(historicalTS)
        return (
          <ItemAcordion
            accessibility={accessibility}
            title={ts.fields?.titulo?.['en-US'] ?? ''}
            line={lineUser}
            idItem={tsIndex}
            idIndex="fichas"
            active={indexActive}
            click={() => {
              setIndexActive(tsIndex === indexActive ? null : tsIndex)
              clickWithScrollCenter(
                document.getElementById(
                  `item-acordion-container-title-${tsIndex - 1}`
                )
              )
            }}
            showArrows={false}
            showIconsMinusAndPlus={true}
          >
            <div
              id="technical-sheets-container__content"
              className="technical-sheets-container__content"
            >
              {((ctaTextProspecto && ctaLinkProspecto) ||
                (ctaTextTS && ctaLinkTS)) && (
                <div className="content-buttons">
                  {ctaTextTS && ctaLinkTS && (
                    <Anchor
                      className={`content-buttons__link ${ctaTextTS !==
                        'Ver documento' && 'content-buttons__data-sheet'}`}
                      href={ctaLinkTS}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => {
                        sendEventGA(
                          'Inversion',
                          'ClicPersona-FichaTecnicaPDF',
                          ts.fields?.titulo?.['en-US'] ?? ''
                        )
                      }}
                    >
                      {ctaTextTS}
                      <FileText />
                    </Anchor>
                  )}
                  {ctaTextProspecto && ctaLinkProspecto && (
                    <Anchor
                      className="content-buttons__link"
                      href={ctaLinkProspecto}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => {
                        sendEventGA(
                          'Inversion',
                          'ClicPersona-ProspectoPDF',
                          ts.fields?.titulo?.['en-US'] ?? ''
                        )
                      }}
                    >
                      {ctaTextProspecto}
                      <FileText />
                    </Anchor>
                  )}
                </div>
              )}
              <div className="content-historical">
                {fichasTecnicas.map((contentTS, index) => {
                  return (
                    <div className="content-historical__container-column">
                      <div className="content-historical-item content-historical__title">
                        <p className="container-parrafo__bold">
                          {contentTS.year}
                        </p>
                      </div>
                      {contentTS.fichas.map((ficha, idx) => {
                        return (
                          <div className="content-historical-item content-historical__content">
                            {
                              <RichText
                                accessibility={accessibility}
                                line={lineUser}
                                title={ts.fields?.titulo?.['en-US'] ?? ''}
                                text={ficha}
                                technicalSheet
                              />
                            }
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </ItemAcordion>
        )
      })}
    </div>
  )
}

Portfolio.propTypes = {}

export default Portfolio
