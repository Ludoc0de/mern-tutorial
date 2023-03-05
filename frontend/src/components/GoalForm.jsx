import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  // const [text, setText] = useState("");
  const [text, setText] = useState({
    text: "",
  });

  console.log("test1", text);
  const dispatch = useDispatch();

  //
  const onChange = (e) => {
    setText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //

  console.log("2test", text);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          {/* <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          /> */}
          <input
            type="text"
            id="text"
            name="firstName"
            value={text}
            onChange={onChange}
          />
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
