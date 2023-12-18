import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <h1>About me</h1>
      <div className={styles.textWrapper}>
        <h3>
          I am currently enrolled in the Codelex bootcamp, where I am delving
          into the world of programming with enthusiasm and determination. As I
          navigate through the challenges and lessons, I find myself
          increasingly filled with a sense of accomplishment and growing
          confidence in my coding abilities. The structured curriculum and
          hands-on approach of the bootcamp have provided me with a solid
          foundation in various programming languages, with a particular focus
          on front-end development. Learning languages such as HTML, CSS, and
          TypeScript has been an exciting journey, allowing me to create
          visually appealing and interactive user interfaces. I am thrilled
          about the progress I've made and am eager to continue honing my skills
          as I work towards becoming a proficient front-end developer. The
          supportive environment of Codelex has played a crucial role in
          fostering my passion for coding, and I am excited about the
          opportunities that lie ahead in the dynamic field of web development.{" "}
        </h3>
      </div>
      <br /><br />
    </div>
  );
};

export default About;
