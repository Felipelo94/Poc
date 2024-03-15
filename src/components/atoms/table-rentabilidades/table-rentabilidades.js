import React from 'react'
import './table-rentabilidades.scss'
import DataTable from 'react-data-table-component'
import { ReactComponent as ArrowIcon } from '../../../assets/images/arrow-bite.svg'
import { ReactComponent as InfoIcon } from '../../../assets/images/info.svg'
import { getCMS } from '../../../utils/apiCMS'
import { getSizeScreenClass } from '../../../utils/handleResize'
import Markdown from 'markdown-to-jsx'
import ReactTooltip from 'react-tooltip'
import HeaderInternal from '../../../components/molecules/header-internal/header-internal'

export default class TableRentabilidades extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentFichasTecnicas: {},
      stickyElement: null,
      tooltipPlace: 'top',
      showTableOrDetail: 'table',
      detailData: null
    }

    this.handleScrollEvent = this.handleScrollEvent.bind(this)
  }

  componentDidMount() {
    this.setState({
      stickyElement: document.getElementById('header-container')
    })
    window.addEventListener('scroll', this.handleScrollEvent)
    getCMS('fichastecnicas').then(dataList => {
      this.setState({
        contentFichasTecnicas: dataList.items
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }

  handleScrollEvent() {
    if (getSizeScreenClass() > 902) {
      const observer = new IntersectionObserver(
        ([e]) => {
          if (!e.isIntersecting) {
            this.changeHeaderToSticky()
          } else {
            this.changeHeaderToNormal()
          }
        },
        { rootMargin: '-1px 200px 0px 0px', threshold: [1] }
      )

      if (this.state.stickyElement) {
        observer.observe(this.state.stickyElement)
      }
    }
  }

  changeHeaderToSticky() {
    this.setState({ tooltipPlace: 'bottom' })
    if (document.getElementById('table-header') !== null) {
      document.getElementById('table-header').style.width = '100vw'
      document.getElementById('table-header').style.marginLeft =
        'calc(-50.3vw + 50.39%)'
      document.getElementById('table-header').style.boxShadow =
        '0px 0px 5px 3px #E0DEDE'
      if (document.getElementById('row-header') !== null) {
        document.getElementById('row-header').style.borderLeft =
          '1px solid #E0DEDE'
        document.getElementById('row-header').style.borderRight =
          '1px solid #E0DEDE'
        if (getSizeScreenClass() <= 1500 && getSizeScreenClass() > 1024)
          document.getElementById('row-header').style.margin = '0px 98px'
      }
    }
  }

  changeHeaderToNormal() {
    this.setState({ tooltipPlace: 'top' })
    if (document.getElementById('table-header') !== null) {
      document.getElementById('table-header').style.backgroundColor = 'white'
      document.getElementById('table-header').style.width = '100%'
      document.getElementById('table-header').style.marginLeft = 'auto'
      document.getElementById('table-header').style.boxShadow = 'none'
    }
    if (document.getElementById('row-header') !== null) {
      document.getElementById('row-header').style.borderLeft = 'none'
      document.getElementById('row-header').style.borderRight = 'none'
      document.getElementById('row-header').style.margin = 'auto'
    }
  }

  getFichaTecnicaFieldBenchmarkById(id) {
    return this.state.contentFichasTecnicas.find(
      x => x.fields.IDAlternativaDeInversion === id
    ).fields.benchmark
  }

  getFichaTecnicaFieldObjectivoById(id) {
    return this.state.contentFichasTecnicas.find(
      x => x.fields.IDAlternativaDeInversion === id
    ).fields.objetivo
  }

  openDetailQueEsEstePortafolio(dataList) {
    document.getElementById('container-haderComponent').style.display = 'none'
    this.setState({ showTableOrDetail: 'detail', detailData: dataList })
  }

  closeDetailQueEsEstePortafolio() {
    document.getElementById('container-haderComponent').style.display = 'block'
    this.setState({ showTableOrDetail: 'table' })
  }

  ExpandedComponent = ({ data }) => (
    <div className="wrap">
      <div className="links">
        <div style={{ width: '50%' }}>
          {this.getFichaTecnicaFieldObjectivoById(data.id)}
        </div>
        <div className="dot"></div>
        <div style={{ width: '50%' }}>
          <Markdown>{this.getFichaTecnicaFieldBenchmarkById(data.id)}</Markdown>
        </div>
      </div>
    </div>
  )

  render() {
    const { data = [] } = this.props
    const columns = [
      {
        selector: row => row.title,
        style: { fontSize: '15px', fontFamily: 'Cabin', color: '#292730' },
        minWidth: '35%'
      },
      {
        center: true,
        style: { marginBottom: '15px' },
        minWidth: '40%',
        cell: (column, row) => (
          <div className="row cells-colum2">
            <div className="col-md-4 cells-table">
              {column.historica !== 'N/A' && column.historica !== '--'
                ? column.historica + '%'
                : column.historica}
            </div>
            <div className="col-md-4 cells-table">
              {column.anual !== 'N/A' ? column.anual + '%' : column.anual}
            </div>
            <div className="col-md-4 cells-table">
              {column.benchmarkAnual !== 'N/A'
                ? column.benchmarkAnual + '%'
                : column.benchmarkAnual}
            </div>
          </div>
        )
      },
      {
        center: true,
        minWidth: '20%',
        cell: (column, row) => (
          <div className="cells-table">
            {column.comision !== 'N/A'
              ? column.comision + '%'
              : column.comision}
          </div>
        )
      }
    ]

    return (
      <div>
        {this.state.showTableOrDetail === 'detail' ? (
          <div className="container-internal-content-componente-header">
            <HeaderInternal
              inversiones="Inversión"
              titulo="Información portafolio"
              subtitle=""
              tiempo="2"
              border="none"
            />
          </div>
        ) : null}
        <div>
          {this.state.showTableOrDetail === 'table' ? (
            getSizeScreenClass() > 902 ? (
              <div id="table-container" className="table-container">
                <div id="header-container"></div>
                <div id="table-header" className="table-header">
                  <div id="row-header" className="row row-header">
                    <div className="col-md-5">
                      <div className="row">
                        <p id="title-colum1" className="title-colum1">
                          PORTAFOLIO DE INVERSIÓN
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-4 col-column-2"
                      style={{ marginTop: '15px' }}
                    >
                      <div className="row">
                        <div id="title-colum2" className="col title-column2">
                          RENTABILIDAD
                        </div>
                      </div>
                      <hr />
                      <div className="row subcolumns-column2">
                        <div className="col-xl-4 col-md-4 title-subcolumns-column1">
                          HISTÓRICA
                          <ReactTooltip
                            place={this.state.tooltipPlace}
                            id="historic"
                            type="dark"
                            effect="solid"
                            className="historic-tooltip"
                          />
                          <InfoIcon
                            data-for="historic"
                            data-tip="Esta es la rentabilidad calculada desde el primer día de operación del portafolio hasta la fecha del último cierre."
                            style={{
                              position: 'absolute',
                              marginLeft: '20px',
                              transform: 'scale(1.3)',
                              filter:
                                'invert(0%) sepia(4%) saturate(0%) hue-rotate(317deg) brightness(93%) contrast(107%)'
                            }}
                            id={'Historic-info'}
                            alt="Historic-info"
                          />
                        </div>
                        <div className="col-xl-4 col-md-4 title-subcolumns-column2">
                          ANUAL
                        </div>
                        <div className="col-xl-3 col-md-3 title-subcolumns-column3">
                          ANUAL DEL BENCHMARK
                          <ReactTooltip
                            place={this.state.tooltipPlace}
                            id="anual-benchmark"
                            type="dark"
                            effect="solid"
                            className="benchmark-header-tooltip"
                          />
                          <InfoIcon
                            data-for="anual-benchmark"
                            data-tip="El benchmark es un conjunto de instrumentos de referencia que refleja la estrategia de inversión del portafolio y permite evaluar su desempeño."
                            style={
                              getSizeScreenClass() > 1200
                                ? {
                                    marginLeft: '20px',
                                    marginTop: '-10px',
                                    float: 'right',
                                    position: 'absolute',
                                    transform: 'scale(1.3)',
                                    filter:
                                      'invert(0%) sepia(4%) saturate(0%) hue-rotate(317deg) brightness(93%) contrast(107%)'
                                  }
                                : {
                                    marginLeft: '7px',
                                    marginTop: '-10px',
                                    float: 'right',
                                    position: 'absolute',
                                    transform: 'scale(1.3)',
                                    filter:
                                      'invert(0%) sepia(4%) saturate(0%) hue-rotate(317deg) brightness(93%) contrast(107%)'
                                  }
                            }
                            id={'Info'}
                            alt="Info"
                          />
                        </div>
                      </div>
                    </div>
                    <div id="title-column3" className="title-column3">
                      <p className="first-title">COMISIÓN</p>
                      <p className="second-title">COBRADA ANUAL</p>
                    </div>
                  </div>
                </div>

                <div className="table-rentabilidades">
                  <DataTable
                    className="sticky-header"
                    columns={columns}
                    data={data}
                    defaultSortField="title"
                    noTableHead
                    noDataComponent="No hay registros para mostrar"
                    expandableIcon={{
                      collapsed: (
                        <ArrowIcon
                          style={{ transform: 'rotate(270deg)' }}
                          id={'collapse'}
                          alt="collapse"
                        />
                      ),
                      expanded: (
                        <ArrowIcon
                          style={{
                            transform: 'rotate(90deg)'
                          }}
                          id={'expanded'}
                          alt="collapse"
                        />
                      )
                    }}
                    expandableRows
                    expandOnRowClicked="true"
                    expandableRowsComponent={this.ExpandedComponent}
                  />
                </div>
              </div>
            ) : (
              <div id="cards-container" className="table-container">
                {data.map((item, index) => {
                  return (
                    <div key={index} className="card card-border-bottom">
                      <div className="card-body card-margin-bottom">
                        <p className="title-responsive">{item.title}</p>
                        <button
                          id={'button-open-detail-portfolio-' + index}
                          className="subtitle-link-responsive"
                          onClick={() =>
                            this.openDetailQueEsEstePortafolio(item)
                          }
                        >
                          ¿Qué es este portafolio?
                        </button>
                        <div className="row">
                          <div className="col-7 subtitle-responsive">
                            Rentabilidad
                          </div>
                        </div>

                        <div className="row card-margin-top subtitle-responsive">
                          <div className="col-7">
                            Histórico
                            <ReactTooltip
                              place="top"
                              id="historic"
                              type="dark"
                              effect="solid"
                              className="historic-tooltip"
                            />
                            <InfoIcon
                              data-for="historic"
                              data-tip="Esta es la rentabilidad calculada desde el primer día de operación del portafolio hasta la fecha del último cierre."
                              style={{
                                position: 'absolute',
                                marginLeft: '78px',
                                transform: 'scale(1.3)',
                                filter:
                                  'invert(0%) sepia(4%) saturate(0%) hue-rotate(317deg) brightness(93%) contrast(107%)'
                              }}
                              id={'Historic-info'}
                              alt="Historic-info"
                            />
                          </div>
                          <div className="col cell-responsive">
                            {item.historica !== 'N/A' && item.historica !== '--'
                              ? item.historica + '%'
                              : item.historica}
                          </div>
                        </div>

                        <div className="row card-margin-top">
                          <div className="col-7 subtitle-responsive">Anual</div>
                          <div className="col cell-responsive">
                            {item.anual !== 'N/A'
                              ? item.anual + '%'
                              : item.anual}
                          </div>
                        </div>

                        <div className="row card-margin-top">
                          <div className="col-7 subtitle-responsive">
                            Anual del benchmark
                            <ReactTooltip
                              place="top"
                              id="anual-benchmark"
                              type="dark"
                              effect="solid"
                              className="benchmark-header-tooltip"
                            />
                            <InfoIcon
                              data-for="anual-benchmark"
                              data-tip="El benchmark es un conjunto de instrumentos de referencia que refleja la estrategia de inversión del portafolio y permite evaluar su desempeño."
                              style={{
                                marginLeft: '12px',
                                float: 'right',
                                position: 'absolute',
                                transform: 'scale(1.3)',
                                filter:
                                  'invert(0%) sepia(4%) saturate(0%) hue-rotate(317deg) brightness(93%) contrast(107%)'
                              }}
                              id={'Info'}
                              alt="Info"
                            />
                          </div>
                          <div className="col cell-responsive">
                            {item.benchmarkAnual !== 'N/A'
                              ? item.benchmarkAnual + '%'
                              : item.benchmarkAnual}
                          </div>
                        </div>

                        <div className="row card-margin-top">
                          <div className="col-7 subtitle-responsive">
                            Comisión cobrada anual
                          </div>
                          <div className="col cell-responsive">
                            {item.comision !== 'N/A'
                              ? item.comision + '%'
                              : item.comision}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          ) : this.state.showTableOrDetail === 'detail' ? (
            <div className="card-container">
              <p className="card-container-title">
                {this.state.detailData.title}
              </p>
              <p className="card-container-description">
                {this.getFichaTecnicaFieldObjectivoById(
                  this.state.detailData.id
                )}
              </p>

              <hr />

              <Markdown className="card-container-description">
                {this.getFichaTecnicaFieldBenchmarkById(
                  this.state.detailData.id
                )}
              </Markdown>

              <button
                className="regresar-button"
                onClick={() => this.closeDetailQueEsEstePortafolio()}
              >
                <p className="button-text">Regresar</p>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
