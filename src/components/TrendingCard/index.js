import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
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
  const {data, isDark, changeTab} = props

  const {channel, thumbnailUrl, title, viewCount, publishedAt, id} = data
  const {name} = channel
  return (
    <Link
      to={`/videos/${id}`}
      style={{textDecoration: 'none', color: isDark ? 'white' : 'black'}}
    >
      <CardContainer isDark={isDark} onClick={changeTab}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <DescriptionContainer>
          <TitleHead>{title}</TitleHead>
          <ChannelName>{name}</ChannelName>
          <ChannelName>{`${viewCount} views . ${calculateSpan(
            publishedAt,
          )} years ago`}</ChannelName>
        </DescriptionContainer>
      </CardContainer>
    </Link>
  )
}

export default TrendingCard
