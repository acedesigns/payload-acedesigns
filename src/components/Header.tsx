"use client";
/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import Image from 'next/image'
import { useAOS } from '@/hooks'
import { useEffect, useState } from 'react'

interface NavItem {
    href: string
    icon: string
    label: string
}

const NAV_ITEMS: NavItem[] = [
    { href: '#hero', icon: 'bi-house', label: 'Home' },
    { href: '#about', icon: 'bi-person', label: 'About' },
    { href: '#resume', icon: 'bi-file-earmark-text', label: 'Resume' },
    { href: '#services', icon: 'bi-hdd-stack', label: 'Services' },
    { href: '#contact', icon: 'bi-envelope', label: 'Contact' },
]

export function SiteHeader() {

    useAOS()

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [activeHash, setActiveHash] = useState(NAV_ITEMS[0].href)

    useEffect(() => {
        function updateActiveHash() {
            const position = window.scrollY + 200
            for (const item of NAV_ITEMS) {
                const section = document.querySelector<HTMLElement>(item.href)
                if (!section) continue
                if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                    setActiveHash(item.href)
                    return
                }
            }
        }

        updateActiveHash()
        window.addEventListener('scroll', updateActiveHash)
        return () => window.removeEventListener('scroll', updateActiveHash)
    }, [])

    return (
        <header id="header" className={`header dark-background d-flex flex-column${isNavOpen ? ' header-show' : ''}`}>
            <i className={`header-toggle d-xl-none bi ${isNavOpen ? 'bi-x' : 'bi-list'}`}
                onClick={() => setIsNavOpen((open) => !open)}
            />
            <div className="profile-img">
                <Image
                    src="/studio-ghibli.png"
                    alt="Company Logo"
                    width={120}
                    height={172}
                    loading="eager"
                    className="img-fluid rounded-circle"
                />
            </div>
            <a href="/"
                className="logo d-flex align-items-center justify-content-center">
                {/* Uncomment the line below if you also wish to use an image logo */}
                {/* <img src="assets/img/logo.png" alt=""> */}
                <h1 className="sitename">Anele 'ace' M</h1>
            </a>
            <div className="social-links text-center">
                <a
                    href="https://twitter.com/anele_ace"
                    target="_blank"
                    className="twitter"
                >
                    <i className="bi bi-twitter-x" />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100086589287388"
                    target="_blank"
                    className="facebook"
                >
                    <i className="bi bi-facebook" />
                </a>
                <a href="#" target="_blank" className="instagram">
                    <i className="bi bi-instagram" />
                </a>
                <a
                    href="skype:anele.ace.m?userinfo"
                    target="_blank"
                    className="google-plus"
                >
                    <i className="bi bi-skype" />
                </a>
                <a
                    href="https://za.linkedin.com/in/anele"
                    target="_blank"
                    className="linkedin"
                >
                    <i className="bi bi-linkedin" />
                </a>
            </div>
            <nav id="navmenu" className="navmenu">
                <ul>
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={item.href === activeHash ? 'active' : undefined}
                                onClick={() => setIsNavOpen(false)}
                            >
                                <i className={`bi ${item.icon} navicon`} />
                                {' '}{item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

