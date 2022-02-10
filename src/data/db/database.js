import Mock from "../mock";

const database = {
  information: {
    name: 'Devon Owen',
    aboutContent: "I am a very expierenced full stack web dev with a passion for newer technologies. I specialize in the full MERN stack but also have knowledge in a large variety of other languages and technologies. I also have a background in IT/System admin work.",
    age: 24,
    phone: '949-394-8138',
    nationality: 'American',
    language: 'English',
    email: 'Devonvowen@gmail.com',
    address: '6160 Quinnwood Ln North, Plymouth, Minnesota',
    freelanceStatus: 'Unavailable',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/devon-owen-124342138/',
      dribbble: '',
      github: 'https://github.com/Ningauble479'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: ''
  },
  services: [
    {
      title: "Web Design",
      icon: 'brush-alt',
      details: "I am able to work with a large variety of web design technologies. From hand-coding to joomla ive learned to work with whatever is necessary for the project."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Using NodeJS with Express, MongoDB and React I've worked on many large scale projects varying from an ERP system to an idle game."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Most projects I work on are developed with mobile first in mind. When it comes to something that needs to be put on an app store i utilize React Native."
    }
  ],
  reviews: [

  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 75
    },
    {
      title: "ReactJS",
      value: 95
    },
    {
      title: "NodeJS",
      value: 95
    },
    {
      title: "NextJS",
      value: 80
    },
    {
      title: "MongoDB",
      value: 80
    },
    {
      title: 'GraphQL',
      value: 70
    },
    {
      title: "Photoshop",
      value: 40
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - Present",
        position: "Operations Manager/Software Engineer",
        company: "GreatWoods Cabinetry",
        details: "In charge of network as well as creating any new applications desired. EX: Creating a time clock, Setting up an internal CMS and creating a job tracking system."
      },
      {
        id: 2,
        year: "2021",
        position: "Full Stack Web Developer",
        company: "MCSI",
        details: "Worked with multiple large scale businesses including Rock On Trucks and Minnesota Truck Headquarters. Created multiple websites/web apps for clients."
      },
      {
        id: 3,
        year: "2020-2021",
        position: "Full Stack Web Dev",
        company: "Lune",
        details: "In charge of developing application from the back-end. Worked with a development team to create the full social media platform."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2017 - 2018",
        graduation: "Full Stack Web Dev Bootcamp",
        university: "UCI",
        details: "Learned the entire development process including how to be scrum lead. Top of the class and one of the first students to utilize React right from the beginning of the course."
      }
    ]
  },
  blogs: [
  ],
  contactInfo: {
    phoneNumbers: ['949-394-8138'],
    emailAddress: ['dvowen@cox.net', 'devonvowen@gmail.com'],
    address: "6160 Quinnwood LN North, Plymouth, MN"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});