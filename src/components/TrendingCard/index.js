import {
  CardContainer,
  Thumbnail,
  TitleHead,
  DescriptionContainer,
  ChannelName,
} from './styledComponents'

const TrendingCard = props => {
  const {data, isDark} = props
  const {channel, thumbnailUrl, title, viewCount} = data
  const {name} = channel
  return (
    <CardContainer isDark={isDark}>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
      <DescriptionContainer>
        <TitleHead>{title}</TitleHead>
        <ChannelName>{name}</ChannelName>
        <ChannelName>{`${viewCount} views * 2 Years Ago `}</ChannelName>
      </DescriptionContainer>
    </CardContainer>
  )
}

export default TrendingCard
