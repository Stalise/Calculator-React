import React from 'react'
import { useSelector } from 'react-redux'
import { HistoryCotainer, Title, List, ListItem } from './style'

const History = () => {

   const { history } = useSelector(state => state.history)

   const getResultValue = elem => {
      return Object.values(elem).join(' ')
   }

   return (
      <HistoryCotainer>
         <Title>History</Title>
         <List>
            {history.map(elem => {
               return (
                  <ListItem key={Object.values(elem).join('')}>
                     {getResultValue(elem)}
                  </ListItem>)
            })}
         </List>
      </HistoryCotainer>
   )
}

export default History