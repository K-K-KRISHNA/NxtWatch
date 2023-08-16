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
  NotFoundHeading,
  SuggestionOnNoItems,
  RetryButton,
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

  renderSuitableView = (isDark, changeTab) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.successView(isDark, changeTab)
      default:
        return this.failureView(isDark)
    }
  }

  loadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderContainer>
  )

  successView = (isDark, changeTab) => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <>
          <NoSearchImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NotFoundHeading isDark={isDark}>
            No Search results found
          </NotFoundHeading>
          <SuggestionOnNoItems>
            Try different key words or remove search filter
          </SuggestionOnNoItems>
          <RetryButton type="button" onClick={this.getVideos}>
            Retry
          </RetryButton>
        </>
      )
    }
    return (
      <SuccessContainer>
        {videosList.map(eachData => (
          <EachCard data={eachData} key={eachData.id} changeTab={changeTab} />
        ))}
      </SuccessContainer>
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
      <RetryButton type="button" onClick={this.getVideos}>
        Retry
      </RetryButton>
    </>
  )

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
          const {isDark, changeTab} = value
          return (
            <>
              <Header />
              <HomeContainer>
                <SideTabBar />
                <RemainContainer isDark={isDark}>
                  {isBanner && (
                    <Banner data-testid="banner">
                      <PremiumSection>
                        <Logo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <Tagline>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </Tagline>
                        <GetitNowButton>GET IT NOW</GetitNowButton>
                      </PremiumSection>
                      <CrossButton data-testid="close">
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
                        data-testid="searchButton"
                      />
                      <Magnifier onClick={this.getVideos}>
                        <AiOutlineSearch />
                      </Magnifier>
                    </SearchBarHolder>
                  </TaleContainer>

                  {this.renderSuitableView(isDark, changeTab)}
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
