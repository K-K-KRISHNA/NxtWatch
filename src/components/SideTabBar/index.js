// import {AiFillHome, AiFillFire, AiOutlinePlus} from 'react-icons/ai'
// import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import {SideContainer} from './styledComponents'

/* const TabList = [
  {id: 1, tab: 'Home', icon: <AiFillHome />},
  {id: 2, tab: 'Trending', icon: <AiFillFire />},
  {id: 3, tab: 'Gaming', icon: <SiYoutubegaming />},
  {id: 4, tab: 'Saved videos', icon: <AiOutlinePlus />},
] */

const SideTabBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return <SideContainer isDark={isDark} />
    }}
  </ThemeContext.Consumer>
)

export default SideTabBar
