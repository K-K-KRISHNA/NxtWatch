import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import TrendingCard from '../TrendingCard'
import {
  TrendingContainer,
  TrendingHolder,
  TrendingHeadingHolder,
  Heading,
  TempDiv,
  IconHolder,
} from './styledComponents'

import {
  NoSearchImg,
  NotFoundHeading,
  SuggestionOnNoItems,
  RetryButton,
} from '../HomeRoute/styledComponents'

import ThemeContext from '../../Context/ThemeContext'

/* const tempData = {
  channel: {
    name: 'iB Cricket',
    profileImageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
  },
  id: '30b642bd-7591-49f4-ac30-5c538f975b15',
  publishedAt: 'Apr 19, 2019',
  thumbnailUrl:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
  title:
    'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
  viewCount: '1.4K',
} */

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  changeChannelObj = channel => ({
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  })

  changeToCamelCase = item => ({
    id: item.id,
    title: item.title,
    thumbnailUrl: item.thumbnail_url,
    channel: this.changeChannelObj(item.channel),
    viewCount: item.view_count,
    publishedAt: item.published_at,
  })

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(item =>
        this.changeToCamelCase(item),
      )
      this.setState(
        {
          trendingVideos: updatedData,
          apiStatus: apiStatusConstants.success,
        },
        console.log(updatedData),
      )
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  successView = isDark => {
    const {trendingVideos} = this.state
    return (
      <>
        {trendingVideos.map(eachItem => (
          <TrendingCard data={eachItem} key={eachItem.id} isDark={isDark} />
        ))}
      </>
    )
  }

  loadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </div>
  )

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
      <RetryButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </RetryButton>
    </>
  )

  renderSuitableView = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.successView(isDark)
      default:
        return this.failureView(isDark)
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <TrendingContainer>
                <SideTabBar />
                <TempDiv>
                  <TrendingHeadingHolder isDark={isDark}>
                    <IconHolder isDark={isDark}>
                      <AiFillFire color="red" size="30" />
                    </IconHolder>
                    <Heading>Trending</Heading>
                  </TrendingHeadingHolder>
                  <TrendingHolder isDark={isDark}>
                    {this.renderSuitableView(isDark)}
                  </TrendingHolder>
                </TempDiv>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingRoute
