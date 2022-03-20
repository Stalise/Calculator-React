import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { Wrapper, Title, Content, ClearButton } from './style';
import ThemeHandler from '@/components/SettingsPage/ThemeHandler/ThemeHandler';
import { clearHistoryAction } from '@/store/reducers/historyReducer/historyReducer';
import { myCalculator } from '@/utils/calculatorFilter';

class Settings extends React.Component {
   constructor(props) {
      super(props)

      this.clearHistoryHandler = this.clearHistoryHandler.bind(this)
   }

   clearHistoryHandler() {
      this.props.dispatch(clearHistoryAction())
      myCalculator.reset()
   }

   render() {
      return (
         <Wrapper>
            <Title>Your settings</Title>
            <Content>
               <ThemeHandler />
               <ClearButton type='button' onClick={() => this.clearHistoryHandler()} >Clear history</ClearButton>
            </Content>
         </Wrapper>
      )
   }
}

export default connect(state => ({ history: state.history.history }))(Settings);