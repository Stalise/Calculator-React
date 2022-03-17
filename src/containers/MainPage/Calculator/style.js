import styled from "styled-components"

export const CalculatorWrapper = styled.div`
   max-width: 1000px;
   width: 100%;
   height: 650px;
   background-color: ${props => props.theme.containerCalculator};
   border-radius: 5px;
   display: flex;
`

export const LeftContainer = styled.div`
   max-width: 800px;
   width: 100%;
   height: 100%;
`

export const RightContainer = styled.div`
   max-width: 200px;
   width: 100%;
   border-left: 2px solid lightgray;
`