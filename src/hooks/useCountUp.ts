/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { useEffect, useState, type RefObject } from 'react'

export function useCountUp(ref: RefObject<HTMLElement | null>, end: number, durationSeconds: number) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()

            const durationMs = durationSeconds * 1000
            const startTime = performance.now()

            function tick(now: number) {
                const progress = Math.min((now - startTime) / durationMs, 1)
                setValue(Math.round(end * progress))
                if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
        }, { threshold: 0.5 })

        observer.observe(node)
        return () => observer.disconnect()
    }, [ref, end, durationSeconds])

    return value
}
