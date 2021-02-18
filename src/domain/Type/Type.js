import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(10),
  },
}))

const Type = () => {
  const classes = useStyles()

  return <main className={classes.content}>Types Page</main>
}

export default Type
