// import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {formatDistanceToNow} from 'date-fns'
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
} from '../TrendingRoute/styledComponents'
import {
  NoSearchImg,
  NotFoundHeading,
  SuggestionOnNoItems,
} from '../HomeRoute/styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const tempData = {
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
}

class SavedRoute extends Component {
  successView = (isDark, savedVideos) => {
    console.log(formatDistanceToNow(new Date(tempData.publishedAt)))
    if (savedVideos.length === 0) {
      return (
        <>
          <NoSearchImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NotFoundHeading isDark={isDark}>
            No saved Videos found
          </NotFoundHeading>
          <SuggestionOnNoItems>
            You can save your videos while watching them
          </SuggestionOnNoItems>
        </>
      )
    }
    return (
      <>
        {savedVideos.map(eachItem => (
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

  failureView = () => <h1>FailureView</h1>

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value
          return (
            <>
              <Header />
              <TrendingContainer>
                <SideTabBar />
                <TempDiv>
                  <TrendingHeadingHolder isDark={isDark}>
                    <IconHolder isDark={isDark}>
                      <AiOutlinePlus color="red" size="30" />
                    </IconHolder>
                    <Heading>Saved Videos</Heading>
                  </TrendingHeadingHolder>
                  <TrendingHolder isDark={isDark}>
                    {this.successView(isDark, savedVideos)}
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

export default SavedRoute
