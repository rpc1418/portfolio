/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "rpc1418",
  title: "Hi all, I'm Rudraksh Chourey",
  subTitle: emoji(
    "I’m a Software and AI/ML Consultant at Encora Inc. with a strong interest in machine learning, data science, and software development. I enjoy building practical AI solutions and exploring innovations at the intersection of hardware and intelligent software. "
  ),
  ML_resumeLink:
    "https://drive.google.com/file/d/1zi70n1L5jMnte5xeWsISXPYuvCdxi_7F/view?usp=sharing",
  EC_resumeLink:
    "https://drive.google.com/file/d/1w1L5pGEbHaptpT52qUUQTcnZ1no95dEO/view?usp=sharing",
  SDE_resumeLink:
    "https://drive.google.com/file/d/10tz-tbf9Pu7ESZLnqIL7_roQFMrBvF1J/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rpc1418",
  linkedin: "https://linkedin.com/in/rudraksh-chourey-114484232/",
  gmail: "rudrakshchourey@outlook.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  kaggle: "https://www.kaggle.com/rudrakshchourey",
  instagram: "https://www.instagram.com/__rpc__/",
  // wellfound:"https://wellfound.com/u/rudraksh-chourey",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Devlopment with a focus on AI, ML, and embedded systems.",
  skills: [
    emoji(
      "💻 Proficient in Python, Java, Swift, and Dart with experience in full-stack development using Spring Boot, React, REST APIs, and microservices."
    ),
    emoji(
      "🤖 Skilled in machine learning, deep learning, and data analytics using TensorFlow, PyTorch, Keras, Scikit-learn, XGBoost, and LightGBM."
    ),
    emoji(
      "☁️ Experienced in cloud-native development using AWS services such as Lambda, EC2, S3, DynamoDB, RDS, API Gateway, SNS, SQS, and EventBridge."
    ),
    emoji(
      "📱 Experience building mobile and cross-platform apps using Flutter and iOS technologies including Swift and Xcode."
    ),
    emoji(
      "🔧 Familiar with hardware development and developer tools including ZYNQ FPGA, STM32, VIVADO, Git, Postman, and Azure DevOps."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "xcode",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "azure-devops",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "swift-ui",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "uikit",
      fontAwesomeClassname: "fab fa-apple"
    },

    {
      skillName: "ios-26",
      fontAwesomeClassname: "fab fa-apple"
    },

    {
      skillName: "core-data",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "mapkit",
      fontAwesomeClassname: "fas fa-map"
    },
    {
      skillName: "combine",
      fontAwesomeClassname: "fas fa-project-diagram"
    },

    {
      skillName: "cocoapods",
      fontAwesomeClassname: "fas fa-box"
    },
    {
      skillName: "swift-package-manager",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "mvc",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "mvvm",
      fontAwesomeClassname: "fas fa-project-diagram"
    },

    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "aws-lambda",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "aws-ec2",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "aws-s3",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "dynamodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "rds",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "api-gateway",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "eventbridge",
      fontAwesomeClassname: "fas fa-stream"
    },
    {
      skillName: "sns",
      fontAwesomeClassname: "fas fa-bell"
    },
    {
      skillName: "sqs",
      fontAwesomeClassname: "fas fa-envelope"
    },
    {
      skillName: "ses",
      fontAwesomeClassname: "fas fa-paper-plane"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "xgboost",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "lightgbm",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "yolo",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "lstm",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "gnn",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-paper-plane"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "spring-boot",
      fontAwesomeClassname: "fas fa-leaf"
    },

    {
      skillName: "spring-security",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "spring-data-jpa",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "spring-web",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "rest-api",
      fontAwesomeClassname: "fas fa-exchange-alt"
    },
    {
      skillName: "microservices",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "junit",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "mockito",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "swagger",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "javadoc",
      fontAwesomeClassname: "fas fa-book"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "pyspark",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-graduation-cap"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "keras",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "verilog",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "shell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "embedded-c",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "vs-code",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "pycharm",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "notebooks",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "ZYNQ FPGA",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "STM32",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "vivado",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "vitis",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "macos",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "jtag",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "uart",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "spi",
      fontAwesomeClassname: "fas fa-signal"
    },
    {
      skillName: "i2c",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "vga",
      fontAwesomeClassname: "fas fa-tv"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vellore Institute of Technology, Chennai",
      logo: require("./assets/images/vit.png"),
      subHeader: "Bacehlors in Electronics and Computer Engineering",
      duration: "September 2021 - Jully 2025",
      desc: "CGPA:8.93"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "La Sagesse Academy, Indore",
      logo: require("./assets/images/lsa.png"),
      subHeader: "10th and 12th",
      duration: "2018 - 2021",
      desc: "Completed 10th Standard with 89% and 12th in Physics Chemistry Maths IP with 93.4%."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Software Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Embeded/RTL Coding",
      progressPercentage: "50%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software and AI/ML Consultant",
      company: "Encora",
      companylogo: require("./assets/images/Encora.png"),
      date: "August 2025 – Present",
      desc: "Developing efficient and Scalable cloud and full-stack systems and solutions in AWS, Core Java and Spring with experience in iOS development within Agile workflows using Azure DevOps"
    },
    {
      role: "NLP Project Concultancy",
      company: "Samsung",
      companylogo: require("./assets/images/Samsung.png"),
      date: "Oct 2024 – March 2025",
      desc: "Developing a lightweight solution to classify chat communications into family and non-family classes, creating a labeled dataset from real-life conversations, while focusing on demographic factors and model efficiency for on-device deployment."
    },
    {
      role: "Development and ML Intern",
      company: "IIT, Roorkee",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2024 – June 2024",
      desc: "Developed a Windows app using Flutter for trajectory extraction with YOLO and conflict analysis, inferring to models like LSTM, Transformer, GNN, etc., for classification. Additionally, Created a Linux app for real-time pothole detection on a Jetson board."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "HCL Project Consultancy ",
      company: "HCL-Tech",
      companylogo: require("./assets/images/hcltech_logo.png"),
      date: "Jul 2023 – Jun 2024",
      desc: "Developed a Python tool that extracts and analyzes FSMs from Verilog designs, automatically generating detailed states, transitions, and output behavior for easier verification and debugging of digital circuits. "
    },
    {
      role: "Research Intern and Trainee",
      company: "CSIR-CSIO, Chandigarh",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Aug 2023 – Oct 2023",
      desc: "Created a project that utilizes the Bresenham line generating algorithm to produce multiple lines within a frame using ZYNQ Z7020 FPGA, with the goal of future integration into a heads-up display (HUD).Engaged in R&D activities focused on developing, testing and optimizing FPGA-based deployable Strategy "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Few of the Major Projects i worked into...",
  projects: [
    {
      image: require("./assets/images/LHR.png"),
      projectName: "LHR London Heathrow Airport",
      projectDesc:
        "The Heathrow Airport App — Your Ultimate Travel Partner Transform your journey through Heathrow into a seamless and enjoyable experience with the official Heathrow app. From tracking flights to exploring dining and shopping options, this app is designed to make every step of your travel stress-free and rewarding.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://apps.apple.com/gb/app/lhr-london-heathrow-airport/id427951859"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "ivats",
      projectDesc:
        "IVATS is a Flutter-based app using YOLO V8 for object detection, tracking, trajectory extraction, conflict analysis, real-world coordinate conversion, and data visualization, aimed at improving traffic management and safety. Soon open-sourced.",
      footerLink: [
        {
          name: "Soon to be open Sourced"
          // url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "IRAMA",
      projectDesc:
        "Created a Linux application that disables the desktop at boot anddetects potholes through live camera feed using an ML model.The application logs data and uploads it to a Cloud server, running on a high performance Jetson board",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://irama.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "VGA Interfacing RTL",
      projectDesc:
        "Designed RTLs for optimized real-time graphics generation, leverage on-board memory for frame buffers, and delve into FPGA parallelism, using VIVADO andVITIS for programming on Zynq FPGA 7020.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drive.google.com/file/d/1wAtby3cmc8ycc3TW6RZfx7S1ee7UXcro/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified Azure- Data Fundamentals",
      subtitle:
        "Foundational knowledge of core data concepts and their implementation using Microsoft Azure data services",
      image: require("./assets/images/codeInLogo.png"),
      imageAlt: "AZURE",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1zprwH2vpjkewIoZA4CMyuKubXW2nFHan/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Embedded Systems and C ",
      subtitle:
        "Proficiency in live coding and understanding of key concepts like call stacks and resource coordination",
      image: require("./assets/images/stanfordLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.testdome.com/certificates/1f5a60c692604772adabf2966bc1c7f4?trk=public_profile_see-credential"
        }
      ]
    },

    {
      title: "CSIR-CSIO Certificate of Training ",
      subtitle:
        "Hands-on experience in advanced technologies and methodologies in research and development",
      image: require("./assets/images/airbnbLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Training Certificate",
          url: "https://drive.google.com/file/d/10XDETo1I0QIRdtnVM-YSHnsSRuQv7WLH/view?trk=public_profile_see-credential"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9826133859",
  email_address: "rudrakshchourey@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
