import React from "react";
import ProfileImg from "../images/profile-png.jpg";
function Profile() {
  return (
    <section className='profile-container'>
      <img src={ProfileImg} alt='' id='profile__img' />
      <h2 id='twitter'>Emmyudofia</h2>
      <h3 id="slack">Emy_udofia</h3>
    </section>
  );
}

export default Profile;