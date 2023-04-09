import styles from './LoginFrame.module.css';
import HeaderLog from './HeaderLog';
import FormLog from './FormLog';
import ForgetLog from './ForgotLog';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Link } from "react-router-dom";

function LoginFrame() {

    const { height, width } = useWindowDimensions();
    const RowSignUp = ((width>640) ? "Sign up" : "Sign up here")

  return (
    <main>
        <HeaderLog/>
        <content> 
            <FormLog/>
            <div className={styles.ForgetActionGap}> 
                <ForgetLog/>
                <div className={styles.ActionRowSignUpGap}>
                    
                    <Link to="./setting/details">
                    <div id = {styles.Action}>
                        <input class={styles.logging} type="button" value="Log in"/>
                    </div>
                    </Link>

                    <div id={styles.RowSignUp}>

                        <div>Don't have an account? <a>{RowSignUp}</a></div>
                    </div>
                </div>
            </div>
        </content>
    </main>

  );
}

export default LoginFrame;