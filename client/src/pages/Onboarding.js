import React, { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    email: "",
    url: "",
    about: "",
    matches: [],
  });

  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log("value :" + value, "name:" + name);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <>
      <Nav
        minimal={true}
        authToken={true}
        setShowModal={() => {}}
        showModal={false}
      />
      <div className="onboarding">
        <h2>CREATE PROFILE</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>
            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                name="gender_identity"
                value="man"
                id="man-gender-identity"
                onChange={handleChange}
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                type="radio"
                name="gender_identity"
                value="woman"
                id="woman-gender-identity"
                onChange={handleChange}
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                type="radio"
                name="gender_identity"
                value="other"
                id="other-gender-identity"
                onChange={handleChange}
                checked={formData.gender_identity === "other"}
              />
              <label htmlFor="other-gender-identity">More</label>
            </div>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              type="checkbox"
              name="show_gender"
              id="show-gender"
              checked={formData.show_gender}
              onChange={handleChange}
            />
            <label htmlFor="">Show Me</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                name="gender_interest"
                value="man"
                id="man-gender-interest"
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                type="radio"
                name="gender_interest"
                value="woman"
                id="woman-gender-interest"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                type="radio"
                name="gender_interest"
                value="everyone"
                id="everyone-gender-interest"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
            <label htmlFor="about">About me</label>
            <input
              type="text"
              name="about"
              id="about"
              placeholder="describe yourself here"
              required={true}
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>
          <section>
            <label htmlFor="profilephoto">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              required={true}
              onChange={handleChange}
            />
            <div className="photo-container">
              <img src={formData.url} alt="Profile pic preview" />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};
export default Onboarding;
