export type PublicationType = 'article' | 'book' | 'chapter'
export type MediaType = 'interview' | 'commentary' | 'press_mention'

export type ResearchTheme = {
  id: string
  title_en: string
  title_id: string | null
  description_en: string
  description_id: string | null
  icon: string
  order: number
  created_at: string
  updated_at: string
}

export type Publication = {
  id: string
  title_en: string
  title_id: string | null
  authors: string
  journal: string | null
  year: number
  type: PublicationType
  doi: string | null
  url: string | null
  citation_count: number
  abstract_en: string | null
  abstract_id: string | null
  created_at: string
  updated_at: string
}

export type MediaItem = {
  id: string
  title_en: string
  title_id: string | null
  outlet: string | null
  date: string | null
  url: string | null
  type: MediaType
  created_at: string
  updated_at: string
}

export type SiteSetting = {
  id: string
  key: string
  value_en: string | null
  value_id: string | null
  updated_at: string
}

type Table<T> = {
  Row: T
  Insert: Partial<T>
  Update: Partial<T>
  Relationships: []
}

export interface Database {
  public: {
    Tables: {
      research_themes: Table<ResearchTheme>
      publications: Table<Publication>
      media_items: Table<MediaItem>
      site_settings: Table<SiteSetting>
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      publication_type: PublicationType
      media_type: MediaType
    }
    CompositeTypes: Record<string, never>
  }
}
