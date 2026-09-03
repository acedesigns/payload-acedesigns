"use client";
/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { useRef } from 'react'
import { useSkillsReveal } from '@/hooks'

interface SkillItem {
    name: string
    percent: number
}

function SkillBar({ name, percent }: SkillItem) {
    return (
        <div className="progress">
            <span className="skill">
                <span>{name}</span> <i className="val">{percent}%</i>
            </span>
            <div className="progress-bar-wrap">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                />
            </div>
        </div>
    )
}

interface SkillsProps {
    heading: string
    subheading: string
    items: SkillItem[]
}

export function Skills({ heading, subheading, items }: SkillsProps) {
    const skillsRef = useRef<HTMLDivElement>(null)
    useSkillsReveal(skillsRef)

    const half = Math.ceil(items.length / 2)
    const columns = [items.slice(0, half), items.slice(half)]

    return (
        <section id="skills" className="skills section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>{heading}</h2>
                <p>{subheading}</p>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row skills-content skills-animation" ref={skillsRef}>
                    {columns.map((column, index) => (
                        <div className="col-lg-6" key={index}>
                            {column.map((item) => (
                                <SkillBar key={item.name} {...item} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
