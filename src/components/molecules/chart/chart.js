import React, { useEffect, useState, useLayoutEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { utils, writeFileXLSX } from 'xlsx';
import * as am4plugins_rangeSelector from '@amcharts/amcharts4/plugins/rangeSelector'
import am4lang_es_ES from '@amcharts/amcharts4/lang/es_ES'
import './chart.scss'

const Chartline = ({
  chartProperties,
  selectPortfolio,
  dataSerieAddPortfolioArray,
  className
}) => {
  let listSeries = []
  const [chart, setChart] = useState(null)

  const {
    dateAxis: dateAxisProps,
    valueAxis: valueAxisProps,
    selector: selectorProps
  } = chartProperties
  const createSeries = (charts, field, nameSerie, data, isSelect) => {
    let series = charts.series.push(new am4charts.LineSeries())
    series.dataFields.dateX = 'date'
    series.dataFields.valueY = field
    series.tooltipText =
      "[font-family: Barlow font-size: 11px #000]{dateX.formatDate('EEEE, d MMM, yyyy')}[/] \n [font-family: Barlow font-size: 14px]{name}:[/] {valueY.value.formatNumber('[bold font-family: Barlow font-size: 14px #000]#,###.00')}[/] [font-family: Barlow font-size: 14px #000]({valueY.changePercent.formatNumber('+#.00|#.##|0')}%)"
    series.name = nameSerie
    series.strokeWidth = 1.5
    series.tooltip.getFillFromObject = false
    series.tooltip.getStrokeFromObject = true
    series.tooltip.background.fill = am4core.color('#fff')
    series.tooltip.background.strokeWidth = 2

    series.data = data

    if (listSeries.length === 0) {
      series.stroke = am4core.color('#E5DB3A')
      series.tooltip.label.fill = series.stroke
    } else if (listSeries.length === 1) {
      series.stroke = am4core.color('#0033A0')
      series.tooltip.label.fill = series.stroke
    } else if (listSeries.length === 2) {
      series.stroke = am4core.color('#00AEC7')
      series.tooltip.label.fill = series.stroke
    } else if (listSeries.length === 3) {
      series.stroke = am4core.color('#B46B7A')
      series.tooltip.label.fill = series.stroke
    }
    listSeries.push({
      name: nameSerie,
      series
    })
    return series
  }

  const changeVisualizationListSeries = () => {
    const isValueVisualization = listSeries.length === 1
    for (let i = 0; i < listSeries.length; i++) {
      chart.series.getIndex(i).dataFields.valueYShow = isValueVisualization
        ? 'value'
        : 'changePercent'
    }
    chart.validateData()
    if (chart.series.getIndex(0)) {
      chart.series.getIndex(0).dataChangeUpdate()
    }
  }

  useLayoutEffect(() => {
    let charts = am4core.create('divChart', am4charts.XYChart)
    charts.padding(0, 15, 0, 15)
    charts.exporting.menu = new am4core.ExportMenu();
    charts.exporting.menu.items.clickable = true;
    charts.exporting.menu.items = [
      {
        "label": "...",
        "menu": []
      }
    ];

    charts.exporting.menu.items[0].menu.push({
      label: "Excel",
      type: "custom",
      options: {
        callback: function () {
          const ws = utils.json_to_sheet(charts.series.values[0].data);
          const wb = utils.book_new();
          utils.book_append_sheet(wb, ws, "Data");
          writeFileXLSX(wb, "portfolio.xlsx");
        }
      }
    });

    charts.exporting.adapter.add('data', function (data, target) {
      let dataExport = [];
      charts.series.each(function (series) {
        for (let serie of series.data) {
          serie.name = series.name;
          dataExport.push(serie);
        }
      });
      return { data: dataExport };
    });


    charts.colors.step = 1
    charts.language.locale = chartProperties.language
    charts.zoomOutButton.disabled = chartProperties.zoomOutButton

    charts.fontFamily = chartProperties.fontFamily
    charts.leftAxesContainer.layout = chartProperties.leftAxesContainer

    charts.scrollbarX = new am4charts.XYChartScrollbar()
    charts.scrollbarX.marginBottom = chartProperties.marginBottom
    charts.scrollbarX.parent = charts.bottomAxesContainer

    let dateAxis = charts.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = dateAxisProps.location
    dateAxis.renderer.ticks.template.length = dateAxisProps.length
    dateAxis.renderer.ticks.template.strokeOpacity = dateAxisProps.strokeOpacity
    dateAxis.renderer.grid.template.disabled =
      dateAxisProps.gridTemplateDisabled
    dateAxis.renderer.ticks.template.disabled =
      dateAxisProps.ticksTemplateDisabled
    dateAxis.renderer.minLabelPosition = dateAxisProps.minLabelPosition
    dateAxis.renderer.maxLabelPosition = dateAxisProps.maxLabelPosition
    dateAxis.keepSelection = dateAxisProps.keepSelection
    dateAxis.groupData = dateAxisProps.groupData
    dateAxis.minZoomCount = dateAxisProps.minZoomCount

    charts.cursor = new am4charts.XYCursor()
    charts.legend = new am4charts.Legend()

    let valueAxis = charts.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = valueAxisProps.tooltipDisabled
    valueAxis.zIndex = valueAxisProps.zIndex
    valueAxis.renderer.baseGrid.disabled = valueAxisProps.baseGridDisabled
    valueAxis.height = am4core.percent(valueAxisProps.height)
    valueAxis.renderer.gridContainer.background.fill = am4core.color(
      valueAxisProps.backgroundFill
    )
    valueAxis.renderer.gridContainer.background.fillOpacity =
      valueAxisProps.backgroundFillOpacity
    valueAxis.renderer.inside = valueAxisProps.inside
    valueAxis.renderer.labels.template.verticalCenter =
      valueAxisProps.templateVerticalCenter
    valueAxis.renderer.labels.template.padding(2, 2, 2, 2)
    valueAxis.renderer.fontSize = valueAxisProps.fontSize

    let selector = new am4plugins_rangeSelector.DateAxisRangeSelector()
    selector.container = document.getElementById(selectorProps.containerId)
    selector.axis = dateAxis
    selector.fontFamily = selectorProps.fontFamily
    selector.container.background = selectorProps.containerBackground
    selector.periods = selectorProps.periods
    selector.setPeriodInterval({
      timeUnit: selectorProps.defaultIntervalTimeUnit,
      count: selectorProps.defaultIntervalCount
    })
    setChart(charts)
  }, [])

  useEffect(() => {
    if (selectPortfolio && selectPortfolio.label && chart) {
      chart.series.clear()
    }
  }, [selectPortfolio])

  useEffect(() => {
    if (dataSerieAddPortfolioArray.length > 0 && chart) {
      chart.series.clear()
      listSeries = []
      dataSerieAddPortfolioArray.map(portfolio => {
        const dataNew = portfolio.data.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date)
        })
        createSeries(chart, 'value', portfolio.portfolio, dataNew, true)
      })
      if (dataSerieAddPortfolioArray.length === 1) {
        changeVisualizationListSeries()
      }
    }
  }, [dataSerieAddPortfolioArray])

  return (
    <div className={classNames(className)}>
      <center>
        <div className="pl-2" id="controlsChart" style={{ width: '90%' }}></div>
        <br></br>
        <div id="divChart" style={{ width: '90%', height: '400px' }}></div>
      </center>
    </div>
  )
}
Chartline.defaultProps = {
  chartProperties: {
    language: am4lang_es_ES,
    zoomOutButton: true,
    fontFamily: 'Barlow',
    leftAxesContainer: 'vertical',
    marginBottom: 20,
    dateAxis: {
      location: 0,
      length: 0,
      strokeOpacity: 0.2,
      gridTemplateDisabled: false,
      ticksTemplateDisabled: false,
      minLabelPosition: 0.01,
      maxLabelPosition: 0.99,
      keepSelection: true,
      groupData: true,
      minZoomCount: 10
    },
    valueAxis: {
      tooltipDisabled: true,
      zIndex: 1,
      baseGridDisabled: true,
      height: 95,
      backgroundFill: '#f7f7f7',
      backgroundFillOpacity: 1,
      inside: true,
      templateVerticalCenter: 'bottom',
      fontSize: '0.8em'
    },
    selector: {
      containerId: 'controlsChart',
      fontFamily: 'Barlow',
      containerBackground: '#845EC2',
      periods: [
        { name: '1M', interval: { timeUnit: 'month', count: 1 } },
        { name: '3M', interval: { timeUnit: 'month', count: 3 } },
        { name: '6M', interval: { timeUnit: 'month', count: 6 } },
        { name: '1A', interval: { timeUnit: 'year', count: 1 } },
        { name: 'Hist', interval: 'max' }
      ],
      defaultIntervalTimeUnit: 'month',
      defaultIntervalCount: 1
    }
  },
  defaultPortfolioUnitValue: [],
  dataSerieAddPortfolioArray: []
}

Chartline.propTypes = {
  chartProperties: PropTypes.object
}

export default Chartline
