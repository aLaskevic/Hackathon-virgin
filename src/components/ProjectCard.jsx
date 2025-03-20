import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project, className, onClick = () => {} }) {
  const navigate = useNavigate();

  if (!project) return null;

  const totalVirginPoints = project.callToActions.reduce(
    (sum, action) => sum + (action.reward?.earnedVirginPoints || 0),
    0
  );

  return (
    <div onClick={() => onClick()} className={className}>
      <div className="w-68 h-38 b object-cover rounded overflow-hidden relative">
        <img
          src={project.imageLink}
          alt="Project Thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-10 top-2 left-2 bg-primary text-white px-4 py-1 rounded-full">
          {totalVirginPoints} Virgin Points
        </div>
      </div>
      <div>
        <div className="flex gap-1 items-center">
          <div className="font-medium">
            {" "}
            {project?.initiative?.length > 25
              ? project?.initiative?.slice(0, 25) + "..."
              : project?.initiative}
          </div>
          <div>·</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZWiRuO7KgRPnZEQwtwRVfxVz9-HGU_BsEQ&s"
            className="w-12"
          />
        </div>
        <div className="flex justify-between gap-2 w-60 text-gray-500">
          <div>
            {project.challenge.length > 30
              ? project.challenge.slice(0, 30) + "..."
              : project.challenge}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
