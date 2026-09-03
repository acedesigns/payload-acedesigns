/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import AOS from 'aos'
import { useEffect } from 'react'

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])
}
