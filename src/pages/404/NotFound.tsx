import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <h1 className={styles.notFoundNumber}>404</h1>
      <div className={styles.notFoundText}>
        <h3>Page is not found</h3>
        <h3>
          Go to the <Link to="/">Homepage</Link>
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
