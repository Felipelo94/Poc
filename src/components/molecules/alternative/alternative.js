import React, { useState } from 'react'
import './alternative.scss'
import { ReactComponent as PlusMenuIcon } from '../../../assets/images/plusplus-menu-blanco.svg'
import { ReactComponent as MinusMenuIcon } from '../../../assets/images/minusminus-menu-azul.svg'
import { AnimatePresence, motion } from 'framer-motion'
import ItemAlternative from '../../atoms/item-alternative/item-alternative'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'

const Alternative = ({ data }) => {
  const [indexTitle, setindexTitle] = useState(null)
  return (
    <div
      className="container-alternative"
      id="container-alternative"
      data-testid="container-alternative"
    >
      {data?.map((item, index) => {
        return (
          <div
            id={`container-alternative-item-${index}`}
            className="container-alternative-item"
            key={`container-alternative-item-${index}`}
          >
            <div
              id={`container-alternative-item-${index}-title`}
              style={{
                border:
                  indexTitle === item
                    ? '1px solid #292730'
                    : '1px solid #E2E7ED'
              }}
              onClick={() => {
                setindexTitle(indexTitle === item ? null : item)
                if (indexTitle !== item) {
                  clickWithScrollCenter(
                    document.getElementById(
                      `container-alternative-item-${index}-title`
                    )
                  )
                }
              }}
              className="container-alternative-item-title"
            >
              <span style={{ width: '100%' }}>{item.titulo}</span>
              {indexTitle === item ? (
                <MinusMenuIcon
                  style={{
                    filter:
                      'invert(27%) sepia(6%) saturate(1331%) hue-rotate(208deg) brightness(26%) contrast(93%)'
                  }}
                  alt="plus-alternative-close"
                />
              ) : (
                <PlusMenuIcon alt="plus-alternative-open" />
              )}
            </div>
            {indexTitle === item ? (
              <div>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0.75, translateY: -60 }}
                    animate={{ opacity: 1, scaleY: 1, translateY: 0 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    <ItemAlternative data={indexTitle} />
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
export default Alternative
