export type NewsItem = {
  title: string;
  description: string;
  coverImage: string;
  externalLink?: string;
  datePublished: string;
};

export const news: NewsItem[] = [
  {
    title: "Arrival of the Pepper Robot in JKUAT",
    description:
      "We are thrilled to announce the arrival of our very first Pepper robot at the JKUAT Social Robotics Lab! Pepper is a state-of-the-art humanoid robot developed by SoftBank Robotics, with advanced sensing capabilities in human-robot interaction. It can recognize faces, interpret emotions, and engage in conversations, making it an ideal platform for exploring the future of social robotics research. This addition to our lab will enable us advance our human robot interaction research, design innovations solutions, and deepen our understanding of human-centered robotics. We are excited to see the possibilities Pepper will bring to our ongoing projects and teaching!",
    coverImage: "/img/News/pepper.jpg",
    externalLink: "",
    datePublished: "2024-08-10",
  },
  {
    title: "Girls In ICT - JKUAT",
    description:
      "The enduring perception, mostly, stereotypical, that girls are not well adopted to pursue courses and careers in science, technology, engineering and mathematics (STEM) has stopped many girls from enrolling into STEM subjects. To unroll this practice, Jomo Kenyatta University of Agriculture and Technology has launched a strategic initiative designed to empower and woo young women enrolled in the Competency-Based Curriculum (CBC) system, guiding them toward Science, Technology, Engineering, and Mathematics (STEM) careers.",
    coverImage: "/img/News/ict-girls.jpg",
    externalLink:
      "https://www.jkuat.ac.ke/programme-to-attract-young-women-to-stem-unveiled/#:~:text=To%unroll%this%practice%2C",
    datePublished: "2024-04-05",
  },
];
