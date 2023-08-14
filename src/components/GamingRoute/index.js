import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import GamingCard from '../GamingCard'

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
          const {isDark} = value
          const successView = () => {
            const {videosList} = this.state
            return (
              <>
                {videosList.map(eachItem => (
                  <GamingCard
                    data={eachItem}
                    key={eachItem.id}
                    isDark={isDark}
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
          const failureView = () => <h1>FailureView</h1>
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
                  <GamingHolder isDark={isDark}>
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
