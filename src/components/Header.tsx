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

interface SocialLink {
    platform: string
    href: string
    icon: string
}

interface SiteHeaderProps {
    siteName: string
    profileImageUrl: string
    navItems: NavItem[]
    socialLinks: SocialLink[]
}

export function SiteHeader({ siteName, profileImageUrl, navItems, socialLinks }: SiteHeaderProps) {

    useAOS()

    const [isNavOpen, setIsNavOpen] = useState(false)
    const [activeHash, setActiveHash] = useState(navItems[0]?.href)

    useEffect(() => {
        function updateActiveHash() {
            const position = window.scrollY + 200
            for (const item of navItems) {
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
    }, [navItems])

    return (
        <header id="header" className={`header dark-background d-flex flex-column${isNavOpen ? ' header-show' : ''}`}>
            <i className={`header-toggle d-xl-none bi ${isNavOpen ? 'bi-x' : 'bi-list'}`}
                onClick={() => setIsNavOpen((open) => !open)}
            />
            <div className="profile-img">
                <Image
                    src={profileImageUrl}
                    alt="Profile photo"
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
                <h1 className="sitename">{siteName}</h1>
            </a>
            <div className="social-links text-center">
                {socialLinks.map((link) => (
                    <a
                        key={link.platform}
                        href={link.href}
                        target="_blank"
                        className={link.platform}
                    >
                        <i className={`bi ${link.icon}`} />
                    </a>
                ))}
            </div>
            <nav id="navmenu" className="navmenu">
                <ul>
                    {navItems.map((item) => (
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
