import React, {useContext, useState, useRef, useEffect} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function ProjectCardWrapper({project, i, isDark}) {
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isDescOverflow, setIsDescOverflow] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      const lineHeight = 18;
      const maxLines = 3;
      const maxHeight = lineHeight * maxLines;
      setIsDescOverflow(descRef.current.scrollHeight > maxHeight);
    }
  }, [project.projectDesc]);

  const toggleDesc = () => {
    setIsDescExpanded(!isDescExpanded);
  };

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      key={i}
      className={
        isDark
          ? "dark-mode project-card project-card-dark"
          : "project-card project-card-light"
      }
    >
      {project.image ? (
        <div className="project-image">
          <img
            src={project.image}
            alt={project.projectName}
            className="card-image"
          />
        </div>
      ) : null}
      <div className="project-detail">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.projectName}
        </h5>
        <p
          ref={descRef}
          className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}
          style={{
            maxHeight: isDescExpanded || !isDescOverflow ? "none" : "54px",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
            marginBottom: isDescOverflow ? "0" : "16px"
          }}
        >
          {project.projectDesc}
        </p>
        {isDescOverflow && (
          <button className="read-more-btn" onClick={toggleDesc}>
            {isDescExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        {project.footerLink ? (
          <div className="project-card-footer">
            {project.footerLink.map((link, index) => (
              <span
                key={index}
                className={isDark ? "dark-mode project-tag" : "project-tag"}
                onClick={() => openUrlInNewTab(link.url)}
              >
                {link.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => (
              <ProjectCardWrapper
                key={i}
                project={project}
                i={i}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
