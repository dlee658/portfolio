import styled from "styled-components";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { COLORS, FONTCOLOURS } from "../constants/Colour";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  margin: 3rem 0;
  width: 100%;
  flex-direction: column;
`;

const ExperienceElements = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: `${COLORS.HeaderBackground}`,
        color: `${FONTCOLOURS.DarkBlue}`,
      }}
      contentArrowStyle={{ borderRight: `7px solid  ${COLORS.HeaderBackground}` }}
      date="2011 - present"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Container id="experience">
      <VerticalTimeline lineColor={COLORS.HeaderBackground}>
        <ExperienceElements />
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: `${COLORS.HeaderBackground}`,
            color: `${COLORS.DarkBlue}`,
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: `${COLORS.HeaderBackground}`,
          }}
          date="2010 - 2011"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: `${COLORS.HeaderBackground}`,
          }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element vertical-timeline-element--no-children"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
