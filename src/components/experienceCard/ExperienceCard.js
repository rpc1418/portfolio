import React, {useState, createRef, useEffect, useRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isDescOverflow, setIsDescOverflow] = useState(false);
  const imgRef = createRef();
  const descRef = useRef(null);

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  useEffect(() => {
    if (descRef.current) {
      const lineHeight = 20; // approx 1.25rem line height
      const maxLines = 4;
      const maxHeight = lineHeight * maxLines;
      setIsDescOverflow(descRef.current.scrollHeight > maxHeight);
    }
  }, [cardInfo.desc]);

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const toggleDesc = () => {
    setIsDescExpanded(!isDescExpanded);
  };

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          ref={descRef}
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
          style={{
            maxHeight: isDescExpanded || !isDescOverflow ? "none" : "80px",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            marginBottom: isDescOverflow ? "0" : "inherit"
          }}
        >
          {cardInfo.desc}
        </p>
        {isDescOverflow && (
          <button className="read-more-btn" onClick={toggleDesc}>
            {isDescExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
