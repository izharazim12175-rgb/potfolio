import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Heroleft from './Components/Heroleft'
import HeroRight from './Components/HeroRight'
import Service from './Components/Service'
import photo1 from  './assets/htmlcss.png';
import photo2 from  './assets/javascipt.jpg';
import photo3 from  './assets/react.png';
import ContactLeft from './Components/ContactLeft'
import ContactRight from './Components/ContactRight'




const services = [
  {
    image: photo1,
    title: "HTML & CSS",
    description: "Beautiful websites"
  },
  {
    image: photo2,
    title: "JavaScript",
    description: "Interactive web applications"
  },
  {
    image: photo3,
    title: "React",
    description: "Modern UI development"
  }
];


function App() {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
      <Heroleft/>
      <HeroRight/>

      </div>
  <div className="servic-container">
    {
      services.map((service, index) => (
        <Service key={index} data={service} />
      ))
    }
  </div>
  <div className='contact-section'>
    <ContactLeft/>
    <ContactRight/>
  </div>
   
    </div>
  )
}

export default App