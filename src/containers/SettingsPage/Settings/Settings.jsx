import React from 'react'
import { connect } from 'react-redux'
import { Wrapper, Title, Content, ClearButton } from './style'
import ThemeHandler from '@/components/SettingsPage/ThemeHandler/ThemeHandler'
import { clearHistoryAction } from '@/actions/historyReducer'

class Settings extends React.Component {
   constructor(props) {
      super(props)

      this.clearHistoryHandler = this.clearHistoryHandler.bind(this)
   }

   clearHistoryHandler() {
      this.props.dispatch(clearHistoryAction())
   }

   render() {
      return (
         <Wrapper>
            <Title>Your settings</Title>
            <Content>
               <ThemeHandler />
               <ClearButton type="button" onClick={() => this.clearHistoryHandler()} >Clear history</ClearButton>
            </Content>
         </Wrapper>
      )
   }
}

const mapStateToProps = state => {
   return (
      { history: state.history.history }
   )
}

export default connect(mapStateToProps)(Settings)