import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project, className, onClick = () => {} }) {
  if (project === null) return null;

  return (
    <div onClick={() => onClick()} className={className}>
      <h2 className="text-2xl font-bold mb-2">
        {" "}
        {project?.initiative?.length > 25
          ? project?.initiative?.slice(0, 25) + "..."
          : project?.initiative}
      </h2>
      <div className="w-full h-50 b object-cover rounded overflow-hidden relative">
        <img
          alt="Project Thumbnail"
          src={project?.imageLink}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
