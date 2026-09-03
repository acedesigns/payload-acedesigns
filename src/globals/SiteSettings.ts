/* =======================================================
 *
 * Created by anele on 03/09/2026.
 *
 * @anele_ace
 *
 * =======================================================
 */

import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: "Anele 'ace' M",
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navItems',
      type: 'array',
      defaultValue: [
        { href: '#hero', icon: 'bi-house', label: 'Home' },
        { href: '#about', icon: 'bi-person', label: 'About' },
        { href: '#resume', icon: 'bi-file-earmark-text', label: 'Resume' },
        { href: '#services', icon: 'bi-hdd-stack', label: 'Services' },
        { href: '#contact', icon: 'bi-envelope', label: 'Contact' },
      ],
      fields: [
        { name: 'href', type: 'text', required: true },
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: { description: 'Bootstrap Icons class name, e.g. bi-house' },
        },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      defaultValue: [
        { platform: 'twitter', href: 'https://twitter.com/anele_ace', icon: 'bi-twitter-x' },
        { platform: 'facebook', href: 'https://www.facebook.com/profile.php?id=100086589287388', icon: 'bi-facebook' },
        { platform: 'instagram', href: '#', icon: 'bi-instagram' },
        { platform: 'google-plus', href: 'skype:anele.ace.m?userinfo', icon: 'bi-skype' },
        { platform: 'linkedin', href: 'https://za.linkedin.com/in/anele', icon: 'bi-linkedin' },
      ],
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
          admin: { description: "Theme's hover-color CSS class, e.g. twitter, facebook, instagram, google-plus, linkedin" },
        },
        { name: 'href', type: 'text', required: true },
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: { description: 'Bootstrap Icons class name, e.g. bi-linkedin' },
        },
      ],
    },
    {
      name: 'footerCopyrightName',
      type: 'text',
      required: true,
      defaultValue: 'aceDesigns',
    },
  ],
}
