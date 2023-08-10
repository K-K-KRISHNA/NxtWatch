import styled from 'styled-components'

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  background-color: ${props => (props.isDark ? 'black' : ' #f9f9f9')};
`
export const Image = styled.img`
  width: 350px;
  height: 350px;
`

export const Heading = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const Description = styled.p`
  font-size: 20px;
  color: #94a3b8;
`
