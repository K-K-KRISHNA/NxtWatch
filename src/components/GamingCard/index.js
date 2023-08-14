import {
  CardContainer,
  Thumbnail,
  TitleHead,
  ChannelName,
} from './styledComponents'

const GamingCard = props => {
  const {data, isDark} = props
  const {thumbnailUrl, title, viewCount} = data
  return (
    <CardContainer isDark={isDark}>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
      <TitleHead>{title}</TitleHead>
      <ChannelName>{`${viewCount} Watching World Wide `}</ChannelName>
    </CardContainer>
  )
}

export default GamingCard
