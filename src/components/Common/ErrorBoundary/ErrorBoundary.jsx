import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props)

      this.state = { errorStatus: false }
   }

   static propTypes = {
      children: PropTypes.node
   }

   static getDerivedStateFromError(error) {
      return { errorStatus: true }
   }

   componentDidCatch(error, info) {

      this.setState(() => {
         return { errorStatus: true }
      })
   }

   render() {
      if (this.state.errorStatus) {
         return <div>Oooops...something was wrong :(</div>
      }
      return this.props.children
   }
}

export default ErrorBoundary