export type Platform = 'website' | 'bluesky' | 'youtube' | 'vk' | 'github';

export type SocialLink = {
  platform: Platform;
  href: string;
};

export const TEATOV_SOCIALS: SocialLink[] = [
  { platform: 'website', href: 'https://teatov.xyz' },
  { platform: 'bluesky', href: 'https://bsky.app/profile/teatov.bsky.social' },
  { platform: 'github', href: 'https://github.com/teatov' },
  { platform: 'vk', href: 'https://vk.com/teatov' },
];
