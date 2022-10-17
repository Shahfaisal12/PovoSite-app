import React from "react";
import Benefit from "../elements/Benefit";
import Brand from "../elements/Brand";
import Exclusive from "../elements/Exclusive";
import Features from "../elements/Features";
import Hero from "../elements/Hero";
import Ifram from "../elements/Ifram";
import Massion from "../elements/Massion";
import Prescale from "../elements/Prescale";
import RoadMap from "../elements/RoadMap";
import Rugpul from "../elements/Rugpul";
import Stake from "../elements/Stake";
import StakingWork from "../elements/StakingWork";
import Tokonomic from "../elements/Tokonomic";
import Vision from "../elements/Vision";
import Faqs from '../untils/Faqs'

const Home = () => {
  return (
    <>
      <Hero />
      <Stake />
      <Exclusive />
      <Features />
      <Ifram />
      <StakingWork />
      <Benefit />
      <Prescale />
      <Massion />
      <Vision />
      <Tokonomic />
      <RoadMap />
      <Rugpul />
      <Faqs />
      <Brand />
    </>
  );
};

export default Home;
