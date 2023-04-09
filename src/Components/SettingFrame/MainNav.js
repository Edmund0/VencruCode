import { ReactComponent as Bolt } from '../../Resources/svg/bolt.svg';
import { ReactComponent as Bell } from '../../Resources/svg/bell.svg';
import { ReactComponent as Cog8 } from '../../Resources/svg/cog8.svg';
import { ReactComponent as Menu } from '../../Resources/svg/menu.svg';
import styles from './SettingFrame.module.css';
import FACE from '../../Resources/img/face.jpg';
function MainNav() {

    return (
  
      <nav className={styles.mainNav}>
        <div className={styles.navBar}>
          <div className={styles.navSet1}>
              <img className={styles.Vencru} src={require("../../Resources/img/VencruLogo.png")}/> 
              <div className={styles.navGroup}>
                  <div className={styles.navItem}>Home</div>
                  <div className={styles.navItem}>Dashboard</div>
                  <div className={styles.navItem}>Projects</div>
                  <div className={styles.navItem}>Tasks</div>
                  <div className={styles.navItem}>Reporting</div>
                  <div className={styles.navItem}>Users</div>
              </div>
              <div className={styles.MENU}><Menu/></div>
          </div>

          <div className={styles.navSet2}>
              <div className={styles.upgrade}>
              <div className={styles.upgradeBox}>
                  <div><Bolt/></div>
                  <div>Upgrade now</div>
              </div>
              </div>

              <div className={styles.options}>
                  <div className={styles.COG}><Cog8/></div>
                  <div className={styles.BEL}><Bell/></div>
              </div>

              <div className={styles.profile}>
                  <img src={FACE} style={{height: '40px', width:'40px', borderRadius: '200px'}}/>
              </div>
          </div>
        </div>
      </nav>

    );
  }
  
  export default MainNav;