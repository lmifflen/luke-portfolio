
import styles from "./about.module.css";
import Image from "next/image";


const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.left}>
        <div className={styles.about_me_container}>
        <h1>About Me</h1>
        <div className={styles.about_bold}>
          ADVENTUROUS, HARDWORKING FULL STACK DEVELOPER AND TECHNICAL PROJECT
          MANAGER
        </div>
        </div>
<Image
priority
src="/Assiniboine.webp"
          className={styles.assiniboine}
          alt="Assiniboine"
          width={500}
          height={500}
        />
        {/* <img
          className="assiniboine"
          src="./Assiniboine.webp"
          alt="Assiniboine"
        /> */}
      </div>
      <div className={styles.right}>
        <div className={styles.about_text}>
          I am an adventurous, hard working Full Stack Developer and Technical
          Project Manager with a thirst for knowledge. My vision, dedication to
          the task at hand, leadership abilities, and relaxed personality make
          me an excellent member of a team, while my confidence, ingenuity, and
          attention to detail allow me to work comfortably in an independent
          environment. <br></br> <br></br>Undergoing a recent career transition I chose to
          make the move into technology because I want to work on meaningful
          projects that create a positive impact on the world around me.{" "}
          <br></br><br></br>In addition, I enjoyed the technical aspects of my previous
          career as a Geophysicist including mapping using seismic
          interpretation, modelling, and post-stack inversion, database
          management, and using Mathematica. <br></br><br></br> When not working or
          studying I have many extracurricular activities including mountain
          biking, splitboarding, hiking, swimming, camping, traveling and
          working out. <br></br> <br></br>If you have any questions about my credentials
          or have opportunities available please do not hesitate to contact me
          by email at lmifflen@gmail.com.
        </div>
     
          <Image
            priority
            src="/Splitboard.webp"
            className={styles.splitboard}
            alt="Luke"
            width={500}
            height={500}
          />
         
     
      </div>
    </div>
  );
};

export default About;
