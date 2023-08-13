import ThemeContext from '../../Context/ThemeContext'
import {
  Container,
  ThumbnailImage,
  ChannelContainer,
  ProfilePic,
  DetailsContainer,
  TitlePara,
  ChannelNamePara,
  Views,
} from './styledComponents'

const EachCard = props => {
  const {data} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = data
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        console.log(isDark)
        return (
          <Container>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ChannelContainer>
              <ProfilePic src={profileImageUrl} alt="channel logo" />
              <DetailsContainer>
                <TitlePara isDark={isDark}>{title}</TitlePara>
                <ChannelNamePara>{name}</ChannelNamePara>
                <Views>{`${viewCount} views . 2 years ago`}</Views>
              </DetailsContainer>
            </ChannelContainer>
          </Container>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default EachCard
