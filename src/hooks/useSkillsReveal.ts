/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { useEffect, type RefObject } from 'react'

export function useSkillsReveal(ref: RefObject<HTMLElement | null>) {
    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()

            node.querySelectorAll<HTMLElement>('.progress .progress-bar').forEach((bar) => {
                bar.style.width = `${bar.getAttribute('aria-valuenow')}%`
            })
        }, { threshold: 0.2 })

        observer.observe(node)
        return () => observer.disconnect()
    }, [ref])
}
