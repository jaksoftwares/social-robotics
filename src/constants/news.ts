export type NewsItem = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string; 
  coverImage: string;
  externalLink?: string;
  datePublished: string; 
  isFeatured: boolean;
};

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Arrival of the Pepper Robot in JKUAT",
    slug: "arrival-of-the-pepper-robot-in-jkuat",
    category: "Lab Update",
    description:
      "We are thrilled to announce the arrival of our first Pepper robot at JKUAT Social Robotics Lab! This state-of-the-art humanoid robot by SoftBank Robotics features advanced sensing capabilities, face recognition, emotion interpretation, and conversational abilities. Pepper will enable us to advance human-robot interaction research, design innovative solutions, and deepen our understanding of human-centered robotics.",
    coverImage: "/img/News/pepper.jpg",
    externalLink: "",
    datePublished: "2024-08-10",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Girls In ICT - JKUAT",
    slug: "girls-in-ict-jkuat",
    category: "Outreach",
    description:
      "The enduring perception, mostly, stereotypical, that girls are not well adopted to pursue courses and careers in science, technology, engineering and mathematics (STEM) has stopped many girls from enrolling into STEM subjects. To unroll this practice, Jomo Kenyatta University of Agriculture and Technology has launched a strategic initiative designed to empower and woo young women enrolled in the Competency-Based Curriculum (CBC) system, guiding them toward Science, Technology, Engineering, and Mathematics (STEM) careers.",
    coverImage: "/img/News/ict-girls.jpg",
    externalLink: "",
    datePublished: "2024-04-05",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Integrating African Perspectives in Technology and Design Processes",
    slug: "integrating-african-perspectives-in-technology-and-design",
    category: "Events",
    description:
      "Without integrating African perspectives into technology and design, we severely undercut the potential for solutions that meet cultural norms and empower locally raised innovations to address universal solvable problems. It ensures that the unique contributions from African culture and experience are given the proper respect to shape the world we desire.",
    coverImage: "/img/news/Dr.-Susan-Whyche.jpeg",
    externalLink:
      "https://discover.jkuat.ac.ke/integrating-african-perspectives-in-technology-and-design-processes/",
    datePublished: "2024-08-28",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Mozilla Responsible Computing Challenge (RCC) Global Conference",
    slug: "mozilla-responsible-computing-challenge-rcc-global-conference",
    category: "Events",
    description:
      "Dr. Eunice participated in the inaugural Mozilla Responsible Computing Challenge (RCC) Global Conference held in Kottayam, India supported by the Mozilla Foundation and USAID. The Conference brought together academicians and researchers from Kenya, India, and the United States who are advancing responsible computing initiatives. This event facilitated interdisciplinary discussions across diverse disciplines and countries, fostering insightful conversations on the future and direction of responsible computing.",
    coverImage: "/img/news/mozilla-rcc.jpg",
    externalLink:
      "https://foundation.mozilla.org/en/blog/responsible-computing-for-sustainable-futures/",
    datePublished: "2024-10-24",
    isFeatured: false,
  },
  {
    id: 5,
    title: "2024 TWAS Skill Building Workshop in Dakar, Senegal",
    slug: "2024-twas-skill-building-workshop-in-dakar-senegal",
    category: "Events",
    description:
      "Dr. Eunice was among the participants at the TWAS event, which focused on enhancing the scientific skills of African scientists, establishing networks, and building interdisciplinary collaborations to foster a stronger and more connected scientific community across the continent.",
    coverImage: "/img/news/senegal.png",
    externalLink:
      "https://twas.org/article/connecting-african-scientists-2024-twas-skill-building-workshop-dakar-senegal",
    datePublished: "2024-11-08",
    isFeatured: false,
  },
  {
    id: 6,
    title: "JKUAT Social Robotics Lab showcases their work at the National Research Festival",
    slug: "jkuat-social-robotics-lab-showcases-national-research-festival",
    category: "Events",
    description:
      "The Lab participated in the  National Research Festival, a premier event showcasing groundbreaking research and innovations. This festival was an excellent opportunity for MSc students to present their research, network with peers and industry experts, and gain insights into the latest developments in various fields of study.",
    coverImage: "/img/news/paul-ndemo-nrf.jpg",
    externalLink:
      "https://www.jkuat.ac.ke/jkuat-showcase-innovations-at-inaugural-national-research-festival/",
    datePublished: "2024-08-23",
    isFeatured: false,
  },
];

// https://www.jkuat.ac.ke/programme-to-attract-young-women-to-stem-unveiled/#:~:text=To%unroll%this%practice%2C