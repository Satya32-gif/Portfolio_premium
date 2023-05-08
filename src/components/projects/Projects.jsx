import React from "react";
import ProjectCard from "../projectcard/ProjectCard";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  margin-bottom: 50px;
`;

const Projects = () => {
  const projectData = [
    {
      name: "Flash Card Generator",
      image: "/flashcard.png",
      link: "https://myflashcard.netlify.app",
      desc1:
        "Designed a website to create Flash card",
      desc2:
        "Developed front end using React JS, Styled components and Tailwind CSS",
      desc3:
        "Implemented to fulfill the requirements provided by the AlmaBetter guidelines",
    },
    {
      name: "Crypto Dashboard ",
      image: "/crypto.png",
      link: "https://mycrypto-nine.vercel.app/",
      desc1:
        "Designed a frontend project to get a view of real time crypto price.",
      desc2:
        "Developed frontend using React JS, Styled components and REST API.",
      desc3:
        "Implemented to fulfill the requirements provided by the AlmaBetter guidelines with REST API and broiler plates.",
    },
    {
      name: "Light score portfolio Template ",
      image: "/portfol.png",
      link: "https://satyaprakash-red.vercel.app/",
      desc1:
        "Designed a porfolio template with good light source",
      desc2: "Developed front end using React JS",
      desc3: "Currently implemented it individually",
    },
    {
      name: "Get YouTube Subscribers",
      image: "/youtubesubs.png",
      link: "https://youtube-backend-nu.vercel.app/",
      desc1:
        "Designed a Backend project to get youtube subscribers.",
      desc2:
        "Developed Backend using React JS, Styled components and Mongo.",
      desc3:
        "Implemented to fulfill the requirements provided by the AlmaBetter guidelines with GET method on local host 3000.",
    },
  ];
  return (
    <Container>
      <Heading>Projects</Heading>
      {projectData?.map((item) => (
        <ProjectCard item={item} key={item.name} />
      ))}
    </Container>
  );
};

export default Projects;
