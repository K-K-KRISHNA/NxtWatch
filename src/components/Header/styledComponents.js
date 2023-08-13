import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 30px;
  background-color: ${props => props.backgroundColor};
`

export const LogoIcon = styled.img`
  width: 50%;
  cursor: pointer;
`
export const RightHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`
export const ModeContainer = styled.div`
  color: ${props => props.iconColor};
  cursor: pointer;
  align-self: center;
`
