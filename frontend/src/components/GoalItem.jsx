import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  console.log("GoalItem", goal);
  console.log("GoalItem", goal.subText, goal.subText2);
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      {/* <h2>{goal.text}</h2> */}
      <p>{goal.subText}</p>
      <h2>{goal.subText2}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  );
}

export default GoalItem;
