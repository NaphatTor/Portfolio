'use client';
import React from 'react';
import { MdStarOutline, MdWorkOutline } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from 'prop-types';

const timelineElementStyle = {
  background: 'rgb(255, 255, 255)',
  border: "1px solid rgba(0, 0, 0, 0.05)",
  textAlign: "left",
  boxShadow: "10px 5px 5px lightgrey"
};

const experienceData = [
    {
    title: "Socket XO",
    role: "Real-time XO client (Python)",
    tools: "Python",
    period: "2025",
    description: "Developed the Python client-side application for a real-time two-player XO game using socket programming, enabling synchronous gameplay via terminal."
  },
  {
    title: "Find Edu Bot",
    role: "Assessment chatbot for personality analysis",
    tools: "Line Developers, LINE OA, Boinoi, DriveToWeb , Figma, Draw.io, Notepad++ ",
    period: "2024",
    description: "Developed a LINE chatbot using Holland’s theory to assess personality and provide career guidance, enabling students to make more informed education and career choices."
  },
  {
    title: "Randoof Food Random",
    role: "Smart vending machine",
    tools: "Figma and Canva (for UI/UX and visual mockups)",
    period: "2023",
    description: "Designed and developed the end-to-end concept of a smart vending machine for university students, covering UX/UI, business model, and pitch presentation."
  }
];

const TimelineElement = ({ title, role, tools, period, description }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={timelineElementStyle}
    contentArrowStyle={{
      borderRight: '7px solid rgb(255,255,255)',
    }}
    date={period}
    iconStyle={{ background: 'rgb(255, 255, 255)' }}
    icon={<MdWorkOutline />}
  >
    <h3 className="vertical-timeline-element-title text-xl">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{role}</h4>
    <h4 className="vertical-timeline-element-subtitle">{tools}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

TimelineElement.propTypes = {
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Experience = () => {
  return (
    <section className="mb-25 text-center sm:mb-25 text-black">
      <h2 className="text-3xl mb-10 text-center font-mono">Project</h2>
      <div className="flex flex-col items-center justify-center font-mono">
        <VerticalTimeline lineColor='darkgrey'>
          {experienceData.map((experience, index) => (
            <TimelineElement key={index} {...experience} />
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(255,255,255)' }}
            icon={<MdStarOutline />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;