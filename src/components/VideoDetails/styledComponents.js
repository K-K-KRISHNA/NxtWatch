import styled from 'styled-components'

export const VideoContainer = styled.div`
  width: 75vw;
  color: ${props => (props.isDark ? 'white' : 'black')};
  min-height: 100vh;
  padding: 30px;
`
export const TitleHeading = styled.p``
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
export const ChannelContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`
export const Logo = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 20px;
`
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
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
export const IconButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.check ? '#2563eb' : '#64748b')};
  align-items: center;
  display: flex;
  cursor: pointer;
`
export const RemainContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f4f4f4')};
`
