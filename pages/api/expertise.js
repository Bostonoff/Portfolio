const expertise = [
  {
    id: 0,
    title: "Frontend Development",
    desc: "As a seasoned Frontend Developer, I specialize in crafting immersive user experiences through technologies like HTML, CSS, and JavaScript. My proficiency lies in building responsive web applications using modern frameworks such as React.js, ensuring sleek and intuitive interfaces. With a keen eye for design and usability, I create engaging web solutions that resonate with user needs.",
  },
  {
    id: 1,
    title: "Next.js Development",
    desc: "I am diving into Next.js with an eagerness to explore its capabilities further. As a newcomer, I am navigating its features, learning to leverage server-side rendering, optimizing performance with static site generation, and enhancing SEO capabilities. I'm passionate about mastering Next.js, continually honing my skills, and aspiring to become an expert in leveraging its advanced functionalities for creating high-performance web applications.",
  },
  {
    id: 2,
    title: "Trello for Task Organization",
    desc: "Adept at using Trello to manage tasks effectively, I leverage its user-friendly interface and visual tools to organize workflows and enhance collaboration. While I'm still improving my familiarity with Trello's task tracking boards, I'm dedicated to maximizing their functionalities to increase productivity and streamline team coordination.",
  },
  {
    id: 3,
    title: "Designing (Library Implementation)",
    desc: "I have a solid grasp of design libraries like Figma and similar tools. Through active participation in hackathons and freelance projects, I've gained practical experience in implementing designs using these libraries. Implementing designs through libraries fuels my passion for design, fostering continual growth and creativity in the field.",
  },
  {
    id: 4,
    title: "Github",
    desc: "You can find my programming work on my GitHub profile. I am a developer who actively studies and applies my knowledge to create interesting projects. My GitHub profile reflects my learning journey and gradual development in the field of development. In the process of studying, I try to create interesting small projects in order to implement and master other new technologies in order to become an experienced developer",
  },
  
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
