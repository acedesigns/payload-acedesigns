/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

interface ResumeItems {
    heading?: string | null;
    intro: string;
    summary: {
        title: string;
        body: string;
        location: string;
        email: string
    }
    experience: {
        id?: string | null
        role: string
        company: string
        dateRange: string
        location: string
        bullets: { id?: string | null; text: string }[]
    }[]
}

interface ResumeSectionProps {
    resume: ResumeItems
}

const ResumeSection = ({resume}: ResumeSectionProps) => {
    return(
        <section id="resume" className="resume section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>{resume.heading}</h2>

                <p>{resume.intro}</p>
            </div>
            {/* End Section Title */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="resume-title">{resume.summary.title}</h3>
                        <div className="resume-item pb-0">
                            <p>
                                <em>{resume.summary.body}</em>
                            </p>
                            <ul>
                                <li>{resume.summary.location}</li>
                                <li>{resume.summary.email}</li>
                            </ul>
                        </div>
                        {/* Edn Resume Item */}
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                        <h3 className="resume-title">Professional Experience</h3>
                        {resume.experience.map((job) => (
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
    )
}

export default ResumeSection;
