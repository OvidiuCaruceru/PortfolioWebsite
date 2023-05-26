import { Project } from "../models/project.model";

export const projects: Project[] = [
  {
    title: 'Portfolio website',
    website: 'https://ovidiucaruceru.github.io/PortfolioWebsite/',
    github: 'https://github.com/OvidiuCaruceru/PortfolioWebsite',
    figma: 'https://www.figma.com/file/6rNudfS9QZ4pGuqoixmK2J/Portfolio-website?type=design&t=qMmRmfK2cvudZbPg-0',
    description: [
      {
        text: 'The website you are viewing right now.',
        hasSpecialStyling: false
      },
      {
        text: 'Designed in Figma and built using Angular.',
        hasSpecialStyling: false
      },
      {
        text: 'Demonstrating my ability to transpose a design to functional code.',
        hasSpecialStyling: false
      },
      {
        text: 'Highlights: Responsive layout, routing, data binding, service, observable.',
        hasSpecialStyling: false
      },
    ],
    isActive: false,
    isFinished: true
  },
  {
    title: 'Fullstack website with ChatGPT',
    website: 'pending',
    github: 'pending',
    figma: 'pending',
    description: [
      {
        text: 'Coming soon',
        hasSpecialStyling: true
      },
      {
        text: 'Website to display my learning process using ChatGPT.',
        hasSpecialStyling: false
      },
      {
        text: 'Designed in Figma and built using Angular and ASP.NET.',
        hasSpecialStyling: false
      },
      {
        text: 'Highlights: CRUD operations, working with data from server, authentication.',
        hasSpecialStyling: false
      },
    ],
    isActive: false,
    isFinished: false
  },
]