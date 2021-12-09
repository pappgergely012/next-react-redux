import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "../../styles/Home.module.css";
import List from "../List/List";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/TodosAction";

const Todo = () => {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const handleClick = () => {
    setVal("");
    dispatch(addTodo({ text: val }));
  };

  return (
    <>
      <div className={styles.inputContainer}>
        <TextField
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={styles.input}
          id="outlined-basic"
          label="Add some todo"
          variant="outlined"
        />

        <Button
          variant="contained"
          className={styles.button}
          onClick={handleClick}
        >
          Add
        </Button>
      </div>

      <List />
    </>
  );
};

export default Todo;
