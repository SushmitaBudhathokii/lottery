import Theme from '../image/Theme.png'
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
import MoneyBoard from './MoneyBoard';
import GameContext from './GameContext';
import CashClear from './CashClear';
import { useState } from 'react';

const Body = () => {

  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [clickedMoney, setClickedMoney] = useState([]);
  const [totalCash, setTotalCash] = useState([]);

    return (
      <GameContext.Provider value={{clickedNumbers, setClickedNumbers, clickedMoney, setClickedMoney, totalCash, setTotalCash}}>
        <div className='row'>
        <div className='col-md-2'>
          <img src={Theme} className='img-class pl-8' alt=""/>
          <MoneyBoard></MoneyBoard>
        </div>
        <div className='col-md-7'>
          <GameBoard></GameBoard>
          <CashClear></CashClear>
        </div>
        <div className='col-md-3 score-board-outer'>
          <ScoreBoard></ScoreBoard>
        </div>
      </div>
      </GameContext.Provider>
    )
}

export default Body;