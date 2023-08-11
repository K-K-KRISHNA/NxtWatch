import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire, AiOutlinePlus} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import {
  SideContainer,
  EachContainer,
  EachTab,
  TopContainer,
  ActiveContainer,
  Span,
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
        </SideContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideTabBar
