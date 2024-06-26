import { Suspense } from "react";
import { motion } from "framer-motion";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import img from "/images/about/1.jpg";

import "./About.scss";

const About = () => {
   return (
      <>
         <Header />
         <main className="main">
            <section className="about">
               <div className="container">
                  <motion.div className="about__content">
                     <div className="about__column">
                        <div className="about__text">
                           <h1 className="about__title">Welcome to Cowork</h1>
                           <p className="about__about">
                              At Cowork, we're a team of passionate innovators
                              dedicated to making a difference. With a blend of
                              creativity, expertise, and a commitment to
                              excellence, we strive to exceed expectations and
                              pioneer new solutions. Join us on our journey as
                              we continue to push boundaries and make a positive
                              impact. Welcome to Cowork - where innovation meets
                              passion.
                           </p>
                        </div>
                     </div>
                     <div className="about__column">
                        <div className="about__image">
                           <img src={img} alt="img" />
                        </div>
                     </div>
                  </motion.div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
};
export default About;
