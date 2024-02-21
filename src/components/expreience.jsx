'use client';
import React from 'react';
import { MdStarOutline, MdWorkOutline } from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Expreience = () => {
  return (
    <section className="mb-25 text-center sm:mb-25 text-black">
        <h2 className="text-3xl mb-10 text-center font-mono">My Work Experience</h2>
        <div className="flex flex-col items-center justify-center font-mono">
          <VerticalTimeline lineColor='darkgrey' >
            <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ 
              background: 'rgb(255, 255, 255)',
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              boxShadow: "10px 5px 5px lightgrey"
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgb(255,255,255)',
              
            }}
            date='Mar 2023 - Present'
            iconStyle={{ background: 'rgb(255, 255, 255)' }}
            icon={<MdWorkOutline/>}>
              <h3 className="vertical-timeline-element-title text-xl">Cloud Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">RIS, TH</h4>
              <p >
                Managed Azure Hybrid Cloud Infrastructure with VMware On-premise, Managed and Deployed applications to AKS Clusters.                      
              </p>
              
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'rgb(255, 255, 255)',
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                boxShadow: "10px 5px 5px lightgrey"
              }}
              date="May 2022 - Mar 2023"
              iconStyle={{ background: 'rgb(255, 255, 255)' }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title text-xl">DevOps Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Leap Solutions Asia, TH</h4>
              <p>
                Managed K8s clusters and Middle-ware Applications in On-Prem Environment.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'rgb(255, 255, 255)',
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                boxShadow: "10px 5px 5px lightgrey"
              }}
              date="Feb 2022 - May 2022"
              iconStyle={{ background: 'rgb(255, 255, 255)' }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title text-xl">Cloud Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Leap Solutions Asia, TH</h4>
              <p>
                Managed and Monitoring VPS and Priviate Cloud based on VMWare Product.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'rgb(255, 255, 255)',
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                boxShadow: "10px 5px 5px lightgrey"
              }}
              date="Feb 2021 - Feb 2022"
              iconStyle={{ background: 'rgb(255, 255, 255)' }}
              icon={<MdWorkOutline />}
            >
              <h3 className="vertical-timeline-element-title text-xl">Delivery Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Noventiq (Thailand), TH</h4>
              <p>
                Imprement and Support Microsoft 365 Product.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(255,255,255)' }}
                icon={<MdStarOutline />}
              />
          </VerticalTimeline>
        </div>
    </section>
  )
}

export default Expreience