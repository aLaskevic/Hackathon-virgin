import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageWrapper } from "../components";
import { useNavbar } from "../contexts/NavbarContext";
import { IoIosClose } from "react-icons/io";

function Project() {
  const navigate = useNavigate();

  const location = useLocation(); // Retrieve passed state
  const project = location.state; // Extract project data

  const { setNavbarVisible } = useNavbar();

  React.useEffect(() => {
    setNavbarVisible(false);
    return () => setNavbarVisible(true);
  }, []);

  const formattedDate = new Date(project.publishDate).toLocaleDateString(
    "de-DE"
  );
  console.log(project);

  return (
    <PageWrapper className="p-2 relative pb-10 min-h-screen">
      <div>
        <img
          src={project.imageLink}
          alt=""
          className="w-full h-50 object-cover rounded-2xl"
        />
        <div
          className="fixed top-5 right-6 bg-black bg-opacity-10 rounded-full w-14 h-14 text-white flex justify-center items-center opacity-60"
          onClick={() => navigate("/")}
        >
          <IoIosClose size={30} />
        </div>
      </div>
      <div>
        <div className="text-2xl my-3 font-medium">{project.initiative}</div>
        <div className="text-sm my-3 text-gray-400">
          Quest created on {formattedDate}
        </div>
        <div>{project.challenge}</div>
        <h2 className="text-2xl mt-5">Tasks</h2>
        <ul className="list-disc pl-5">
          {project.callToActions.map((cta) => (
            <li key={cta.id} className="marker:text-red-500">
              {cta.name}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-11/12 bg-primary rounded-full text-white py-4 text-center fixed bottom-5 left-1/2 transform -translate-x-1/2"
        onClick={() => window.open(project.links[0], "_blank")}
      >
        Attend now!
      </div>
    </PageWrapper>
  );
}

export default Project;
