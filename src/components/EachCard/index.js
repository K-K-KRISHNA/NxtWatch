import {formatDistanceToNow} from 'date-fns'
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

const calculateSpan = date => {
  const tempString = formatDistanceToNow(new Date(date))
  const words = tempString.split(' ')
  return words[1]
}

const EachCard = props => {
  const {data} = props
  const {channel, thumbnailUrl, title, viewCount, publishedAt} = data
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
                <Views>{`${viewCount} views . ${calculateSpan(
                  publishedAt,
                )} years ago`}</Views>
              </DetailsContainer>
            </ChannelContainer>
          </Container>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default EachCard
