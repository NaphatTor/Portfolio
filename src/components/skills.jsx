import React from 'react'
import PropTypes from 'prop-types'
import * as SI from 'react-icons/si'
import * as FA from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

const styles = {
  section: "text-center font-mono sm:mb-20 mb-20 text-black",
  title: "text-3xl font-medium capitalize mb-8 text-center mt-8 first:mt-0",
  skillList: "flex flex-wrap justify-center gap-2 text-lg text-gray-800",
  skillItem: "bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]",
  icon: "mr-2"
};

const skillsData = [
  { icon: SI.SiPython, name: "Python" },
  { icon: FA.FaJava, name: "Java" },
  { icon: SI.SiSpringboot, name: "Spring Boot" },
  { icon: FA.FaHtml5, name: "HTML" },
  { icon: SI.SiCss3, name: "CSS" },
  { icon: SI.SiJavascript, name: "JavaScript" },
  { icon: SI.SiGit, name: "Git" },
  { icon: FA.FaGithub, name: "GitHub" },
  { icon: SI.SiDocker, name: "Docker" },
  { icon: FA.FaFigma, name: "Figma" },
  { icon: SI.SiVisualstudiocode, name: "Visual Studio Code" },
];

const FamiliarData = [
  { icon: SI.SiTypescript, name: "TypeScript" },
  { icon: FA.FaReact, name: "React" },
  { icon: SI.SiNextdotjs, name: "Next.JS" },
  { icon: SI.SiTerraform, name: "Terraform" },
  { icon: SI.SiApachekafka, name: "Kafka" },
  { icon: DiMsqlServer, name: "SQL Server" },
  { icon: SI.SiMongodb, name: "MongoDB" },
  { icon: SI.SiPostman, name: "Postman" },
  { icon: SI.SiGitlab, name: "Gitlab" },
  { icon: SI.SiGo, name: "Go" },
];

const interestsData = [
  { icon: SI.SiAmazonaws, name: "AWS Cloud" },
  { icon: SI.SiMicrosoftazure, name: "Azure" },
  { icon: SI.SiGooglecloud, name: "GCP" },
  { icon: SI.SiAnsible, name: "Ansible" },
  { icon: SI.SiKubernetes, name: "Kuberbetes" },
  { icon: SI.SiTailwindcss, name: "Tailwind" },
  { icon: SI.SiPostgresql, name: "PostgreSQL" },
  { icon: SI.SiPrisma, name: "Prisma" },
  { icon: SI.SiLinux, name: "Linux" },  
];

const SkillItem = ({ Icon, name }) => (
  <li className={styles.skillItem}>
    <Icon className={styles.icon} />{name}
  </li>
);

SkillItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};
const SkillSection = ({ title, items}) => (
  <>
    <div className={styles.title}>{title}</div>
    <ul className={styles.skillList}>
      {items.map((item) => (
        <SkillItem key={item.name} Icon={item.icon} name={item.name} />
      ))}
    </ul>
  </>
);

SkillSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Skills = () => {
  return (
    <section id="skill" className={styles.section}>
      <SkillSection title="Skills" items={skillsData} />
      <SkillSection title="Familiar" items={FamiliarData}/>
      <SkillSection title="Interested" items={interestsData} />
    </section>
  );
};

export default Skills;