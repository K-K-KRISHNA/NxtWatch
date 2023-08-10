import ThemeContext from '../../Context/ThemeContext'
import {ImageContainer, Image, Heading, Description} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const notFoundUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <ImageContainer isDark={isDark}>
          <Image src={notFoundUrl} alt="not found" />
          <Heading isDark={isDark}>Page Not Found</Heading>
          <Description>
            we are sorry, the page you requested could not be found.
          </Description>
        </ImageContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
