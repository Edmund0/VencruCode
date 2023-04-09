import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPage from './Pages/LoginPage';
import './old.css';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/VencruCode" element={<LoginPage/>}/>
    </Routes>
  );
}

export default Main;