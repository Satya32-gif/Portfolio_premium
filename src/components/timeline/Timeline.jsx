import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  margin: 50px;
`;
const Heading = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Timeline = () => {
  return (
    <Container>
      <Heading>Timeline</Heading>
      <VerticalTimeline layout={"1-column-left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkHistoryOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Developer Trainee
          </h3>
          <h4 className="vertical-timeline-element-subtitle">AlmaBetter</h4>
          <p>MERN Stack</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--work"
          date="2023 "
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<WorkHistoryOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            REACT JS Web Developer 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Front-End with React.js and Next.js 
          </h4>
          <p>Frontend Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--education"
          date="2020-2023"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors in Computer Apllications
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Computer Apllications
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Salipur Autonomous College {" "}
          </h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Intermediate </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shanti Institute Of Management Studies 
          </h4>
          <p>Secured 57%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "transparent",
            color: "#808080",
            border: "1px solid white",
          }}
          className="vertical-timeline-element--education"
          date="2018"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        >
          <h3 className="vertical-timeline-element-title">Matriculation</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freedom International School
          </h4>
          <p>Secured 70% </p>
          {/* <p data-aos="fade-right">Secured 78%</p> */}
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<SchoolOutlinedIcon />}
        /> */}
        <VerticalTimelineElement
          icon={<StarRateOutlinedIcon />}
          iconStyle={{ background: "black", color: "#fff" }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Timeline;
