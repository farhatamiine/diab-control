import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
