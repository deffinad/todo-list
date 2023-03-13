import styles from "./../../styles/Navbar.module.css";
export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBrand}>
        <span>DAD.</span>
      </div>

      <span className={styles.navDesc}>Frontend Developer PT. Knitto Tekstill</span>
    </nav>
  );
};
