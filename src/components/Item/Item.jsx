import React from "react";
import styles from "../../styles/Item.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/actions/TodosAction";

const Item = ({ todo }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeTodo(todo));
  };

  return (
    <div key={todo.id} className={styles.container}>
      <div className={styles.title}>
        <span>What to do</span>
      </div>

      <div className={styles.text}>{todo.text}</div>

      <div className={styles.id}>#{todo.id}</div>

      <div className={styles.created}>
        {new Date(todo.createdAt).toLocaleString("hu")}
      </div>

      <CloseIcon className={styles.remove} onClick={handleClick} />
    </div>
  );
};

export default Item;
