import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? 'white' : 'blue')};
  border-color: ${props => (props.isDark ? 'white' : 'blue')};
  border-radius: 3px;
  height: 25px;
  width: 75px;
  text-align: center;
  align-self: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const TempDiv = styled.div``

export const PopupCancelButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDark ? 'gray' : 'black')};
  border-color: ${props => (props.isDark ? 'gray' : 'black')};
  border-radius: 3px;
  height: 25px;
  width: 75px;
  text-align: center;
  align-self: center;
  cursor: pointer;
`

export const PopupConfirmButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border-color: white;
  border-radius: 3px;
  height: 25px;
  width: 75px;
  text-align: center;
  align-self: center;
  cursor: pointer;
`

export const Container = styled.div`
  background-color: 'gray';
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${props => (props.isDark ? '#1e293b' : 'white')};
  border-radius: 10px;
  padding: 20px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const Confirmation = styled.p`
  font-weight: bolder;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const LogoutIcon = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
  background-color: transparent;
  color: ${props => (props.isDark ? 'white' : 'blue')};
  border-color: ${props => (props.isDark ? 'white' : 'blue')};
  border-radius: 3px;
  height: 25px;
  width: 75px;
  text-align: center;
  align-self: center;
  cursor: pointer;
`
