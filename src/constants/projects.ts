interface SubProject {
  code: string;
  description: string;
  students?: string;
  fundedBy?: string;
}

interface Project {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  categoryDescription: string;
  coverImage?: string;
  summary: string;
  subProjects?: SubProject[];
  notes?: string;
  customUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Education",
    slug: "education",
    category: "Education",
    categorySlug: "education",
    categoryDescription: "Exploring how robots can personalize learning experiences for children using gaze, speech, and interactive behavior.",
    coverImage: "/img/projects/educating.png",
    summary:
      "As part of this project, the ongoing research at the lab is focused on designing social behaviours (Gaze and Speech) for robots to provide personalized learning for children to enhance learning outcomes in tutoring scenarios.\n\n" +
      "The motivation behind this work is the current increase in the numbers of students joining primary schools in Kenya with a limited number of teachers as well as students with different learning abilities.\n\n" +
      "We have two ongoing MSc projects:",
    subProjects: [
      {
        code: "MSc.P3",
        description:
          "To design and implement social behaviours (speech and gaze) for NAO robot to create effective child-robot interaction scenarios for educating children about nutrition.",
        students: "Caroline Katumbi",
        fundedBy: "UNESCO-TWAS"
      },
      {
        code: "BSc.P1",
        description:
          "Nutrisia is an ongoing project that aims to integrate the Pepper humanoid robot with OpenAI technology to create an interactive and engaging learning experience for children. The project leverages AI-powered speech recognition and dynamic conversations to teach children about nutrition.",
        students: "Masae Ian, Brandon Olunga"
      }
    ],
    notes: "Social training."
  },

  {
    title: "Social Training",
    slug: "social-training",
    category: "Social Training",
    categorySlug: "social-training",
    categoryDescription: "Developing robotic interaction models to support children with autism through behavior training and therapeutic interaction.",
    coverImage: "/img/projects/social-training.png",
    summary:
      "This research aims to examine how we can design human-robot interaction scenarios to support social behaviour training for children with autism.\n\n" +
      "We have two ongoing projects:",
    subProjects: [
      {
        code: "MSc.P1",
        description:
          "This project aims to develop State Transition Graphs (STGs) to coordinate intuitive gaze interactions between children with ASD and a social robot, thereby enhancing their social interaction skills.",
        students: "Paul Ndemo",
        fundedBy: "UNESCO-TWAS"
      },
      {
        code: "MSc.P5",
        description:
          "This project aims to develop a personalized interaction model for Pepper using Generative AI in ASD speech therapy.",
        students: "Magret Mumbi"
      }
    ]
  },

  {
    title: "Responsible Computing",
    slug: "responsible-computing",
    category: "Responsible Computing",
    categorySlug: "responsible-computing",
    categoryDescription: "Embedding ethical values and inclusive design principles into robotics development to ensure socially responsible innovation.",
    coverImage: "/img/projects/responsible-computing.jpeg",
    customUrl: "/responsible_computing/",
    summary:
      "Embedding Responsible Computing and Ethical Considerations in Robotics Development.\n\n" +
      "Social robots are increasingly gaining prominence in education—particularly in tutoring and social training—as well as in healthcare and social care settings. As robots become more integrated into these environments, it is crucial to ensure that they can build trusting relationships with people and operate in ethically and culturally acceptable ways.\n\n" +
      "The Responsible Computing (RC) project seeks to embed responsible computing and ethical considerations in robotics design and development. These principles include:",
    subProjects: [
      {
        code: "RC1",
        description:
          "Inclusivity and Accessibility – Ensuring robots are designed to serve diverse populations, including individuals with disabilities and those from different cultural backgrounds."
      },
      {
        code: "RC2",
        description:
          "Ethical Design – Prioritizing fairness, transparency, trust, and privacy in robotic interactions."
      },
      {
        code: "RC3",
        description:
          "Societal Impact – Considering the economic and social aspects, ensuring that they promote empathy."
      }
    ],
    notes: "This project is funded by the Mozilla Foundation and USAID (2023–2025)."
  },

  {
    title: "Socially Assistive Robots",
    slug: "socially-assistive-robots",
    category: "Socially Assistive Robots",
    categorySlug: "socially-assistive-robots",
    categoryDescription: "Designing assistive robot systems for fall detection, visual comprehension, and support in elder care and accessibility.",
    coverImage: "/img/projects/assistive-learning.png",
    summary:
      "We have two ongoing projects:",
    subProjects: [
      {
        code: "MSc.P2",
        description:
          "This project aims to develop a fall detection model combining the NAO robot with an ensemble of YOLO and CNN deep-learning algorithms for use in elderly care homes.",
        students: "Eric Otieno",
        fundedBy: "UNESCO-TWAS"
      },
      {
        code: "MSc.P4",
        description:
          "This project aims to integrate knowledge graphs with a social robot (Pepper /NAO) to enhance the semantic comprehension of text to support students with visual impairments.",
        students: "Peter Kabunyi",
        fundedBy: "UNESCO-TWAS"
      }
    ]
  }
];













// export const projects = [
//     {
//         "title": "EDUCATION ",
//         "slug": "EDUCATION ",
//         "description": "<p>As part of this project, the ongoing research at the lab is focused on designing social behaviours (Gaze and Speech) for robots to provide personalized learning for children to enhance learning outcomes in tutoring scenarios.</p>\n\n<p>The motivation behind this work is the current increase in the numbers of students joining primary schools in Kenya with a limited number of teachers as well as students with different learning abilities.</p>\n\n<p>We have two ongoing MSc projects:</p>\n\n<ul class='list-disc pl-8 list-inside space-y-2'>\n    <li><strong>MSc.P3</strong> - To design and implement social behaviours (speech and gaze) for NAO robot to create effective child-robot interaction scenarios for educating children about nutrition. (MSc student: Caroline Katumbi) - <b>Funded by UNESCO-TWAS </b> </li>\n    <li><strong>BSc.P1</strong> - Nutrisia is an ongoing project that aims to integrate the Pepper humanoid robot with OpenAI technology to create an interactive and engaging learning experience for children. The project leverages AI-powered speech recognition and dynamic conversations to teach children about nutrition. (BSc. students: Masae Ian, Brandon Olunga).</li>\n</ul>\n\n<p>Social training.</p>",
//         "cover_image": "/img/projects/educating.png",
//         "category": "M"
//     },
//     {
//         "title": "SOCIAL TRAINING",
//         "slug": "SOCIAL TRAINING",
//         "description": "<p>This research aims to examine how we can design human-robot interaction scenarios to support social behaviour training for children with autism.</p>\n\n<p>We have two ongoing projects:</p>\n\n<ul class='list-disc list-inside pl-8 space-y-2'>\n    <li><strong>MSc.P1</strong> – This project aims to develop State Transition Graphs (STGs) to coordinate intuitive gaze interactions between children with ASD and a social robot, thereby enhancing their social interaction skills. (MSc student: Paul Ndemo) - <b>Funded by UNESCO-TWAS </b> </li>\n    <li><strong>MSc.P5</strong> – This project aims to develop a personalized interaction model for Pepper using Generative AI in ASD speech therapy. (MSc student: Magret Mumbi)</li>\n</ul>",
//         "cover_image": "/img/projects/social-training.png",
//         "category": "M"
//     },
//     {
//         "title": "RESPONSIBLE COMPUTING",
//         "slug": "RESPONSIBLE COMPUTING",
//         "description": "<p><strong>Embedding Responsible Computing and Ethical Considerations in Robotics Development</strong></p>\n\n<p>Social robots are increasingly gaining prominence in education—particularly in tutoring and social training—as well as in healthcare and social care settings. As robots become more integrated into these environments, it is crucial to ensure that they can build trusting relationships with people and operate in ethically and culturally acceptable ways.</p>\n\n<p>The <strong>Responsible Computing (RC) project</strong> seeks to embed responsible computing and ethical considerations in robotics design and development. These principles include:</p>\n\n<ul class='list-disc list-inside pl-8 space-y-2'>\n    <li><strong>Inclusivity and Accessibility</strong> – Ensuring robots are designed to serve diverse populations, including individuals with disabilities and those from different cultural backgrounds.</li>\n    <li><strong>Ethical Design</strong> – Prioritizing fairness, transparency, trust, and privacy in robotic interactions.</li>\n    <li><strong>Societal Impact</strong> – Considering the economic and social aspects, ensuring that they promote empathy.</li>\n</ul>\n\n<p><strong>This project is funded by the Mozilla Foundation and USAID (2023–2025).</strong></p>",
//         "cover_image": "/img/projects/responsible-computing.jpeg",
//         "category": "M",
//         "custom_url": "/responsible_computing/"
//     },
//     {
//         "title": "SOCIALLY ASSISTIVE ROBOTS",
//         "slug": "SOCIALLY ASSISTIVE ROBOTS",
//         "description": "<p>We have two ongoing projects:</p>\n\n<ul class='list-disc  list-inside pl-8 space-y-2'>\n    <li><strong>MSc.P2</strong> – This project aims to develop a fall detection model combining the NAO robot with an ensemble of YOLO and CNN deep-learning algorithms for use in elderly care homes. (MSc student: Eric Otieno) - <b>Funded by UNESCO-TWAS </b> </li>\n    <li><strong>MSc.P4</strong> – This project aims to integrate knowledge graphs with a social robot (Pepper /NAO) to enhance the semantic comprehension of text to support students with visual impairments. (MSc student: Peter Kabunyi) - <b>Funded by UNESCO-TWAS </b> </li>\n</ul>",
//         "cover_image": "/img/projects/assistive-learning.png",
//         "category": "M"
//     },
// ];