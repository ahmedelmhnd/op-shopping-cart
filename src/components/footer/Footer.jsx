import styles from "./footer.module.css";
import githubLogo from "../../assets/github-logo.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <a className={styles.githubNames} href="https://github.com/ahmedelmhnd/op-shopping-cart" target="_blank">
        <img className={styles.logo} src={githubLogo} alt="" />
        <p className={styles.userName} >@ahmedelmhnd</p>
      </a>
    </div>
  );
}

export default Footer;
