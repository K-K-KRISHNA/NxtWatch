import styled from 'styled-components'

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? '#212121' : 'white')};
  justify-content: space-between;
  min-height: 90vh;
  width: 25vw;
  padding-top: 30px;
  margin-right: 0px;
  padding-right: 0px;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const EachContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 0px;
  height: 50px;
  align-items: center;
`
export const EachTab = styled.p`
  font-size: 20px;
  margin-left: 15px;
`
export const ActiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 20px;
  height: 50px;
  margin-bottom: 10px;
  align-items: center;
  font-weight: bolder;
  background-color: ${props => (props.isDark ? '#909090' : '#cccccc')};
`
export const Span = styled.span`
  color: ${props => props.color};
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDark ? 'white' : 'black')};
  padding-left: 10px;
`
export const Contact = styled.p`
  font-size: 20px;
  font-weight: bold;
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  color: #00306e;
`

export const EndNote = styled.p`
  font-size: 17px;
`
export const Logo = styled.img`
  width: 25%;
`
