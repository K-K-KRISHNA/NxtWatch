import {Link} from 'react-router-dom'
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
  const {data, changeTab} = props
  const removeTab = () => {
    changeTab('kk')
  }
  const {channel, thumbnailUrl, title, viewCount, publishedAt, id} = data
  const {name, profileImageUrl} = channel
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        console.log(isDark)
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <Container onClick={removeTab}>
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
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default EachCard
