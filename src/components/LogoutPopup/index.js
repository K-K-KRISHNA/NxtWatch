import {Component} from 'react'
import Popup from 'reactjs-popup'
import ThemeContext from '../../Context/ThemeContext'

import {
  PopupContainer,
  LogoutButton,
  Container,
  Confirmation,
  Buttons,
  PopupCancelButton,
  PopupConfirmButton,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

class LogoutPopup extends Component {
  render() {
    const {onClickLogout} = this.props

    const ConfirmLogout = () => {
      onClickLogout()
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <PopupContainer>
              <Popup
                modal
                trigger={
                  <LogoutButton modal isDark={isDark}>
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <Container isDark={isDark}>
                    <Confirmation>
                      Are you Sure, You want to Logout
                    </Confirmation>
                    <Buttons>
                      <PopupCancelButton
                        isDark={isDark}
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupCancelButton>
                      <PopupConfirmButton onClick={ConfirmLogout}>
                        Confirm
                      </PopupConfirmButton>
                    </Buttons>
                  </Container>
                )}
              </Popup>
            </PopupContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LogoutPopup
