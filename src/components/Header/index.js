// import {Redirect} from 'react-router-dom'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BiSun} from 'react-icons/bi'
import {FaMoon} from 'react-icons/fa'

import {Component} from 'react'
import ThemeContext from '../../Context/ThemeContext'
import LogoutPopup from '../LogoutPopup'

import {
  HeaderContainer,
  LogoIcon,
  RightHeaderContainer,
  ModeContainer,
  ProfileImage,
  NavContainer,
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    //  const brColor = isDark ? 'white' : '#3b82f6'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, toggleTheme, changeTab} = value
          const toggleMode = () => toggleTheme(isDark)
          const iconUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const bgColor = isDark ? '#181818' : 'white'
          const iconColor = !isDark ? '#181818' : 'white'
          //
          return (
            <HeaderContainer backgroundColor={bgColor}>
              <NavContainer>
                <Link to="/">
                  <LogoIcon
                    onClick={() => changeTab('Home')}
                    src={iconUrl}
                    alt="website logo"
                  />
                </Link>
                <RightHeaderContainer>
                  <li>
                    <ModeContainer
                      iconColor={iconColor}
                      onClick={toggleMode}
                      data-testid="theme"
                    >
                      {isDark ? <BiSun size="40" /> : <FaMoon size="40" />}
                    </ModeContainer>
                  </li>
                  <li>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </li>
                  <LogoutPopup onClickLogout={this.onClickLogout} />
                </RightHeaderContainer>
              </NavContainer>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
