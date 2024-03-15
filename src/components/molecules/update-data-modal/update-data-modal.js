import React, { useEffect } from 'react'
import { ReactComponent as CloseIcon } from '../../../assets/images/close-x.svg'
import { enableBody, disableBody } from '../../../utils/body-scroll-lock'
import useUpdateDataModal from '../../../hooks/useUpdateDataModal/useUpdateDataModal'
import ModalPortal from '../../../utils/modal-portal/modal-portal'
import RichText from '../../../utils/rich-text/rich-text'
import './update-data-modal.scss'

const UpdateDataModal = ({
  onCloseModal,
  isForCompanies,
  setShowUpdateDataModal,
  reset
}) => {
  const EMPTY_CONTENTFUL_FIELD = 'null'
  const blockClass = 'update-data-modal'

  try {
    const {
      title,
      subtitle,
      relevantInfo,
      firstCallToActionText,
      firstCallToActionUrl,
      secondCallToActionText,
      secondCallToActionUrl,
      icon,
      image,
      content
    } = useUpdateDataModal(isForCompanies)

    const bothCallToActionClass =
      firstCallToActionText && secondCallToActionText !== EMPTY_CONTENTFUL_FIELD
        ? `${blockClass}__cta--both`
        : ''

    useEffect(() => {
      disableBody()

      return () => {
        enableBody()
      }
    }, [])

    return (
      <ModalPortal>
        <div className={blockClass}>
          <section className={`${blockClass}__container`}>
            <header className={`${blockClass}__header`}>
              <img
                className={`${blockClass}__header-image`}
                alt={icon.description}
                src={icon.file.url}
                width="30px"
                height="30px"
              />
              <h2 className={`${blockClass}__title`}>{title}</h2>
              <button
                className={`${blockClass}__close-button`}
                onClick={onCloseModal}
              >
                <CloseIcon />
              </button>
            </header>
            <img
              className={`${blockClass}__image`}
              alt={image.description}
              src={image.file.url}
              width="100%"
              height="209px"
            />
            <section className={`${blockClass}__content`}>
              <h3 className={`${blockClass}__subtitle`}>{subtitle}</h3>
              {relevantInfo !== EMPTY_CONTENTFUL_FIELD && (
                <span className={`${blockClass}__relevant-info`}>
                  {relevantInfo}
                </span>
              )}
              <RichText text={content} lineHeight="22px" fontSize="15px" />
            </section>
            <hr className={`${blockClass}__separator`} />
            <footer className={`${blockClass}__links`}>
              {firstCallToActionText !== EMPTY_CONTENTFUL_FIELD && (
                <a
                  className={`${blockClass}__cta ${blockClass}__cta--primary`}
                  href={firstCallToActionUrl}
                >
                  {firstCallToActionText}
                </a>
              )}
              {secondCallToActionText !== EMPTY_CONTENTFUL_FIELD && (
                <a
                  className={`${blockClass}__cta ${blockClass}__cta--secondary ${bothCallToActionClass}`}
                  href={secondCallToActionUrl}
                >
                  {secondCallToActionText}
                </a>
              )}
            </footer>
          </section>
        </div>
      </ModalPortal>
    )
  } catch {
    setShowUpdateDataModal(false)
    reset()
    return null
  }
}

export default UpdateDataModal
