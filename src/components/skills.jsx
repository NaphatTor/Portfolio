import React from 'react'
import {
  SiMicrosoftazure, SiAzuredevops, SiTerraform, SiAnsible, SiKubernetes,
  SiDocker, SiPrometheus, SiGrafana, SiLinux, SiVmware, SiPython, SiJavascript,
  SiVeeam, SiGnubash, SiApachekafka, SiVite, SiReact, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiNodedotjs, SiGit, SiPostgresql, SiAmazonaws, SiPrisma
} from 'react-icons/si'

const Skills = () => {
  return (
    <section id="skill" className="text-center font-mono sm:mb-20 mb-20 text-black">
      <div className="text-3xl font-medium capitalize mb-8 text-center">My Skills</div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiMicrosoftazure className='mr-2' />Azure
        </li>
        {/* <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center">
        <SiAzuredevops className='mr-2'/>Azure DevOps
      </li> */}
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiTerraform className='mr-2' />Terraform
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiAnsible className='mr-2' />Ansible
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiGit className='mr-2' />Git
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiKubernetes className='mr-2' />Kuberbetes
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiDocker className='mr-2' />Docker
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiPrometheus className='mr-2' />Prometheus
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiGrafana className='mr-2' />Grafana
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiApachekafka className='mr-2' />Kafka
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiLinux className='mr-2' />Linux
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiGnubash className='mr-2' />Bash
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiVmware className='mr-2' />VMWare
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiVeeam className='mr-2' />Veeam Backup
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiMongodb className='mr-2' />MongoDB
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiPython className='mr-2' />Python
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiJavascript className='mr-2' />JavaScript
        </li>
      </ul>

      <div className="text-3xl font-medium capitalize mt-12 mb-8 text-center">My Interests</div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiAmazonaws className='mr-2' />AWS Cloud
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiNodedotjs className='mr-2' />Node.JS
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiReact className='mr-2' />React.JS
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiNextdotjs className='mr-2' />Next.JS
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiVite className='mr-2' />Vite.JS
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiTailwindcss className='mr-2' />Tailwind
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiPostgresql className='mr-2' />PostgreSQL
        </li>
        <li className="bg-white border border-black/[0.1] rounded-xl px-4 py-2 flex items-center hover:scale-[1.15]">
          <SiPrisma className='mr-2' />Prisma
        </li>
      </ul>
    </section>
  )
}

export default Skills