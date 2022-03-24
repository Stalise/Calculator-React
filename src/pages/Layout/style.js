import styled from "styled-components"

export const LayoutWrapper = styled.div`
   min-height: 100vh;
   width: 100%;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: ${props => props.theme.wrapperBackground};
`