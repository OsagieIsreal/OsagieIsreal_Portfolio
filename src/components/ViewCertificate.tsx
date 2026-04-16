  // import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Code2Icon, Factory , Paintbrush2Icon, ArrowBigLeft, File, Brain, BrainCircuit, Award } from "lucide-react";
import { 
  CertificatesOne, 
  CertificatesTwo, 
  CertificatesThree, 
  CertificatesFour,
  CertificatesFive,
  CertificatesSix,
} from "../assets/certificates/AllCertificates";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
// import certi1 from "@/assets/profile-photo.jpg";


const ViewCertificates = () => {
  const navigate = useNavigate()
  const viewCertificatesCategories = [
    {
      title: "HTML, CSS, JavaScript Certification",
      issuer: "Babtech Computers",
      icon: <Code2Icon className="h-8 w-8" />,
      Image: <CertificatesThree />,
      color: "text-primary",
    },

    {
      title: "Industrial Training Certification",
      issuer: "National Board for Technical Education",
      icon: <Factory  className="h-8 w-8" />,
      Image: <CertificatesTwo />,
      color: "text-accent",
    },
    {
      title: "Design Summer Camp Certification",
      issuer: "Just Design",
      icon: <Paintbrush2Icon className="h-8 w-8" />,
      Image: <CertificatesOne />,
      color: "text-primary",
    },
    {
      title: "Succour For Nations Development Program Certification",
      icon: <Award  className="h-8 w-8" />,
      Image: <CertificatesFour />,
      color: "text-primary",
    },
    {
      title: "Claude Code: The Coding Assistant Certification",
      icon: <Brain className="h-8 w-8" />,
      Image: <CertificatesFive />,
      color: "text-primary",
    },
    {
      title: "Claude 4.5: Smarter, Faster & More Human AI Certification",
      icon: <BrainCircuit className="h-8 w-8" />,
      Image: <CertificatesSix />,
      color: "text-primary",
    }
  ];


  return (
    <section id="ViewCertificates" className="py-10 bg-card/30">
      <div className="container mx-auto px-6">
      <Card
      onClick={() => navigate("/")}
      className="flex items-center p-6 hover-glow transition-all duration-300 gradient-border animate-scale-in cursor-pointer mb-7 w-20 h-10"
      ><ArrowBigLeft className="h-10 w-10 text-blue-300" /></Card>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Isreal's <span className="hero-text">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technical and creative ViewCertificates honed through 
            continuous learning and practical application.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {viewCertificatesCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover-glow transition-all duration-300 gradient-border animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={category.color}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                  <h4 className="text-primary font-semibold">{category.issuer}</h4>
                </div>
              </div>
              
              {/* <div className="space-y-4">
                {category.ViewCertificates.map((viewCertificates,))}
              </div> */}
              <div className="space-y-4">
                {category.Image}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};
export default ViewCertificates;