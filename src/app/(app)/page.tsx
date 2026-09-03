"use client";
/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import Image from 'next/image'
import React, { useRef } from 'react'
import { useCountUp, useSkillsReveal, useTypedText } from '@/hooks'


const TYPED_STRINGS = [
  'Developer',
  'Android/IOS Developer',
  'Software Consultant',
  'AWS Certified Solutions Architect',
  'Web Expert',
]

export default function Home() {

  const typedRef = useRef<HTMLSpanElement>(null)
  useTypedText(typedRef, TYPED_STRINGS, { loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000 })

  const skillsRef = useRef<HTMLDivElement>(null)
  useSkillsReveal(skillsRef)

  const happyClientsRef = useRef<HTMLSpanElement>(null)
  const happyClients = useCountUp(happyClientsRef, 32, 1)
  const projectsRef = useRef<HTMLSpanElement>(null)
  const projects = useCountUp(projectsRef, 81, 1)
  const hoursWorkedRef = useRef<HTMLSpanElement>(null)
  const hoursWorked = useCountUp(hoursWorkedRef, 132201, 1)

  return (
      <>

        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <Image
              src="/hero-bg.jpg"
              alt="Company Logo"
              width={1200}
              height={360}
              data-aos="fade-in"
              style={{ width: "100%", height: "auto" }}
              className=""
          />
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <h2>Anele &apos;ace&apos; M</h2>
            <p>
              I&apos;m {" "}
              <span className="typed" ref={typedRef}>
                            A Developer
                        </span>

              <span className="typed-cursor typed-cursor--blink" aria-hidden="true" />
              <span className="typed-cursor typed-cursor--blink" aria-hidden="true" />
            </p>
          </div>
        </section>
        {/* /Hero Section */}

        {/* About Section */}
        <section id="about" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
              Results-driven Software Engineer and Consultant with over 14 years of
              experience in building scalable systems, mobile apps, and web
              platforms. Specialized in Flutter, ReactJs, Angular, Laravel, and
              Node.js.
            </p>
            <p>
              Proven success in delivering full-stack solutions, leading development
              teams, and consulting for enterprise clients across sectors such as
              fintech, telecom, and digital media.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4 justify-content-center">
              {/*<div class="col-lg-4">
       <img src="assets/img/studio-ghibli.png" class="img-fluid" alt="">
    </div>*/}
              <div className="col-lg-8 content">
                <h2>Full Stack Engineer</h2>
                <p className="fst-italic py-3">
                  From a wide range of clients and challenges in the most demanding
                  economies globally.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Birthday:</strong> <span>15 Feb </span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong> <span>www.acedesigns.co.za</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>+27 (0)83 123 4567</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                        <span>Johannesburg, South Africa</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                        <span>30+</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong> <span>Pending</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Email:</strong>{" "}
                        <span>anele[at]acedesigns.co.za</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  Hi, I&apos;m Anele — a Systems and Web Developer passionate about
                  creating beautiful, functional, and user-focused platforms. I
                  specialize in building professional, accessible, and
                  standards-compliant web-based systems using modern technologies
                  and best practices. Every line of code I write is intentional,
                  maintainable, and handcrafted to deliver seamless, intuitive
                  digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}

        {/* Stats Section */}
        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-emoji-smile" />
                  <span ref={happyClientsRef} className="purecounter">{happyClients}</span>
                  <p>
                    <strong>Happy Clients</strong>{" "}
                  </p>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-journal-richtext" />
                  <span ref={projectsRef} className="purecounter">{projects}</span>
                  <p>
                    <strong>Projects</strong>{" "}
                  </p>
                </div>
              </div>
              {/* End Stats Item */}
              <div className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className="bi bi-people" />
                  <span ref={hoursWorkedRef} className="purecounter">{hoursWorked}</span>
                  <p>
                    <strong>Hours Worked</strong>{" "}
                  </p>
                </div>
              </div>
              {/* End Stats Item */}
            </div>
          </div>
        </section>
        {/* /Stats Section */}

        {/* Skills Section */}
        <section id="skills" className="skills section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>
              Skills I have acquired over a very long career. Skills that make me an
              ideal person to a organisation like yours.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row skills-content skills-animation" ref={skillsRef}>
              <div className="col-lg-6">
                <div className="progress">
                                <span className="skill">
                                    <span>NodeJs</span> <i className="val">85%</i>
                                </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>ExpressJs</span> <i className="val">90%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>JavaScript</span> <i className="val">90%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>ReactJs</span> <i className="val">100%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>Angular</span> <i className="val">95%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>React Native</span> <i className="val">95%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
              </div>
              <div className="col-lg-6">
                <div className="progress">
                                <span className="skill">
                                    <span>PHP</span> <i className="val">80%</i>
                                </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>Laravel</span> <i className="val">85%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>MySql / MongoDb / PostgreSQL</span>{" "}
                <i className="val">70%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>WordPress/CMS</span> <i className="val">90%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>Flutter</span> <i className="val">75%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>SwiftUI</span> <i className="val">60%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>.NET / C#</span> <i className="val">60%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
                <div className="progress">
              <span className="skill">
                <span>JAVA</span> <i className="val">60%</i>
              </span>
                  <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                  </div>
                </div>
                {/* End Skills Item */}
              </div>
            </div>
          </div>
        </section>
        {/* /Skills Section */}

        {/* Resume Section */}
        <section id="resume" className="resume section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>
              I have Held various technical roles between 2009 and 2018, including
              Front-End / Web Developer. During this period, I contributed to a wide
              range of projects across industries such as digital media, travel, and
              e-commerce. My responsibilities spanned responsive web design, mobile
              website development, CMS implementation, and user experience
              optimization
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <p>
                    <em>
                      Innovative and results-oriented Full Stack Engineer with over
                      13+ years of experience building user-focused digital
                      solutions from concept to deployment. Adept at designing and
                      delivering scalable, high-performance applications with a
                      strong emphasis on clean architecture, usability, and meeting
                      tight deadlines
                    </em>
                  </p>
                  <ul>
                    <li>Johannesburg, Gauteng, South Africa</li>
                    {/*<li>(123) 456-7891</li>*/}
                    <li>anele[at]acedesigns.co.za</li>
                  </ul>
                </div>
                {/* Edn Resume Item */}
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Senior IT Analyst — Power International Holding</h4>
                  <h5>Jan 2024 ‐ Mar 2025 </h5>
                  <p>
                    <em> Doha, Qatar</em>
                  </p>
                  <ul>
                    <li>
                      Resolved systems issues and ensured software integration met
                      functional and compliance requirements.
                    </li>
                    <li>
                      Designed, delivered, and improved ERP systems and training
                      programs.{" "}
                    </li>
                    <li>
                      Collaborated with stakeholders to translate business needs
                      into technical solutions.
                    </li>
                    <li>
                      Supported User Acceptance Testing and performed system
                      enhancement testing.
                    </li>
                  </ul>
                </div>
                {/* Edn Resume Item */}
                <div className="resume-item">
                  <h4>Software Engineer — Accenture</h4>
                  <h5>Nov 2020 - Dec 2023</h5>
                  <p>
                    <em>Johannesburg, South Africa</em>
                  </p>
                  <ul>
                    <li>Delivered web components for a major telecom client.</li>
                    <li>
                      Participated in sprint planning, standups, and client demos.
                    </li>
                    <li>
                      Write unit tests, integration tests, and end-to-end tests.
                    </li>
                    <li>Handled bug fixes and client-facing feature updates.</li>
                    <li>
                      Clarify requirements with Product Owner / Business Analyst.
                    </li>
                  </ul>
                </div>
                {/* Edn Resume Item */}
                <div className="resume-item">
                  <h4>Angular Developer — Wipro Limited</h4>
                  <h5>July 2019 - Jun 2020</h5>
                  <p>
                    <em>Johannesburg, South Africa</em>
                  </p>
                  <ul>
                    <li>
                      Led development of user management components for a banking
                      client.
                    </li>
                    <li>
                      Participated in sprint planning, standups, and client demos.
                    </li>
                    <li>Participate in Sprint Reviews to demo completed work.</li>
                    <li>Build and integrate frontend to backend systems.</li>
                    <li>
                      Clarify requirements with Product Owner / Business Analyst.
                    </li>
                  </ul>
                </div>
                {/* Edn Resume Item */}
              </div>
            </div>
          </div>
        </section>
        {/* /Resume Section */}

        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={100}
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-briefcase" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="service-details.html" className="stretched-link">
                      CRM Development
                    </a>
                  </h4>
                  <p className="description">
                    My solutions help you manage customer data, track interactions,
                    automate workflows, and improve team collaboration — all within
                    a secure, scalable, and user-friendly interface.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-card-checklist" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="service-details.html" className="stretched-link">
                      E-Commerce
                    </a>
                  </h4>
                  <p className="description">
                    {" "}
                    From custom storefronts and product catalogs to secure payment
                    integrations and order management systems, I deliver fully
                    responsive, user-friendly solutions tailored to your brand and
                    customer journey.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="service-details.html" className="stretched-link">
                      Web Applications
                    </a>
                  </h4>
                  <p className="description">
                    From internal dashboards and SaaS platforms to customer-facing
                    portals, I build secure, responsive, and scalable solutions
                    using modern frameworks like Angular, React, Laravel, and
                    Node.js.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-binoculars" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="service-details.html" className="stretched-link">
                      API Development
                    </a>
                  </h4>
                  <p className="description">
                    Specialising in building custom APIs that connect disparate
                    systems and databases. API development services enable
                    organisations to manage a variety of software modules using
                    technologies including REST, XML-RPC, SOAP, JSON and other
                    protocols
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-brightness-high" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="service-details.html" className="stretched-link">
                      Machine Learning
                    </a>
                  </h4>
                  <p className="description">
                    {" "}
                    Machine Learning is a type of AI that allows software
                    applications to predict outcomes without being explicitly
                    programmed to do so. I use Machine Learning to provide an array
                    of solutions for businesses{" "}
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                  className="col-lg-4 col-md-6 service-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={600}
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-calendar4-week" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="service-details.html" className="stretched-link">
                      Cloud Migration
                    </a>
                  </h4>
                  <p className="description">
                    Cloud migration may seem like a daunting task, But with the
                    right planning, tools and execution, migrating can be
                    accomplished in a timely manner with minimum frustration.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-8 offset-md-2">
                <div className="info-wrap">
                  <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay={200}
                  >
                    <i className="bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h3>Address</h3>
                      <p>JHB, Cape Town</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay={300}
                  >
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Me</h3>
                      <p>+27 0(83) 123 4567</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay={400}
                  >
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Me</h3>
                      <p>anele[at]acedesigns.co.za</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3662.366765511539!2d28.01269360006661!3d-25.99584671609116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1749663967316!5m2!1sen!2sza"
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: 270 }}
                      //allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </>
  );
}
