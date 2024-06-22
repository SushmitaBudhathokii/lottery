import { React, useContext } from 'react'
import GameContext from './GameContext'
import Cash from './Cash'

const MoneyBoard = () => {
  const numbers = [1, 5, 10, 20]

  const { clickedMoney, setClickedMoney } = useContext(GameContext);

  const updateClicks = (number) => {
    setClickedMoney([...clickedMoney, number]);
  }
  return (
    <div>
      {numbers.map((number, index) => (
        <span key={index} onClick={() => updateClicks(number)}>
          {<Cash val={number} clickedNumbers={clickedMoney} isCash={true}></Cash>}
          {((index + 1) % 2 === 0) && <br />}
        </span>
      ))}
    </div>
  )
}

export default MoneyBoard
