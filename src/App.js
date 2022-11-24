import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Muisic from "./components/Muisic/Muisic";
import Settings from "./components/Settings/Settings";
import DialogsConteiner from "./components/Dialogs/DialogsConteiner";
import UsersConteiner from "./components/Users/UsersConteiner";
import ProfileConteiner from "./components/Profile/ProfileConteiner";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderConteiner />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsConteiner />} />
        <Route path="/profile" render={() => <ProfileConteiner />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/muisic" render={() => <Muisic />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/users" render={() => <UsersConteiner />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
