import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About us</h2>
      <div className={styles.content}>
        
3        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>OVERVIEW</h3>
              <p>
              Welcome to Urban Oasis Interiors! We are a dynamic interior design firm dedicated to transforming spaces into beautiful, functional, and inspiring environments. Our mission is to bring your vision to life through innovative design solutions that reflect your personal style and meet your practical needs.

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>OUR STORY</h3>
              <p>
         
Founded in 2022 by Jane Doe and John Smith, Urban Oasis Interiors grew from a small studio into a full-service design firm, offering high-quality residential and commercial design accessible to everyone

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          
            <div className={styles.aboutItemText}>
              <h3>OUR APPROACHES</h3>
              <p>
               
At Urban Oasis Interiors, we create aesthetically pleasing, sustainable environments that inspire and uplift. Our designs enhance clients' quality of life, using eco-friendly materials and practices to prioritize sustainability.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur}/>
    </section>
  );
};
export default About ; 
