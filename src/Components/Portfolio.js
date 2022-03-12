import React from "react";

const Portfolio = ({ data }) => {
const project = [
  {title: "Codata Agency (Next Js)", category: "", image: "codata1.png", url: "https://codata-agency.com"},
  {title: "Shopping Website (Next JS) & Node js", category: "", image: "ecom.png", url: "https://shop.codata-agency.com/"},
  {title: "Google Clone (Next JS)", category: "", image: "google2.png", url: "https://ossama-google.vercel.app/"},
  {title: "Instagram Clone (Next JS)", category: "", image: "instagram.png", url: "https://ossama-instagram.vercel.app/"},
  {title: "Spotify Clone (Next JS)", category: "", image: "spotify6.png", url: "https://ossama-spotify.vercel.app/"},
  {title: "Facebook Clone (Next JS)", category: "", image: "facebook.png", url: "https://ossama-facebook.vercel.app/"},
  {title: "Airbnb Clone (Next JS)", category: "", image: "airbnb.png", url: "https://ossama-airbnb.vercel.app/"},
  {title: "Huluu Clone (Next JS)", category: "", image: "hulu.png", url: "https://ossama-hulu.vercel.app/"},
  {title: "Dashbord Admin (React JS)", category: "", image: "gestion.png", url: "https://sidi-hida.netlify.app/"},
  {title: "App Iptv (PHP)", category: "", image: "iptv.jfif", url: "http://codata-admin.com"},
]
  if (data) {
    var projects = project.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} target="_blank" title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
