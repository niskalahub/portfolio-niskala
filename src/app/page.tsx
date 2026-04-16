import { PortfolioClient } from '@/components/layout/PortfolioClient'
import { expertiseItems, experiences, education, languages, additionalSkills, profileDesc, projects, webProjects } from '@/data/portfolio'

export default function Home() {
  return (
    <main>
      <PortfolioClient
        expertise={expertiseItems}
        experiences={experiences}
        education={education}
        languages={languages}
        additionalSkills={additionalSkills}
        profile={profileDesc}
        projects={projects}
        webProjects={webProjects}
      />
    </main>
  )
}
