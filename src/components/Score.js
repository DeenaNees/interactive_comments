import { useState } from "react";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";

function Score(props) {
  const [score, setScore] = useState(props.score);

  return (
    <div className="score__container">
      <button className="score__button">
        <img src={plus} alt="" />
      </button>
      <div className="score__number">{score}</div>
      <button className="score__button">
        <img src={minus} alt="" />
      </button>
    </div>
  );
}
export default Score;
