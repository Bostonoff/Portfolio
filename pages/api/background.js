const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Academic Lyceum at JDPI",
        degree: "Exact Sciences",
        detail:
          "Studied various aspects of economics including microeconomics, macroeconomics, economic theories, market analysis, and financial management within the framework of the exact sciences curriculum. Additionally, delved into mathematical methods, statistics, and data analysis techniques pertinent to economic analysis. Developed proficiency in utilizing computer technologies and analytical tools during the course of study",
        year: "2016-2019",
      },
      
      {
        id: 1,
        title: "Tashkent University of Information Technologies-(TUIT)",
        degree: "BS, Mobile Systems Engineering",
        detail:
          "Though my studies primarily focused on mobile communication technologies, the skills and knowledge acquired during my university years significantly contributed to my overall understanding of technology. These studies have complemented my journey into the Frontend sphere by providing a strong technical foundation, enhancing my grasp of software architecture, and fostering problem-solving abilities that are transferable across various tech domains.",
        year: "2020-2024",
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
        id: 3,
        title: " Apple Developer Academy @Unina Federico II",
        degree: "Software Development, Mobile App Development",
        detail:
          "At the Apple Developer Academy, I am immersing myself in the world of mobile app development with a strong emphasis on software development and mobile technologies. The curriculum combines hands-on learning with real-world projects, helping me hone my skills in creating efficient, user-friendly apps",
        year: "2024 - Present",
      },
      // {
      //   id: 3,
      //   title: "Inter-Nation",
      //   degree: "English course",
      //   detail:
      //     "I previously studied at Inter-Nation, where I focused on improving my English skills up to the IELTS level. This foundational experience significantly boosted my language abilities, which I later built upon in my subsequent studies.",
      //   year: "2022-2023",
      //   url:"https://inter-nation.uz",
      // },
      // {
      //   id: 4,
      //   title: "Forward School",
      //   degree: "IELTS Preparation Course",
      //   detail:
      //     "I completed an IELTS preparation course at Forward School, where I further refined my English skills. This rigorous training equipped me with the language proficiency required to excel in both academic and professional settings.",
      //   year: "2023-2024",
      // },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "PDP Academy",
        role: "Frontend Developer Intern",
        url: "https://online.pdp.uz/",
        desc: "Worked under the mentorship of lead developers to design and implement responsive user interfaces for educational platforms, improving performance and user engagement",
        year: "2022- 2023",
        location: "Tashkent, Uzbekistan",
      },
      {
        id: 2,
        title: "PDP Academy",
        role: "Frontend Developer",
        url: "https://pdp.uz",
        desc: "Contributed to 10+ projects, ensuring code quality and adherence to industry standards, while refining workflows and processes.",
        year: "2023 - 2024",
        location: "Tashkent, Uzbekistan",
      },
      {
        id: 3,
        title: "Itransition Group",
        role: "Frontend Developer Intern",
        url: "https://www.itransition.com",
        desc: "Collaborated with a team using Git for version control, contributed to backend tasks with Node.js, and completed 3+ team projects. Worked remotely with mentors, improving front-end skills and following industry best practices.",
        year: "2024 - 2024 ",
        location: "Remote",
      },
      {
        id: 4,
        title: "TUIT",
        role: "Wireless Systems Engineer",
        url: "https://tuit.uz",
        desc: "Assisted in setting up and optimizing wireless communication systems, analyzed performance, and recommended improvements. Worked with mentors on IoT technologies and reliability enhancements.",
        year: "2024 - 2024",
        location: "Tashkent, Uzbekistan",
      },
      {
        id: 5,
        title: "Sarkor Telecom",
        role: "Technical Support Specialist",
        url: "https://sarkor.uz/",
        desc: "Provided network usage guidance, troubleshooting support, and remote assistance to clients. Diagnosed and resolved connectivity issues, assisted with account setup, and ensured high-quality service delivery. Monitored system performance and escalated critical issues as needed.",
        year: "2024 - 2024",
        location: "Tashkent, Uzbekistan",
      },
      {
        id: 6,
        title: "React Developer",
        role: "Self-employed",
        // url: "no ",
        desc: "Built and deployed several responsive web applications, improving page load speeds by 30%. Collaborated with clients to define project requirements, delivering custom solutions and achieving 89% client satisfaction. Managed code and collaborated using Git and GitHub.",
        year: "2024 - 2024",
        location: "Freelance, Remote",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
