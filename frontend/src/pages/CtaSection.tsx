import React from "react";
import { Link } from "react-router-dom";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section id="cta-box" className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-description">{description}</p>

        <Link to={buttonLink} className="cta-button cta-link">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
