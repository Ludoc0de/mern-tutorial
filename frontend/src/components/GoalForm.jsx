import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  // const [text, setText] = useState("");
  const [text, setText] = useState({
    subText: "",
    subText2: "",
  });

  const { subText, subText2 } = text;

  console.log("text", text);
  console.log("type", typeof text);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal(text));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="subText"
            id="subText"
            value={subText}
            onChange={onChange}
            // onChange={(e) => setText(e.target.value)}
          />
          {/*  */}
          <label htmlFor="text">Goal2</label>
          <input
            type="text"
            name="subText2"
            id="subText2"
            value={subText2}
            onChange={onChange}
            // onChange={(e) => setText(e.target.value)}
          />
          {/*  */}
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
