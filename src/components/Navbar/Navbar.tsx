import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logo}>
          کارهای روزانه
        </Link>
        <div className={styles.links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            خانه
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            درباره ما
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
