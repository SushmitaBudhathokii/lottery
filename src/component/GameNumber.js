import React from 'react'
import Button from 'react-bootstrap/Button'

const GameNumber = (props) => {

  return (
    <Button variant="success" className={props.clickedNumbers ? props.clickedNumbers.includes(props.val) ? 'game-number-button button-css' : 'game-number-button' : 'game-number-button'} >{props.isCash ? `$${props.val}` : props.val}</Button>

  )
}

export default GameNumber
