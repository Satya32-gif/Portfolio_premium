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
      name: " The Vervex ",
      image: "/vervex.png",
      link: "https://thevervex.store/",
      desc1:
        "Designed a eCommerce website for Fashion apparels and accessories for a business.",
      desc2:
        "Developed front end and backend along with Hosting on Shopify and custom CSS.",
      desc3:
        "Implemented to fulfill the requirements provided by the business to sell goods and attract customers with dynamic UI.",
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
      name: " SureBuy Store",
      image: "/surebuy.png",
      link: "https://surebuystore.in/",
      desc1:
        "Designed a eCommerce website with Wordpress.",
      desc2:
        "Developed frontend with custom CSS and HTML blocks.",
      desc3:
        "Implemented to fulfill the requirements provided by the client to maintain the catalog designs.",
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
    {
      name: "Orange Story web",
      image: "/orange-story.png",
      link: "https://orange-story.vercel.app/",
      desc1:
        "Designed Orange Story.",
      desc2:
        "Developed Frontend using React JS, MateriaUI & other Styled component.",
      desc3:
        "Implemented Orange Story Frontend with some clickable funtions included in it... More development on it's way :)",
    },
    {
      name: "My Gym web",
      image: "/gym.png",
      link: "https://my-gym-opal.vercel.app/",
      desc1:
        "Designed a template for a Gym.",
      desc2:
        "Developed Frontend using React JS, MateriaUI & other Styled component.",
      desc3:
        "Implemented Frontend with some clickable funtions... More is in it's way :)",
    },
    {
      name: "Apple Web Clone ",
      image: "/apple.png",
      link: "https://myapple-react.vercel.app/",
      desc1:
        "Designed Apple official website.",
      desc2:
        "Developed Frontend using React JS, MateriaUI & other Styled component.",
      desc3:
        "Hope You Liked :)",
    },
    {
      name: "Practomind Solutions LLP",
      image: "/practomind.jpeg",
      link: "https://practomind.com",
      desc1:
        "Designed a website for a business consulting and marketing agency.",
      desc2:
        "Developed front end using React JS, Swift JS with Wordpress CMS.",
      desc3:
        "Implemented to fulfill the requirements provided by the client.",
    }
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
