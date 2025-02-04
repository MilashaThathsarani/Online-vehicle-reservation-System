import { Link } from "react-router-dom";
import styles from "./style";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="" style={styles.logo}>Car Rental</Link>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.navItem}>Home</Link></li>
          <li><Link to="" style={styles.navItem}>Cars</Link></li>
          <li><Link to="" style={styles.navItem}>Bookings</Link></li>
          <li><Link to="" style={styles.navItem}>Contact</Link></li>
        </ul>
        <Link to="/login" style={styles.loginBtn}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;