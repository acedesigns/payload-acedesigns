/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact | aceMedia",
};

export default function Contact() {
  return (
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-8 offset-md-2">
              <div className="info-wrap">
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={200}>
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>JHB, Cape Town</p>
                  </div>
                </div>
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={300}>
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Me</h3>
                    <p>+27 0(83) 123 4567</p>
                  </div>
                </div>
                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay={400}>
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Me</h3>
                    <p>anele[at]acedesigns.co.za</p>
                  </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3662.366765511539!2d28.01269360006661!3d-25.99584671609116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1749663967316!5m2!1sen!2sza"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 270 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
