/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

interface ServiceItem {
    icon: string
    title: string
    description: string
    link?: string | null
}

interface ServicesProps {
    heading: string
    items: ServiceItem[]
}

export function ServicesSection({ heading, items }: ServicesProps) {
    return (
        <section id="services" className="services section">

            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>{heading}</h2>
            </div>
            {/* End Section Title */}

            <div className="container">
                <div className="row gy-4">
                    {items.map((service, index) => (
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
    )
}
