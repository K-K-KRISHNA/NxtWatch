// import {Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BiSun} from 'react-icons/bi'
import {FaMoon, FaUserCircle} from 'react-icons/fa'
import {Component} from 'react'
import ThemeContext from '../../Context/ThemeContext'
import LogoutPopup from '../LogoutPopup'

import {
  HeaderContainer,
  LogoIcon,
  RightHeaderContainer,
  ModeContainer,
} from './styledComponents'

class Header extends Component {
  state = {isDark: false}

  toggleMode = () =>
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  render() {
    const {isDark} = this.state
    const iconUrl = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    const bgColor = isDark ? 'black' : 'white'
    const iconColor = !isDark ? 'black' : 'white'
    const brColor = isDark ? 'white' : '#3b82f6'

    return (
      <ThemeContext.Provider value={{isDark}}>
        <HeaderContainer backgroundColor={bgColor}>
          <LogoIcon src={iconUrl} alt="website logo" />
          <RightHeaderContainer>
            <ModeContainer iconColor={iconColor} onClick={this.toggleMode}>
              {isDark ? <BiSun size="40" /> : <FaMoon size="40" />}
            </ModeContainer>
            <FaUserCircle size="50" color="#94a3b8" />
            <LogoutPopup onClickLogout={this.onClickLogout} />
          </RightHeaderContainer>
        </HeaderContainer>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(Header)
