import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../actions/goalAction";

export const GoalForm = ({ setGoalModal }) => {
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState({
    goalName: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "In Progress"
  });
  const handleGoalSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal(newGoal));
    setGoalModal(false);
    setNewGoal({
      goalName: "",
      description: "",
      targetDate: "",
      targetCalories: 0,
      status: "In Progress"
    });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 340,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2
  };

  return (
    <div style={{ ...style }} className="modal">
      <h2>Add Goal</h2>
      <form onSubmit={handleGoalSubmit}>
        <div>
          <label htmlFor="goal">Goal Name: </label>
          <input
            id="goal"
            value={newGoal.goalName}
            onChange={(e) =>
              setNewGoal({ ...newGoal, goalName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            value={newGoal.description}
            onChange={(e) =>
              setNewGoal({ ...newGoal, description: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="proteins">
            Proteins: <small>(in g): </small>{" "}
          </label>
          <input
            id="proteins"
            type="number"
            value={newFoodItem.proteins}
            onChange={(e) =>
              setNewFoodItem({ ...newFoodItem, proteins: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="carbohydrates">
            Carbohydrates: <small>(in g): </small>{" "}
          </label>
          <input
            id="carbohydrates"
            type="number"
            value={newFoodItem.carbohydrates}
            onChange={(e) =>
              setNewFoodItem({
                ...newFoodItem,
                carbohydrates: e.target.value
              })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="fats">
            Fats: <small>(in g): </small>{" "}
          </label>
          <input
            id="fats"
            type="number"
            value={newFoodItem.fats}
            onChange={(e) =>
              setNewFoodItem({ ...newFoodItem, fats: e.target.value })
            }
            required
          />
        </div>

        <input type="submit" />
        <button onClick={() => setFoodModal(false)}>Cancel</button>
      </form>
    </div>
  );
};
