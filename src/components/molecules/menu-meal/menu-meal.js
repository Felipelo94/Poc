import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import React, { useEffect } from 'react'
import { scaleText, SCALE_SIZE_15PX } from '../../../utils/scaleText'
import './menu-meal.scss'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function MenuMeal({
  data,
  indexTitle,
  clickEvent,
  line,
  accessibility,
  changeTab,
  anchorId
}) {
  const [value, setValue] = React.useState(indexTitle)
  useEffect(() => {
    if (indexTitle < 0) {
      setValue(indexTitle)
    } else if (changeTab) {
      setValue(changeTab === indexTitle ? changeTab : indexTitle)
    }
  }, [indexTitle])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    clickEvent(newValue)
  }
  return (
    <div
      className={`container-menu-meal ${
        line === 'Inversión' ? 'container-menu-meal-inversion' : ''
      }`}
      id="container-menu-meal"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        id="tabs-menu-best"
        textColor="primary"
        indicatorColor="primary"
      >
        {data.map((x, i) => {
          return (
            <Tab
              className="container-menu-meal__tab"
              style={{
                fontSize: scaleText(
                  accessibility.fontSize,
                  SCALE_SIZE_15PX,
                  1.5
                ).fontSize
              }}
              id={x.value}
              label={x.titulo}
              {...a11yProps(0)}
              tabIndex="0"
              href={anchorId}
            />
          )
        })}
      </Tabs>
    </div>
  )
}
