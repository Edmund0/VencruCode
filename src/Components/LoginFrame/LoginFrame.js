import styles from './LoginFrame.module.css';
import './styleBase.tw.css';
import HeaderLog from './HeaderLog';
import FormLog from './FormLog';
import ForgetLog from './ForgotLog';
import useWindowDimensions from '../../hooks/useWindowDimensions';

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
                    <div id = {styles.Action}>

                        <input class={styles.logging} type="button" value="Log in"/>
                    </div>

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