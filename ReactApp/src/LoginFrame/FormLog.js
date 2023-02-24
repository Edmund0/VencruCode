function FormLog() {
  return (
    <form>
        <div className="emailForm">
            <label for="email">Email address </label>
            <input type="email" id="email" placeholder = "Enter email" size="30" required/>
        </div>

        <div className="passwordForm">
            <label for="userPassword">Password </label>
            <input type="password" id="userPassword" placeholder = "Enter password" minlength="8" required/>
        </div>
    </form>
  );
}

export default FormLog;