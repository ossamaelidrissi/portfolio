import React from "react";

const Portfolio = ({ data }) => {
const project = [
  {title: "Huluu Clone (Next JS)", category: "", image: "hulu.png", url: "https://ossama-hulu.vercel.app/"},
  {title: "Airbnb Clone (Next JS)", category: "", image: "airbnb.png", url: "https://ossama-airbnb.vercel.app/"},
  {title: "Google Clone (Next JS)", category: "", image: "google.png", url: "https://ossama-google.vercel.app/"},
  {title: "Shopping Website (Next JS) & Node js", category: "", image: "com.jfif", url: "https://shop.codata-agency.com/"},
  {title: "Dashbord Admin (React JS)", category: "", image: "admin.jfif", url: "https://sidi-hida.netlify.app/"},
  {title: "App Iptv (PHP)", category: "", image: "iptv.jpg", url: "http://codata-admin.com"},
  {title: "Chat Application (PHP)", category: "", image: "OIP.jfif", url: "/"},
  {title: "Codata Agency (Next Js)", category: "", image: "codata.jpg", url: "/"},
]
  if (data) {
    var projects = project.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
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
