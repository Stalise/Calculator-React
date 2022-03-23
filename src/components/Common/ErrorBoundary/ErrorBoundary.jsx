import React from 'react'
import PropTypes from 'prop-types'

import { BoundaryWrapper, Message } from './style'

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props)

      this.state = { errorStatus: false }
   }

   static propTypes = {
      children: PropTypes.node,
   }

   static getDerivedStateFromError(error) {
      console.log(error)
      return { errorStatus: true }
   }

   componentDidCatch(error, info) {

      console.log(error)
      this.setState(() => {
         return { errorStatus: true }
      })
   }

   render() {
      if (this.state.errorStatus) {
         return (
            <BoundaryWrapper>
               <Message>Oooops...something was wrong :(</Message>
            </BoundaryWrapper>
         )
      }
      return this.props.children
   }
}

export default ErrorBoundary