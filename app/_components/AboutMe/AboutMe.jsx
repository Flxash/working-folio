import Header from './Header';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <p className={styles.description}>
          Hi there, I'm <strong>Abdel Yasser</strong>. 
          I'm an 19 y/o Software Engineering undergrad student with a minor in Electrical Engineering. 
          I like <strong>swimming</strong> and <strong>building things. </strong> 
          I enjoy <strong>graphics programming</strong>,
          <strong> web development</strong> and I'm probably working on a project right <strong>now</strong>.
        </p>
        <section className={styles.skills}>Skills</section>
        <div className={styles.capsul}> 
          <div className={styles.container}>
            <div className={styles.section}>
              <div className={styles.icon}>React</div>
              <div className={styles.icon}>Next</div>
              <div className={styles.icon}>Tailwind</div>
              <div className={styles.icon}>Flask</div>
            </div>
            <div className={styles.section}>
              <div className={styles.icon}>C++/C</div>
              <div className={styles.icon}>Go</div>
              <div className={styles.icon}>SQL / Postgres</div>
              <div className={styles.icon}>VHDL / ASM</div>
            </div>
            <div className={styles.section}>
              <div className={styles.icon}>Git</div>
              <div className={styles.icon}>Altium</div>
              <div className={styles.icon}>Micro Controllers</div>
              <div className={styles.icon}>Graphics</div>
            </div> 
          </div>
        </div>   
      </main>
    </div>
  );
};

export default AboutMe;
