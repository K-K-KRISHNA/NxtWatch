import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import GamingCard from '../GamingCard'

import {
  NoSearchImg,
  NotFoundHeading,
  SuggestionOnNoItems,
  RetryButton,
} from '../HomeRoute/styledComponents'

import {
  GamingContainer,
  GamingHolder,
  GamingHeadingHolder,
  Heading,
  TempDiv,
  IconHolder,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  changeToCamelCase = item => ({
    id: item.id,
    title: item.title,
    thumbnailUrl: item.thumbnail_url,
    viewCount: item.view_count,
  })

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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
          videosList: updatedData,
          apiStatus: apiStatusConstants.success,
        },
        console.log(updatedData),
      )
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, changeTab} = value
          const successView = () => {
            const {videosList} = this.state
            return (
              <>
                {videosList.map(eachItem => (
                  <GamingCard
                    data={eachItem}
                    key={eachItem.id}
                    isDark={isDark}
                    changeTab={changeTab}
                  />
                ))}
              </>
            )
          }

          const loadingView = () => (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="blue" height="50" width="50" />
            </div>
          )
          const failureView = () => (
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
                We are having some trouble to complete your request. Please try
                again.
              </SuggestionOnNoItems>
              <RetryButton type="button" onClick={this.getGamingVideos}>
                Retry
              </RetryButton>
            </>
          )

          const renderSuitableView = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.inProgress:
                return loadingView()
              case apiStatusConstants.success:
                return successView()
              default:
                return failureView()
            }
          }

          return (
            <>
              <Header />
              <GamingContainer>
                <SideTabBar />
                <TempDiv>
                  <GamingHeadingHolder isDark={isDark}>
                    <IconHolder isDark={isDark}>
                      <SiYoutubegaming color="red" size="30" />
                    </IconHolder>
                    <Heading>Gaming</Heading>
                  </GamingHeadingHolder>
                  <GamingHolder isDark={isDark} data-testid="gaming">
                    {renderSuitableView()}
                  </GamingHolder>
                </TempDiv>
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GamingRoute
