import React from "react";
import Login from "./components/Login";
import "./App.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import LogOut from "./components/LogOut";

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? <LogOut /> : <Login />}

      {/* <Login /> */}
    </div>
  );
};

export default App;
