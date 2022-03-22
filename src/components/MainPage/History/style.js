import styled from "styled-components"

export const HistoryCotainer = styled.div`
   max-width: 100%;
   width: 100%;
   height: 100%;
`

export const Title = styled.p`
   font-size: 20px;
   text-align: center;
   height: 50px;
   padding-top: 20px;
   margin-bottom: 10px;
`

export const List = styled.ul`
   max-width: 100%;
   width: 100%;
   padding: 0 20px;
`

export const ListItem = styled.li`
   font-size: 18px;
   color: gray;
   word-wrap: break-word;
   line-height: 20px;
   &:not(:last-child) {
      margin-bottom: 15px;
   }
`