import React, { useState, useEffect } from 'react'
import { getDataIb } from '../services/service-indexDB/service-indexDB'
import { addInfoUser } from '../actions/You-cant-miss/You-cant-miss'
import { get } from '../services/service-general/service-general'
import { sendUserDataRedux } from '../utils/ReduxDataUtil'
import { connect } from 'react-redux'
import { Script } from 'gatsby-script'
import PeopleDataUpdateForm from '../components/organisms/people-data-update-form/people-data-update-form'
import CompaniesDataUpdateForm from '../components/organisms/companies-data-update-form/companies-data-update-form'
import FormsHeader from '../components/molecules/forms-header/forms-header'
import FormsFooter from '../components/molecules/forms-footer/forms-footer'
import Alert from '../components/atoms/alert-like/alert'
import DataUpdateImage from '../components/atoms/data-update-image/data-update-image'
import './data-update.scss'

let DataUpdate = ({ pageContext, dispatch }) => {
  const [alertDetails, setAlertDetails] = useState(null)
  const [indexedDBUser, setIndexedDBUser] = useState(null)

  const isPageForCompanies = pageContext.typeCustomer === 2

  useEffect(() => {
    sendUserDataRedux(getDataIb, setIndexedDBUser, get, dispatch, addInfoUser)
  }, [dispatch])

  return (
    <>
      {alertDetails && (
        <Alert
          doAfterAlertEnds={alertDetails.callback}
          alertMessage={alertDetails.message}
          alertType={alertDetails.type}
        />
      )}
      <FormsHeader />
      <main className="data-update">
        <Script
          id="grecaptcha-badge"
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.REACT_APP_ENVIRONMENT_KEY_SITE_RECAPTCHA_ENTERPRISE}`}
        />
        <DataUpdateImage isPageForCompanies={isPageForCompanies} />
        {isPageForCompanies ? (
          <CompaniesDataUpdateForm
            setAlertDetails={setAlertDetails}
            user={indexedDBUser}
          />
        ) : (
          <PeopleDataUpdateForm
            setAlertDetails={setAlertDetails}
            user={indexedDBUser}
          />
        )}
      </main>
      <FormsFooter />
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.youcantmiss,
    nameUser: state.welcome,
    perfilamiento: state.home,
    accessibility: state.accesibility
  }
}

DataUpdate = connect(mapStateToProps)(DataUpdate)

export default DataUpdate
