import { useState } from 'react'
import './Projects.css'

interface Project {
  id: number
  title: string
  thumbmail: string
  githubLink: string
  description: string
}
const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])

  return (
    <div className="Section">
      <p>Welcome to my Projects Page</p>
    </div>
  )
}

export default Projects
