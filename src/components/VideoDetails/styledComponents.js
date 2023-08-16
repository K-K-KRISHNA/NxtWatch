import styled from 'styled-components'

export const VideoContainer = styled.div`
  width: 75vw;
  color: ${props => (props.isDark ? 'white' : 'black')};
  min-height: 100vh;
  padding: 30px;
`
export const TitleHeading = styled.h2``
export const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: gray;
  border-color: gray;
  padding-bottom: 10px;
`
export const Bar = styled.hr``

export const UserResponses = styled.div`
  display: flex;
  justify-content: space-around;
`
export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
`
export const ChannelContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
export const Logo = styled.img`
  width: 75px;
  margin-right: 20px;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.h1`
  font-size: 20px;
`
export const GrayPara = styled.p`
  color: gray;
  margin-top: 0px;
`
export const DescriptionOfVideo = styled.p`
  font-size: 25px;
  margin-left: 100px;
`
