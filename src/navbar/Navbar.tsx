import { NavLink, Outlet } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <header >
        <nav>
          <NavLink className={styles.listItems} to="/"> Home</NavLink>
          <NavLink className={styles.listItems} to="films"> Films</NavLink>
          <NavLink className={styles.listItems} to="about"> About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Navbar;
