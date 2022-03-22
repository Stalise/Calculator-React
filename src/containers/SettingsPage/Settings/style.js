import styled from "styled-components"

export const Wrapper = styled.div`
   max-width: 1000px;
   width: 100%;
   height: 650px;
   background-color: ${props => props.theme.containerCalculator};
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   padding: 20px;
`

export const Title = styled.h1`
   max-width: 100%;
   width: 100%;
   text-align: center;
   font-size: 35px;
   margin-bottom: 40px;
   color: #2d2d2d;
`

export const Content = styled.div`
   max-width: 100%;
   width: 100%;
`

export const ClearButton = styled.button`
   font-size: 25px;
   border: 2px solid lightgray;
   border-radius: 3px;
   padding: 5px;
   background-color: #ededed;
   color: #2d2d2d;
   transition: border 0.3s;
   &:hover {
      border: 2px solid gray;
   }
`