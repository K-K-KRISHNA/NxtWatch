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
  UserResponses,
  ChannelContainer,
  Logo,
  NameContainer,
  ChannelName,
  GrayPara,
  DescriptionOfVideo,
  IconButton,
  RemainContainer2,
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
    isLiked: false,
    isDisliked: false,
    isSaved: false,
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

  toggleLiked = () => {
    const {isLiked, isDisliked} = this.state
    this.setState({isLiked: !isLiked})
    if (isDisliked) {
      this.setState({isDisliked: !isDisliked})
    }
  }

  toggleDisiked = () => {
    const {isLiked, isDisliked} = this.state
    this.setState({isDisliked: !isDisliked})
    if (isLiked) {
      this.setState({isLiked: !isLiked})
    }
  }

  successView = isDark => {
    const {video, isLiked, isSaved, isDisliked} = this.state
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
      <ThemeContext.Consumer>
        {value => {
          const {addSavedVideo, removeSavedVideo, savedVideos} = value
          const doopSaved = savedVideos.every(item => item.id !== video.id)
          const toggleSaved = () => {
            this.setState({isSaved: !isSaved})
            if (isSaved) {
              removeSavedVideo(video.id)
            } else if (savedVideos.every(item => item.id !== video.id)) {
              addSavedVideo(video)
            }
          }

          return (
            <VideoContainer isDark={isDark}>
              <ReactPlayer url={videoUrl} width="100%" height="600px" />
              <TitleHeading>{title}</TitleHeading>
              <ControlsBar>
                <p>{`${viewCount} views * ${this.calculateSpan(
                  publishedAt,
                )} years ago`}</p>
                <UserResponses>
                  <IconButton
                    check={isLiked}
                    type="button"
                    onClick={this.toggleLiked}
                  >
                    <BiLike size={20} />
                    Like
                  </IconButton>
                  <IconButton
                    check={isDisliked}
                    type="button"
                    onClick={this.toggleDisiked}
                  >
                    <BiDislike size={20} /> DisLike
                  </IconButton>
                  <IconButton
                    check={!doopSaved}
                    type="button"
                    onClick={toggleSaved}
                  >
                    <BiListPlus size={30} /> {!doopSaved ? 'Saved' : 'Save'}
                  </IconButton>
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
        }}
      </ThemeContext.Consumer>
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
        alt="failure view"
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
          return (
            <>
              <Header />
              <HomeContainer>
                <SideTabBar />
                <RemainContainer2
                  isDark={isDark}
                  data-testid="videoItemDetails"
                >
                  {this.renderSuitableView(isDark)}
                </RemainContainer2>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
