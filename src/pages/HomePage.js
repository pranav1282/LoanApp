"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LoginForm } from "../components/LoginForm";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
