import React from "react";
import whitelogo from "../images/white-logo-tinder.png";
import colorlogo from "../images/color-logo-tinder.png";
const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignup }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignup(false);
  };
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorlogo : whitelogo}
          alt="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          onClick={handleClick}
          className="nav-button"
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;
