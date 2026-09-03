/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import type { GlobalConfig } from 'payload'

const iconField = (defaultValue: string) => ({
  name: 'icon' as const,
  type: 'text' as const,
  required: true,
  defaultValue,
  admin: { description: 'Bootstrap Icons class name, e.g. bi-emoji-smile' },
})

export const LandingPage: GlobalConfig = {
  slug: 'landing-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'hero',
          label: 'Hero',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'heading',
              type: 'text',
              required: true,
              defaultValue: "Anele 'ace' M",
            },
            {
              name: 'typedStrings',
              type: 'array',
              minRows: 1,
              defaultValue: [
                { text: 'Developer' },
                { text: 'Android/IOS Developer' },
                { text: 'Software Consultant' },
                { text: 'AWS Certified Solutions Architect' },
                { text: 'Web Expert' },
              ],
              fields: [
                { name: 'text', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          name: 'about',
          label: 'About',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              defaultValue: 'About',
            },
            {
              name: 'introParagraphs',
              type: 'array',
              defaultValue: [
                {
                  text: 'Results-driven Software Engineer and Consultant with over 14 years of experience in building scalable systems, mobile apps, and web platforms. Specialized in Flutter, ReactJs, Angular, Laravel, and Node.js.',
                },
                {
                  text: 'Proven success in delivering full-stack solutions, leading development teams, and consulting for enterprise clients across sectors such as fintech, telecom, and digital media.',
                },
              ],
              fields: [
                { name: 'text', type: 'textarea', required: true },
              ],
            },
            {
              name: 'subheading',
              type: 'text',
              required: true,
              defaultValue: 'Full Stack Engineer',
            },
            {
              name: 'tagline',
              type: 'text',
              required: true,
              defaultValue: 'From a wide range of clients and challenges in the most demanding economies globally.',
            },
            {
              name: 'infoList',
              type: 'array',
              defaultValue: [
                { label: 'Birthday', value: '15 Feb' },
                { label: 'Website', value: 'www.acedesigns.co.za' },
                { label: 'Phone', value: '+27 (0)83 123 4567' },
                { label: 'City', value: 'Johannesburg, South Africa' },
                { label: 'Age', value: '30+' },
                { label: 'Degree', value: 'Pending' },
                { label: 'Email', value: 'anele[at]acedesigns.co.za' },
                { label: 'Freelance', value: 'Available' },
              ],
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'value', type: 'text', required: true },
              ],
            },
            {
              name: 'closingParagraph',
              type: 'textarea',
              required: true,
              defaultValue: "Hi, I'm Anele — a Systems and Web Developer passionate about creating beautiful, functional, and user-focused platforms. I specialize in building professional, accessible, and standards-compliant web-based systems using modern technologies and best practices. Every line of code I write is intentional, maintainable, and handcrafted to deliver seamless, intuitive digital experiences.",
            },
          ],
        },
        {
          name: 'stats',
          label: 'Stats',
          fields: [
            {
              name: 'items',
              type: 'array',
              defaultValue: [
                { icon: 'bi-emoji-smile', value: 32, label: 'Happy Clients' },
                { icon: 'bi-journal-richtext', value: 81, label: 'Projects' },
                { icon: 'bi-people', value: 132201, label: 'Hours Worked' },
              ],
              fields: [
                iconField('bi-emoji-smile'),
                { name: 'value', type: 'number', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          name: 'skills',
          label: 'Skills',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              defaultValue: 'Skills',
            },
            {
              name: 'subheading',
              type: 'textarea',
              required: true,
              defaultValue: 'Skills I have acquired over a very long career. Skills that make me an ideal person to a organisation like yours.',
            },
            {
              name: 'items',
              type: 'array',
              defaultValue: [
                { name: 'NodeJs', percent: 85 },
                { name: 'ExpressJs', percent: 90 },
                { name: 'JavaScript', percent: 90 },
                { name: 'ReactJs', percent: 100 },
                { name: 'Angular', percent: 95 },
                { name: 'React Native', percent: 95 },
                { name: 'PHP', percent: 80 },
                { name: 'Laravel', percent: 85 },
                { name: 'MySql / MongoDb / PostgreSQL', percent: 70 },
                { name: 'WordPress/CMS', percent: 90 },
                { name: 'Flutter', percent: 75 },
                { name: 'SwiftUI', percent: 60 },
                { name: '.NET / C#', percent: 60 },
                { name: 'JAVA', percent: 60 },
              ],
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'percent', type: 'number', required: true, min: 0, max: 100 },
              ],
            },
          ],
        },
        {
          name: 'resume',
          label: 'Resume',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              defaultValue: 'Resume',
            },
            {
              name: 'intro',
              type: 'textarea',
              required: true,
              defaultValue: 'I have Held various technical roles between 2009 and 2018, including Front-End / Web Developer. During this period, I contributed to a wide range of projects across industries such as digital media, travel, and e-commerce. My responsibilities spanned responsive web design, mobile website development, CMS implementation, and user experience optimization',
            },
            {
              name: 'summary',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  defaultValue: 'Sumary',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  required: true,
                  defaultValue: 'Innovative and results-oriented Full Stack Engineer with over 13+ years of experience building user-focused digital solutions from concept to deployment. Adept at designing and delivering scalable, high-performance applications with a strong emphasis on clean architecture, usability, and meeting tight deadlines',
                },
                {
                  name: 'location',
                  type: 'text',
                  required: true,
                  defaultValue: 'Johannesburg, Gauteng, South Africa',
                },
                {
                  name: 'email',
                  type: 'text',
                  required: true,
                  defaultValue: 'anele[at]acedesigns.co.za',
                },
              ],
            },
            {
              name: 'experience',
              type: 'array',
              defaultValue: [
                {
                  role: 'Senior IT Analyst',
                  company: 'Power International Holding',
                  dateRange: 'Jan 2024 ‐ Mar 2025',
                  location: 'Doha, Qatar',
                  bullets: [
                    { text: 'Resolved systems issues and ensured software integration met functional and compliance requirements.' },
                    { text: 'Designed, delivered, and improved ERP systems and training programs.' },
                    { text: 'Collaborated with stakeholders to translate business needs into technical solutions.' },
                    { text: 'Supported User Acceptance Testing and performed system enhancement testing.' },
                  ],
                },
                {
                  role: 'Software Engineer',
                  company: 'Accenture',
                  dateRange: 'Nov 2020 - Dec 2023',
                  location: 'Johannesburg, South Africa',
                  bullets: [
                    { text: 'Delivered web components for a major telecom client.' },
                    { text: 'Participated in sprint planning, standups, and client demos.' },
                    { text: 'Write unit tests, integration tests, and end-to-end tests.' },
                    { text: 'Handled bug fixes and client-facing feature updates.' },
                    { text: 'Clarify requirements with Product Owner / Business Analyst.' },
                  ],
                },
                {
                  role: 'Angular Developer',
                  company: 'Wipro Limited',
                  dateRange: 'July 2019 - Jun 2020',
                  location: 'Johannesburg, South Africa',
                  bullets: [
                    { text: 'Led development of user management components for a banking client.' },
                    { text: 'Participated in sprint planning, standups, and client demos.' },
                    { text: 'Participate in Sprint Reviews to demo completed work.' },
                    { text: 'Build and integrate frontend to backend systems.' },
                    { text: 'Clarify requirements with Product Owner / Business Analyst.' },
                  ],
                },
              ],
              fields: [
                { name: 'role', type: 'text', required: true },
                { name: 'company', type: 'text', required: true },
                { name: 'dateRange', type: 'text', required: true },
                { name: 'location', type: 'text', required: true },
                {
                  name: 'bullets',
                  type: 'array',
                  fields: [
                    { name: 'text', type: 'text', required: true },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'services',
          label: 'Services',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              defaultValue: 'Services',
            },
            {
              name: 'items',
              type: 'array',
              defaultValue: [
                {
                  icon: 'bi-briefcase',
                  title: 'CRM Development',
                  description: 'My solutions help you manage customer data, track interactions, automate workflows, and improve team collaboration — all within a secure, scalable, and user-friendly interface.',
                  link: '',
                },
                {
                  icon: 'bi-card-checklist',
                  title: 'E-Commerce',
                  description: 'From custom storefronts and product catalogs to secure payment integrations and order management systems, I deliver fully responsive, user-friendly solutions tailored to your brand and customer journey.',
                  link: '',
                },
                {
                  icon: 'bi-bar-chart',
                  title: 'Web Applications',
                  description: 'From internal dashboards and SaaS platforms to customer-facing portals, I build secure, responsive, and scalable solutions using modern frameworks like Angular, React, Laravel, and Node.js.',
                  link: '',
                },
                {
                  icon: 'bi-binoculars',
                  title: 'API Development',
                  description: 'Specialising in building custom APIs that connect disparate systems and databases. API development services enable organisations to manage a variety of software modules using technologies including REST, XML-RPC, SOAP, JSON and other protocols',
                  link: '',
                },
                {
                  icon: 'bi-brightness-high',
                  title: 'Machine Learning',
                  description: 'Machine Learning is a type of AI that allows software applications to predict outcomes without being explicitly programmed to do so. I use Machine Learning to provide an array of solutions for businesses',
                  link: '',
                },
                {
                  icon: 'bi-calendar4-week',
                  title: 'Cloud Migration',
                  description: 'Cloud migration may seem like a daunting task, But with the right planning, tools and execution, migrating can be accomplished in a timely manner with minimum frustration.',
                  link: '',
                },
              ],
              fields: [
                iconField('bi-briefcase'),
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea', required: true },
                { name: 'link', type: 'text' },
              ],
            },
          ],
        },
        {
          name: 'contact',
          label: 'Contact',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              defaultValue: 'Contact',
            },
            {
              name: 'infoItems',
              type: 'array',
              defaultValue: [
                { icon: 'bi-geo-alt', title: 'Address', value: 'JHB, Cape Town' },
                { icon: 'bi-telephone', title: 'Call Me', value: '+27 0(83) 123 4567' },
                { icon: 'bi-envelope', title: 'Email Me', value: 'anele[at]acedesigns.co.za' },
              ],
              fields: [
                iconField('bi-geo-alt'),
                { name: 'title', type: 'text', required: true },
                { name: 'value', type: 'text', required: true },
              ],
            },
            {
              name: 'mapEmbedUrl',
              type: 'text',
              defaultValue: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3662.366765511539!2d28.01269360006661!3d-25.99584671609116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1749663967316!5m2!1sen!2sza',
            },
          ],
        },
      ],
    },
  ],
}
