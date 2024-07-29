import React, {useContext} from 'react'
import GameContext from './GameContext'
import Button from 'react-bootstrap/Button'

const CashClear = () => {

    const {clickedNumbers, setClickedNumbers, totalCash, setClickedMoney} = useContext(GameContext);
    
    const reset = () => {
      setClickedNumbers([]);
      setClickedMoney([]);
    }
 
    const display = () => {
      alert(clickedNumbers.length === 5 && totalCash ? `Ticket Number : ${clickedNumbers.join(',')} and Cash is $${totalCash}` : `Incomplete data`)
    }

    const generateRandomTicketNum = () => {
      const randomArr = [];
      do{
        const randomNum = Math.floor(Math.random() * (20)) + 1;
          if(!randomArr.includes(randomNum)) {
            randomArr.push(randomNum);
          }
        } while(randomArr.length < 5)

      setClickedNumbers(randomArr);
    }


  return (
    <div className='row game-buttons'>
      <div className='col-md-4 d-flex justify-content-left'>
      <Button onClick={display}>Cash</Button>
      </div>
      <div className='col-md-4 d-flex justify-content-left'>
      <Button onClick={reset}>Clear</Button>
      </div>
      <div className='col-md-4 d-flex justify-content-left'>
      <Button onClick={generateRandomTicketNum}>Random</Button>
      </div>
  </div>
  )
}

export default CashClear;
