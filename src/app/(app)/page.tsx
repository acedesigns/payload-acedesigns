/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { getLandingPage } from '@/lib/payload'
import { Hero, Skills, Stats } from '@/components'

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
        <section id="resume" className="resume section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>{data.resume.heading}</h2>
            <p>
              {data.resume.intro}
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">{data.resume.summary.title}</h3>
                <div className="resume-item pb-0">
                  <p>
                    <em>{data.resume.summary.body}</em>
                  </p>
                  <ul>
                    <li>{data.resume.summary.location}</li>
                    <li>{data.resume.summary.email}</li>
                  </ul>
                </div>
                {/* Edn Resume Item */}
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <h3 className="resume-title">Professional Experience</h3>
                {data.resume.experience.map((job) => (
                    <div className="resume-item" key={`${job.company}-${job.dateRange}`}>
                      <h4>{job.role} — {job.company}</h4>
                      <h5>{job.dateRange}</h5>
                      <p>
                        <em>{job.location}</em>
                      </p>
                      <ul>
                        {job.bullets.map((bullet, index) => (
                            <li key={index}>{bullet.text}</li>
                        ))}
                      </ul>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* /Resume Section */}

        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>{data.services.heading}</h2>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              {data.services.items.map((service, index) => (
                  <div
                      className="col-lg-4 col-md-6 service-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay={(index + 1) * 100}
                      key={service.title}
                  >
                    <div className="icon flex-shrink-0">
                      <i className={`bi ${service.icon}`} />
                    </div>
                    <div>
                      <h4 className="title">
                        {service.link ? (
                            <a href={service.link} className="stretched-link">
                              {service.title}
                            </a>
                        ) : (
                            service.title
                        )}
                      </h4>
                      <p className="description">
                        {service.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
        {/* /Services Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>{data.contact.heading}</h2>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-8 offset-md-2">
                <div className="info-wrap">
                  {data.contact.infoItems.map((item, index) => (
                      <div
                          className="info-item d-flex"
                          data-aos="fade-up"
                          data-aos-delay={(index + 2) * 100}
                          key={item.title}
                      >
                        <i className={`bi ${item.icon} flex-shrink-0`} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.value}</p>
                        </div>
                      </div>
                  ))}
                  {data.contact.mapEmbedUrl && (
                      <iframe
                          loading="lazy"
                          frameBorder={0}
                          src={data.contact.mapEmbedUrl}
                          referrerPolicy="no-referrer-when-downgrade"
                          style={{ border: 0, width: "100%", height: 270 }}
                      />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </>
  );
}
