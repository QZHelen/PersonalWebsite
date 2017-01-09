import React from 'react';
import {render} from 'react-dom';
import NavItems from './components/main-nav/NavItems.jsx';
import NavW3 from './components/main-nav/NavW3.jsx'
import BackGround from './components/main-nav/BackGround.jsx';
import Quote from './components/main-content/Quote.jsx';
import ProjectItem from './components/main-content/ProjectItem.jsx';
import AcademicItems from './components/main-content/AcademicItems.jsx';
import Contact from './components/footer/Contact.jsx';
import ContactMe from './components/footer/ContactMe.jsx';
import Footer from './components/footer/Footer.jsx';

//require('./../style.css');

const contentStyle = {
    maxWidth: 1100,
    marginTop: 80,
    marginBottom: 80
};
class App extends React.Component {
    render() {
        return (
          <div>
    <div className="w3-content" style={contentStyle} >
            <Quote/>
            <NavW3/>
            <AcademicItems/>
             <div className="w3-row-padding" id="Strength">
            <div className="w3-center w3-padding-64">
                 <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16  w3-animate-bottom">Strength: Full Stack Development </span>
                 <p className="w3-border-dark-grey w3-padding-16  w3-animate-bottom"><h5>🔧 Programming Skills</h5> </p>
                 <span><button className="w3-btn w3-green w3-animate-right">React.js </button></span>
                 <span><button className="w3-btn w3-light-green w3-animate-right">React-native </button></span>
                 <span><button className="w3-btn w3-blue w3-animate-right">HTML CSS Javascript</button></span>
                 <span><button className="w3-btn w3-black w3-animate-right">Python</button></span>
                 <span><button className="w3-btn w3-brown w3-animate-right">Java</button></span>
                 <p className="w3-border-dark-grey  w3-animate-bottom"><h5> 🔧 Business Skills</h5> </p>
                 <span><button className="w3-btn w3-orange w3-animate-right">Agile Development</button></span>
                 <span><button className="w3-btn w3-red w3-animate-right">User-centric Design</button></span>
                 <span><button className="w3-btn w3-yellow w3-animate-right">Value Investing</button></span>
                 <span><button className="w3-btn w3-indigo w3-animate-right">Fluent in Mandarin and English</button></span>
            </div>          
             <ProjectItem imgsrc={"https://goo.gl/ekcchC"} 
                         position={"Technical Product Manager"} 
                         specifics={"GoDaddy | 2017.1 - 2017.5 | Sunnyvale CA" }
                         bulletPts={["• China Strategy",
                         "• Code in react.js to product the frontend web product"]}
                         skills={["React.js","User-centric Design","HTML CSS Javascript","Agile Development"]}
                         demoLink={"http://google.com"}/>
              <ProjectItem imgsrc={"https://goo.gl/8gXnJn"} 
                         position={"Founding Software Engineer"} 
                         specifics={"Technies Group | 2016.10 - Present | Chapel Hill N.C" }
                         bulletPts={["•  Led a group 5 software engineers to use react.js for frontend to build web applications for local business clients (currently in Chapel Hill area) such as Supper Meal and individual requests.",
                         "•  The group focuses creating web application with machine learning backend to provide meaningful insights for the clients. Used python for data analysis.",
                         "• Provided SEO and data analytics service for the clients such as Keller Williams real estate and its affiliated agents to boost their digital presence. "]}
                         skills={["React-native","HTML CSS Javascript","Python","Java"]}
                         demoLink={"http://google.com"}/>
             <ProjectItem imgsrc={"https://goo.gl/cfuPl6"} 
                         position={"Founder & Software Engineer"} 
                         specifics={"Innovators' Hub  | 2013.12 - 2016.10 | Chapel Hill N.C * Accquired by Phoenix TV" }
                         bulletPts={["•  Wrote 57 articles and gave 23 speeches across China about Entrepreneurship, targetd college students.",
                         "•  Started the weekly interview (online) program in March 2016: interviewed 23 star entrepreneurs/VCs up-to-date and continue to finish with 48 interviewees in 2016.",
                         "•  Used Python to engineer the high-growth product \"Scholarship Hunter\" that enables Chinese students find available scholarships worldwide.",
                         ""]}
                         skills={["Agile Development","User-centric Design"]}
                         demoLink={"http://google.com"}/>
            </div>
            <ContactMe/>
            <Contact />
            </div>
            <Footer />
          </div>
        );
    }
}

render(<App/>, document.getElementById('root'));