import styles from './LoginFrame.module.css';

function FormLog() {
  return (
    <form>
        <div className={styles.emailForm}>
            <label for="email">Email address </label>
            <input type="email" id={styles.email} placeholder = "Enter email" size="30" required/>
        </div>

        <div className={styles.passwordForm}>
            <label for="userPassword">Password </label>
            <input type="password" id={styles.userPassword} placeholder = "Enter password" minlength="8" required/>
        </div>
    </form>
  );
}

export default FormLog;