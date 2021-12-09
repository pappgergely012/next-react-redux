import Todo from "../src/components/Todo/Todo";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo App</h1>

      <Todo />
    </div>
  );
}
