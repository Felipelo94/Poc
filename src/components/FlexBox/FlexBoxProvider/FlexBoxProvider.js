import React from 'react'
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks'

import PropTypes from 'prop-types'

setDefaultBreakpoints([
  { xs: 544 },
  { sm: 768 },
  { md: 992 },
  { ml: 1024 },
  { lg: 1200 },
  { xl: 1400 }
])
const FlexBoxProvider = ({ children }) => {
  return <BreakpointProvider>{children}</BreakpointProvider>
}

FlexBoxProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default FlexBoxProvider
