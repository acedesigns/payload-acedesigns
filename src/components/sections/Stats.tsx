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
import { useCountUp } from '@/hooks'

interface StatItem {
    icon: string
    value: number
    label: string
}

function StatCounter({ icon, value, label }: StatItem) {
    const ref = useRef<HTMLSpanElement>(null)
    const count = useCountUp(ref, value, 1)

    return (
        <div className="col-lg-3 col-md-6">
            <div className="stats-item">
                <i className={`bi ${icon}`} />
                <span ref={ref} className="purecounter">{count}</span>
                <p>
                    <strong>{label}</strong>{" "}
                </p>
            </div>
        </div>
    )
}

export function Stats({ items }: { items: StatItem[] }) {
    return (
        <section id="stats" className="stats section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <div className="row gy-4">
                    {items.map((item) => (
                        <StatCounter key={item.label} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
