// import {Redirect} from 'react-router-dom'
import {withRouter, Link} from 'react-router-dom'
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
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  render() {
    //  const brColor = isDark ? 'white' : '#3b82f6'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, toggleTheme} = value
          const toggleMode = () => toggleTheme(isDark)
          const iconUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const bgColor = isDark ? 'black' : 'white'
          const iconColor = !isDark ? 'black' : 'white'
          return (
            <HeaderContainer backgroundColor={bgColor}>
              <Link to="/">
                <LogoIcon src={iconUrl} alt="website logo" />
              </Link>
              <RightHeaderContainer>
                <ModeContainer iconColor={iconColor} onClick={toggleMode}>
                  {isDark ? <BiSun size="40" /> : <FaMoon size="40" />}
                </ModeContainer>
                <FaUserCircle size="50" color="#94a3b8" />
                <LogoutPopup onClickLogout={this.onClickLogout} />
              </RightHeaderContainer>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
