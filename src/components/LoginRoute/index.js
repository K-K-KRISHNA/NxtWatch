import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import {
  BackgroundHolder,
  LoginForm,
  LogoImage,
  Label,
  CustomInput,
  CheckBoxHolder,
  CustomCheckBox,
  LoginButton,
  ErrorPara,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    isShowPassword: false,
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  toggleIsShowPassword = () =>
    this.setState(prevstate => ({isShowPassword: !prevstate.isShowPassword}))

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
    console.log('Entered in failure')
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    console.log('login successful')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {
            isShowPassword,
            username,
            password,
            showSubmitError,
            errorMsg,
          } = this.state
          const pwdType = isShowPassword ? 'text' : 'password'
          const fontColor = isDark ? 'white' : '#7e858e'
          const bgcolor = isDark ? '#212121' : 'white'
          const loginCardBgColor = isDark ? '#0f0f0f' : 'white'
          const borderColor = isDark ? 'gray' : 'transparent'
          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <BackgroundHolder bgcolor={bgcolor}>
              <LoginForm
                loginCardBgColor={loginCardBgColor}
                fontColor={fontColor}
                onSubmit={this.submitForm}
              >
                <LogoImage src={logoUrl} alt="website logo" />
                <Label htmlFor="username">USERNAME</Label>
                <CustomInput
                  type="text"
                  borderColor={borderColor}
                  placeholder="Username"
                  id="username"
                  fontColor={fontColor}
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <Label htmlFor="password">PASSWORD</Label>
                <CustomInput
                  type={pwdType}
                  borderColor={borderColor}
                  placeholder="Password"
                  id="password"
                  value={password}
                  fontColor={fontColor}
                  onChange={this.onChangePassword}
                />
                <CheckBoxHolder>
                  <CustomCheckBox
                    type="checkbox"
                    id="showPassword"
                    onClick={this.toggleIsShowPassword}
                  />
                  <Label htmlFor="showPassword">Show Password</Label>
                </CheckBoxHolder>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorPara>*{errorMsg}</ErrorPara>}
              </LoginForm>
            </BackgroundHolder>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
