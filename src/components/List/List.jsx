import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/List.module.css";
import Item from "../Item/Item";

const List = () => {
  const todos = useSelector((state) => state?.todosReducer);

  if (todos.length === 0) {
    return <div className={styles.empty}>You don't have Todos yet!</div>;
  }

  return (
    <div className={styles.listContainer}>
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
