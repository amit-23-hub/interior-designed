import skillsData from "../../../../assets/skills/skills.json";
import { getImageUrl } from "../../../utils";
import styles from "./Skills.module.css";

export const Skills = () => {
    return (
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
       
          <div className={styles.skills}>
            {skillsData.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
      </section>
    );
  };
  
 
export default Skills;
