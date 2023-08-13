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
// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    activeTabId: 'Home',
  }

  toggleTheme = prevValue => this.setState({isDark: !prevValue})

  changeTab = id => this.setState({activeTabId: id}, console.log(id))

  render() {
    const {isDark, activeTabId} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          activeTabId,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute exact path="/saved-videos" component={SavedRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
