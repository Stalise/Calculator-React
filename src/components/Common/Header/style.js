import styled from "styled-components"

export const HeaderWrapper = styled.div`
   max-width: 100%;
   width: 100%;
   height: 70px;
   background-color: #2d2d2d;
   padding: 0 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const LogoTitle = styled.p`
   font-size: 27px;
   color: #ffffff;
   letter-spacing: 0.5px;
`

export const ButtonContainer = styled.div`
   max-width: 170px;
   width: 100%;
   display: flex;
   justify-content: space-between;
`

export const LinkText = styled.p`
   color: gray;
   padding: 6px 8px;
   background-color: #fff;
   font-size: 20px;
   transition: color 0.3s, transform 0.3s;
   border-radius: 3px;
   &:hover {
      color: #000;
   }
   &:active {
      transform: scale(0.95, 0.95);
   }
`