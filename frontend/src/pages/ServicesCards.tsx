import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBuilding, faLocationDot, faIndustry, faTriangleExclamation, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import retail from "../assets/retial_security.png"
import traffic from "../assets/traffic_management.png"
import industry from "../assets/industrial_security.png"
import public_safety from "../assets/public_safety.png"
import residential from "../assets/residential_security.png"
import commercial from "../assets/commercial_surveillance.png"
const services = [
  {
    img: residential,
    title: "Residential Security",
    icon: faHouse,
    desc: "Comprehensive AI-powered security systems designed specifically for homes and residential properties. Our service...",
  },
  {
    img: commercial,
    title: "Commercial Surveillance",
    icon: faBuilding,
    desc: "Enterprise-grade security solutions designed for businesses of all sizes. Our commercial surveillance system...",
  },
  {
    img: public_safety,
    title: "Public Safety",
    icon: faLocationDot,
    desc: "Advanced surveillance solutions for public spaces that enhance safety while respecting privacy. Our public safety...",
  },
  {
    img: retail,
    title: "Retail Security",
    icon: faCartShopping,
    desc: "Specialized AI surveillance for retail environments that prevents theft while enhancing customer experience. Our...",
  },
  {
    img: industry,
    title: "Industrial Security",
    icon: faIndustry,
    desc: "Robust security solutions for industrial facilities and manufacturing plants. Our industrial security systems ensure...",
  },
  {
    img: traffic,
    title: "Traffic Management",
    icon: faTriangleExclamation,
    desc: "Intelligent traffic monitoring and management systems for cities and highways. Our traffic solutions reduce...",
  },
];

const ServicesCards = () => {
  return (
    <section className="container my-5">
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="custom-card">
              {/* Image Wrapper */}
              <div className="card-img-wrapper">
                <img src={service.img} className="card-img-top" alt={service.title} />
                {/* Title Overlay */}
                <div className="card-title-overlay">
                  <FontAwesomeIcon icon={service.icon} className="section-icon" />{" "}
                  {service.title}
                </div>
              </div>
              {/* Body */}
              <div className="card-body">
                <div className="card-content">
                  <p>{service.desc}</p>
                  <a href="#" className="read-link">Learn more →</a>
                </div>
              </div>

            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
