import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './Context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedRoute from './components/SavedRoute'
// import SideTabBar from './components/SideTabBar'
import './App.css'
import VideoDetails from './components/VideoDetails'
// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    activeTabId: 'Home',
    savedVideos: [],
  }

  toggleTheme = prevValue => this.setState({isDark: !prevValue})

  changeTab = id => this.setState({activeTabId: id}, console.log(id))

  addSavedVideo = item => {
    const {savedVideos} = this.state
    // console.log(savedVideos)
    const updatedSavedVideoList = [...savedVideos, item]
    this.setState(
      {savedVideos: updatedSavedVideoList},
      console.log('successfully added'),
    )
  }

  removeSavedVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideoList = savedVideos.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState(
      {savedVideos: updatedSavedVideoList},
      console.log('successfully removed'),
    )
  }

  render() {
    const {isDark, activeTabId, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          activeTabId,
          savedVideos,
          removeSavedVideo: this.removeSavedVideo,
          addSavedVideo: this.addSavedVideo,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetails}
            addSavedVideo={this.addSavedVideo}
            removeSavedVideo={this.removeSavedVideo}
            savedVideos={savedVideos}
          />
          <Route exact path="/login" component={LoginRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
