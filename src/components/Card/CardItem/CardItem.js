import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const useStyles = makeStyles({
  cardWrapper: {
    boxSizing: 'border-box',
    padding: `0 0.4rem`,
  },
  cardBackground: {
    backgroundColor: '#f00',
    borderRadius: '12px',
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: 'placeHolderShimmer',
    animationTimingFunction: 'linear',
    background:
      'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    position: 'relative',
    backgroundSize: '800px 100px',
    height: '100%',
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    minHeight: '100px',
  },
})

const Card = ({ card, lastCardRef = null }) => {
  const classes = useStyles()

  return (
    <Grid ref={lastCardRef ? lastCardRef : null} item md={3} sm={6} xs={12}>
      <div className={classes.cardWrapper}>
        <div className={classes.cardBackground}>
          <LazyLoadImage
            effect="blur"
            className={classes.image}
            src={card.images.large}
            alt="card"
          />
        </div>
      </div>
    </Grid>
  )
}

export default Card
