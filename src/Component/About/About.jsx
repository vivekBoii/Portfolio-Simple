import React from 'react';
import "./About.css";
import about from "../../assets/about.webp";
import circular from "../../assets/circular.svg";
import working from "../../assets/working-emoji.png";


const About = () => {
  return (
    <>
        <section class="about" id="about">
            <div class="container">
                <div class="about-content">
                <div class="img-side">
                    <img src={working} alt="emoji" class="work-emoji"/>
                    <img src={about} alt="mee" class="img-side__main-img"/>
                    <span>
                        <img src={circular} alt="text"/>
                    </span>
                </div>
                <div class="text-side">
                    <h3>About me</h3>
                    <h4>A dedicated Full-Stack Developer <br/> and Cloud enthusiast</h4>
                    <p>As a Full-Stack Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, Chakra UI, Moongose, Redux, Express, Node JS, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About;