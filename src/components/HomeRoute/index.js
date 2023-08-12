import Cookies from 'js-cookie'
import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Header from '../Header'
import SideTabBar from '../SideTabBar'

import {
  HomeContainer,
  RemainContainer,
  Logo,
  PremiumSection,
  Banner,
  Tagline,
  CrossButton,
  GetitNowButton,
} from './styledComponents'
// import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeRoute extends Component {
  state = {
    isBanner: true,
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      this.setState({apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuitableView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <h1>Loading.....</h1>
      case apiStatusConstants.success:
        return <h1>Successfully Fetched data...</h1>
      default:
        return <h1>Failed to Fetched the Data..</h1>
    }
  }

  closeBanner = () => this.setState({isBanner: false})

  render() {
    const {isBanner} = this.state

    return (
      <>
        <Header />
        <HomeContainer>
          <SideTabBar />
          <RemainContainer>
            {isBanner && (
              <Banner>
                <PremiumSection>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <Tagline>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </Tagline>
                  <GetitNowButton>GET IT NOW</GetitNowButton>
                </PremiumSection>
                <CrossButton>
                  <AiOutlineClose size="20" onClick={this.closeBanner} />
                </CrossButton>
              </Banner>
            )}
            {this.renderSuitableView()}
          </RemainContainer>
        </HomeContainer>
      </>
    )
  }
}

export default HomeRoute
