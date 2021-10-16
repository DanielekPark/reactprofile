import drawing from '../../src/images/drawing.jpeg'; 
import volunteer from '../images/directory.jpeg'; 
import self from '../images/self.jpeg'; 
import vg from '../images/vg.jpeg'; 
import gallery from '../images/gallery.jpeg'; 
import rsvp from '../images/rsvp.jpeg'; 
import pagination from '../images/pagination.jpeg'; 
//import node from '../images/node.png'; 
//Home page
export const recentData = [
  {
    id: 'job',
    desc: 'Currently I am working in an after school program as a program leader for children in Los Angeles, California. I assist with learning and providing after-school enrichment activities to  contribute to their future success and potential.',
    img: drawing,
  },
  {
    id: 'volunteer',
    desc: "I am also volunteering my time to help develop a health directory for the LGBTQ community in Boulder, Colorado while improving my skills in web development.",
    img: volunteer,
  },
  // {
  //   id: 'node',
  //   desc: "An API, with Express.js, Mongoose.js, and Node.js. enables users to login and register. Allows users create, read, update, and delete courses. The user interface is currently in development.",
  //   img: node,
  // }   
  
];

//About page
export const aboutData = [
  {
    id: 'interest',
    desc: "These were some reminders that helped my journey as a developer. It helps me to stay humble and it reminds me that if I am unable to complete a task I can improve and be able to complete to solve it in the future.",
    img: self,
  },   
  {
    id: 'hobby',
    desc: 'On my spare time I like to watch documentary series and stand up comedy on Netflix. I also like to spend time with friends and play video games on the Nintendo Switch.',
    img: vg
  }
];

//Project page
export const portfolioData = [
  {
    name: 'Health-Directory',
    id: 'Directory',
    desc: "The health directory is built with React, I was able to improve upon my skills and volunteer my time to LGBTQ community in Boulder, Colorado. The source code is not available to the public, and is planned to have more features.",
    img: volunteer,
    link: 'https://inclusivecareco.org/',
    site: 'https://inclusivecareco.org/'
  }, 
  {
    name: 'Student Pagination',
    id:'pagination',
    desc: "The pagination website displays 9 people at a time. The site had overwhelmed users due to the amount of information displayed at once. It now has better usability with button clicks that displays a different set of people.",
    img: pagination,
    link: 'https://github.com/DanielekPark/pagination',
    site: 'https://danielekpark.github.io/pagination/'
  },
  {
    name: 'React Rsvp',
    id:'rsvp',
    desc: `Built with React, it keeps track of confirmed guests and unconfirmed guests. The original project was built by Team Treehouse which utilized class components.`,
    img: rsvp,
    link: 'https://github.com/DanielekPark/rsvpreact/tree/master',
    site: 'https://danielekpark.github.io/rsvpreact/'
  },     
  {
    name: 'Image-gallery',
    id: 'Gallery',
    desc: "The image gallery website that displays various images. It enables users to browse images at different sizes and this website was a re-write of the original site.",
    img: gallery,
    link: 'https://github.com/DanielekPark/Img_gallery',
    site: 'https://danielekpark.github.io/Img_gallery/'    
  },
];

//Resume page
export const volunteerData = [
  {
    id: 'health-directory',
    link: 'https://inclusivecareco.org/',
    title: 'Out Boulder LGBTQ Health Directory / Boulder County, Co (Remote)',
    date: 'Front end junior developer volunteer Feb 2021–Present.',
    li1: 'Volunteered as a part of a 5-member team to improve and add features for a health directory.',
    li2: 'Identified and implemented solutions for multiple CSS bugs for improved layout.',
    li3: 'Managed maintenance for CSS files, identified CSS bugs and collaborated with a Ux designer to implement solutions for improved layout.',
    li4: 'Implemented new features with React.js for improved navigation and to display a list of medical providers.'
  }
];

export const workData = [
  {
    id: 'after-school',
    title: 'Think Together/ Los Angeles, Ca.',
    date: 'Program Leader Oct 2020–Present.', 
    li1: 'Collaborated with co-workers to promote clubs, implement and create new activities to increase attendance.',
    li2: 'Managed event planning including, student registration, event planning, and club promotions.'
  },
  {
    id: 'AST',
    title: 'Autism Spectrum Therapies/ Burbank, Ca.',
    date: 'Behavior Interventionist May 2018–June 2019.', 
    li1: 'Collaborated with a clinical supervisor to manage and improve maladaptive behavior for children with special needs.',
    li2: "Assisted in improving social and motor skills for clients; coached parents strategies to improve motor skills and to address maladative behavior."
  },    
];

export const projectsData = [
  {
    id: 'course-api',
    title: 'Course Api',
    link: 'https://danielekpark.github.io/rsvpreact/',
    desc: 'An application built with React, which keeps track of invited guests and provides visual feedback of unconfirmed guests.',
    li1: 'Improved site performance of an original project by refactoring class based components with React hooks.',
    li2: 'Provided a new feature with alerts when users edited their names and also prevented users from adding empty entries.'
  },  
  {
    id: 'rsvp-app',
    title: 'React Rsvp',
    link: 'https://danielekpark.github.io/rsvpreact/',
    desc: 'An application built with React, which keeps track of invited guests and provides visual feedback of unconfirmed guests.',
    li1: 'Improved site performance of an original project by refactoring class based components with React hooks.',
    li2: 'Provided a new feature with alerts when users edited their names and also prevented users from adding empty entries.'
  },
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    link: 'https://danielekpark.github.io/Img_gallery/',
    desc: 'Utilized HTML, CSS, and Javascript to construct a mobile first responsive photo displaying website which allows users to view small and big images.',
    li1: 'Improved site performance of an older project by replacing J-query plugins with a new script.',
    li2: 'Reduced server calls, by using fewer site images.'
  }    
]