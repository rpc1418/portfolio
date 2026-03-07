import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      console.log("updated");
      console.log("Fetching repository data...");
      fetch("/portfolio/profile.json", {
        headers: {
          "Content-Type": "applissscation/json",
          Accept: "application/json"
        }
      })
        .then(result => {
          if (!result.ok) {
            throw new Error("Failed to fetch");
          }
          return result.json(); // Try to parse the JSON
        })
        .then(response => {
          console.log("Data fetched successfully.", response);
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(error => {
          console.error(
            `Error fetching repo data: ${error.message} (Nothing is shown in the Projects section. Also check if the Projects section has been configured properly.)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    console.log("Setting repository data:", array); // Log the array being set to state
    setrepo(array);
  }

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    console.log("Failed to load repositories or openSource is not enabled."); // Log if the repositories aren't loaded
    return <FailedLoading />;
  }
}
