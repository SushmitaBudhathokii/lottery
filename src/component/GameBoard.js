import { React, useContext } from 'react'
import GameNumber from './GameNumber'
import GameContext from './GameContext';

const GameBoard = () => {
  const numbers = Array(20).fill(0).map((e, i) => i + 1);

  const { clickedNumbers, setClickedNumbers } = useContext(GameContext);

  const updateClicks = (number) => {
    if (clickedNumbers.includes(number)) {
      setClickedNumbers(clickedNumbers.filter((f) => f !== number))
    } else {
      clickedNumbers.length == 5 ? alert("Sorry! Cannot select more.") : setClickedNumbers([...clickedNumbers, number])
    }
  };

  return (
    <div>
      {numbers.map((number, index) => (
        <span key={index} onClick={() => updateClicks(number)}>
          {<GameNumber val={number} clickedNumbers={clickedNumbers}></GameNumber>}
          {((index + 1) % 5 === 0) && <br />}
        </span>
      ))}
    </div>
  )
}


export default GameBoard;