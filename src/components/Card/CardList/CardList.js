import React from 'react'

import CardItem from 'components/Card/CardItem/CardItem'

const CardList = ({ lastCardRef, cards }) => {
  return (
    <>
      {cards.map((card, index) => {
        if (index === cards.length - 9) {
          return <CardItem lastCardRef={lastCardRef} key={index} card={card} />
        }

        return <CardItem key={index} card={card} />
      })}
    </>
  )
}

export default CardList
