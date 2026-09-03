/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Media } from '@/payload-types'

export const getPayloadClient = cache(async () => getPayload({ config: configPromise }))

export interface LandingPageData {
  hero: {
    heroImage: Media | null
    heading: string
    typedStrings: { id?: string | null; text: string }[]
  }
  about: {
    heading: string
    introParagraphs: { id?: string | null; text: string }[]
    subheading: string
    tagline: string
    infoList: { id?: string | null; label: string; value: string }[]
    closingParagraph: string
  }
  stats: {
    items: { id?: string | null; icon: string; value: number; label: string }[]
  }
  skills: {
    heading: string
    subheading: string
    items: { id?: string | null; name: string; percent: number }[]
  }
  resume: {
    heading: string
    intro: string
    summary: { title: string; body: string; location: string; email: string }
    experience: {
      id?: string | null
      role: string
      company: string
      dateRange: string
      location: string
      bullets: { id?: string | null; text: string }[]
    }[]
  }
  services: {
    heading: string
    items: { id?: string | null; icon: string; title: string; description: string; link?: string | null }[]
  }
  contact: {
    heading: string
    infoItems: { id?: string | null; icon: string; title: string; value: string }[]
    mapEmbedUrl?: string | null
  }
}

export interface SiteSettingsData {
  siteName: string
  profileImage: Media | null
  navItems: { id?: string | null; href: string; icon: string; label: string }[]
  socialLinks: { id?: string | null; platform: string; href: string; icon: string }[]
  footerCopyrightName: string
}

export async function getLandingPage(): Promise<LandingPageData> {
  const payload = await getPayloadClient()
  const data = await payload.findGlobal({ slug: 'landing-page', depth: 1 })

  return {
    hero: {
      heroImage: (data.hero.heroImage as Media | null) ?? null,
      heading: data.hero.heading,
      typedStrings: data.hero.typedStrings ?? [],
    },
    about: {
      heading: data.about.heading,
      introParagraphs: data.about.introParagraphs ?? [],
      subheading: data.about.subheading,
      tagline: data.about.tagline,
      infoList: data.about.infoList ?? [],
      closingParagraph: data.about.closingParagraph,
    },
    stats: {
      items: data.stats?.items ?? [],
    },
    skills: {
      heading: data.skills.heading,
      subheading: data.skills.subheading,
      items: data.skills.items ?? [],
    },
    resume: {
      heading: data.resume.heading,
      intro: data.resume.intro,
      summary: data.resume.summary,
      experience: (data.resume.experience ?? []).map((job) => ({
        ...job,
        bullets: job.bullets ?? [],
      })),
    },
    services: {
      heading: data.services.heading,
      items: data.services.items ?? [],
    },
    contact: {
      heading: data.contact.heading,
      infoItems: data.contact.infoItems ?? [],
      mapEmbedUrl: data.contact.mapEmbedUrl,
    },
  }
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  const payload = await getPayloadClient()
  const data = await payload.findGlobal({ slug: 'site-settings', depth: 1 })

  return {
    siteName: data.siteName,
    profileImage: (data.profileImage as Media | null) ?? null,
    navItems: data.navItems ?? [],
    socialLinks: data.socialLinks ?? [],
    footerCopyrightName: data.footerCopyrightName,
  }
}
