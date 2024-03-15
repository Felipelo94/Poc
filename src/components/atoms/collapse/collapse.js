import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { clickWithScrollCenter } from '../../../utils/commons-event-content'

const Collapse = ({
  children,
  className,
  activateContentScroll = true,
  id = 'collapse',
  isOpen = false
}) => {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isOpen && !isFirstRender.current && activateContentScroll) {
      clickWithScrollCenter(
        document.getElementById(`collapse-component-${id}`),
        100
      )
    }
  }, [id, isOpen, activateContentScroll])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
    }
  }, [])

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, height: 0 }}
          className={className}
          id={`collapse-component-${id}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Collapse.propTypes = {
  isOpen: PropTypes.bool,
  activateContentScroll: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string
}

export default Collapse
