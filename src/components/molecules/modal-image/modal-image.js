import React from 'react'
import PropTypes from 'prop-types'
import './modal-image.scss'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { ReactComponent as CloseModalIcon } from '../../../assets/images/close-modal.svg'
import { ReactComponent as ZoomInIcon } from '../../../assets/images/zoom-in.svg'
import { ReactComponent as ZoomOutIcon } from '../../../assets/images/zoom-out.svg'

const ModalImage = ({ image, alt, close, id }) => {
  const clickModal = event => {
    if (event.target.getAttribute('id') === 'modal-body-' + id) close()
  }

  return (
    <div className="container-image-modal">
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <React.Fragment>
            <div className="container-image-modal-header">
              <ZoomInIcon
                id={`zoomin-${id}`}
                role="presentation"
                onClick={zoomIn}
                onKeyDown={zoomIn}
                alt="modal-zoom-in"
              />
              <ZoomOutIcon
                style={{ marginLeft: 28 }}
                id={`zoomout-${id}`}
                role="presentation"
                onClick={zoomOut}
                onKeyDown={zoomOut}
                alt="modal-zoom-out"
              />
              <div
                style={{ marginLeft: 80 }}
                id={`close-${id}`}
                role="presentation"
                onClick={close}
                onKeyDown={close}
              >
                <CloseModalIcon alt="modal-close" />
              </div>
            </div>
            <div
              id={`modal-body-${id}`}
              role="presentation"
              onClick={e => clickModal(e)}
              onKeyDown={e => {
                clickModal(e)
              }}
              className="container-image-modal-body"
            >
              <TransformComponent>
                <img src={image} alt={alt} id={`modal-img-${id}`} />
              </TransformComponent>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  )
}

ModalImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string
}

export default ModalImage
