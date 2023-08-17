import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
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
export const ModeContainer = styled.button`
  color: ${props => props.iconColor};
  cursor: pointer;
  align-self: center;
  background-color: transparent;
  border-width: 0px;
`
export const ProfileImage = styled.img`
  width: 50px;
`
export const NavContainer = styled.ul`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`
