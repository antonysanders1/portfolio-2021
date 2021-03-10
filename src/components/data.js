import lang1 from '../images/languages/HTML5_Badge_512.png';
import lang2 from '../images/languages/css-logo.png';
import lang3 from '../images/languages/JavaScript-logo.png';
import lang4 from '../images/languages/ruby_logo.svg.png';
import lang5 from '../images/languages/java_programming_language_logo.png';

import framework1 from '../images/frameworks/react.png';
import framework2 from '../images/frameworks/node.png';
import framework3 from '../images/frameworks/firebase.png';
import framework4 from '../images/frameworks/rails.png';
import framework5 from '../images/frameworks/sinatra.png';
import framework6 from '../images/frameworks/postgresql.png';
import framework7 from '../images/frameworks/mysql.png';

import software1 from '../images/software/vscode.png';
import software2 from '../images/software/cc-logo-Adobe-Creative-Cloud.jpg';
import software3 from '../images/software/bitbucket.jpg';
import software4 from '../images/software/miro.png';
import software5 from '../images/software/jira.png';
import software6 from '../images/software/trello.png';

import portImage1 from '../images/portfolio/taskcycle.png'
import portImage2 from '../images/portfolio/hitstreamr.png'
import portImage3 from '../images/portfolio/portfoli-yo.png'
import portImage4 from '../images/portfolio/whetherweather.png'
import portImage5 from '../images/portfolio/shopilator.png'
import portImage6 from '../images/portfolio/customer-dash.png'


export const languages = [
    { title: 'HTML', src: lang1 },
    { title: 'CSS', src: lang2 },
    { title: 'JavaScript', src: lang3 },
    { title: 'Ruby', src: lang4 },
    { title: 'Java', src: lang5 },
]

export const frameworks = [
    { title: "React", src: framework1 },
    { title: "Node.Js", src: framework2 },
    { title: "Firebase", src: framework3 },
    { title: "Rails", src: framework4 },
    { title: "Sinatra", src: framework5 },
    { title: "Postgresql", src: framework6 },
]

export const software = [
    { title: "VS Code", src: software1 },
    { title: "Adobe CC", src: software2 },
    { title: "Bitbucket", src: software3 },
    { title: "Miro", src: software4 },
    { title: "Jira", src: software5 },
    { title: "Trello", src: software6 },

]

export const projects = [{
        img: portImage1,
        title: 'Task Cycle',
        description: 'A task management system origionally developed to help streamline the house buying process. I took part in redesigning the front-end, fixing bugs, and implementing new features such as: Ad spaces on auth screens, the Tasks screen, and docusign e-signature functionality.',
        note: 'Note: This is a private repository. [Owned my MERGED Software Group.] ',
        langEnvSoft: ['Javascript', 'React', 'Material-UI', 'Context', 'Stripe', 'OAuth', 'Docusign', 'HelloSign'],
        sourceCode: '',
        url: 'https://mytaskcycle.com',
        videoURL: '',
        team: 'Collaboration',
        collaborators: 'Matthew Dieffenderfer, Michael Jay, Antony Sanders'
    },
    {
        img: portImage6,
        title: 'Cuti App',
        description: 'An on-demand Beauty & Wellness services platform dedicated to minimizing time and risk between service professionals & clients.',
        note: 'Note: This is a private repository. [Owned Cuti App, LLC.] ',
        langEnvSoft: ['Javascript', 'React', 'Material-UI', 'Stripe'],
        sourceCode: '',
        url: 'https://cutiapp.com',
        videoURL: 'https://www.youtube.com/watch?v=dvlWB41eNBg&list=PLBel_qhO6LbJZOYYLdQwiOZ3iBe01mTZK',
        team: 'Solo Project',
        collaborators: ''
    },
    {
        img: portImage2,
        title: 'HitStreamr: Mobile App',
        description: 'A mobile music video streaming platform geared toward paying higher royalties to creators and charging less to their fans. I was the Founder and Lead Dev on a team of five. I was responsible for front-end design, testing, and deployment.',
        note: 'Note: This company was dismantled after the COVID-19 outbreak.',
        langEnvSoft: ['Java', 'XML', 'Android Studio', 'Firebase'],
        sourceCode: 'https://github.com/HitStreamr/BETA-app',
        url: 'https://play.google.com/store/apps/details?id=com.hitstreamr.hitstreamrbeta',
        videoURL: 'https://www.youtube.com/watch?v=WC2cjAGa98A',
        team: 'Collaboration',
        collaborators: 'Antony Sanders, Anissa Alexander, Dionissia, Chaitanya Gollspudi, Divya'
    }, {
        img: portImage3,
        title: 'Portfoli-Yo',
        description: 'A portflio sharing site where users can share their works with the community. Inspirations for this site were Instagram and Dribbble.',
        note: 'Note: This site is hosted on Heroku. Please allow it some time to load.',
        langEnvSoft: ['Javascript', 'React', 'Material UI', 'Redux', 'Rails API', 'VS Code'],
        sourceCode: 'https://github.com/antonysanders1/portfoliyo-client',
        url: 'https://portfoli-yo.herokuapp.com/',
        videoURL: 'https://www.youtube.com/watch?v=DgDs7AbwzzI',
        team: 'Solo Project',
        collaborators: ''
    }, {
        img: portImage4,
        title: 'Whether Weather',
        description: 'A simple weather detector. Search a city: get the temperature, cloud coverage, and wind speeds.',
        note: '',
        langEnvSoft: ['JavaScript', 'React', 'VS Code'],
        sourceCode: 'https://github.com/antonysanders1/whether-weather',
        url: '',
        videoURL: 'https://www.youtube.com/watch?v=pj2u2pfZXow',
        team: 'Solo Project',
        collaborators: ''
    }, {
        img: portImage5,
        title: 'Shopilator',
        description: 'A budget tracking tool to help users not exteed their shopping limits.',
        note: '',
        langEnvSoft: ['HTML', 'CSS', 'Ruby', 'Rails API', 'OAuth', 'VSCode'],
        sourceCode: 'https://github.com/antonysanders1/shopilator',
        url: '',
        videoURL: 'https://www.youtube.com/watch?v=7eoNSeJiOEQ',
        team: 'Solo Project',
        collaborators: ''
    },

]


export const bio = [`Originally a musician, I moved to from Cincinnati, OH to Atlanta, GA to
help gain the traction I would need to further my career. It was in Atlanta however where I
fell in love with Software.`,

    `My time as a concierge security officer at a Fortune 500 Tech Company put me in the position to use my time efficiently.
As I sat for 8 hours a day, I studied, created a business plan, and ultimately was able to present it to the CEO of that 
company. He became my mentor, and indirectly pushed me to learn software develpment.`,

    `My love for software grew from there and shortly after, I attended Flatiron School graduating
just 10 months later and landing my first real tech job. Choosing to become a software engineer has changed my life for the better,
and I'm dedicated to continuing to learn, grow and push the bounds of new tech.
`
]