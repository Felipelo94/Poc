import React, { useState } from 'react'
import GifAlternativasCerradas from '@assets/images/gifs/gif-alternativas-cerradas-tabla.gif'
import Modal from '@components/atoms/modal/modal'
import { getSizeScreen } from '../../../handleResize'
import { useCurrentWidth } from 'react-socks'
import './table.scss'

export const Table = ({ node }) => {
  const dataTable = node.data.target.fields.tableJson['en-US']

  const headings = dataTable.tableHeadings
  const data = dataTable.data

  const [IsOpenMenu, setIsOpenMenu] = useState(false)
  const width = useCurrentWidth()
  const sizeColumn = headings.length * (0.4 * width)
  const isBrowser = typeof window !== 'undefined'

  let header = []
  const tutorialTable = isBrowser
    ? localStorage.getItem('modal-table-alternativas') === 'true'
    : false

  const renderTableHeader = () => {
    for (let i = 0; i < headings.length; i++) {
      header.push({
        name: headings[i].key,
        colSpan: headings[i].colSpan ? headings[i].colSpan : null,
        rowSpan: headings[i].rowSpan ? headings[i].rowSpan : null,
        className: headings[i].className ? headings[i].className : null,
        el: headings[i].el ? headings[i].el : null
      })
      i = headings[i].colSpan ? i + Number(headings[i].colSpan) : i
    }
    const perByColumn = 100 / headings.length
    return header.map((item, index) => {
      return (
        <th
          key={'column-' + index}
          style={{
            width:
              (item.colSpan === null
                ? perByColumn
                : Number(item.colSpan) * perByColumn) + '%'
          }}
          colSpan={item.colSpan}
          className={`column-${item.className ? item.className : 'centro'}`}
        >
          {item.el ? (
            <a href={item.el} style={{ color: '#0033a0' }} target="_blank">
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </th>
      )
    })
  }
  const renderRow = itemRow => {
    const perByRow = 100 / headings.length
    let colSpanRow = 0
    return headings.map((head, pos) => {
      if (pos + 1 > colSpanRow) {
        const rowData = itemRow[head.key]
        const classColumn = header.filter(item => item.name === head.key)
        colSpanRow = rowData
          ? rowData.colSpan
            ? pos + Number(rowData.colSpan)
            : colSpanRow
          : colSpanRow
        return rowData ? (
          <td
            style={{
              width:
                (rowData.colSpan
                  ? Number(rowData.colSpan) * perByRow
                  : perByRow) + '%'
            }}
            rowSpan={rowData.rowSpan ? rowData.rowSpan : null}
            colSpan={rowData.colSpan ? rowData.colSpan : null}
            className={`column-${
              rowData.className
                ? rowData.className
                : classColumn.length > 0
                ? classColumn[0].className
                  ? classColumn[0].className
                  : 'centro'
                : 'centro'
            }`}
          >
            {rowData.el ? (
              <a href={rowData.el} style={{ color: '#0033a0' }} target="_blank">
                {rowData.text}
              </a>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: rowData.text }} />
            )}
          </td>
        ) : (
          <td style={{ width: perByRow + '%' }}></td>
        )
      } else {
        return null
      }
    })
  }
  const renderTableBody = () => {
    return data.map((item, index) => {
      return (
        <tr
          key={'row-' + index}
          style={{ background: index % 2 === 0 ? '#FAFBFC' : '#FFF' }}
        >
          {renderRow(item)}
        </tr>
      )
    })
  }

  const openModal = () => {
    const mobile = getSizeScreen()
    if (mobile <= 1024 && !tutorialTable) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      setIsOpenMenu(true)
    }
  }

  const closeModal = () => {
    localStorage.setItem('modal-table-alternativas', true)
    document.documentElement.style.overflow = null
    document.body.style.overflow = 'scroll'
    document.body.style.overflowY = 'scroll'
    setIsOpenMenu(false)
  }

  const modal = (
    <Modal
      close={closeModal}
      style={{ overflow: 'auto' }}
      styleBody={{ height: 'auto' }}
      gtmClose=""
      id="encuesta-oficinas"
      height={'420px'}
      titte="Explora las tablas y las gráficas"
      alt="icon-encuesta"
      width={'320px'}
      margin="50% 0px"
      isCosed={false}
    >
      <p className="p-gif-table">
        Puedes arrastrar las tablas horizontalmente para ver mas información en
        las demás columnas
      </p>
      <img
        src={GifAlternativasCerradas}
        alt="Gif Alternativas Cerradas"
        style={{ width: 280, height: 280 }}
      />
    </Modal>
  )

  return (
    <>
      {IsOpenMenu ? modal : null}
      <div
        id="container-table"
        className="container-table"
        tabIndex="0"
        onFocus={openModal}
        onBlur={closeModal}
      >
        <div
          style={{ minWidth: width <= 768 ? sizeColumn + 'px' : null }}
          className="container-table-line"
        ></div>
        <table
          id="container-table-division"
          className="container-table-division"
          style={{ minWidth: width <= 768 ? sizeColumn + 'px' : null }}
        >
          <thead
            id="container-table-division-header"
            className="container-table-division-header"
          >
            <tr
              id="container-table-division-header-elements"
              className="container-table-division-header"
            >
              {renderTableHeader()}
            </tr>
          </thead>

          <tbody
            id="container-table-division-body"
            className="container-table-division-body"
          >
            {renderTableBody()}
          </tbody>
        </table>
      </div>
    </>
  )
}
