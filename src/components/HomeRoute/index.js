import Cookies from 'js-cookie'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import EachCard from '../EachCard'
import SideTabBar from '../SideTabBar'

import {
  HomeContainer,
  RemainContainer,
  Logo,
  PremiumSection,
  Banner,
  Tagline,
  CrossButton,
  SearchBarHolder,
  GetitNowButton,
  CustomSearchBar,
  TaleContainer,
  Magnifier,
  SuccessContainer,
  LoaderContainer,
  NoSearchImg,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

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
    videosList: [],
    searchValue: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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

  renderSuitableView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.successView()
      default:
        return this.failureView()
    }
  }

  loadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  successView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <>
          <NoSearchImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
        </>
      )
    }
    return (
      <SuccessContainer>
        {videosList.map(eachData => (
          <EachCard data={eachData} key={eachData.id} />
        ))}
      </SuccessContainer>
    )
  }

  failureView = () => <h1>FailureView</h1>

  onChangeSearchInput = event =>
    this.setState({searchValue: event.target.value})

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

  closeBanner = () => this.setState({isBanner: false})

  render() {
    const {isBanner, searchValue} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <SideTabBar />
                <RemainContainer isDark={isDark}>
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
                  <TaleContainer>
                    <SearchBarHolder>
                      <CustomSearchBar
                        placeholder="Search"
                        type="search"
                        isDark={isDark}
                        onChange={this.onChangeSearchInput}
                        value={searchValue}
                      />
                      <Magnifier onClick={this.getVideos}>
                        <AiOutlineSearch />
                      </Magnifier>
                    </SearchBarHolder>
                  </TaleContainer>

                  {this.renderSuitableView()}
                </RemainContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeRoute
