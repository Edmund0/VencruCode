import { Switch, Route } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';
import './old.css';
import './oldfont.css';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={LoginPage}></Route>
    </Switch>
  );
}

export default Main;