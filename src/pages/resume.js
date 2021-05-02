import React from "react"

// Common component
import SEO from "../components/seo"
import Image from "../components/common/image"
import Layout from "../components/layout/layout"

// Resume component
import Badge from "../components/resume/badge"
import ResumeSection from "../components/resume/resume-section"
import CategoryTitle from "../components/resume/category-title"

// Resume source
import {
  skills,
  projects,
  contacts,
  certificates,
  workExperience,
  languages,
  honors
} from "../resume-source"

import AliTaeeResumePDF from "../assets/Resume _ Ali Taee.pdf"

const Sidebar = () => (
  <aside className="resume__sidebar">
    <Image className="img-round resume__img" />
    <h1 className="resume__title">Niloofar Arazkhani</h1>
    <p style={{'text-align': 'justify'}}>
    I am a PhD candidate at Sharif University. My strengths are in research and problem-solving.  I specialise in Computational Geometry and have a good academic record from The Universities of Iran.  I have experience in front end programming,  My hobbies include Reading, country walks, photography and have a blog post. 
    </p>

    <CategoryTitle title="contacts" />
    <ul className="unbulleted-list resume__contact">
      {contacts.map(contact => (
        <li key={contact.id}>
          <a href={contact.href} target="_blank" rel="noopener noreferrer">
            <span className={contact.icon} /> {contact.text}
          </a>
        </li>
      ))}
    </ul>

    <CategoryTitle title="skills" className="resume__margin-top-lg" />
    <article className="resume__skills">
      {skills.map(skill => (
        <Badge key={skill.id} title={skill.title} level={skill.level}/>
      ))}
    </article>

    <CategoryTitle title="languages" className="resume__margin-top-lg" />
    <article className="resume__skills">
      {languages.map(lang => (
        <Badge key={lang.id} title={lang.title} level={lang.level}/>
      ))}
    </article>
  </aside>
)

const Main = () => (
  <article className="resume__main">
    <CategoryTitle title="work experience" />
    <ol className="unbulleted-list">
      {workExperience.map(experience => (
        <ResumeSection
          key={experience.id}
          list={experience.list}
          time={experience.time}
          mainLink={experience.mainLink}
          mainTitle={experience.mainTitle}
          secondaryTitle={experience.secondaryTitle}
        />
      ))}
    </ol>

    <CategoryTitle title="Education" />
    <ol className="unbulleted-list">
      {projects.map(project => (
        <ResumeSection
          key={project.id}
          list={project.list}
          time={project.time}
          mainLink={project.mainLink}
          mainTitle={project.mainTitle}
          secondaryTitle={project.secondaryTitle}
        />
      ))}
    </ol>

    <CategoryTitle title="Publications" />
    <ol className="unbulleted-list">
      {certificates.map(certificate => (
        <ResumeSection
          key={certificate.id}
          list={certificate.list}
          time={certificate.time}
          mainLink={certificate.mainLink}
          mainTitle={certificate.mainTitle}
          secondaryTitle={certificate.secondaryTitle}
        />
      ))}
    </ol>
    <CategoryTitle title="Awards & honors" />
    <ol className="unbulleted-list">
      {honors.map(honor => (
        <ResumeSection
          key={honor.id}
          mainTitle={honor.mainTitle}
          secondaryTitle={honor.secondaryTitle}
        />
      ))}
    </ol>
  </article>
)

const DownloadResume = () => {
  return (
    <div className="flex-center">
      <a className="download-resume" href={AliTaeeResumePDF} download>
        Download resume
      </a>
    </div>
  )
}

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <article className="resume">
      <Main />
      <Sidebar />
    </article>
    {/* <DownloadResume /> */}
  </Layout>
)

export default Resume
