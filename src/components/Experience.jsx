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

const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  border: 2px solid ${COLORS.DarkWhite};
`;

const experience = [
  {
    date: "August 2021 - Current",
    description:
      "Full stack development using Next.js, Nestjs, Postgresql, AWS, Cypress",
    role: "Software Engineer",
    company: "Recruitable/Frater Corporation",
    icon: <Icon src={"/company/recruit.png"} alt="Recruitable" />,
    work: true,
  },
  {
    date: "December 2020 - July 2021",
    description: "Full stack development using Vuejs, Mysql and Java",
    role: "Full Stack Developer, Remote working",
    company: "DoobunjjaeDotCom",
    icon: <Icon src={"/company/doobun.png"} alt="doobunjjae" />,
    work: true,
  },
  {
    date: "November 2020 - December 2020",
    description:
      "Collaborated with other co-workers to successfully offer a sustainable solution using engineering principles",
    role: "Corporate Sustainability Consulting Intern",
    company: "Deloitte, Micro-internship",
    icon: <Icon src={"/company/deloitte.png"} alt="deloitte" />,
    work: true,
  },
  {
    date: "June 2021 - November 2021",
    description: "Project Management, Team Leading, MERN Stack",
    role: "Project Manager",
    company: "UOA WDCC",
    icon: <Icon src={"/company/wdcc.png"} alt="Wdcc" />,
    work: false,
  },
];

const ExperienceElements = ({ classProp }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: classProp.work ? `${COLORS.HeaderBackground}` : `#36E38B`,
        color: `${FONTCOLOURS.DarkBlue}`,
      }}
      contentArrowStyle={{
        borderRight: `7px solid  ${
          classProp.work ? COLORS.HeaderBackground : `#36E38B`
        }`,
      }}
      date={classProp.date}
      iconStyle={{
        background: classProp.work ? "rgb(33, 150, 243)" : `#36E38B`,
        color: "#000",
        display: "flex",
        alignItems: "center",
      }}
      icon={classProp.icon}
    >
      <h3 className="vertical-timeline-element-title">{classProp.role}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {classProp.company}
      </h4>
      <p>{classProp.description}</p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <Container id="experience">
      <VerticalTimeline lineColor={COLORS.HeaderBackground}>
        {experience.map((it, idx) => (
          <ExperienceElements key={idx + "work"} classProp={it} />
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
