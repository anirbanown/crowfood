import React from "react";
import { useState } from "react";
import { routes } from "../Data/dummy";
import "../Styles/navbar.scss";
import logo_lotus from '../Images/logo_lotus.png'

import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { loginWithRedirect,logout, user, isAuthenticated, isLoading } = useAuth0();

  const [bgColor, setBgColor] = useState(false);

  function changeNavbarBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackgroundColor);

  return (
    <div className={bgColor ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo flex flex-row items-center">
        <img src={logo_lotus} className="h-20 aspect-ratio-1 object-cover mr-3" alt="" />
        <p>Sansthaein Aur Samvidhan</p>
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            <a href={route.path}> {route.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        {isAuthenticated?
        <div>
          <button
          style={{
            color: bgColor ? "#0c1727" : "white",
          }}
          className="onebtn"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
          Logout
                </button>
        </div>
        :
        <div>
          <button
            style={{
              color: bgColor ? "#0c1727" : "white",
            }}
            className="onebtn text-hover-gradient"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
          <button
            style={{
              background: bgColor ? "transparent" : "white",
              
            }}
            className="twobtn"
            onClick={() => loginWithRedirect({authorizationParams: { screen_hint: "signup" }})}
          >
            Register
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
