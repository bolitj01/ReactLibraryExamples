import { Link } from "react-router-dom";
import styles from "./menu.module.css";

function ExampleNavigator() {
  return (
    <>
      <h1>Examples</h1>
      <div className={styles.hide}>
        <h3 className={styles.speed1}>React Router Examples</h3>
        <ul>
          <li className={styles.speed2}>
            <Link to="/basic">Basic</Link>
          </li>
          <li className={styles.speed3}>
            <Link to="/nested">Nested Routes</Link>
          </li>
          <li className={styles.speed3}>
            <Link to="/protected">Protected Routes</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ExampleNavigator;
