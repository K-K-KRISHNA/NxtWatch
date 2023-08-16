import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import {
  SideContainer,
  EachContainer,
  EachTab,
  TopContainer,
  ActiveContainer,
  Span,
  Contact,
  BottomContainer,
  IconContainer,
  EndNote,
  Logo,
} from './styledComponents'

const TabList = [
  {id: 1, tab: 'Home', icon: <AiFillHome size="25" />, path: '/'},
  {id: 2, tab: 'Trending', icon: <AiFillFire size="25" />, path: '/trending'},
  {id: 3, tab: 'Gaming', icon: <SiYoutubegaming size="25" />, path: '/gaming'},
  {
    id: 4,
    tab: 'Saved videos',
    icon: <BiListPlus size="25" />,
    path: '/saved-videos',
  },
]

const SideTabBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, activeTabId, changeTab} = value

      return (
        <SideContainer isDark={isDark}>
          <TopContainer isDark={isDark}>
            {TabList.map(eachValue => {
              const changeTheTab = () => changeTab(eachValue.tab)
              if (activeTabId !== eachValue.tab) {
                return (
                  <Link
                    to={eachValue.path}
                    key={eachValue.id}
                    style={{
                      textDecoration: 'none',
                      color: isDark ? 'white' : 'black',
                    }}
                  >
                    <EachContainer onClick={changeTheTab}>
                      {eachValue.icon}
                      <EachTab>{eachValue.tab}</EachTab>
                    </EachContainer>
                  </Link>
                )
              }
              return (
                <Link
                  to={eachValue.path}
                  key={eachValue.id}
                  style={{
                    textDecoration: 'none',
                    color: isDark ? 'white' : 'black',
                  }}
                >
                  <ActiveContainer isDark={isDark} onClick={changeTheTab}>
                    <Span color="#ff0000">{eachValue.icon}</Span>
                    <EachTab>{eachValue.tab}</EachTab>
                  </ActiveContainer>
                </Link>
              )
            })}
          </TopContainer>
          <BottomContainer isDark={isDark}>
            <Contact>CONTACT US</Contact>
            <IconContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconContainer>
            <EndNote>
              Enjoy! Now to see your channels and recommendations!
            </EndNote>
          </BottomContainer>
        </SideContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideTabBar
