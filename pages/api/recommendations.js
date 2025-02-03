// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 1,
    name: "Pisetskiy Yuriy Valeryevich",
    image: "images/yuriy.png",
    designation: "Doctor of Technical Sciences, Professor",
    view: "I had the pleasure of working with Mukhammad during the SPACECOM project. His dedication, technical skills, and leadership potential stood out, making him an asset in any academic or professional setting.",
  },
  
  // {
  //   id: 2,
  //   name: "Muhammad",
  //   image: "images/muhammad.jpeg",
  //   designation: "MERN Stack Developer",
  //   view: "I recommend Mukhammad for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  // },
  
  {
    id: 2,
    name: "Giorgio Ventre",
    image: "images/giorge.jpeg",
    designation: "Scientific Director, Apple Developer Academy & Professor, University of Napoli Federico II",
    view: "Mukhammad demonstrates exceptional technical expertise and dedication, making him a strong asset in any advanced technical field.",
    linkednURL: "https://www.linkedin.com/in/giorgio-ventre-66b8221/",
  },
  {
    id: 3,
    name: "Robert",
    image: "images/adam.png",
    designation: "Data Scientist | Machine Learning Engineer",
    view: "I wholeheartedly recommend Mukhammad as a talented React frontend developer with an incredible flair for UI/UX design. Mukhammad's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
  },
  {
    id: 4,
    name: "Diyorbek",
    image: "images/diko.jpg",
    designation: "React JS | NEXT JS",
    view: "Hey everyone! I wanted to take a moment to recommend Mukhammad for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. Mukhammad is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://github.com/Tursunov-Diyorbek",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
