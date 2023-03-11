import React from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Plans from "../../components/Plans/Plans";
import avatar from "../../image/Navbar/avatar.png";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img className="profileScreen__avatar" src={avatar} alt="" />
          <div className="profileScreen__Details">
            <h2>{user.email}</h2>
            <h3>
              Dummy card payment:{" "}
              <span className="gray__number"> 4242 4242 4242 4242</span>
            </h3>

            <div className="ProfileScreen__plans">
              <h3>Plans</h3>
              <Plans />
              <button className="profileScreen_signOut" onClick={logout}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
