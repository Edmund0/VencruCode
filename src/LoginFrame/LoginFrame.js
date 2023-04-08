import './LoginFrame.tw.css';
import './styleBase.tw.css';
import HeaderLog from './HeaderLog';
import FormLog from './FormLog';
import ForgetLog from './ForgotLog';
import useWindowDimensions from '../hooks/useWindowDimensions';

function LoginFrame() {

    const { height, width } = useWindowDimensions();
    const RowSignUp = ((width>640) ? "Sign up" : "Sign up here")

  return (
    <main>
        <HeaderLog/>
        <content> 
            <FormLog/>
            <div className="ForgetActionGap"> 
                <ForgetLog/>
                <div className="ActionRowSignUpGap">
                    <div id = "Action">

                        <input class="logging" type="button" value="Log in"/>
                    </div>

                    <div id="RowSignUp">

                        <div>Don't have an account? <a>{RowSignUp}</a></div>
                    </div>
                </div>
            </div>
        </content>
    </main>

  );
}

export default LoginFrame;