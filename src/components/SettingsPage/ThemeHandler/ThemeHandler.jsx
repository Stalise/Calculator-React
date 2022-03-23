import React from 'react'
import { connect } from 'react-redux'
import { changeThemeAction } from '@/actions/themeReducer'
import { Container, Title, MySelect, OptionSelect } from './style'

class ThemeHandler extends React.Component {
   constructor(props) {
      super(props)

      this.changeSelect = this.changeSelect.bind(this)
   }

   // меняем тему в сторе редакса
   changeSelect(typeTheme) {
      this.props.dispatch(changeThemeAction(typeTheme))
   }

   render() {
      return (
         <Container>
            <Title>Theme handler</Title>
            <MySelect
               name="theme"
               defaultValue={this.props.theme}
               onChange={e => this.changeSelect(e.target.value)}
            >
               <OptionSelect value="light">Light</OptionSelect>
               <OptionSelect value="dark">Dark</OptionSelect>
            </MySelect>
         </Container>
      )
   }
}

const mapStateToProps = state => {
   return (
      { theme: state.theme.currentTheme }
   )
}

export default connect(mapStateToProps)(ThemeHandler)