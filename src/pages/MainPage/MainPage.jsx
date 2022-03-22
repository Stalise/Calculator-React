import React from 'react'
import { Wrapper } from './style'
import Header from '@/components/Common/Header/Header'
import Calculator from '@/containers/MainPage/Calculator/Calculator'

const MainPage = () => {

   return (
      <Wrapper>
         <Header />
         <Calculator />
      </Wrapper>
   )
}

export default MainPage