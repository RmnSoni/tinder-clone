import { useState } from "react";
import AuthModal from "../components/AuthModal";
import Nav from "../components/Nav";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const authToken = false;
  const handleClick = () => {
    console.log("button clicked");
    setShowModal(true);
    setIsSignup(true);
  };

  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={false}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSignup={setIsSignup}
      />
      <div className="home">
        <h1 className="primary-title">Start something epic.</h1>

        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignup} />
        )}
      </div>
    </div>
  );
};
export default Home;
