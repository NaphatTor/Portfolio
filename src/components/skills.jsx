import React from 'react'
import {
  SiMicrosoftazure, SiTerraform, SiAnsible, SiKubernetes,
  SiDocker, SiPrometheus, SiGrafana, SiLinux, SiVmware, SiPython, SiJavascript,
  SiVeeam, SiGnubash, SiApachekafka, SiReact, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiNodedotjs, SiGit, SiPostgresql, SiAmazonaws, SiPrisma,
  SiOpentelemetry, SiGo, SiHelm, SiArgo, SiJenkins, SiGooglecloud, SiGitlab
} from 'react-icons/si';

const Skills = () => {
  const sectionClass = "text-center font-mono sm:mb-20 mb-20 text-black"
  const titleClass = "text-3xl font-medium capitalize mb-8 text-center"
  const skillListClass = "flex flex-wrap justify-center gap-2 text-lg text-gray-800"
  const skillItemClass = "bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]"
  const iconClass = "mr-2"

  return (
    <section id="skill" className={sectionClass}>
      <div className={titleClass}>Skills</div>
      <ul className={skillListClass}>
        <li className={skillItemClass}>
          <SiMicrosoftazure className={iconClass} />Azure
        </li>
        <li className={skillItemClass}>
          <SiGooglecloud className={iconClass} />GCP
        </li>
        <li className={skillItemClass}>
          <SiTerraform className={iconClass} />Terraform
        </li>
        <li className={skillItemClass}>
          <SiGitlab className={iconClass} />Gitlab
        </li>
        <li className={skillItemClass}>
          <SiGit className={iconClass} />Git
        </li>
        <li className={skillItemClass}>
          <SiKubernetes className={iconClass} />Kuberbetes
        </li>
        <li className={skillItemClass}>
          <SiArgo className={iconClass} />ArgoCD
        </li>
        <li className={skillItemClass}>
          <SiHelm className={iconClass} />HelmChart
        </li>
        <li className={skillItemClass}>
          <SiDocker className={iconClass} />Docker
        </li>
        <li className={skillItemClass}>
          <SiPrometheus className={iconClass} />Prometheus
        </li>
        <li className={skillItemClass}>
          <SiGrafana className={iconClass} />Grafana
        </li>
        <li className={skillItemClass}>
          <SiOpentelemetry className={iconClass} />OpenteleMetry
        </li>
        <li className={skillItemClass}>
          <SiApachekafka className={iconClass} />Kafka
        </li>
        <li className={skillItemClass}>
          <SiLinux className={iconClass} />Linux
        </li>
        <li className={skillItemClass}>
          <SiGnubash className={iconClass} />Bash
        </li>
        <li className={skillItemClass}>
          <SiVmware className={iconClass} />VMWare
        </li>
        <li className={skillItemClass}>
          <SiVeeam className={iconClass} />Veeam Backup
        </li>
        <li className={skillItemClass}>
          <SiMongodb className={iconClass} />MongoDB
        </li>
        <li className={skillItemClass}>
          <SiPython className={iconClass} />Python
        </li>
        <li className={skillItemClass}>
          <SiJavascript className={iconClass} />JavaScript
        </li>
      </ul>

      <div className={`${titleClass} mt-12`}>Interested</div>
      <ul className={skillListClass}>
        <li className={skillItemClass}>
          <SiAmazonaws className={iconClass} />AWS Cloud
        </li>
        <li className={skillItemClass}>
          <SiJenkins className={iconClass} />Jenkins
        </li>
        <li className={skillItemClass}>
          <SiNodedotjs className={iconClass} />Node.JS
        </li>
        <li className={skillItemClass}>
          <SiReact className={iconClass} />React.JS
        </li>
        <li className={skillItemClass}>
          <SiNextdotjs className={iconClass} />Next.JS
        </li>
        <li className={skillItemClass}>
          <SiGo className={iconClass} />Golang
        </li>
        <li className={skillItemClass}>
          <SiTailwindcss className={iconClass} />Tailwind
        </li>
        <li className={skillItemClass}>
          <SiAnsible className={iconClass} />Ansible
        </li>
        <li className={skillItemClass}>
          <SiPostgresql className={iconClass} />PostgreSQL
        </li>
        <li className={skillItemClass}>
          <SiPrisma className={iconClass} />Prisma
        </li>
      </ul>
    </section>
  )
}

export default Skills