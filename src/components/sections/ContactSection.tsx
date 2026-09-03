/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

interface ContactItem {
    id?: string | null
    icon: string
    title: string
    value: string
}

interface ContactSectionProps {
    heading: string
    infoItems: ContactItem[]
    mapEmbedUrl?: string | null
}
const ContactSection = ({heading, infoItems, mapEmbedUrl}: ContactSectionProps) => {
    return(
        <section id="contact" className="contact section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>{heading}</h2>
            </div>
            {/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">
                    <div className="col-lg-8 offset-md-2">
                        <div className="info-wrap">
                            {infoItems.map((item, index) => (
                                    <div data-aos="fade-up"
                                        key={item.title}
                                        className="info-item d-flex"
                                        data-aos-delay={(index + 2) * 100}
                                    >
                                        <i className={`bi ${item.icon} flex-shrink-0`} />
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            {mapEmbedUrl && (
                                <iframe
                                    loading="lazy"
                                    frameBorder={0}
                                    src={mapEmbedUrl}
                                    referrerPolicy="no-referrer-when-downgrade"
                                    style={{ border: 0, width: "100%", height: 270 }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default  ContactSection


