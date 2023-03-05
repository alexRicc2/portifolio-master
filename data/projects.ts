import { project } from "@/types/project";
import {socials} from './social'
import Sample from "../public/project-sample.png";
import Kaze from '../public/kazeproject.png'
import provida from '../public/providaproject.png'
import semac from '../public/semacproject.png'
import { GithubIcon, InstagramIcon, TwitterIcon } from "@/public/icons/socials";

export const projects: project[] = [
  {
    media: [Kaze, Kaze],
    title: "E-commerce Kazecheese",
    date: "Edited on: March, 2023",
    tags: ["NextJs", "TailWindCSS", "TypeScript", "Shopify"],
    description: `I built a full E-commerce, as work for the The SEO Hustler company. https://kazecheese.com/ 
        `,
    links: [
      {
        icon: GithubIcon,
        link: socials.github,
      },
      {
        icon: InstagramIcon,
        link: socials.instagram,
      },
    ],
  },
  {
    media: [provida, provida],
    title: "Landing Page Pró Vida",
    date: "Edited on: March, 2023",
    tags: ["HTML", "CSS", "Javascript"],
    description: `I built a landing page for a physiotherapy company, working as a Freelancer.
    https://pro-vida-corpo-e-mente.vercel.app/
        `,
    links: [
      {
        icon: GithubIcon,
        link: socials.github,
      },
      
      {
        icon: InstagramIcon,
        link: socials.instagram,
      },
    ],
  },
  
  {
    media: [semac, semac],
    title: "Whether web app",
    date: "Edited on: Feb, 2023",
    tags: ["GatsbyJs", "Sass"],
    description: `My own portfolio and blog with projects, blog, about, contact, and home page. You can email me on the contact page, check my other social media, check my projects with a , check my projects with a  , check my projects with a   projects with a  projects with a  projects with a  ojects, blog, about, contact, and home page. You can email me on the contact
        `,
    links: [
      {
        icon: GithubIcon,
        link: socials.github,
      },
     
      {
        icon: InstagramIcon,
        link: socials.instagram,
      },
    ],
  },
  
];
