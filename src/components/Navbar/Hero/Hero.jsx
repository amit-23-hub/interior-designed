import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oasis Interiors </h1>
        <p className={styles.description}>
        "Transforming spaces into inspiring sanctuaries with sustainable, high-quality design. Discover the magic of Urban Oasis Interiors today."






{" "}
        </p>
        <a href="mailto:amitsahani2322003@gmail.com" className={styles.contact}>
          Mail us{" "}
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} className={styles.heroimg} />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};
export default Hero;
