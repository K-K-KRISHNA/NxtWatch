import styled from 'styled-components'

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDark ? 'black' : 'cyan')};
  justify-content: space-between;
  height: 100vh;
  width: 20vw;
`
