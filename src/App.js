import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import CustomAppBar from 'components/CustomAppBar/CustomAppBar'
import Home from 'domain/Home/Home'
import Type from 'domain/Type/Type'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <CustomAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Home} />
          <Route exact path="/types" component={Type} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
