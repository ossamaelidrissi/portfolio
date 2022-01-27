import React from "react";

const Footer = ({ data }) => {


  const social = [
    {name: "linkedin", url: "https://www.linkedin.com/in/ossama-elidrissi-a19111215/", className: "fa fa-linkedin"},
    {name: "instagram", url: "https://www.instagram.com/ossaaaamaa/", className: "fa fa-instagram"},
    {name: "github", url: "https://github.com/ossamaelidrissi", className: "fa fa-github"},
]


var networks = social.map(function (network) {
 return (
   <li key={network.name}>
     <a href={network.url}>
       <i className={network.className}></i>
     </a>
   </li>
 );
});

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Made by{" "}
              <a title="codata" href="https://codata-agency.com">
                codata-agency
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
