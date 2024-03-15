import PropTypes from 'prop-types'
import React from 'react'
import { useCurrentWidth } from 'react-socks'
import { gtmTSHComponentShare } from '../../../../const/dictionary/gtm-component-share'
import ButtonShare from '../../../atoms/button-share/button-share'
import Like from '../../../atoms/like/like'
import ComponentShare from '../../../molecules/component-share/component-share'
import './like-share.scss'

const LikeShare = props => {
  const {
    location,
    setShowOptionsShare,
    title = '',
    showOptionsShare = false,
    indexDBUser
  } = props

  return (
    <section className="like-container-share">
      <div className="like-container-share__margin">
        <Like
          indexDBUser={indexDBUser}
          pathname={location}
          item={{
            node: {}
          }}
          title={title}
          eventsGA={{
            MeGusta: {
              category: 'LikeShare',
              action: `ClicContenidos ${title}`,
              label: 'TeGustoEstaInformacion-MeGusta'
            },
            NoMeGusta: {
              category: 'LikeShare',
              action: `ClicContenidos ${title}`,
              label: 'TeGustoEstaInformacion-NoMeGusta'
            }
          }}
        />
      </div>
      <div className="like-container-share__share">
        <ButtonShare
          title={title}
          setIsShare={setShowOptionsShare}
          isShare={showOptionsShare}
        />
        <div
          id="container-share-options"
          style={{ display: showOptionsShare ? null : 'none' }}
          className={`container-share-options share-animation${
            showOptionsShare ? '-active' : '-inactive'
          }`}
        >
          <ComponentShare
            title={title}
            url={location.href}
            isActive={showOptionsShare}
            setIsShare={setShowOptionsShare}
            eventsGA={gtmTSHComponentShare(title, 'LandingDecretos')}
          />
        </div>
      </div>
    </section>
  )
}

LikeShare.propTypes = {
  title: PropTypes.string,
  location: PropTypes.object.isRequired,
  showOptionsShare: PropTypes.bool,
  setShowOptionsShare: PropTypes.func.isRequired
}

export default LikeShare
