import styled from "styled-components"

export const Button = styled.button`
   width: 100px;
   height: 100px;
   border: 2px solid #d9d9d9;
   border-radius: 10px;
   font-size: 35px;
   color: #2d2d2d;
   transition: border 0.3s, transform 0.3s;
   &:hover {
      border: 2px solid gray;
   }
   &:active {
      transform: scale(0.95, 0.95);
   }

${props => props.typeStyle === 'operator' && `
   background-color: #FFEFD5;
`}

${props => props.typeStyle === 'action' && `
   background-color: #FFE4E1;
`}
`