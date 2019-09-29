import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import About from './pages/About'
import Listening from './pages/Listening'
import CV from './pages/CV'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/listening" component={Listening} />
      <Route path="/cv" component={CV} />
    </Switch>
  )
}
