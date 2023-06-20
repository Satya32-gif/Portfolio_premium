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
      name: "YouTube Front-End ( Colne )",
      image: "/YTclone.png",
      link: "https://youtubeyt.netlify.app/",
      desc1:
        "Designed a Front-End of YouTube.",
      desc2:
        "Developed Frontend using React JS, MateriaUI & other Styled component.",
      desc3:
        "Implemented YouTube home Frontend with some clickable funtions included in it... More development on it's way :)",
    },
    {
      name: "CSS created for Art gallery portfolio",
      image: "/ssgb.png",
      link: "https://satyaart.vercel.app/",
      desc1:
        "Designed a frontend gallery.",
      desc2:
        "Developed using basic HTML and CSS only for a basic page structure.",
      desc3:
        "Implemented to create a non-dynamic page of gallery containing artworks to display to the users.",
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
    {
      name: "E-Commerce store Frontend (ReactJs)",
      image: "/sscube.png",
      link: "https://sscube.vercel.app/",
      desc1:
        "Designed a Front-End project for an ecommerce webpage.",
      desc2:
        "Developed Frontend using React JS, MateriaUI & other Styled component.",
      desc3:
        "Implemented as a first frontend development for a E-Commerce Store with only Basic features... More Improvements will be done to it soon with the backend..",
    },
    {
      name: "PixelPii Consultancy Services",
      image: "/pxpjct.png",
      link: "https://pixelpii.netlify.app/",
      desc1:
        "Designed a Front-End project for PixelPii Labs.",
      desc2:
        "Developed Frontend using React JS and Styled components.",
      desc3:
        "Implemented to fulfill the requirements of a startup IT and Business Consulting company called PixelPii Labs.",
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
