import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";
import "./App.css";
import LoginScreen from "./pages/loginScreen/loginScreen";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const loggedIn = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return loggedIn;
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          // login page
          <LoginScreen />
        ) : (
          // Home page
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
