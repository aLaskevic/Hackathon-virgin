import React from "react";

import { useForm, FormProvider } from "react-hook-form";
import Navigation from "/src/components/Navigation";
import { PageWrapper, FilterIcon, ShowcaseCard } from "../components";
import ProjectCard from "../components/ProjectCard";
import ScrollRow from "../components/ScrollRow";
import { CiSearch } from "react-icons/ci";
import { ProjectContext } from "../contexts/ProjectContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { projects, loading, error } = React.useContext(ProjectContext);

  console.log(projects);

  const navigate = useNavigate();

  return (
    <PageWrapper className="p-2 py-3 pb-20">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-gray-100 rounded-4xl h-12 pl-12"
          placeholder="Search for quests"
        />
        <span className="absolute left-5 top-4">
          <CiSearch />
        </span>
      </div>
      <ScrollRow className="mt-5">
        <FilterIcon title="Filter" image="/image5.png" />
        <FilterIcon title="Filter" image="/image7.png" />
        <FilterIcon title="Filter" image="/image9.png" />
        <FilterIcon title="Filter" image="/image10.png" />
        <FilterIcon title="Filter" image="/image11.png" />
      </ScrollRow>
      <ScrollRow title="New Upcoming Quests">
        {projects?.map((project) => (
          <ProjectCard
            project={project}
            onClick={() => navigate("project", { state: project })}
          />
        ))}
      </ScrollRow>
      <ShowcaseCard
        className="mt-5"
        project={projects[2]}
        onClick={() => navigate("project", { state: projects[2] })}
      />
      <ScrollRow title="Your Quests">
        {projects.slice(-2).map((project) => (
          <ProjectCard
            project={project}
            onClick={() => navigate("project", { state: project })}
          />
        ))}
      </ScrollRow>
    </PageWrapper>
  );
}

export default Home;
