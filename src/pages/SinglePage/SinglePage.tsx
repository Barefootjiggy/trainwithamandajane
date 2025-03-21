import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Section from "../../components/FadeSection/FadeSection";
import Footer from "../../components/Footer/Footer"

import "./SinglePage.css";
import Testimonials from '../Testimonials.tsx/Testimonials'

const SinglePage: React.FC = () => {
  return (
    <div>
    <Section id="home">
      <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
      <Section id="footer">
        <Footer />
      </Section>
      
    </div>
  );
};

export default SinglePage;
