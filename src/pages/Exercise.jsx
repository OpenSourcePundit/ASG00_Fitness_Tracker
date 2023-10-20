import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { ExerciseForm } from "../components/ExerciseForm";

export const Exercise = () => {
  const [exerciseModal, setExerciseModal] = useState(false);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchExercise());
  // }, [dispatch]);
  return (
    <div>
      <h1>Exercises</h1>
      <button onClick={() => setExerciseModal(true)}>Add Exercise</button>
    </div>
  );
};
