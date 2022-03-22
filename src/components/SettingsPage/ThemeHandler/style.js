import styled from "styled-components"

export const Container = styled.div`
   max-width: 100%;
   width: 100%;
   margin-bottom: 40px;
`

export const Title = styled.p`
   max-width: 100%;
   width: 100%;
   font-size: 16px;
   color: #2d2d2d;
   margin-bottom: 5px;
`

export const MySelect = styled.select`
   font-size: 25px;
   border: 2px solid lightgray;
   border-radius: 3px;
   padding: 5px;
   background-color: #ededed;
   color: #2d2d2d;
   cursor: pointer;
   transition: border 0.3s;
   &:hover {
      border: 2px solid gray;
   }
`

export const OptionSelect = styled.option`
   cursor: pointer !important;
`

