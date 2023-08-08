import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import NotFound from './components/NotFound'
import './App.css'
// Replace your code here
const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={HomeRoute} />
    <Route exact path="/login" component={LoginRoute} />
    <Route component={NotFound} />
  </Switch>
)

export default App
