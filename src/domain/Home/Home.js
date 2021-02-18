import React, { useReducer, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, CircularProgress } from '@material-ui/core'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { initialCardState, initialPageState } from 'common/initialStates'
import cardReducer from 'context/reducers/cardReducer'
import pageReducer from 'context/reducers/pageReducer'
import { useFetchCard } from 'hooks/useCard'
import { useInfiniteScroll } from 'hooks/useScroll'
import CardList from 'components/Card/CardList/CardList'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(6),
    paddingTop: theme.spacing(12),
  },
  process: {
    marginTop: '200px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const MainContent = () => {
  const classes = useStyles()
  const [cardManager, cardManagerDispatch] = useReducer(
    cardReducer,
    initialCardState
  )
  const [pager, pagerDispatch] = useReducer(pageReducer, initialPageState)
  const lastCardRef = useRef()
  const observer = useRef()

  useFetchCard(pager.page, cardManager.hasMore, cardManagerDispatch)
  useInfiniteScroll(
    lastCardRef,
    cardManager.fetching,
    cardManager.hasMore,
    pagerDispatch,
    observer
  )

  return (
    <main className={classes.content}>
      <Grid container spacing={3} className={classes.container}>
        <CardList cards={cardManager.cards} lastCardRef={lastCardRef} />
        {cardManager.fetching && (
          <CircularProgress className={classes.process} />
        )}
      </Grid>
    </main>
  )
}

export default MainContent
