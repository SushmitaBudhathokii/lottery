import NumberSelected from "./NumberSelected";
import Total from "./Total";

const ScoreBoard = () => {
    return (
        <div className="score-board-inner mt-3 mb-3">
        <NumberSelected></NumberSelected>
        <Total></Total>
        </div>
    )
}

export default ScoreBoard;