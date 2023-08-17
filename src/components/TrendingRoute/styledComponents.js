import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrendingHolder = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75vw;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f4f4f4')};
  color: ${props => (props.isDark ? 'white' : 'black')};
  padding: 30px;
  margin: 0px;
`
export const TrendingHeadingHolder = styled.div`
  display: flex;
  width: 75vw;
  background-color: ${props => (props.isDark ? '#231f20' : '#e2e8f0')};
  padding-left: 10vw;
  height: 15vh;
  align-items: center;
  margin;0px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const IconHolder = styled.div`
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 5vw;
  height: 11vh;
  background-color: ${props => (props.isDark ? 'black' : '#94a3b8')};
`
export const Heading = styled.h1`
  margin-left: 30px;
`
export const TempDiv = styled.div``
