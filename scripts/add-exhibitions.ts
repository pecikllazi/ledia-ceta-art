import dotenv from 'dotenv';
import { resolve } from 'path';
import { createClient } from '@sanity/client';

// Load environment variables from .env.local
dotenv.config({ path: resolve(__dirname, '../.env.local') });

// Create Sanity client with environment variables
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You may need to add this to .env.local if you don't have it
});

const exhibitions = [
  {
    _type: 'exhibition',
    title: 'The 10th Beijing International Art Biennale (BIAB)',
    slug: { _type: 'slug', current: 'beijing-biennale-2025' },
    theme: 'Coexistence',
    startDate: '2025-12-28',
    endDate: '2026-01-28',
    venue: 'Beijing Exhibition Hall',
    city: 'Beijing',
    country: 'China',
    type: 'biennale',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The 10th Beijing International Art Biennale (BIAB), themed "Coexistence", provides a broad and substantial practical context for the International Art Conference to explore "Mutual Learning Among Civilizations and Artistic Innovation." The Beijing Biennale continuously explores innovative concepts in global artistic creation, discovers and promotes outstanding new artists and exemplary artworks.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Participation at the 10th Beijing Biennale includes one artwork "Under the Sea", amongst artworks from five continents worldwide, and selects representative works of influential artists from participating countries. The exhibition balances tradition with openness, encompassing new developments in contemporary global painting and sculpture as well as new categories of contemporary art including video, installation, and other new media works, plus digital artworks.',
          },
        ],
      },
    ],
  },
  {
    _type: 'exhibition',
    title: 'The 1st International Art Conference of BIAB',
    slug: { _type: 'slug', current: 'biab-conference-2025' },
    theme: 'Mutual Learning Among Civilizations and Artistic Innovation',
    startDate: '2025-12-29',
    endDate: '2025-12-30',
    venue: 'Beijing Exhibition Hall',
    city: 'Beijing',
    country: 'China',
    type: 'forum',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'On the occasion of the 10th Beijing International Art Biennale (BIAB), the 1st international Art Conference of BIAB with the theme "Mutual Learning Among Civilizations and Artistic Innovation", was convened. This extends from the visual presentation of exhibitions to deeper intellectual and cultural exchange, gathering global artistic forces to explore new pathways for art development.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Themed "Mutual Learning Among Civilizations and Artistic Innovation," it featured three sessions for discussion. The second session, "Fluid Contemporaneity and the Construction of Cultural Subjectivity," explores the cross-cultural characteristics of contemporary art under globalization, analyzes the interaction between global vision and localized practice, and examines how countries sustain indigenous cultural traditions through artistic innovation.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ledia Çeta was invited as one of 8 roundtable discussion speakers in Session II: Fluid Contemporaneity and the Construction of Cultural Subjectivity, alongside scholars from the United States, Germany, France, Korea, and China.',
          },
        ],
      },
    ],
  },
  {
    _type: 'exhibition',
    title: 'Everything Has a Spirit',
    slug: { _type: 'slug', current: 'everything-has-a-spirit-2025' },
    theme: 'International Environmental Art Exhibition',
    startDate: '2025-12-09',
    endDate: '2025-12-10',
    venue: 'Nansha',
    city: 'Guangzhou',
    country: 'China',
    type: 'group',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Organised by China Economic Information Agency and supported academically by the Sculpture Department of Tsinghua University School of Fine Arts, the "Everything has a Spirit" environmental protection-themed art pop-up event, held in Nansha, Guangzhou.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The exhibition was positioned on "art intervention ecology and aesthetic activation action", integrating ecological concepts into public spaces so that people can deeply experience the excellent chemical effect generated by art supporting environmental protection.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The artwork entitled "The Sea Before the Storm", has been exhibited along with international masterpieces from Picasso, Dali, and other renowned artists.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Artist Statement (Xinhua News Agency Interview)',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '"My hometown is nestled by the Adriatic Sea, where crystal-clear waters kiss the reefs and fishing boats sway gently on the shimmering waves. The ocean is the very inspiration behind my creations. When I witnessed plastic waste defiling the blue waves and oil slicks corroding the corals, I realized deeply that the ocean is not an inexhaustible treasure, but a living being that demands our protection. Every one of my marine paintings captures its grandeur while voicing its fragility."',
          },
        ],
      },
    ],
  },
  {
    _type: 'exhibition',
    title: 'The Endless River',
    slug: { _type: 'slug', current: 'endless-river-2025' },
    theme: 'Invitational Exhibition of Contemporary Artists',
    startDate: '2025-10-13',
    endDate: '2025-10-27',
    venue: 'Embassy of Albania in China',
    city: 'Beijing',
    country: 'China',
    type: 'invitational',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Hosted by the Embassy of Albania in China and the Embassy of Italy in China, and jointly organized by the International Cultural Exchange and Development Association, the operator of the Sino-Italian Design Exchange Center Debby Group and the Guangzhou Crystal Museum, the "The Endless River - Invitational Exhibition of Contemporary Artists" was opened at the Embassy of Albania in China.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The theme of this exhibition is "The Endless River" which means that artistic creations like rivers cross borders and carry the memory of civilization and the imagination of the future. Twenty-six outstanding artists and jewelry designers from various countries and regions around the world engaged in an artistic dialogue spanning culture and time and space through a variety of media such as painting, sculpture, installation, and jewelry. The exhibition not only presented the unique language of individual creation, but also works to construct an aesthetic resonance between East and West, traditional and contemporary.',
          },
        ],
      },
    ],
  },
  {
    _type: 'exhibition',
    title: 'Taiyuan Contemporary - The First International Contemporary Art Invitational Exhibition 2025',
    slug: { _type: 'slug', current: 'taiyuan-contemporary-2025' },
    theme: 'International Contemporary Art Invitational Exhibition',
    startDate: '2025-10-02',
    endDate: '2026-03-25',
    venue: 'Sam Art Gallery',
    city: 'Taiyuan',
    country: 'China',
    type: 'invitational',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The first Taiyuan International Contemporary Art Exhibition is scheduled to be held at the Sam Art Gallery in Taiyuan. Around 50-60 artists were invited from both China and abroad to participate in the exhibition, featuring nearly 100 diverse and rich artworks, which encompass various forms such as figurative painting, contemporary art, sculpture installations, AI digital art, and multimedia imaging.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Focus on the current artistic exploration and practice of artists from different countries and regions, capture moments of cultural collision, establish an international platform for artistic exchange and interactive dialogue, and explore the creative transformation and expression of cultural genes.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The significance of contemporary art may lie not only in creating new visual language, but also in stimulating people\'s love and curiosity about cities and cultures. This exhibition served as an open experiment, a fresh exploration in a contemporary context.',
          },
        ],
      },
    ],
  },
  {
    _type: 'exhibition',
    title: 'Melody',
    slug: { _type: 'slug', current: 'melody-2025' },
    theme: 'Contemporary Art Exhibition',
    startDate: '2025-06-28',
    endDate: '2025-08-17',
    city: 'Shenzhen',
    country: 'China',
    type: 'group',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'LEDIA CETA is a remarkable female artist from Albania, with over 30 years of experiences from her journeys. As the wife of a diplomat, Ledia brings her passion for art and resilience to this vibrant and creative land of China.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'During the four years living in China, she has been going on vacation back to Albania and has been inspired by the Sea and coastline of Albania and has created a number of works on this subject. These works are not only distilled from the images of the sea, it is also a reflection of her inner feelings. Through the wave of the color and crisscross of lines she shows the wave of the ocean and her passion for the life. Each work is a revelation of her inner world, each painting is a reflection of her soul.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Her work has a unique artistic charm and profound meaning, conveying in the words of art a profound meditation on nature and life. Her work allows viewers to feel a spiritual resonance beyond the physical world.',
          },
        ],
      },
    ],
  },
  {
    _type: 'exhibition',
    title: 'Symphony of Civilizations',
    slug: { _type: 'slug', current: 'symphony-of-civilizations-2025' },
    theme: 'An Artistic Journey through Chinese and Albanian Cultural Heritage',
    startDate: '2025-05-29',
    endDate: '2025-06-28',
    venue: 'Embassy of the Republic of Albania in China',
    city: 'Beijing',
    country: 'China',
    type: 'group',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Hebei Normal University and the Embassy of the Republic of Albania in China jointly held the "Symphony of Civilization - an art tour through Chinese and Albanian cultures" event.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Ambassadors from the embassies of nine countries in China, including Albania, Bulgaria, Croatia, Greece, and Hungary, participated at the event. More than 50 artists participated in the exhibition.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'This art event showcased the exploration and achievements of China and Albania in the process of cultural heritage protection and inheritance. It demonstrated the powerful impact of the interconnectivity of art and culture, and we look forward to further advancing educational, cultural and civilizational exchanges among different countries through this event.',
          },
        ],
      },
    ],
  },
  {
    _type: 'exhibition',
    title: 'The Transformation of Dragons and Snakes',
    slug: { _type: 'slug', current: 'dragons-and-snakes-2025' },
    theme: '2025 International Contemporary Art Invitational Exhibition',
    startDate: '2025-03-01',
    endDate: '2025-03-30',
    venue: 'Hebei Normal University Museum, Zhengding Museum, Guan Shan Art Museum',
    city: 'Hebei',
    country: 'China',
    type: 'invitational',
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Organized by: Hebei Provincial Department of Culture and Tourism, Hebei Normal University. Curated by Professor Cui Qiang, dean of the School of Fine Arts and Design at Hebei Normal University, and Professor Wang Chunchen, former deputy director of the Art Gallery of the Central Academy of Fine Arts.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The exhibition brought together 151 outstanding artists from 12 countries, with works in ink, oil painting, prints, sculpture, and installation art and video. The artists responded to the theme of "The Changing of the Dragon and the Snake" in a multifaceted way, jointly interpreting the symbiotic relationship between traditional and contemporary. The exhibition aims to use art as a way to explore the relationship between traditional and contemporary, East and West, and the transformation and growth of traditional art genes in contemporary contexts.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Artist Interview',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: '"It was a pleasure to be invited to participate at this exhibition as an artist. Each of my works has the theme of the sea, representing the sea in my country. In this exhibition, I was very pleasantly surprised to see this high level of performance of Chinese contemporary art. All the works are very good."',
          },
        ],
      },
    ],
  },
];

async function addExhibitions() {
  console.log('Starting to add exhibitions to Sanity...\n');

  for (const exhibition of exhibitions) {
    try {
      console.log(`Adding: ${exhibition.title}...`);
      const result = await client.create(exhibition);
      console.log(`✓ Successfully added: ${exhibition.title} (ID: ${result._id})\n`);
    } catch (error) {
      console.error(`✗ Error adding ${exhibition.title}:`, error);
    }
  }

  console.log('Finished adding all exhibitions!');
}

// Run the script
addExhibitions()
  .then(() => {
    console.log('\nAll done! Check your Sanity Studio to see the exhibitions.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
