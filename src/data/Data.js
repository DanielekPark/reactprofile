import drawing from '../../src/images/drawing.jpeg'; 
import icc from '../images/icc.png'; 
import self from '../images/self.jpeg'; 
import vg from '../images/vg.jpeg'; 
import gallery from '../images/gallery.jpeg'; 
import rsvp from '../images/rsvp.jpeg'; 
import pagination from '../images/pagination.jpeg'; 

export const recentData = [
  {
    id: 'job',
    desc: 'Currently I am working in an after school program as a program leader for children in Los Angeles, California. I assist with learning and providing after-school enrichment activities to  contribute to their future success and potential.',
    img: drawing,
  },
  {
    id: 'volunteer',
    desc: "I am also volunteering my time to help develop a health directory for the LGBTQ community in Boulder, Colorado while improving my skills in web development.",
    img: icc,
  }  
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
    desc: 'On my spare time I like to watch documentary series, stand up comedy on Netflix, and listen to lofi. I also like to spend time with friends and play video games on the Nintendo Switch.',
    img: vg
  }
];

//Project page
export const portfolioData = [
  {
    name: 'Health Directory',
    id: 'landing-site',
    desc: "The landing site of the health directory built with Gatsby.js, React, and CSS Tailwind. A website for volunteers and medical providers.",
    img: icc,
    link: 'https://github.com/OutBoulderCounty/icc-ui',
    site: 'https://iccdev.gtsb.io/'
  }, 
  {
    name: 'Health Directory Provider Search',
    id: 'provider-search',
    desc: "An application built with React, CSS Tailwind, and Next.js. Enables users to search and retrieve information for medical profesionals.",
    img: icc,
    link: 'https://github.com/OutBoulderCounty/icc-provider-search',
    site: 'icc-provider-search.vercel.app'
  }, 
  {
    name: '3 Black Dot',
    id:'3bd',
    desc: "A contract role to develop a career page for 3 Black Dot. It was built with React, Gatsby, React Responsive Carousel, and React-Pure-Modal. The Github repository is unavailable to the public.",
    img: pagination,
    link: 'https://www.3blackdot.com/',
    site: 'https://www.3blackdot.com/jobs/'
  },  
  {
    name: 'Student Pagination',
    id:'pagination',
    desc: "An application that displays 9 people at a time. The site can overwhelm users due to the amount of information displayed at once. Users are able to search and view different set of people.",
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
    id: 'gallery',
    desc: "The image gallery website that displays various images. It enables users to browse images at different sizes and this website was a re-write of the original site.",
    img: gallery,
    link: 'https://github.com/DanielekPark/Img_gallery',
    site: 'https://danielekpark.github.io/Img_gallery/'    
  },
  // {
  //   name: 'Front end link directory',
  //   id: 'feld',
  //   desc: "Directory of links to help direct users to resources pertaining to their project needs.",
  //   img: gallery,
  //   link: 'https://github.com/DanielekPark/FELD',
  //   site: 'https://danielekpark.github.io/Img_gallery/'    
  // },
];

//Resume page
export const volunteerData = [
  {
    id: 'health-directory',
    link: 'https://inclusivecareco.org/',
    title: 'Out Boulder LGBTQ Health Directory / Boulder County, Co (Remote)',
    date: 'Front end junior developer volunteer Feb 2021–Present.',
    li1: 'Volunteered as a part of a 5-member team to improve and add features for a health directory',
    li2: 'Identified and implemented solutions for multiple CSS bugs for improved layout',
    li3: 'Utilized CSS Tailwind and Gatsby to accelerate development of the health directory landing site',
    li4: 'Implemented new features with React.js for improved navigation and to display a list of medical providers'
  }
];

export const workData = [
  {
    id: '3bd',
    title: `3 Black Dot/Los Angeles, Ca. (Contract/Remote)`,
    date: 'Front end developer Feb 2022 - Mar 2022', 
    li1: 'Collaborated with a designer and senior developer to construct a new career page using HTML, CSS, React, and Gatsby',
    li2: 'Converted an Adobe Xd prototype to HTML and CSS to inform users of company culture and mission',
    li3: 'Implemented user interactivity features with React and Javascript for site navigation and to direct users to current job openings'
  },
  {
    id: 'after-school',
    title: 'Think Together/ Los Angeles, Ca.',
    date: 'Program Leader Oct 2020–Present.', 
    li1: 'Collaborated with co-workers to promote clubs, implement and create new activities to increase attendance.',
    li2: 'Managed event planning including, student registration, event planning, and club promotions.'
  }  
];

export const projectsData = [ 
  {
    id: 'rsvp-app',
    title: 'React Rsvp',
    link: 'https://danielekpark.github.io/rsvpreact/',
    desc: 'An application built with React and Typescript. The application keeps track of guests and provides visual feedback of unconfirmed guests.',
    li1: 'Improved site performance of an original project by refactoring class based components with React hooks.',
    li2: 'Reduced the chances of creating errors and bugs by implementing Typescript.'
  },
  {
    id: 'image-gallery',
    title: 'Image Gallery',
    link: 'https://danielekpark.github.io/Img_gallery/',
    desc: 'Utilized HTML, CSS, and Javascript to construct a mobile first responsive photo displaying website which enables users to view small and big images.',
    li1: 'Improved site performance of an older project by replacing J-query plugins with a new script.',
    li2: 'Reduced server calls, by using fewer site images.'
  }    
]