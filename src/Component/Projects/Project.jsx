import React from "react";
import "./Project.css";
import coindom from "../../assets/coindom-full.png";
import boiiutils from "../../assets/boiiutils.png";
import boiiNews from "../../assets/boiiNews.png";
import cart from "../../assets/cart.png";
// import carRental from "../../assets/car-rental-full.webp";

const Project = () => {
  return (
    <section id='projects' class='project'>
      <div class='container'>
        <div class='project-content'>
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div class='projects-grid'>
            {/* <div class="pro pro__1 undefined">
                        <div class="pro__img">
                            <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">
                                <img src={carRental} alt="website" style={{transform: "translateY(0%)", transition: "transform 10s ease-in-out 0s",}}/>
                            </a>
                        </div>
                        <div class="pro__text">
                            <h3>Car Rental <span class="date-class">(February 2023)</span> 🚗</h3>
                            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                            <div class="stack">
                                <p>React</p>
                                <p>SCSS</p>
                            </div>
                            <div class="links">
                                <a target="_blank" href="https://github.com/stefvndev/car-rental" rel="noreferrer">Code <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                                <a target="_blank" href="https://car-rental-ten.vercel.app/" rel="noreferrer">Live Demo<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
                            </div>
                        </div>
                    </div> */}
            <div class='pro pro__1 reversed-proj'>
              <div class='pro__img'>
                <a
                  target='_blank'
                  href='https://vivekboiicart.vercel.app/'
                  rel='noreferrer'
                >
                  <img
                    src={cart}
                    alt='website'
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class='pro__text'>
                <h3>
                  Ecommerce <span class='date-class'>(Nov-Dec 2023)</span> 🛒
                </h3>
                <p>
                  With a focus on simplicity and clean design, this store
                  prioritize user experience, making it easy for customers to
                  find and purchase the products they need.
                </p>
                <div class='stack'>
                  <p>MERN</p>
                </div>
                <div class='links'>
                  <a
                    target='_blank'
                    href='https://github.com/vivekBoii/Ecommerce'
                    rel='noreferrer'
                  >
                    Code{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-brand-github'
                    >
                      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                    </svg>
                  </a>
                  <a
                    target='_blank'
                    href='https://vivekboiicart.vercel.app/'
                    rel='noreferrer'
                  >
                    Live Demo
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-external-link'
                    >
                      <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                      <path d='M11 13l9 -9'></path>
                      <path d='M15 4h5v5'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class='pro pro__1 reversed-proj'>
              <div class='pro__img'>
                <a
                  target='_blank'
                  href='https://boiicrypto.vercel.app/'
                  rel='noreferrer'
                >
                  <img
                    src={coindom}
                    alt='website'
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class='pro__text'>
                <h3>
                  BoiiCrypto <span class='date-class'>(November 2023)</span> 🪙
                </h3>
                <p>
                  Coindom is a crypto app that allows users to search for
                  information about various cryptocurrencies in real-time.
                </p>
                <div class='stack'>
                  <p>Chart JS</p>
                  <p>Charkra UI</p>
                </div>
                <div class='links'>
                  <a
                    target='_blank'
                    href='https://github.com/vivekBoii/boii-Crypto'
                    rel='noreferrer'
                  >
                    Code{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-brand-github'
                    >
                      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                    </svg>
                  </a>
                  <a
                    target='_blank'
                    href='https://boiicrypto.vercel.app/'
                    rel='noreferrer'
                  >
                    Live Demo
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-external-link'
                    >
                      <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                      <path d='M11 13l9 -9'></path>
                      <path d='M15 4h5v5'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class='pro pro__1 reversed-proj'>
              <div class='pro__img'>
                <a
                  target='_blank'
                  href='https://boiiutils.vercel.app/'
                  rel='noreferrer'
                >
                  <img
                    src={boiiutils}
                    alt='website'
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class='pro__text'>
                <h3>
                  TextUtils <span class='date-class'>(October 2023)</span>📝
                </h3>
                <p>
                  "Text Utils" is a website that provides helpful text
                  manipulation tools to make users' lives easier. These tools
                  include functions like converting text to uppercase or
                  lowercase, removing extra spaces, and more.
                </p>
                <div class='stack'>
                  <p>Tailwind</p>
                  <p>React JS</p>
                </div>
                <div class='links'>
                  <a
                    target='_blank'
                    href='https://github.com/vivekBoii/Text-utils'
                    rel='noreferrer'
                  >
                    Code{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-brand-github'
                    >
                      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                    </svg>
                  </a>
                  <a
                    target='_blank'
                    href='https://boiiutils.vercel.app/'
                    rel='noreferrer'
                  >
                    Live Demo
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-external-link'
                    >
                      <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                      <path d='M11 13l9 -9'></path>
                      <path d='M15 4h5v5'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class='pro pro__1 reversed-proj'>
              <div class='pro__img'>
                <a target='_blank' href='#' rel='noreferrer'>
                  <img
                    src={boiiNews}
                    alt='website'
                    style={{
                      transform: "translateY(0%)",
                      transition: "transform 10s ease-in-out 0s",
                    }}
                  />
                </a>
              </div>
              <div class='pro__text'>
                <h3>
                  BoiiNews <span class='date-class'>(October 2023)</span> 📔
                </h3>
                <p>
                  "BoiiNews" is a versatile website that not only provides
                  real-time general news but also includes weather news and
                  incorporates a search functionality.
                </p>
                <div class='stack'>
                  <p>React</p>
                  <p>Rest API</p>
                </div>
                <div class='links'>
                  <a
                    target='_blank'
                    href='https://github.com/vivekBoii/Boii-News'
                    rel='noreferrer'
                  >
                    Code{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-brand-github'
                    >
                      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                    </svg>
                  </a>
                  <a target='_blank' href='' rel='noreferrer'>
                    API used provide free service on Localhost
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='tabler-icon tabler-icon-external-link'
                    >
                      <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                      <path d='M11 13l9 -9'></path>
                      <path d='M15 4h5v5'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <div class="pro pro__1 undefined">
                        <div class="pro__img">
                            <a target="_blank" href="https://gymate-iota.vercel.app/" rel="noreferrer">
                            <img src={gymate} alt="website" style={{transform: "translateY(0%)", transition: "transform 10s ease-in-out 0s",}}/></a>
                            </div><div class="pro__text"><h3>Gymate <span class="date-class">(January 2023)</span> 🏋️</h3>
                            <p>A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.</p>
                            <div class="stack">
                                <p>React</p>
                                <p>Tailwind CSS</p>
                            </div>
                            <div class="links">
                                <a target="_blank" href="https://github.com/stefvndev/Gymate" rel="noreferrer">Code <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                                <a target="_blank" href="https://gymate-iota.vercel.app/" rel="noreferrer">Live Demo<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
                            </div>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
