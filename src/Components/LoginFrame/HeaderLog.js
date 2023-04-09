import styles from './LoginFrame.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function HeaderLog() {

  const { height, width } = useWindowDimensions();
  const MainHeader = ((width>640) ? "Log into your business Manager" : "Welcome back!")
  const SupportHeader = ((width>640) ? "Welcome back! Please enter your details." : "Please enter your details correctly to log in to your buisness manager")

  return (
    <header>
    <h1 id={styles.MainHeader}> {MainHeader} </h1>
    <p  id={styles.SupportHeader}> {SupportHeader} </p>
    </header>
  );
}

export default HeaderLog;