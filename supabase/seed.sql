-- =============================================================
-- Seed data — run after schema.sql
-- =============================================================

-- ---------- Research themes ----------------------------------
insert into research_themes (title_en, title_id, description_en, description_id, icon, "order") values
(
  'US-China Competition & Indo-Pacific Order',
  'Persaingan AS-Tiongkok & Tatanan Indo-Pasifik',
  'How Indonesia navigates the intensifying great-power rivalry through double hedging and strategic ambiguity, shaping the regional balance of power in the Indo-Pacific.',
  'Bagaimana Indonesia menavigasi persaingan kekuatan besar melalui strategi double hedging dan ambiguitas strategis dalam tatanan regional Indo-Pasifik.',
  'globe', 1
),
(
  'Soft Power & Public Diplomacy',
  'Soft Power & Diplomasi Publik',
  'The mechanisms through which states project influence via cultural exchange, education diplomacy, and digital media — with a focus on Japanese and Chinese public diplomacy in Southeast Asia.',
  'Mekanisme proyeksi pengaruh negara melalui pertukaran budaya, diplomasi pendidikan, dan media digital — dengan fokus pada diplomasi publik Jepang dan Tiongkok di Asia Tenggara.',
  'users', 2
),
(
  'Terrorism & Globalization',
  'Terorisme & Globalisasi',
  'The transnational dynamics of extremist networks — particularly Jemaah Islamiyah — and how globalisation simultaneously enables and constrains violent non-state actors.',
  'Dinamika transnasional jaringan ekstremis — khususnya Jemaah Islamiyah — dan bagaimana globalisasi secara bersamaan memfasilitasi sekaligus membatasi aktor non-negara yang bersifat kekerasan.',
  'shield-alert', 3
),
(
  'Identity, Citizenship & Nation-Building',
  'Identitas, Kewarganegaraan & Pembangunan Bangsa',
  'The tensions between globalization and national identity, explored through the lens of ethnic Chinese Indonesians and the ongoing negotiation of belonging in post-colonial Indonesia.',
  'Ketegangan antara globalisasi dan identitas nasional, dieksplorasi melalui pengalaman etnis Tionghoa-Indonesia dan negosiasi identitas dalam Indonesia pasca-kolonial.',
  'landmark', 4
);

-- ---------- Publications -------------------------------------
insert into publications (title_en, authors, journal, year, type, doi, citation_count) values
(
  'Indonesia''s Double Hedging Strategy toward the United States-China Competition: Shaping Regional Order in the Indo-Pacific?',
  'A. Safril Mubah', 'Issues and Studies', 2019, 'article', '10.1142/S1013251119400071', 19
),
(
  'Globalization, national identity and citizenship: Dilemma of Chinese Indonesians in Indonesian nation-building',
  'A. Safril Mubah, S. Anabarja', 'Tamkang Journal of International Affairs', 2020, 'article', '10.6185/TJIA.V.202001_23(3).0002', 10
),
(
  'The Trap of the Blue Economy: Evidence from Lombok Island, Indonesia',
  'B. Wardhani, Y.W. Santoso, A.S. Mubah, A. Pratamasari, V. Dugis, Latifah, Y.W. Yu', 'Journal of Marine and Island Cultures', 2023, 'article', '10.21463/jmic.2023.12.3.15', 7
),
(
  'Developing Critical Thinking and Cybersecurity Literacy Skills Ahead of the 2024 Election for Students at Vocational High School of Al Badar in Tulungagung',
  'A.S. Mubah, S. Anabarja, P.D. Yakti, A. Pratamasari', 'Jurnal Layanan Masyarakat (Journal of Public Services)', 2024, 'article', null, 0
),
(
  'Teroris versus Globalisasi: Perlawanan Jaringan Jamaah Islamiyah terhadap Hegemoni Amerika',
  'Ahmad Safril Mubah', 'Airlangga University Press', 2012, 'book', null, 0
),
(
  'Menguak Ulah Neokons: Menyingkap Agenda Terselubung Amerika dalam Memerangi Terorisme',
  'Ahmad Safril Mubah', 'Airlangga University Press', 2007, 'book', null, 0
);
