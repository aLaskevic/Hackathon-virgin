import React from "react";
import { PageWrapper, Badge } from "/src/components";
import ScrollRow from "../components/ScrollRow";
import ProjectCard from "../components/ProjectCard";
import { LuPencilLine } from "react-icons/lu";
import { ProjectContext } from "../contexts/ProjectContext";

function Profile() {
  const { profile, projects } = React.useContext(ProjectContext);

  return (
    <PageWrapper className="p-3 pb-20 relative">
      <div className="relative">
        <div className="bg-gray-100 w-full h-35">
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/134611813/original/8833c82d793f87e6939f2ce863f55e1b6b1416cf/design-minimalist-profile-pictures.jpg"
            alt=""
            className="rounded-full w-30 h-30 object-cover absolute -bottom-15 left-1/2 transform -translate-x-1/2 shadow"
          />
          <div className="h-10 w-10 bg-white shadow rounded-full flex justify-center items-center absolute top-4 right-4">
            <LuPencilLine />
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center">
        <div>{profile?.name}</div>
        <div className="text-gray-400 text-xs">Member since March 2025 </div>
        <div className="mt-10 flex gap-5 ">
          <div className="flex flex-col items-center gap-2 border-r-1 pr-5 flex-1 border-gray-300">
            <div className="font-bold">Level</div>
            <div className="text-xs">{profile.level}</div>
          </div>
          <div className="flex flex-col items-center gap-2 text-center border-r-1 pr-5 flex-1 text-primary border-gray-300">
            <div className="font-bold">Points</div>
            <div className="text-xs">3238</div>
          </div>
          <div className="flex flex-col items-center text-center gap-2 flex-1">
            <div className="font-bold">Rank</div>
            <div className="text-xs">1</div>
          </div>
        </div>
      </div>
      <ScrollRow title="Your Achievements" className={"mt-10"}>
        {profile?.earnedBadges?.map((badge, index) => (
          <Badge key={index} badge={badge} />
        ))}
      </ScrollRow>
      <ScrollRow title="Finished Quests" className={"mt-10"}>
        {projects?.slice(-3).map((project) => (
          <ProjectCard project={project} />
        ))}
      </ScrollRow>
    </PageWrapper>
  );
}

export default Profile;
