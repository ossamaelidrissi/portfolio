import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
 
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/87373195?v=4"
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>Hi there! I am Ossama!  I ve been coding for over 3 years now as a Full Stack developer . I ve worked as an intern with a company called Hello World in Marrakech and I v a diploma of OFPPT like an Specialized technician developer , and 3 certificates in sololearn.com <a href="https://www.sololearn.com/Certificate/1059-23972154/jpg/">php</a> , <a href="https://www.sololearn.com/Certificate/1097-23972154/jpg/">react & redux</a> , <a href="https://www.sololearn.com/Certificate/1162-23972154/jpg/">Responsive Web Design</a>. Along the journey I realised my passion existed in coding and help others to solve their problems . With this passion, I m going to build now my dream company with some freinds . We start now the work and thank god we get the firsts clients , I try hard to get the right experience as a React dev and a leader of company.</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Ossama Elidrissi</span>
                <br />
                <span>
                  Morroco - Marrakech
                </span>
                <br />
                <span>0706883791</span>
                <br />
                <span>elidrissiossama31@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a onClick = {() => alert('You can download the ossama portfolio as a pdf soon')} href='#' className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
