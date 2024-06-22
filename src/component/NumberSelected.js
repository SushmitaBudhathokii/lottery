import GameContext from "./GameContext";
import { useContext } from "react";
const NumberSelected = () => {

  const {clickedNumbers} = useContext(GameContext);

  console.log("clickedNumbers", clickedNumbers);

  return (
    <div>
      <p className="text-white p-2"><strong>Ticket Number:</strong></p>
      {clickedNumbers.map(num => <p className="text-white px-2">{`Mark : ${num}`}</p>)}
    </div>
  )
}

export default NumberSelected
