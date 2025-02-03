const review = [
  {
    id: 0,
    clientName: "Alex",
    clientLocation: "France",
    clientSource: "Upwork",
    clientReview:
      "It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does",
  },
  {
    id: 2,
    clientName: "Anne",
    clientLocation: "United States",
    clientSource: "Upwork",
    clientReview:
      "He is very good with communication and experienced website developer",
  },
  {
    id: 3,
    clientName: "Jake",
    clientLocation: "Germany",
    clientSource: "Fiverr",
    clientReview:
      "He knows in and out of web app development. His understanding of different technologies and frameworks in the space is also very impressive",
  },
  {
    id: 4,
    clientName: "Blaise",
    clientLocation: "France",
    clientSource: "Fiverr",
    clientReview:
      "I admire his speed of development and quality of work when given an assignment",
  },
];
export default function handler(req, res) {
  res.status(200).json(review);
}
