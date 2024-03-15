import React, { useState, useEffect } from 'react'
import Input from '../../atoms/new-input/input'
import Select from '../../atoms/new-select/select'
import Checkbox from '../../atoms/checkbox/checkbox'
import DOCUMENT_TYPE_OPTIONS from '../../../const/dictionary/people-data-update-form.json'
import { useForm } from 'react-hook-form'
import { URL_SERVICES } from '../../../utils/paramApplication'
import { get } from '../../../services/service-general/service-general'
import { ReactComponent as InformationCircle } from '../../../assets/images/information-circle.svg'
import { updateCompaniesInformation } from '../../../services/update-companies-information/update-companies-information'
import { recaptchaVerification } from '../../../utils/recaptcha-enterprise/recaptcha-enterprise'
import UpdateDataModal from '../../molecules/update-data-modal/update-data-modal'
import './companies-data-update-form.scss'

const CompaniesDataUpdateForm = ({ setAlertDetails, user }) => {
  const blockClass = 'companies-data-update-form'

  const [isDisabled, setIsDisabled] = useState(false)
  const [documentTypeOptions, setDocumentTypeOptions] = useState([])
  const [showUpdateDataModal, setShowUpdateDataModal] = useState(false)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: 'all',
    defaultValues: { habeasData: true, companyInfo: true }
  })

  const buttonClass = `${blockClass}__button ${
    !isValid || isDisabled ? `${blockClass}__button--disabled` : ''
  }`

  const formControls = {
    name: register('name', {
      required: 'Nombre no debe estar vacío',
      pattern: {
        value: /^[a-zA-ZÀ-ÿ ]+$/i,
        message: 'No se aceptan números ni caracteres especiales.'
      }
    }),
    lastname: register('lastname', {
      required: 'Apellidos no debe estar vacío',
      pattern: {
        value: /^[a-zA-ZÀ-ÿ ]+$/i,
        message: 'No se aceptan números ni caracteres especiales.'
      }
    }),
    documentType: register('documentType', {
      required: 'Tipo de documento no debe estar vacío'
    }),
    documentNumber: register('documentNumber', {
      required: 'Número de documento no debe estar vacío',
      pattern: {
        value: /^[a-zA-Z]*\d+[a-zA-Z0-9]*$/i,
        message: 'Solo se aceptan números y letras'
      },
      minLength: { value: 5, message: 'Debe contener minimo 5 caracteres' }
    }),
    phone: register('phone', {
      required: 'Celular no debe estar vacío',
      pattern: { value: /^[0-9]+$/i, message: 'Solo se aceptan números' },
      minLength: { value: 7, message: 'Debe contener minimo 7 números' }
    }),
    companyPosition: register('companyPosition', {
      required: 'Cargo en la empresa no debe estar vacío'
    }),
    companyName: register('companyName', {
      required: 'Nombre de la empresa no debe estar vacío'
    }),
    nit: register('nit', {
      required: 'N° de identificación de la empresa o NIT no debe estar vacío',
      pattern: {
        value: /^[a-zA-Z0-9]+$/i,
        message: 'Solo se aceptan números y letras'
      }
    }),
    companyPhone: register('companyPhone', {
      required: 'Teléfono de la empresa no debe estar vacío',
      pattern: { value: /^[0-9]+$/i, message: 'Solo se aceptan números' },
      minLength: { value: 7, message: 'Debe contener minimo 7 números' }
    }),
    email: register('email', {
      required: 'Correo corporativo no debe estar vacío',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/i,
        message: 'Debe ser un correo válido'
      }
    }),
    humanManagementName: register('humanManagementName', {
      pattern: {
        value: /^[a-zA-ZÀ-ÿ ]+$/i,
        message: 'No se aceptan números ni caracteres especiales.'
      }
    }),
    humanManagementEmail: register('humanManagementEmail', {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/i,
        message: 'Debe ser un correo válido'
      }
    }),
    leaderName: register('leaderName', {
      pattern: {
        value: /^[a-zA-ZÀ-ÿ ]+$/i,
        message: 'No se aceptan números ni caracteres especiales.'
      }
    }),
    leaderEmail: register('leaderEmail', {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/i,
        message: 'Debe ser un correo válido'
      }
    }),
    agentName: register('agentName', {
      pattern: {
        value: /^[a-zA-ZÀ-ÿ ]+$/i,
        message: 'No se aceptan números ni caracteres especiales.'
      }
    }),
    agentEmail: register('agentEmail', {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]+$/i,
        message: 'Debe ser un correo válido'
      }
    }),
    habeasData: register('habeasData', {
      required: 'Debe aceptar la política de Habeas Data'
    }),
    companyInfo: register('companyInfo', {
      required:
        'Debe aceptar la autorización para dar información de la empresa'
    }),
    adAuth: register('adAuth'),
    thirdAuth: register('thirdAuth')
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
      .then(res => {
        const documentTypeOptions = res.map(item => {
          return { value: item.code, name: item.desciption }
        })
        setDocumentTypeOptions(documentTypeOptions)
      })
      .catch(() => setDocumentTypeOptions(DOCUMENT_TYPE_OPTIONS))
  }

  const onCloseModal = () => {
    setShowUpdateDataModal(false)
    setIsDisabled(false)
    setAlertDetails(null)
    reset()
  }

  const updateInformation = async (formData, recaptchaValue) => {
    try {
      const response = await updateCompaniesInformation({
        user,
        recaptchaValue,
        ...formData
      })
      showAlertByStatusCode(response.status)
      setIsDisabled(true)
    } catch (error) {
      showAlertByStatusCode()
    }
  }

  const showAlertByStatusCode = status => {
    let alertDetails
    if (status === 202) {
      alertDetails = {
        callback: () => setShowUpdateDataModal(true),
        message: '¡Tu registro ha sido exitoso!',
        type: 'success'
      }
    } else {
      alertDetails = {
        callback: () => setShowUpdateDataModal(true),
        message: '¡Ups!, ha ocurrido un error, intenta de nuevo más tarde.',
        type: 'error'
      }
    }

    setAlertDetails(alertDetails)
  }

  useEffect(() => {
    getDocumentTypes()
  }, [])

  return (
    <>
      {showUpdateDataModal && (
        <UpdateDataModal
          onCloseModal={onCloseModal}
          isForCompanies={true}
          setShowUpdateDataModal={setShowUpdateDataModal}
          reset={reset}
        />
      )}
      <form
        className={blockClass}
        onSubmit={handleSubmit(formData => {
          recaptchaVerification(async recaptchaValue => {
            await updateInformation(formData, recaptchaValue)
          })
        })}
      >
        <h1 className={`${blockClass}__title`}>Diligencia tus datos</h1>
        <p className={`${blockClass}__subtitle`}>
          Llena los siguientes campos para completar la información
        </p>
        <div className={`${blockClass}__information-alert`}>
          <InformationCircle className={`${blockClass}__information-icon`} />
          <p className={`${blockClass}__information-text`}>
            *Los campos marcados con asterisco son obligatorios.
          </p>
        </div>
        <section className={`${blockClass}__fields`}>
          <Input
            id={`${blockClass}-name`}
            labelText="Nombre"
            placeholder="Ingresa tu nombre completo"
            isRequired={true}
            control={formControls.name}
            error={errors?.name?.message}
          />
          <Input
            id={`${blockClass}-lastname`}
            labelText="Apellidos"
            placeholder="Ingresa tus apellidos completos"
            isRequired={true}
            control={formControls.lastname}
            error={errors?.lastname?.message}
          />
          <Select
            id={`${blockClass}-document-type`}
            labelText="Tipo de documento"
            placeholder="Selecciona el tipo documento"
            options={documentTypeOptions}
            isRequired={true}
            control={formControls.documentType}
            error={errors?.documentType?.message}
          />
          <Input
            id={`${blockClass}-document-number`}
            labelText="Número de documento"
            placeholder="Ingresa tu número de documento"
            isRequired={true}
            control={formControls.documentNumber}
            error={errors?.documentNumber?.message}
          />
          <Input
            id={`${blockClass}-phone`}
            labelText="Celular"
            placeholder="Ingresa tu número de celular"
            isRequired={true}
            control={formControls.phone}
            error={errors?.phone?.message}
          />
          <Input
            id={`${blockClass}-company-position`}
            labelText="Cargo en la empresa"
            placeholder="Ingresa tu cargo"
            isRequired={true}
            control={formControls.companyPosition}
            error={errors?.companyPosition?.message}
          />
          <Input
            id={`${blockClass}-company-name`}
            labelText="Nombre de la empresa"
            placeholder="Ingresa el nombre de la empresa"
            isRequired={true}
            control={formControls.companyName}
            error={errors?.companyName?.message}
          />
          <Input
            id={`${blockClass}-nit`}
            labelText="N° de identificación de la empresa o NIT"
            placeholder="Ej: 91027364581"
            isRequired={true}
            control={formControls.nit}
            error={errors?.nit?.message}
          />
          <Input
            id={`${blockClass}-company-phone`}
            labelText="Teléfono de la empresa"
            placeholder="Ingresa el teléfono de la empresa"
            isRequired={true}
            control={formControls.companyPhone}
            error={errors?.companyPhone?.message}
          />
          <Input
            id={`${blockClass}-email`}
            labelText="Correo corporativo"
            placeholder="Ej: correo@ejemplo.com"
            isRequired={true}
            control={formControls.email}
            error={errors?.email?.message}
          />
        </section>
        <div className={`${blockClass}__card`}>
          <h2 className={`${blockClass}__card-title`}>
            Diligencia los datos de un directivo del área de gestión humana
          </h2>
          <section className={`${blockClass}__fields`}>
            <Input
              id={`${blockClass}-human-management-name`}
              labelText="Nombre"
              placeholder="Ingresa el nombre completo"
              isRequired={false}
              control={formControls.humanManagementName}
              error={errors?.humanManagementName?.message}
            />
            <Input
              id={`${blockClass}-human-management-email`}
              labelText="Correo corporativo"
              placeholder="Ej: correo@ejemplo.com"
              isRequired={false}
              control={formControls.humanManagementEmail}
              error={errors?.humanManagementEmail?.message}
            />
          </section>
          <h2 className={`${blockClass}__card-title`}>
            Diligencia los datos de un líder del área de nómina
          </h2>
          <section className={`${blockClass}__fields`}>
            <Input
              id={`${blockClass}-leader-name`}
              labelText="Nombre"
              placeholder="Ingresa el nombre completo"
              isRequired={false}
              control={formControls.leaderName}
              error={errors?.leaderName?.message}
            />
            <Input
              id={`${blockClass}-leader-email`}
              labelText="Correo corporativo"
              placeholder="Ej: correo@ejemplo.com"
              isRequired={false}
              control={formControls.leaderEmail}
              error={errors?.leaderEmail?.message}
            />
          </section>
          <h2 className={`${blockClass}__card-title`}>
            Diligencia los datos del representante legal, gerente o presidente
          </h2>
          <section className={`${blockClass}__fields`}>
            <Input
              id={`${blockClass}-agent-name`}
              labelText="Nombre"
              placeholder="Ingresa el nombre completo"
              isRequired={false}
              control={formControls.agentName}
              error={errors?.agentName?.message}
            />
            <Input
              id={`${blockClass}-agent-email`}
              labelText="Correo corporativo"
              placeholder="Ej: correo@ejemplo.com"
              isRequired={false}
              control={formControls.agentEmail}
              error={errors?.agentEmail?.message}
            />
          </section>
        </div>
        <Checkbox
          id={`${blockClass}-habeas-data`}
          control={formControls.habeasData}
          error={errors?.habeasData?.message}
        >
          Autorizo el tratamiento de mis datos personales, de conformidad con la
          política de tratamiento de datos que se encuentra en
          <a href="https://www.proteccion.com/"> www.proteccion.com </a>
        </Checkbox>
        <Checkbox
          id={`${blockClass}-comp-auth`}
          control={formControls.companyInfo}
          error={errors?.companyInfo?.message}
        >
          Estoy autorizado para dar información de mi empresa.
        </Checkbox>
        <Checkbox
          id={`${blockClass}-ad-auth`}
          control={formControls.adAuth}
          error={errors?.adAuth?.message}
        >
          Autorizo a PROTECCIÓN para enviar información de uso comercial o
          publicitaria relacionada con nuestros productos, servicios, eventos o
          alianzas, a través de medios físicos o virtuales registrados.
        </Checkbox>
        <Checkbox
          id={`${blockClass}-third-auth`}
          control={formControls.thirdAuth}
          error={errors?.thirdAuth?.message}
        >
          Autorizo a PROTECCIÓN para que comparta mi información personal con
          terceros con quienes haya celebrado alianzas y/o con proveedores con
          el propósito de cumplir con el objeto social, prestar adecuadamente el
          servicio, gestionar riesgos, atender reclamos y realizar gestión
          comercial; conforme a la normatividad vigente.
        </Checkbox>
        <a
          className={`${blockClass}__link`}
          href="https://www.proteccion.com/contenidos/persona/cesantias/ley-proteccion-datos-personales"
        >
          Consulta aquí la política de protección de datos
        </a>
        <input
          className={buttonClass}
          type="submit"
          value="Enviar"
          disabled={isDisabled}
        />
      </form>
    </>
  )
}

export default CompaniesDataUpdateForm
