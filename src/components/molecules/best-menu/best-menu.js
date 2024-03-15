import React, { useEffect } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from '../../atoms/tab-panel/tab-panel'
import { makeStyles } from '@material-ui/core/styles'
import './best-menu.scss'
import { sendGaPush } from '../../../utils/classGtmUtil'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useTabStyles = makeStyles({
  root: {
    justifyContent: 'center'
  },
  scroller: {
    flexGrow: '0'
  },
  indicator: {
    backgroundColor: '#E3E829'
  }
})

export default function BestMenu({
  options,
  setitemActive,
  children,
  setindexActivo,
  onClick,
  dataBites,
  setproductActive,
  indexActivo,
  inversion,
  categoryGtm,
  actionGtm,
  isChannel,
  setActualLocation,
  actualLocation
}) {
  const classes = useTabStyles()
  const [value, setValue] = React.useState(0)
  const [activeIndex, setactiveIndex] = React.useState(0)
  const prefix =
    process.env.PATH_PREFIX === '' ? '/' : '/' + process.env.PATH_PREFIX + '/'

  const handleChange = (event, newValue) => {
    setValue(newValue)
    if (!inversion) {
      setindexActivo(newValue)
    }
  }

  const isBrowser = typeof window !== 'undefined'
  const tabVariant = window.innerWidth > 1024 ? 'scrollable' : ''

  useEffect(() => {
    if (indexActivo) {
      setValue(indexActivo)
      setactiveIndex(indexActivo)
    }
  }, [indexActivo])

  useEffect(() => {
    if (window) {
      const query = window.location.search
      if (query) {
        options.map((items, i) => {
          if (items.id === decodeURI(query.split('=')[1])) {
            setValue(i)
            setactiveIndex(i)
            setindexActivo(i)
          }
          return null
        })
      } else if (window.location.pathname.split('/')[1] === 'canales') {
        options.map((items, i) => {
          if (items.urlSeo === window.location.pathname.split('/')[2]) {
            setValue(i)
            setactiveIndex(i)
            setindexActivo(i)
          }
          return null
        })
      } else if (window.location.pathname.split('/')[2] === 'canales') {
        options.map((items, i) => {
          if (items.urlSeo === window.location.pathname.split('/')[3]) {
            setValue(i)
            setactiveIndex(i)
            setindexActivo(i)
          }
          return null
        })
      }
    }
  }, [])

  const changeActiveOption = (option, index) => {
    setitemActive(option.id)
    setactiveIndex(index)
    sendGaPush(categoryGtm, actionGtm, option.nombre)
    if (setproductActive) {
      setproductActive(option)
    }
    if (isChannel && isBrowser) {
      if (window.location.pathname !== prefix + `canales/${option.urlSeo}/`) {
        const nextTitle = option.nombre
        const nextState = { additionalInformation: 'Updated URL by navbar' }
        window.history.replaceState(
          nextState,
          nextTitle,
          prefix + `canales/${option.urlSeo}/`
        )
        const newLocation = Object.assign({}, actualLocation)
        newLocation.pathname = `/canales/${option.urlSeo}/`
        newLocation.href = prefix + `canales/${option.urlSeo}/`
        setActualLocation(newLocation)
      }
    } else {
      if (onClick && isBrowser) {
        onClick(dataBites[index], index)
        if (
          window.location.pathname !==
          prefix + `${option.UrlseoContenido}/`
        ) {
          window.location.href = prefix + `${option.UrlseoContenido}/`
        }
      }
      if (inversion && isBrowser) {
        if (
          window.location.pathname !==
          prefix + `${option.UrlseoContenido}/`
        ) {
          window.location.href = prefix + `${option.UrlseoContenido}/`
        }
      }
    }
  }

  return (
    <div className="conatiner-best-menu">
      <Tabs
        classes={{
          root: classes.root,
          scroller: classes.scroller,
          indicator: classes.indicator
        }}
        value={value}
        onChange={handleChange}
        id={inversion ? 'tabs-menu-best-inversion' : 'tabs-menu-best'}
        textColor="primary"
        indicatorColor="primary"
        variant={tabVariant}
        scrollButtons={'auto'}
        style={{ display: options.length <= 1 ? 'none' : '' }}
      >
        {options.map((option, index) => {
          return (
            <Tab
              id={option.id}
              label={option.nombre}
              onClick={() => {
                changeActiveOption(option, index)
              }}
              {...a11yProps(0)}
            />
          )
        })}
      </Tabs>
      <TabPanel value={value} index={activeIndex}>
        {children}
      </TabPanel>
    </div>
  )
}
