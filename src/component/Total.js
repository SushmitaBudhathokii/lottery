import React, {useContext} from 'react'
import GameContext from './GameContext'

const Total = () => {
  const {clickedMoney, setTotalCash} = useContext(GameContext);

  const totalMoney = clickedMoney.length ? clickedMoney.reduce((i, j) =>  Number(i) +  Number(j)) : 0;
  setTotalCash(totalMoney);

  return (
    <div>
      <p className='text-end pb-3 text-white m-2'><strong>Total: ${totalMoney}</strong></p>
    </div>
  )
}

export default Total
