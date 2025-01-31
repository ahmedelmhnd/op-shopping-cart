import styles from "./homeAdvert.module.css";

function HomeAdvert() {
  return (
    <div className={styles.container}>
    <div className={styles.advert}>
      <h1 className={styles.title}>&#128640; Ascend to a Better Way to Shop</h1>
      <p className={styles.text}>
        Why browse the ordinary when you can experience the extraordinary? At
        [Your Store Name], we bring you handpicked products, unbeatable prices,
        and a seamless shopping experience designed to elevate your lifestyle.
        The best finds don’t wait—why should you?
      </p>
      <button className={styles.button}>Shop Now</button>
    </div>
    </div>
  );
}

export default HomeAdvert;
