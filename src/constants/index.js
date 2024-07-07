import ai_summarizer from "../assets/projects/ai_summarizer.png";
import breast_cancer_prediction from "../assets/projects/breast_cancer_prediction.png";
import credit_card_fraud from "../assets/projects/credit_card_fraud.png";
import quote_advice from "../assets/projects/quote_advice.png";

export const HERO_CONTENT = `I am a passionate Software developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like CSS, JavaScript, React JS as well as back-end technologies like Node.js, Express.js, MS SQL Server, PostgreSQL. My goal is to explore innovative ways to enhance user experiences and build even more creative web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React JS, Tailwind CSS, Node.js, MS SQL Server and PostgreSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "V3 Tech Solutions",
    description: `Built a responsive ReactJS front-end connecting to Node.js/Express.js back-end servers. Developed server-based applications, implemented efficient routing, and created RESTful APIs for integration. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "Tailwind CSS", "React.js", "Redux"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer Intern",
    company: "Kaashiv Info Tech",
    description: `Designed and developed user interfaces for web applications using React JS. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React JS", "MS SQL Server"],
  },
  {
    year: "2019 - 2020",
    role: "Data Analyst Intern",
    company: "UNIQ Technologies",
    description: ` Conducted exploratory data analysis on large datasets, identifying trends and patterns to support decision-making. Utilized statistical techniques to identify outliers and anomalies in datasets, improving data quality. Performed data visualization using Tableau, based on the analytical needs of the organization and our participants.`,
    technologies: ["Tableau", "Python", "MS SQL Server"],
  },
];

export const PROJECTS = [
  {
    title: "AI Summarizer Application",
    image: ai_summarizer,
    link: "https://github.com/Aruna777/AI-Summarizer-Application",
    description:
      "Developed an AI Summarizer App using React, which effortlessly integrated APIs for streamlined text summarization on the frontend.",
    technologies: ["HTML", "Tailwind CSS", "React", "Redux", "REST APIs"],
  },
  {
    title: "Breast Cancer Prediction",
    image: breast_cancer_prediction,
    link: "https://github.com/Aruna777/Breast-Cancer-Prediction",    
    description:
      "Created a machine learning model for early breast cancer detection using a diverse dataset with clinical and genomic features.",
    technologies: ["Python", "Pandas", "NumPy", "SciKit-Learn", "Seaborn"],
  },
  {
    title: "Credit Card Fraud Detection",
    image: credit_card_fraud,
    link: "https://github.com/Aruna777/Credit-Card-Fraud-Detection",  
    description:
      "Designed and implemented a Credit Card Fraud Detection system utilizing machine learning classifiers, such as Logistic Regression, Naïve Bayes, K Nearest Neighbors, and SVM.",
    technologies: ["Python", "Pandas", "MatplotLib", "Seaborn", "NumPy"],
  },
  {
    title: "Quote Advisor",
    image: quote_advice,
    link:"https://github.com/Aruna777/Quote_Advice_Web_Application",
    description:
      "A Web Application which generates random quotes utilizing JavaScript, ReactJS, Tailwind CSS and Axios.",
    technologies: ["HTML", "CSS", "React JS", "APIs"],
  },
];

export const CONTACT = {
  address: "4412 Greenfield Dr, Richardson, Texas, 75082 ",
  phoneNo: "+1 316 312 1887 ",
  email: "arunamurugesan03@gmail.com",
};