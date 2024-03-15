import React, { useState, useEffect } from 'react'
import FormsHeader from '../components/molecules/forms-header/forms-header'
import FormsFooter from '../components/molecules/forms-footer/forms-footer'
import { get } from '../services/service-general/service-general'
import Salesforce from '../components/molecules/salesforce/salesforce'
import './salesforce-template.scss'

let SalesforceTemplate = ({ pageContext, dispatch }) => {
  return (
    <>
      <FormsHeader />
      <div className="salesforce-template__form-container">
        <Salesforce
          get={get}
          titleContent="Inversiones"
          productLeadSource="Inversiones"
          productLeadSourceTitle="Inversiones"
          isInvestment={true}
        />
      </div>
      <FormsFooter />
    </>
  )
}

export default SalesforceTemplate
