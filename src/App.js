import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './Context/ThemeContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'
// import SideTabBar from './components/SideTabBar'
import './App.css'
// Replace your code here
class App extends Component {
  state = {
    isDark: false,
  }

  toggleTheme = prevValue => this.setState({isDark: !prevValue})

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider value={{isDark, toggleTheme: this.toggleTheme}}>
        <Switch>
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <Route component={NotFoundRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
