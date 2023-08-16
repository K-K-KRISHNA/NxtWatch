import {formatDistanceToNow} from 'date-fns'
import {
  CardContainer,
  Thumbnail,
  TitleHead,
  DescriptionContainer,
  ChannelName,
} from './styledComponents'

const calculateSpan = date => {
  const tempString = formatDistanceToNow(new Date(date))
  const words = tempString.split(' ')
  return words[1]
}

const TrendingCard = props => {
  const {data, isDark} = props
  const {channel, thumbnailUrl, title, viewCount, publishedAt} = data
  const {name} = channel
  return (
    <CardContainer isDark={isDark}>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
      <DescriptionContainer>
        <TitleHead>{title}</TitleHead>
        <ChannelName>{name}</ChannelName>
        <ChannelName>{`${viewCount} views . ${calculateSpan(
          publishedAt,
        )} years ago`}</ChannelName>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default TrendingCard
