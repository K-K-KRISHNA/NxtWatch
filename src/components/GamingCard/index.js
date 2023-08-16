import {Link} from 'react-router-dom'
import {
  CardContainer,
  Thumbnail,
  TitleHead,
  ChannelName,
} from './styledComponents'

const GamingCard = props => {
  const {data, isDark, changeTab} = props
  const {thumbnailUrl, title, viewCount, id} = data
  return (
    <Link
      to={`/videos/${id}`}
      style={{textDecoration: 'none', color: isDark ? 'white' : 'black'}}
    >
      <CardContainer isDark={isDark} onClick={changeTab}>
        <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
        <TitleHead>{title}</TitleHead>
        <ChannelName>{`${viewCount} Watching World Wide `}</ChannelName>
      </CardContainer>
    </Link>
  )
}

export default GamingCard
