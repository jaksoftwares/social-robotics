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
      "We are thrilled to announce the arrival of our first Pepper robot at JKUAT Social Robotics Lab! This state-of-the-art humanoid robot by SoftBank Robotics features advanced sensing capabilities, face recognition, emotion interpretation, and conversational abilities. Pepper will enable us to advance human-robot interaction research, design innovative solutions, and deepen our understanding of human-centered robotics.",
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
