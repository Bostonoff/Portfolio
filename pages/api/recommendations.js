// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Diyorbek",
    image: "images/diko.jpg",
    designation: "React JS | NEXT JS",
    view: "Hey everyone! I wanted to take a moment to recommend Mukhammad for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Mukhammad is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://github.com/Tursunov-Diyorbek",
  },
  {
    id: 1,
    name: "Robert",
    image: "images/adam.png",
    designation: "Data Scientist | Machine Learning Engineer",
    view: "I wholeheartedly recommend Mukhammad as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Mukhammad's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
  },
  {
    id: 2,
    name: "Muhammad",
    image: "images/muhammad.jpeg",
    designation: "MERN Stack Developer",
    view: "I highly recommend Mukhammad for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
