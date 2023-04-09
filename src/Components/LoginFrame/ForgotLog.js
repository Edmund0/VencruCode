import styles from './LoginFrame.module.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function ForgetLog() {

    const { height, width } = useWindowDimensions();
    const ForgotPassword = ((width>640) ? "Forgot password?" : "Forgot password")
  
    return (
        <div id = {styles.RowRememberMeForgotPassword}>

            <div id = {styles.RememberMe}>
            <input type="checkbox" id={styles.remember} name="remember"/>
            <label for="remember">Remember me</label>
            </div>

            <div id = {styles.ForgotPassword}><a>{ForgotPassword}</a></div>

        </div>
    );
  }
  
  export default ForgetLog;