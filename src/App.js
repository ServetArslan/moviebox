import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Movie} />
        </Switch>
      </DefaultLayout>
    </Router>
  )
}

export default App
