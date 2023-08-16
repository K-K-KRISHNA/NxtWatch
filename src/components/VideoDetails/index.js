import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import {
  HomeContainer,
  RemainContainer,
  LoaderContainer,
  NotFoundHeading,
  NoSearchImg,
  SuggestionOnNoItems,
  RetryButton,
} from '../HomeRoute/styledComponents'
import {
  VideoContainer,
  TitleHeading,
  ControlsBar,
  Bar,
  IconHolder,
  UserResponses,
  ChannelContainer,
  Logo,
  NameContainer,
  ChannelName,
  GrayPara,
  DescriptionOfVideo,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  processing: 'PROCESSING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    video: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getDetails()
  }

  changeChannelObj = channel => ({
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
    subscriberCount: channel.subscriber_count,
  })

  changeToCamelCase = item => ({
    id: item.id,
    title: item.title,
    thumbnailUrl: item.thumbnail_url,
    channel: this.changeChannelObj(item.channel),
    viewCount: item.view_count,
    publishedAt: item.published_at,
    videoUrl: item.video_url,
    description: item.description,
  })

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.processing})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.changeToCamelCase(data.video_details)
      this.setState({video: updatedData, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuitableView = isDark => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.failureView(isDark)
      case apiStatusConstants.success:
        return this.successView(isDark)
      default:
        return this.loadingView()
    }
  }

  loadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  calculateSpan = date => {
    const tempString = formatDistanceToNow(new Date(date))
    const words = tempString.split(' ')
    return words[1]
  }

  successView = (isDark, changeTab) => {
    const {video} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = video
    const {profileImageUrl, name, subscriberCount} = channel
    return (
      <VideoContainer isDark={isDark}>
        <ReactPlayer url={videoUrl} width="100%" height="600px" />
        <TitleHeading>{title}</TitleHeading>
        <ControlsBar>
          <p>{`${viewCount} views * ${this.calculateSpan(
            publishedAt,
          )} years ago`}</p>
          <UserResponses>
            <IconHolder>
              <BiLike size={20} />
              <p>Like</p>
            </IconHolder>
            <IconHolder>
              <BiDislike size={20} />
              <p>DisLike</p>
            </IconHolder>
            <IconHolder>
              <BiListPlus size={30} />
              <p>Save</p>
            </IconHolder>
          </UserResponses>
        </ControlsBar>
        <Bar />
        <ChannelContainer>
          <Logo src={profileImageUrl} alt="channel logo" />
          <NameContainer>
            <ChannelName>{name}</ChannelName>
            <GrayPara>{subscriberCount} subscribers</GrayPara>
          </NameContainer>
        </ChannelContainer>
        <DescriptionOfVideo>{description}</DescriptionOfVideo>
      </VideoContainer>
    )
  }

  failureView = isDark => (
    <>
      <NoSearchImg
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="no videos"
      />
      <NotFoundHeading isDark={isDark}>
        Oops! Something Went Wrong
      </NotFoundHeading>
      <SuggestionOnNoItems>
        We are having some trouble to complete your request. Please try again.
      </SuggestionOnNoItems>
      <RetryButton type="button" onClick={this.getDetails}>
        Retry
      </RetryButton>
    </>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {match} = this.props
          const {params} = match
          const {id} = params
          return (
            <>
              <Header />
              <HomeContainer>
                <SideTabBar />
                <RemainContainer isDark={isDark}>
                  {this.renderSuitableView(isDark)}
                </RemainContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
