import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LoginPage from './Pages/LoginPage';
import SettingDetailPage from './Pages/SettingDetailPage';
import SettingProfilePage from './Pages/SettingProfilePage';

import './old.css';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}

      <Route exact path="/VencruCode" element={<LoginPage/>}                            />
      <Route exact path="/VencruCode/setting/details" element={<SettingDetailPage/>}   />
      <Route exact path="/VencruCode/setting/profile" element={<SettingProfilePage/>}   />
    </Routes>
  );
}

export default Main;