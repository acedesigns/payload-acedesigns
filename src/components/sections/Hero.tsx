"use client";
/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import Image from 'next/image'
import { useRef } from 'react'
import { useTypedText } from '@/hooks'

interface HeroProps {
    heroImageUrl: string
    heading: string
    typedStrings: string[]
}

export function Hero({ heroImageUrl, heading, typedStrings }: HeroProps) {
    const typedRef = useRef<HTMLSpanElement>(null)
    useTypedText(typedRef, typedStrings, { loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000 })

    return (
        <section id="hero" className="hero section dark-background">
            <Image
                src={heroImageUrl} alt="Hero background"
                width={1200} height={260} data-aos="fade-in"
                style={{ width: "100%", height: "100%" }}
            />
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
                <h2>{heading}</h2>
                <p>
                    I&apos;m{" "}
                    <span className="typed" ref={typedRef}>
                        A Developer
                    </span>
                    <span className="typed-cursor typed-cursor--blink" aria-hidden="true" />
                    <span className="typed-cursor typed-cursor--blink" aria-hidden="true" />
                </p>
            </div>
        </section>
    )
}
