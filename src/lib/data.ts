export interface Artwork {
  src: string;
  alt: string;
  medium?: string;
  dimensions?: string;
}

export interface GalleryCategory {
  slug: string;
  title: string;
  works: Artwork[];
}

export const galleries: GalleryCategory[] = [
  {
    slug: "small-works",
    title: "Small Works",
    works: [
      { src: "/images/small-works/01-pink-fields-1.jpg", alt: "Pink Fields 1", medium: "mixed media on paper in white frame with white mat", dimensions: '9" x 12" x 1"' },
      { src: "/images/small-works/02-pink-fields-2.jpg", alt: "Pink Fields 2", medium: "mixed media on paper in white frame with white mat", dimensions: '9" x 12" x 1"' },
      { src: "/images/small-works/03-lush.jpg", alt: "Lush", medium: "mixed media on paper in black frame with white mat", dimensions: '13" x 11" x 1"' },
      { src: "/images/small-works/04-kindness-1.jpg", alt: "Kindness 1", medium: "mixed media on yupo in white frame", dimensions: '17" x 14" x 1"' },
      { src: "/images/small-works/05-kindness-2.jpg", alt: "Kindness 2", medium: "mixed media on yupo in white frame", dimensions: '17" x 14" x 1"' },
      { src: "/images/small-works/06-kindness-3.jpg", alt: "Kindness 3", medium: "mixed media on yupo in white frame", dimensions: '17" x 14" x 1"' },
      { src: "/images/small-works/07-small-work-7.jpg", alt: "Nature 1", medium: "mixed media on wood panel", dimensions: '6" x 6" x 1.5"' },
      { src: "/images/small-works/08-small-work-8.jpg", alt: "Nature 2", medium: "mixed media on wood panel", dimensions: '6" x 6" x 1.5"' },
      { src: "/images/small-works/09-small-work-9.jpg", alt: "Nature 3", medium: "mixed media on wood panel", dimensions: '6" x 6" x 1.5"' },
      { src: "/images/small-works/10-small-work-10.jpg", alt: "Nature 4", medium: "mixed media on wood panel", dimensions: '6" x 6" x 1.5"' },
      { src: "/images/small-works/11-small-work-11.jpg", alt: "The Wanderer", medium: "mixed media on thin wood board", dimensions: '9" x 9"' },
      { src: "/images/small-works/12-small-work-12.jpg", alt: "Windstorm", medium: "mixed media on thin wood board", dimensions: '9" x 9"' },
    ],
  },
  {
    slug: "medium-works",
    title: "Medium Works",
    works: [
      { src: "/images/medium-works/01-gorgeous-blooms.jpg", alt: "Gorgeous Blooms", medium: "mixed media on yupo paper with white mat and frame", dimensions: '24" x 24" x 1"' },
      { src: "/images/medium-works/02-blowing-in-the-wind.jpg", alt: "Blowing in the Wind", medium: "mixed media on yupo paper with white mat and frame", dimensions: '18" x 15" x 1.5"' },
      { src: "/images/medium-works/03-alone-but-not-alone.jpg", alt: "Alone but not Alone", medium: "mixed media on yupo paper with white mat and frame", dimensions: '18" x 15" x 1.5"' },
      { src: "/images/medium-works/04-bursting-lily.jpg", alt: "Bursting Lily", medium: "mixed media on yupo paper with white mat and frame", dimensions: '18" x 15" x 1.5"' },
      { src: "/images/medium-works/05-peaceful.jpg", alt: "Peaceful", medium: "mixed media on panel in white floater frame", dimensions: '22" x 26" x 3"' },
      { src: "/images/medium-works/06-conversations-between-roses.jpg", alt: "Conversations Between Roses", medium: "mixed media on yupo paper with white mat and frame", dimensions: '18" x 15" x 1.5"' },
      { src: "/images/medium-works/07-beach-day.jpg", alt: "Beach Day", medium: "mixed media on yupo paper in a white frame", dimensions: '18" x 15" x 1"' },
      { src: "/images/medium-works/08-regenerative.jpg", alt: "Regenerative", medium: "mixed media on canvas in white floater frame", dimensions: '22" x 22" x 2"' },
      { src: "/images/medium-works/09-impasto-syndrome.jpg", alt: "Impasto Syndrome", medium: "mixed media on canvas", dimensions: '20" x 20" x 2"' },
      { src: "/images/medium-works/10-for-the-love-of-nature.jpg", alt: "For the Love of Nature", medium: "mixed media on panel in white floater frame", dimensions: '23" x 22" x 2"' },
      { src: "/images/medium-works/11-medium-work-11.jpg", alt: "Reaching", medium: "mixed media on yupo paper in white mat and frame", dimensions: '18" x 15" x 1.5"' },
    ],
  },
  {
    slug: "large-works",
    title: "Large Works",
    works: [
      { src: "/images/large-works/01-large-work-1.jpg", alt: "Whispers", medium: "mixed media on canvas in white floater frame", dimensions: '37" x 37" x 2"' },
      { src: "/images/large-works/02-large-work-2.jpg", alt: "Rush of Spring", medium: "mixed media on canvas in white floater frame", dimensions: '37" x 37" x 2"' },
      { src: "/images/large-works/03-traveling.jpg", alt: "Traveling", medium: "mixed media on canvas", dimensions: '36" x 36" x 1.5"' },
      { src: "/images/large-works/04-garden-morning.jpg", alt: "Garden Morning", medium: "mixed media on canvas", dimensions: '36" x 36" x 1.5"' },
      { src: "/images/large-works/05-open-spaces.jpg", alt: "Open Spaces", medium: "mixed media on canvas", dimensions: '36" x 36" x 1.5"' },
      { src: "/images/large-works/06-space-to-play.jpg", alt: "Space to Play", medium: "mixed media on canvas", dimensions: '36" x 36" x 1.5"' },
      { src: "/images/large-works/07-in-flight.jpg", alt: "In Flight", medium: "mixed media on canvas", dimensions: '36" x 36" x 1.5"' },
      { src: "/images/large-works/08-new-hope.jpg", alt: "New Hope", medium: "mixed media on yupo paper in white frame", dimensions: '30" x 42" x 1"' },
      { src: "/images/large-works/09-earth-day.jpg", alt: "Earth Day", medium: "mixed media on canvas", dimensions: '36" x 36" x 1.5"' },
      { src: "/images/large-works/10-entry-to-joy.jpg", alt: "Entry to Joy", medium: "mixed media on panel", dimensions: '36" x 48" x 1.5"' },
      { src: "/images/large-works/11-pink-play.jpg", alt: "Pink Play", medium: "mixed media on panel in white frame", dimensions: '30" x 24" x 1.5"' },
      { src: "/images/large-works/12-impressions.jpg", alt: "Pink Hills", medium: "mixed media on panel in white frame", dimensions: '40" x 30" x 1.5"' },
      { src: "/images/large-works/13-impressions-2.jpg", alt: "Impressions", medium: "mixed media on panel in white frame", dimensions: '30" x 40" x 1.5"' },
      { src: "/images/large-works/14-my-spring-colors.jpg", alt: "My Spring Colors", dimensions: '30" x 40" x 1.5"' },
      { src: "/images/large-works/15-calling-the-birds.jpg", alt: "Calling the Birds", medium: "mixed media on panel", dimensions: '24" x 36" x 1.5"' },
    ],
  },
];

export const navLinks = [
  { href: "/", label: "Selected Works" },
  { href: "/small-works", label: "Small Works" },
  { href: "/medium-works", label: "Medium Works" },
  { href: "/large-works", label: "Large Works" },
];

export const secondaryLinks = [
  { href: "/cv", label: "CV" },
  { href: "/about", label: "About" },
];

export interface ResumeYear {
  year: string;
  entries: string[];
}

export const resumeData: ResumeYear[] = [
  {
    year: "2026",
    entries: [
      "Moraga Art Gallery",
      "Epperson Gallery",
      "Valley Art Gallery",
      'Donation to "Dart for Art" Lyme Disease',
      "Jor Fine Art Gallery",
    ],
  },
  {
    year: "2025",
    entries: [
      "Valley Art Gallery",
      "Featured Artist at JOR Fine Art Gallery",
      "Manhattan Arts International",
      "Sebastopol Center for the Arts",
      "Moraga Art Gallery",
      "Main Street Art Gallery",
      "Gray Loft Gallery — 6 Person Show",
      "GAP — Dislocation Show",
      "Jen Tough Gallery",
    ],
  },
  {
    year: "2024",
    entries: [
      "Valley Art Gallery",
      "Featured Artist at JOR Fine Art Gallery",
      "Manhattan Arts International",
      "Brilliance, Danville Village Art Gallery",
      "Gender Gap through GAP, Dougherty Center, San Ramon",
    ],
  },
  {
    year: "2023",
    entries: [
      "Honorable Mention, The Sheridan Awards for Art, Juror Holly Wong",
      'Manhattan Arts International "Healing Power of Elements — Earth, Water, Air and Fire"',
      'Voss Gallery "Refuses of the Bay" Group Exhibition',
      '"New Mexico Home" on Artsy through Jen Tough Gallery',
      'Manhattan Arts International "The Healing Power of Color 2023"',
      'Donation to Crocker Art Museum "Big Names, Small Art 2023"',
      "Donation to ALS Heart_Lives_Florals at San Francisco Women Artists Gallery",
      "Donation to Strandlwood Elementary School Auction Pleasant Hill, CA",
      "Three person show at Uptown Fine Arts Gallery in Oakland, CA",
      "Two person show at Orinda Books, Orinda, CA",
      '"Lush", Lamorinda Coffee and Tea, Lafayette, California',
    ],
  },
  {
    year: "2022",
    entries: [
      'Donating a percentage of painting sales to Melissa Stevens "Hope Lives" to raise money for ALS',
      'Jen Tough Artist Alliance Show on Artsy "Lush", Juror Jen Tough',
      'Marin Society of Artists Show "Fresh", Juror Jen Tough',
      'Jen Tough Artist Alliance Show on Artsy "Light and Airy", Juror Jennifer Perlmutter',
      'Jen Tough Artist Alliance Show on Artsy "Green", Juror Emily Wilker',
      "Shoh Gallery, Donated Painting with proceeds going to Ukraine",
      'Jen Tough Artist Alliance Show, "Land, Sea, Sky", Juror Emily Wilker',
      'Manhattan Arts International, "Her Story", Juror Renee Phillips',
      'Marin Society of Artists, "Artist\'s Vision 2022 International Show", Juror Jen Tough',
      'Lamorinda Artist Alliance at Main Street Gallery, "Born to be Wild Show", Juror Ruth Stanton',
      'Jen Tough Artist Alliance Show on Artsy, "Dreams", Juror Jen Tough',
      'Jen Tough Artist Alliance Show on Artsy, "Choices", Juror Jen Tough',
      'Manhattan Arts International Show, "Resilience", Juror Renee Phillips',
      'Arts Benicia Show, "Gems V", Juror Susan Aulik',
      "Orinda Books, Two-Person Show for the Month of May",
      'Soroptimist International of Truckee Donner, "Best of Women Auction" donation',
      "Orinda Living Magazine March 2022, Cover and featured story",
      "Valley Art Gallery Juried Show (Spring & Fall)",
      "Gallerium Valentine Juried Show, Tickled Pink 5",
      "Artful Galleries, February Featured Artist, Tickled Pink Series, Debra Smith Rourke",
      'New Mexico, Manhattan Arts International "HerStory" 2022, Juror Renee Phillips',
      '"Artists of the Bay Area" published by Jen Tough Gallery',
      'Tickled Pink 4, Marin Society of Artists, Artist\'s Vision 2022 International Show, Juror Jen Tough',
    ],
  },
  {
    year: "2021",
    entries: [
      'Jen Tough Artists Alliance "Sweet and Sour Exhibition", Juror Andrew Ordonez',
      'Manhattan Arts Gallery International "Mixed Media" Exhibition, Juror Renee Phillips',
      'Jen Tough Artist Alliance "Water" Exhibition, Juror Jen Tough',
      'Jennifer Perlmutter Gallery "Fling" Art Sale and Painting Demonstrations',
      "Gualala Art Gallery, Art in the Redwoods Online Show",
      "Valley Art Gallery Juried Show (Spring & Fall)",
      "Solo Show and Featured Artist at Valley Art Gallery, Walnut Creek, CA (June 15 — July 24, 2021)",
      'Jen Tough Artist Alliance Show "Imaginary Travels" Juror John Yoyogi Fortes',
      'Guest on Jen Tough\'s Podcast "Tough on Art", Topic: Rejection in the Art World',
      "Terrain Exhibition, Jen Tough Gallery Artist Alliance, Juror Carol Dalton",
      "6th Annual Landscapes Juried Art Exhibition",
      'Manhattan Arts International, "Her Story" Online Exhibition, Juror Renee Phillips',
    ],
  },
];

export const artistStatement = `My process is an expressive art of being in the moment and connecting to it. I frequently paint with nature references and little homes. Trees and flowers are calming. Rocks remind me that life can be rough, smooth and awkward. The ocean, in particular, fuels my perspective. It's beautiful, expansive and meditative. I often include houses because to me they represent heart and family. I feel grateful for the opportunity to be in my studio to play, create and grow.`;

export const artistBio = [
  "Dee Tivenan was born in Detroit in 1950 and grew up in a Chicago suburb. She was exposed to art at an early age by her artistic mother and many field trips to the Chicago Art Institute.",
  "Dee received her Bachelor's and Master's Degrees in Special Education. She moved to San Francisco in 1978 to complete her Doctorate in Educational Psychology and Counseling and received her state license in Marriage, Family Therapy. She has been in private practice for close to 40 years.",
  "Dee dabbled in ceramics and watercolors intermittently. When her father died in 2010 she began intensively studying painting to help heal her grief. Now painting is a part of her daily life. Dee has discovered how similar painting is to psychotherapy. They both require creativity, patience, play, and awareness of feelings.",
  "Dee is an abstract expressionist artist. She creates meaning from bold colors, lines and shapes. Her mixed media approach often uses acrylics, inks, graphite, yupo paper and collage as a form of personal expression.",
  "Dee Tivenan is an Associate Member of Manhattan Arts International, a member of Valley Art Gallery and Artful Galleries. She also is part of Jen Tough's Artist Alliance and writes a blog called \"Head Talk\" to support other artists.",
];

export const testimonials = [
  {
    quote: "Artist Dee Tivenan's playful, yet emotionally resonant abstracts attracted collectors and conversation in our gallery for years. She was always supportive to our program, events, and fellow artists as well as making friends and encouraging others.",
    attribution: "Jennifer Perlmutter, Artist and Gallerist",
  },
  {
    quote: "Dee Tivenan evokes human emotion and captures the diverse atmospheric qualities in nature.",
    attribution: "Renee Phillips, Founder of Manhattan Arts International",
  },
];
