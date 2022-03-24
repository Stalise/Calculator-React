import React from 'react'
import PropTypes from 'prop-types'

import { LayoutWrapper } from './style'

const Layout = ({ children }) => {

   return (
      <LayoutWrapper>
         {children}
      </LayoutWrapper>
   )
}

Layout.propTypes = {
   children: PropTypes.node,
}

export default Layout