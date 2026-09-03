/* =======================================================
 *
 * Created by anele on 02/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import Typed from 'typed.js'
import { useEffect, type RefObject } from 'react'

interface UseTypedTextOptions {
    loop?: boolean
    typeSpeed?: number
    backSpeed?: number
    backDelay?: number
}

export function useTypedText(
    ref: RefObject<HTMLElement | null>,
    strings: string[],
    options: UseTypedTextOptions = {},
) {
    useEffect(() => {
        if (!ref.current) return

        const typed = new Typed(ref.current, { strings, ...options })
        return () => typed.destroy()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, strings.join('|'), options.loop, options.typeSpeed, options.backSpeed, options.backDelay])
}
