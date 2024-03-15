import { validate } from 'email-validator'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { sendGaPush } from '../../../utils/classGtmUtil'
import {
  OID_SALESFORCE,
  URI_SALESFORCE,
  URL_SERVICES
} from '../../../utils/paramApplication'
import HabeasData from '../../atoms/habeas-data/habeas-data'
import Input from '../../atoms/input/input'
import ReCAPTCHA from '../../atoms/recaptcha/recaptcha'
import SelectComponent from '../../atoms/select/select-component'
import { ReactComponent as InformationCircle } from '../../../assets/images/information-circle.svg'
import './salesforce.scss'

const data = [
  { value: '8:00 a.m. a 12:00 p.m', label: '8:00 a.m. a 12:00 p.m' },
  { value: '12:00 p.m. a 5:00 p.m', label: '12:00 p.m. a 5:00 p.m' }
]

const customStyles = {
  control: base => ({
    ...base,
    height: 40,
    minHeight: 40,
    marginTop: 2,
    border: '1px solid #E2E7ED'
  }),
  singleValue: base => ({
    ...base,
    color: '#626277'
  }),
  option: (base, { data, isDisabled, isFocused, isSelected }) => ({
    ...base,
    color: isDisabled ? '#ccc' : isSelected ? '#ffffff' : '#626277'
  })
}

const fechatoday = new Date()
let day = fechatoday.getDate()
let month = fechatoday.getMonth() + 1
let year = fechatoday.getFullYear()

const customStylesError = {
  control: base => ({
    ...base,
    height: 40,
    minHeight: 40,
    marginTop: 2,
    border: '1px solid rgb(230, 35, 35)'
  }),
  singleValue: base => ({
    ...base,
    color: '#626277'
  }),
  option: (base, { data, isDisabled, isFocused, isSelected }) => ({
    ...base,
    color: isDisabled ? '#ccc' : isSelected ? '#ffffff' : '#626277'
  })
}

const Salesforce = ({
  get,
  closeCallBack,
  titleContent,
  productLeadSource,
  productLeadSourceTitle,
  products,
  classGtm,
  isInvestment = false
}) => {
  const [city, setCity] = useState()
  const [hora, setHora] = useState()
  const [name, setName] = useState('')
  const [product, setProduct] = useState('')
  const [lastName, setLastName] = useState('')
  const [typeDocument, setTypeDocument] = useState()
  const [document, setDocument] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [isHuman, setIsHuman] = useState(false)
  const [habeas, setHabeas] = useState(false)
  const [countries, setCountries] = useState([])
  const [types, setTypes] = useState([])
  const [alert, setAlert] = useState(false)
  const [fieldsAreValid, setFieldsAreValid] = useState(false)

  const isBrowser = typeof window !== 'undefined'

  const buttonActivityStyle =
    fieldsAreValid && isInvestment
      ? 'container-salesforce__button-investment-active'
      : fieldsAreValid
      ? 'container-salesforce__button-active'
      : ''

  const notify = () => toast.dark('Enviado')

  const validateFields = () => {
    return (
      isHuman &&
      habeas &&
      (product || productLeadSourceTitle) &&
      city &&
      hora &&
      typeDocument &&
      name.length > 0 &&
      lastName.length > 0 &&
      document.length > 0 &&
      phone.length > 0 &&
      fecha.length > 0 &&
      validate(email)
    )
  }

  const getCities = () => {
    get(
      [
        {
          name: 'param',
          value: 'Ciudad'
        }
      ],
      `${URL_SERVICES}params`,
      true
    )
      .then(result => {
        let mapCountruies = []
        result.map(item => {
          mapCountruies.push({ value: item.desciption, label: item.desciption })
        })
        setCountries(mapCountruies)
      })
      .catch(error => {})
  }

  const getDocumentTypes = () => {
    get(
      [
        {
          name: 'param',
          value: 'Tipo de documento'
        }
      ],
      `${URL_SERVICES}params`,
      true
    )
      .then(result => {
        let mapTypes = []
        result.map(item => {
          mapTypes.push({ value: item.code, label: item.desciption })
        })
        setTypes(mapTypes)
      })
      .catch(error => {})
  }

  useEffect(() => {
    getCities()
    getDocumentTypes()
  }, [])

  useEffect(() => {
    const isValid = validateFields()
    setFieldsAreValid(isValid)
  })

  return (
    <div
      id="container-salesforce"
      className="container-salesforce"
      tabIndex="0"
      onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          window.document
            .getElementById('ipnut-edit-salesforce-product')
            ?.focus()
        }
      }}
    >
      <div className="container-salesforce-header">
        <h2
          id="container-salesforce-title"
          className="container-salesforce-title"
        >
          ¿Quieres agendar una cita?
        </h2>
        <p
          id="container-salesforce-description"
          className="container-salesforce-description"
        >
          Diligencia los siguientes campos y nosotros nos pondremos en contacto
          contigo.
        </p>
        <div
          id="container-salesforce-information-alert"
          className="container-salesforce__information-alert"
        >
          <InformationCircle className="container-salesforce__information-icon" />
          <p className="container-salesforce__information-text">
            *Los campos marcados con asterisco son obligatorios.
          </p>
        </div>
      </div>

      <form action={URI_SALESFORCE} method="POST">
        <input type="hidden" name="oid" value={OID_SALESFORCE} />
        <input
          type="hidden"
          name="retURL"
          value={isBrowser ? window.location.href : ''}
        />
        <div className="container-salesforce-row">
          {products ? (
            <div className="container-salesforce__select container-salesforce-input-left">
              <SelectComponent
                mandatory={true}
                id="salesforce-product"
                placeHolder=" "
                customStyles={customStyles}
                customStylesError={customStylesError}
                label="Producto"
                dataOptions={products}
                handleChange={setProduct}
                value={product}
                isSearchable={true}
              />
            </div>
          ) : (
            <Input
              id="salesforce-product"
              label="Producto"
              className="container-salesforce-input-left"
              readOnly={true}
              value={productLeadSourceTitle}
            />
          )}
          <Input
            hidden={true}
            id="salesforce-product-value"
            name="lead_source"
            label="Producto"
            className="container-salesforce-input-left"
            readOnly={true}
            value={productLeadSource || product.label}
          ></Input>
          <div className="container-salesforce__select">
            <SelectComponent
              mandatory={true}
              id="salesforce-ciudad"
              placeHolder=" "
              customStyles={customStyles}
              customStylesError={customStylesError}
              label="Ciudad"
              dataOptions={countries}
              handleChange={setCity}
              value={city}
              isSearchable={true}
            />
          </div>
        </div>
        <div className="container-salesforce-row">
          <Input
            id="salesforce-name"
            name="first_name"
            mandatory={true}
            label="Nombre"
            className="container-salesforce-input-left"
            value={name}
            setValue={setName}
          />
          <Input
            id="salesforce-lastname"
            name="last_name"
            mandatory={true}
            label="Apellido"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <div className="container-salesforce-row">
          <div className="container-salesforce__select container-salesforce-input-left">
            <SelectComponent
              name="00N6g00000TcpEt"
              mandatory={true}
              id="salesforce-type"
              placeHolder=" "
              customStyles={customStyles}
              customStylesError={customStylesError}
              label="Tipo de documento"
              dataOptions={types}
              handleChange={setTypeDocument}
              value={typeDocument}
              min={321}
              isSearchable={true}
            />
          </div>
          <Input
            id="salesforce-id"
            name="00N6g00000TcpEq"
            label="Número de documento"
            mandatory={true}
            value={document}
            setValue={setDocument}
          ></Input>
        </div>
        <div className="container-salesforce-row" style={{ marginBottom: 43 }}>
          <Input
            id="salesforce-phone"
            name="mobile"
            mandatory={true}
            minLength={7}
            onlyNumber={true}
            maxLength={10}
            label="Celular"
            className="container-salesforce-input-left"
            value={phone}
            setValue={setPhone}
          ></Input>
          <Input
            id="salesforce-email"
            name="email"
            mandatory={true}
            email={true}
            label="Correo electrónico"
            value={email}
            setValue={setEmail}
          ></Input>
        </div>
        <div className="container-salesforce-row">
          <Input
            id="salesforce-fecha"
            mandatory={true}
            type="date"
            label="Fecha de llamada"
            className="container-salesforce-input-left"
            value={fecha}
            setValue={setFecha}
            min={
              month < 10
                ? `${year}-0${month}-${day}`
                : `${year}-${month}-${day}`
            }
          ></Input>
          <Input
            id="salesforce-description"
            hidden={true}
            mandatory={true}
            className="hidden-lable"
            name="description"
            value={`${city ? city.value : city}-${
              hora ? hora.value : hora
            }-${fecha}`}
            disabled={true}
          />
          <div className="container-salesforce__select">
            <SelectComponent
              mandatory={true}
              id="salesforce-hora-llamada"
              placeHolder=" "
              customStyles={customStyles}
              customStylesError={customStylesError}
              label="Hora de llamada"
              dataOptions={data}
              handleChange={setHora}
              value={hora}
              isSearchable={true}
            />
          </div>
        </div>
        <ReCAPTCHA setRecaptchaValue={setIsHuman} />
        <HabeasData setState={setHabeas} style={{ marginTop: 32 }} />
        <div id="container-salesforce-btn" className="container-salesforce-btn">
          <input
            disabled={!fieldsAreValid && !alert}
            onClick={() => {
              sendGaPush('Ahorro', 'ClicFormulario-' + titleContent, 'Agendar')
              if (fieldsAreValid && !alert) {
                notify()
                setAlert(true)
              }
            }}
            classGTM={`button-container__button--primary ${classGtm} gtmAgendar-${data.title}`}
            type="submit"
            name="submit"
            value="Agendar"
            tabIndex="0"
            className={'container-salesforce__button ' + buttonActivityStyle}
          />
        </div>
      </form>
    </div>
  )
}

export default Salesforce
