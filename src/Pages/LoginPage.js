import LoginFrame from '../Components/LoginFrame/LoginFrame';
import styles from './Styles/LoginPage.module.css';

function LoginPage() {

   return (
    <div className="contentWrapper"> {/* Content Wrapper */}
      <img className={styles.Vencru} src={require("../Resources/img/VencruLogo.png")}/> 

      <LoginFrame/> 

      <footer  className={styles.footer} > © Vencru Inc. 2022 </footer>

      <section className={styles.section}> 
          <div className={styles.image_content}></div>

          <div className={styles.link_bar}>
          <img className={styles.chevron} id={styles.leftChevron} href="Left-Chevron.png"/>
          <div className={styles.dot}><div id={styles.dot-1}>&bull;</div><div id={styles.dot-2}>&bull;</div><div id={styles.dot-3}>&bull;</div><div id={styles.dot-4}>&bull;</div></div>
          <img className={styles.chevron} id={styles.rightChevron} href="Right-Chevron.png"/>
          </div>
      </section>
    </div>
  );
}

export default LoginPage;
