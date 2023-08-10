import {Component} from 'react'
import {FiLogOut} from 'react-icons/fi'
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
  LogoutIcon,
  TempDiv,
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
                  <TempDiv>
                    <LogoutButton modal isDark={isDark}>
                      Logout
                    </LogoutButton>
                    <LogoutIcon modal isDark={isDark}>
                      <FiLogOut />
                    </LogoutIcon>
                  </TempDiv>
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
