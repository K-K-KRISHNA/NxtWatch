import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  text-decoration: none;
`
export const ThumbnailImage = styled.img`
  width: 330px;
`
export const ChannelContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 300px;
`
export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitlePara = styled.p`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-bottom: 5px;
  margin-top: 0px;
`
export const ChannelNamePara = styled.p`
  color: gray;
  margin-top: 5px;
  margin-bottom: 0px;
`

export const Views = styled.p`
  color: gray;
  font-size: 15px;
  margin-top: 0px;
`
