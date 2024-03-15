import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { ReactComponent as DislikeIcon } from '../../../assets/images/dislikenoactive.svg'
import { ReactComponent as LikeDefaultIcon } from '../../../assets/images/likenoactive.svg'
import {
  getSubCategoryNameWhenIsPensionAndPerson,
  removeAccents,
  sendEventGA,
  sendGaPush
} from '../../../utils/classGtmUtil'
import useGetUserInfoIndexDBState from './../../../hooks/useGetUserInfoIndexDBState'
import RadioButton from '../radio-button'
import { postApiPreHome } from '../../../services/service-pre-home/service-pre-home'
import { URL_SERVICES } from '../../../utils/paramApplication'
import Alert from './../../atoms/alert-like/alert'
import './like.scss'

const Like = props => {
  const { title, pathname, eventsGA, indexDBUser } = props

  const userInfo = useGetUserInfoIndexDBState()
  const [likeButton, setLikeButton] = useState(false)
  const [dislikeButton, setDislikeButton] = useState(false)
  const [comment, setComment] = useState(null)
  const [option, setOption] = useState(null)
  const [alert, setAlert] = useState(null)
  const [disableLike, setDisableLike] = useState(false)

  let ruta = pathname ? pathname.pathname : ''

  const setLikeAndDislikeStates = () => {
    const like =
      sessionStorage.getItem(pathname ? pathname.pathname : '') === '1'
    const dislike =
      sessionStorage.getItem(pathname ? pathname.pathname : '') === '2'
    setLikeButton(like)
    setDislikeButton(dislike)
  }

  useEffect(() => {
    setLikeAndDislikeStates()
  }, [ruta])

  useEffect(() => {
    setComment(null)
  }, [option])

  const sendEventGAButton = buttonName => {
    if (!!eventsGA?.[buttonName] ?? false) {
      sendEventGA(
        eventsGA?.[buttonName].category,
        eventsGA?.[buttonName].action,
        eventsGA?.[buttonName].label
      )
    }
  }

  const clickButtonLike = (likeBtnp, dislike, action) => {
    const currentType = userInfo.type === 2 ? 'Empresa' : 'Persona'
    setLikeButton(likeBtnp)
    setDislikeButton(dislike)
    sessionStorage.setItem(
      window.location.pathname,
      likeBtnp ? 1 : dislike ? 2 : 0
    )
    sendEventGAButton(action)
    if (!eventsGA) {
      sendGaPush(
        removeAccents(userInfo.category),
        `Clic${currentType}${getSubCategoryNameWhenIsPensionAndPerson(
          currentType === 'Persona' ? 1 : 2,
          removeAccents(userInfo.category),
          userInfo.subcategory
        )}-ContenidosTeGustoEstaInformacion-${action}`,
        title
      )
    }
  }

  const generateDataLike = () => {
    setDisableLike(true)
    const feedBackInfo = {
      comando: {
        nombre: 'feedback.saved',
        payload: {
          nameCostumer: indexDBUser ? indexDBUser.nameuser : 'Anónimo',
          comment: comment,
          hostUser: {
            host: indexDBUser ? indexDBUser.host : 'Anónimo',
            state: 1
          },
          like:
            likeButton && !dislikeButton
              ? 'SI'
              : !likeButton && dislikeButton
              ? 'NO'
              : '',
          option: option,
          contentName: title || ''
        }
      }
    }

    postApiPreHome(
      JSON.stringify(feedBackInfo),
      `${URL_SERVICES}commands`,
      setDisableLike,
      setAlertDetailsAndShow
    )
  }

  const setAlertDetailsAndShow = (
    alertDetails,
    doAfterAlertEnds = () => {}
  ) => {
    setAlert(
      <Alert
        alertMessage={alertDetails.message}
        alertType={alertDetails.type}
        onAlertEnd={onAlertEnd}
        doAfterAlertEnds={doAfterAlertEnds}
      />
    )
  }

  const onAlertEnd = () => {
    setAlert(null)
  }

  return (
    <>
      {alert}
      <section
        className="like-container"
        id="container-like"
        style={{ flexDirection: 'column' }}
      >
        <section className="like-container">
          <p className="like-container-title" id="container-like-title">
            <span id="container-like-title-text">
              ¿Te gustó esta información?
            </span>
          </p>
          <button
            className={`like-container-like ${
              likeButton ? 'like-container-selected' : ' '
            }`}
            id="likeDefault"
            onClick={() => {
              clickButtonLike(!likeButton, false, 'MeGusta')
            }}
          >
            <LikeDefaultIcon
              className={
                likeButton ? 'like-container-active' : 'like-container-inactive'
              }
              alt={`Ícono de mano indicando "bien", que indica que te gustó y fue útil un contenido `}
              title="Ícono de Me gusta"
              id="likeDefault-like-image"
            />
          </button>
          <button
            className={`like-container-like ${
              dislikeButton ? 'like-container-selected' : ''
            } `}
            id="noLike"
            onClick={() => {
              clickButtonLike(false, !dislikeButton, 'NoMeGusta')
            }}
          >
            <DislikeIcon
              className={
                dislikeButton
                  ? 'like-container-active'
                  : 'like-container-inactive'
              }
              alt={`Ícono de mano indicando "mal", que indica que no te gustó o no fue útil un contenido`}
              title="Ícono de No me gusta"
              id="no-like-image"
            />
          </button>
        </section>
        {likeButton && !dislikeButton && (
          <section className="like-container-comment">
            <p className="like-container-comment-text">¡Cuéntanos!</p>
            <textarea
              className="like-container-comment-value"
              maxLength={350}
              placeholder="Genial, cuéntanos de qué forma podríamos mejorar este contenido (Opcional)"
              onChange={e => {
                setComment(e.target.value)
              }}
            />
            <div className="like-container-comment-button">
              <input
                disabled={disableLike}
                onClick={generateDataLike}
                className="button-container__button--primary"
                style={
                  disableLike
                    ? {
                        background: '#E2E7ED',
                        color: '#626277'
                      }
                    : {}
                }
                type="submit"
                name="submit"
                value="Enviar"
                tabIndex="0"
              />
            </div>
          </section>
        )}
        {!likeButton && dislikeButton && (
          <section className="like-container-comment">
            <RadioButton
              id="secondradio-No resolvió mis dudas"
              name="secondQuestionNo resolvió mis dudas"
              onChangeRadio={({ target: { value } }) => setOption(value)}
              checked={option === 'No resolvió mis dudas'}
              value="No resolvió mis dudas"
            >
              <span style={{ marginLeft: 10 }}>No resolvió mis dudas</span>
            </RadioButton>
            <RadioButton
              id="secondradio-El contenido está muy largo"
              name="secondQuestionEl contenido está muy largo"
              onChangeRadio={({ target: { value } }) => setOption(value)}
              checked={option === 'El contenido está muy largo'}
              value="El contenido está muy largo"
            >
              <span style={{ marginLeft: 10 }}>
                El contenido está muy largo
              </span>
            </RadioButton>
            <RadioButton
              id="secondradio-La información no es clara"
              name="secondQuestionLa información no es clara"
              onChangeRadio={({ target: { value } }) => setOption(value)}
              checked={option === 'La información no es clara'}
              value="La información no es clara"
            >
              <span style={{ marginLeft: 10 }}>La información no es clara</span>
            </RadioButton>
            <RadioButton
              id="secondradio-Otro"
              name="secondQuestionOtro"
              onChangeRadio={({ target: { value } }) => setOption(value)}
              checked={option === 'Otro'}
              value="Otro"
            >
              <span style={{ marginLeft: 10 }}>Otro</span>
            </RadioButton>
            {option === 'Otro' && (
              <textarea
                className="like-container-comment-value"
                maxLength={350}
                placeholder="¿Cuál?"
                onChange={e => {
                  setComment(e.target.value)
                }}
              />
            )}
            <div className="like-container-comment-button">
              {likeButton && !dislikeButton ? (
                <input
                  disabled={disableLike}
                  onClick={generateDataLike}
                  className="button-container__button--primary"
                  style={
                    disableLike
                      ? {
                          background: '#E2E7ED',
                          color: '#626277'
                        }
                      : {}
                  }
                  type="submit"
                  name="submit"
                  value="Enviar"
                  tabIndex="0"
                />
              ) : (
                !likeButton &&
                dislikeButton && (
                  <input
                    disabled={!option || disableLike}
                    onClick={generateDataLike}
                    className="button-container__button--primary"
                    style={
                      !option || disableLike
                        ? {
                            background: '#E2E7ED',
                            color: '#626277'
                          }
                        : {}
                    }
                    type="submit"
                    name="submit"
                    value="Enviar"
                    tabIndex="0"
                  />
                )
              )}
            </div>
          </section>
        )}
      </section>
    </>
  )
}

Like.defaultProps = {
  eventsGA: {}
}

Like.propTypes = {
  eventsGA: PropTypes.shape({
    MeGusta: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }),
    NoMeGusta: PropTypes.shape({
      category: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  })
}

export default Like
