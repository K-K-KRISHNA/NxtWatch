import {Route, Switch} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
  </Switch>
)

export default App
