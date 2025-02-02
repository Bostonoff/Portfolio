const expertise = [
  {
    id: 0,
    title: "Frontend Development",
    desc: "As a Frontend Developer, I craft responsive, user-friendly web apps using HTML, CSS, JavaScript, and React.js, focusing on smooth design and seamless user experiences",
  },
  {
    id: 1,
    title: "iOS Development (SwiftUI, Xcode)",
    desc: "Currently learning iOS development with Swift and Xcode, focusing on building apps and exploring both UIKit and SwiftUI to create native mobile experiences",
  },
  {
    id: 2,
    title: "React & Next.js Development",
    desc: "Exploring React and Next.js to build high-performance web apps with server-side rendering, static site generation, and SEO optimization",
  },
  {
    id: 3,
    title: "Trello for Task Organization",
    desc: "Trello helps organize tasks and improve team collaboration, focusing on smoother workflows and better productivity",
  },
  {
    id: 4,
    title: "Designing (Library Implementation)",
    desc: "Solid grasp of design tools like Figma, Sketch, and UI libraries such as Material UI and Ant Design. With experience in hackathons and freelance projects",
  },
  {
    id: 5,
    title: "Github",
    desc: "My portfolio highlights my development journey, featuring projects that demonstrate my growing skills and exploration of new technologies",
  },
  
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
