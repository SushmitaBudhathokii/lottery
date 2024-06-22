import React from 'react'
import Button from 'react-bootstrap/Button'

const Cash = (props) => {
  return (
    <Button variant="success" className={props.clickedNumbers ? props.clickedNumbers.includes(props.val) ? 'cash-number-button button-css' : 'cash-number-button' : 'cash-number-button'} >{props.isCash ? `$${props.val}` : props.val}</Button>
  )
}

export default Cash
