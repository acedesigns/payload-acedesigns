/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { getLandingPage } from '@/lib/payload'
import { Hero, ServicesSection, Skills, Stats, ContactSection, ResumeSection } from '@/components'

export default async function Home() {
  const data = await getLandingPage()

  return (
      <>
        <Hero
            heading={data.hero.heading}
            heroImageUrl={data.hero.heroImage?.url ?? '/hero-bg.jpg'}
            typedStrings={data.hero.typedStrings.map((item) => item.text)}
        />

        {/* About Section */}
        <section id="about" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>{data.about.heading}</h2>
            {data.about.introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.text}</p>
            ))}
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-8 content">
                <h2>{data.about.subheading}</h2>
                <p className="fst-italic py-3">
                  {data.about.tagline}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      {data.about.infoList.slice(0, Math.ceil(data.about.infoList.length / 2)).map((item) => (
                          <li key={item.label}>
                            <i className="bi bi-chevron-right" />{" "}
                            <strong>{item.label}:</strong> <span>{item.value}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      {data.about.infoList.slice(Math.ceil(data.about.infoList.length / 2)).map((item) => (
                          <li key={item.label}>
                            <i className="bi bi-chevron-right" />{" "}
                            <strong>{item.label}:</strong> <span>{item.value}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  {data.about.closingParagraph}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}

        <Stats items={data.stats.items} />

        <Skills
            items={data.skills.items}
            heading={data.skills.heading}
            subheading={data.skills.subheading}
        />

        {/* Resume Section */}
        <ResumeSection resume={data.resume} />

        {/* /Resume Section */}

        {/* Services Section */}
        <ServicesSection heading={data.services.heading} items={data.services.items} />
        {/* /Services Section */}

        {/* Contact Section */}
        <ContactSection
            heading={data.contact.heading}
            infoItems={data.contact.infoItems}
            mapEmbedUrl={data.contact.mapEmbedUrl}
        />
        {/* /Contact Section */}
      </>
  );
}
