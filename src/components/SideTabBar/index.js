import {Link} from 'react-router-dom'
import {
  AiFillHome,
  AiFillFire,
  AiOutlinePlus,
  AiFillTwitterCircle,
  AiFillFacebook,
} from 'react-icons/ai'
import {ImLinkedin} from 'react-icons/im'
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
} from './styledComponents'

const TabList = [
  {id: 1, tab: 'Home', icon: <AiFillHome size="25" />, path: '/'},
  {id: 2, tab: 'Trending', icon: <AiFillFire size="25" />, path: '/trending'},
  {id: 3, tab: 'Gaming', icon: <SiYoutubegaming size="25" />, path: '/gaming'},
  {
    id: 4,
    tab: 'Saved videos',
    icon: <AiOutlinePlus size="25" />,
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
              <AiFillFacebook size="30" />
              <AiFillTwitterCircle size="30" />
              <ImLinkedin size="30" />
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
