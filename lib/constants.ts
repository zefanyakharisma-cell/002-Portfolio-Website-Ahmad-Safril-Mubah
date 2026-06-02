export const PROFILE = {
  name: 'Ahmad Safril Mubah',
  email: 'ahmad.safril@fisip.unair.ac.id',
  photoUrl: 'https://scholar.unair.ac.id/files-asset/32590381/safril.jpg',
  scholarUrl: 'https://scholar.google.com/citations?user=Y3ncYXcAAAAJ',
} as const

/** External academic & professional profiles (Contact + Hero social strip). */
export const PROFILE_LINKS = [
  { key: 'scholar', label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=Y3ncYXcAAAAJ' },
  { key: 'scopus', label: 'Scopus', url: 'https://www.scopus.com/authid/detail.uri?authorId=57214229674' },
  { key: 'researchgate', label: 'ResearchGate', url: 'https://www.researchgate.net/profile/A-Safril-Mubah-2' },
  { key: 'academia', label: 'Academia.edu', url: 'https://unair.academia.edu/asafril' },
  { key: 'sinta', label: 'SINTA', url: 'https://sinta.kemdiktisaintek.go.id/authors/profile/6086329' },
  { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/a-safril-mubah-5787b561/' },
] as const

/** Subset shown in the hero social strip. */
export const HERO_SOCIAL_KEYS = ['scholar', 'scopus', 'researchgate', 'linkedin'] as const

export const SECTION_IDS = {
  about: 'about',
  research: 'research',
  publications: 'publications',
  teaching: 'teaching',
  media: 'media',
  cv: 'cv',
  contact: 'contact',
} as const
