// import Head from "next/head";
// import logo from "../assets/images/logo/logo.svg";
// import Navigation from "../components/layout/navigation";
// import missionBrandIcon from "../assets/images/bg/missionbrandicon.png";
// import quotes from "../assets/images/icons/qoutes.svg";
// import scissorAndComb from "../assets/images/bg/scissor-comb.jpg";
import React from "react";
import DarkSection from "../components/dark-section/DarkSection";
import HeadingText from "../components/heading-text/HeadingText";
import Hero from "../components/hero/Hero";
// import ReactPlayer from "react-player";
import Layout from "../components/layout/layout";
// import Hero from "../components/hero";
// import BoxContent from "../components/boxContent";
// import Quote from "../components/home/quote";
// import RedStrip from "../components/redStrip";
// import ServicesBlue from "../components/home/servicesBlue/servicesBlue";
// import BlueBubbleSlider from "../components/home/blue-bubble-slider/blueBubbleSlider";
// import SlickSlder from "../components/home/slickSlder";

export default function HomePage() {
  const heroData = {
    title: ["More", "Than", "Just A Barber Shop"],
    text: "With 845+ 5-Star Reviews, Isn't It Time You Enhanced Your Appearance With Jacksonville's Best Stylists at Luxury Hair Studio For Men.",
  };

  const boxContentData = {
    title: ["Hair & Photo", "About Us"],
    paragraphs: [
      "Barba that has absorbed the unique atmosphere of Kingsland, Auckland to create an environment that reflects the epitome of the modern yet traditional urban male and dynamic city living. A talented & passionate team of Master Barbers that are homegrown, we are dedicated professionals with unsurpassed industry experience. We are the professionals you want in your corner for all your barbering & shaving needs. We have you covered.",
      "Based just a minute from Kingsland Station, we provide a full range of male grooming services including; haircuts, traditional wet shaves, face cleansing and bespoke men’s skincare as well as gift vouchers and male grooming products.",
    ],
  };
 
  return (
    <Layout>
      <Hero />
      <HeadingText />
      <DarkSection />
    </Layout>
  );
}
