"use client";
/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { usePreloader } from '@/hooks'
import { useEffect, useState } from 'react'

interface SiteFooterProps {
    copyrightName: string
}

export function SiteFooter({ copyrightName }: SiteFooterProps) {

    const isLoading: boolean = usePreloader()

    const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)

    useEffect(() => {
        function toggleScrollTop() {
            setIsScrollTopVisible(window.scrollY > 100)
        }

        toggleScrollTop()
        window.addEventListener('scroll', toggleScrollTop)
        return () => window.removeEventListener('scroll', toggleScrollTop)
    }, [])

    return(
        <>
            <footer id="footer" className="footer position-relative light-background">
                <div className="container">
                    <div className="copyright text-center ">
                        <p>
                            © <span>Copyright</span>{" "}
                            <strong className="px-1 sitename">{copyrightName}</strong>{" "}
                            <span>All Rights Reserved</span>
                        </p>
                    </div>
                </div>
            </footer>

            {/* Scroll Top */}
            <a href="#" id="scroll-top" className={`scroll-top d-flex align-items-center justify-content-center${isScrollTopVisible ? ' active' : ''}`}
               onClick={(e) => {
                   e.preventDefault()
                   window.scrollTo({ top: 0, behavior: 'smooth' })
               }}
            >
                <i className="bi bi-arrow-up-short" />
            </a>
            {/* Preloader */}
            {isLoading && <div id="preloader" />}
        </>
    )
}