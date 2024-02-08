const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Academic Lyceum ('Sayiljoy') at JDPI",
        degree: "Exact Sciences",
        detail:
          "Studied various aspects of economics including microeconomics, macroeconomics, economic theories, market analysis, and financial management within the framework of the exact sciences curriculum. Additionally, delved into mathematical methods, statistics, and data analysis techniques pertinent to economic analysis. Developed proficiency in utilizing computer technologies and analytical tools during the course of study",
        year: "2016-2019",
      },
      {
        id: 2,
        title: "PDP Academy",
        degree: "Frontend Development",
        detail:
          "Completed part 1 Foundation course and get certificate and part 2 Successfully completed the course in frontend development at PDP Academy, achieving certification.",
        year: "2022-2023",
      },
      {
        id: 1,
        title: "Tashkent University of Information Technologies-(TUIT)",
        degree: "BS, Mobile communication technologies",
        detail:
          "Though my studies primarily focused on mobile communication technologies, the skills and knowledge acquired during my university years significantly contributed to my overall understanding of technology. These studies have complemented my journey into the Fronted sphere by providing a strong technical foundation, enhancing my grasp of software architecture, and fostering problem-solving abilities that are transferable across various tech domains.",
        year: "2020-Present",
      },
      {
        id: 3,
        title: "Inter-Nation",
        degree: "English course",
        detail:
          "Currently enrolled in an English course at Inter-Nation, I'm actively honing my language skills. At my current pace, I've progressed to an upper-intermediate level. This pursuit supplements my technical education, enhancing my ability to engage with diverse audiences and communicate effectively within the tech sphere.",
        year: "2022-Present",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "PDP Academy",
        role: "Frontend Developer",
        url: "https://online.pdp.uz/",
        desc: "As a frontend developer, I've mastered JavaScript along with frameworks like React, Redux, React Query, and Next.js, leveraging these skills to create compelling user interfaces for web applications.",
        year: "2022- 2023",
        location: "Tashkent, Uzbekistan",
      },
      {
        id: 2,
        title: "Tech",
        role: "Internee",
        url: "no website",
        desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
        year: "07/2022 ",
        location: "Tashkent, Uzbekistan",
      },
      {
        id: 3,
        title: "Sammi",
        role: "Frontend Developer",
        url: "https://sammi.ac/",
        desc: "Continuously refining my skills as a frontend developer, I specialize in crafting user interfaces for various web applications.",
        year: "01/2024 - Present",
        location: "Tashkent, Uzbekistan",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
