import useWindowDimensions from '../hooks/useWindowDimensions';

function ForgetLog() {

    const { height, width } = useWindowDimensions();
    const ForgotPassword = ((width>640) ? "Forgot password?" : "Forgot password")
  
    return (
        <div id = "RowRememberMeForgotPassword">

            <div id = "RememberMe">
            <input type="checkbox" id="remember" name="remember"/>
            <label for="remember">Remember me</label>
            </div>

            <div id = "ForgotPassword"><a>{ForgotPassword}</a></div>

        </div>
    );
  }
  
  export default ForgetLog;