import { BlogArticle } from '../types';

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'b1',
    title: 'The Guide to Choosing Wood: Sheesham vs. Oak vs. Walnut in Pakistan',
    slug: 'guide-choosing-wood-sheesham-oak-walnut',
    summary: 'Understanding the differences, durability, and aesthetics of Pakistan\'s premium woods for building custom furniture that lasts generations.',
    content: [
      'When investing in premium luxury furniture, the choice of timber is the single most critical decision you will make. In Pakistan, three primary timbers dominate the high-end market: Sheesham (Indian Rosewood/Tali), White Oak, and Walnut. Each wood brings a distinct density, grain pattern, and environmental tolerance.',
      'Sheesham, locally known as Tali, is the king of heritage furniture. It is celebrated for its incredible hardness, natural resistance to termites, and striking dark grain lines that form gorgeous organic patterns. It is heavy, extremely dense, and is the absolute best choice for classical hand-carved dining sets, heavy bedroom crowns, and structural entrance doors. It responds wonderfully to deep walnut or golden varnishes.',
      'White Oak, imported from premium European or American sources, offers a lighter, contemporary Swiss-modern aesthetic. It features long, straight grain lines and is highly resistant to moisture. Oak is ideal for contemporary minimalist living room frames and executive desks where a clean, textured grain structure is desired without the dark contrast of Sheesham.',
      'Walnut stands as the ultimate luxury medium. Highly expensive and possessing a rich chocolatey-brown color, walnut has an exceptionally fine texture and high shock resistance. It is favored for luxury boardroom tables and high-end console credenzas. In hot climates like Gujranwala, we recommend using seasoned, kiln-dried variants to prevent expansion or contraction during high-humidity monsoon cycles.'
    ],
    readTime: '6 min read',
    author: 'Khawaja Muhammad Ali',
    date: 'June 18, 2026',
    category: 'Furniture Buying Guides',
    image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=800&q=80',
    tags: ['Solid Wood', 'Sheesham', 'Luxury Interiors', 'Wood Guide']
  },
  {
    id: 'b2',
    title: 'Essential Maintenance: Caring for Handcrafted Solid Wood Furniture',
    slug: 'essential-maintenance-caring-solid-wood-furniture',
    summary: 'A definitive guide to cleaning, waxing, and protecting your expensive wooden investment from heat, dampness, and wood borers.',
    content: [
      'Premium solid wood furniture is not just functional utility; it is a family heirloom that gains value and character over decades. However, unlike plastic or cheap laminate, natural solid timber is a breathing material. To preserve its original luster and prevent cracking, a simple yet regular care routine is essential.',
      'Humidity is wood\'s greatest friend and enemy. During Gujranwala\'s intense summer monsoon season, air moisture spikes, causing wood to absorb water. In contrast, during dry winters, wood shrinks. To counter this, avoid placing solid wood tables or wardrobes directly against exterior walls or immediately adjacent to air conditioners or heaters. Leave a 2-inch gap for ventilation.',
      'Cleaning should always be gentle. Dust your furniture daily with a soft, completely dry microfiber cloth. Avoid commercial aerosol cleaners that contain silicone or ammonia; these chemicals build up a sticky film over time that dulls the finish. Instead, use organic beeswax or professional wood oil once every six months to nourish the wood fibers.',
      'Always use heat mats, coasters, and tablecloths under hot utensils or condensation-heavy glasses. If a white ring appears from a wet spill, gently rub the spot with a dry wool cloth mixed with a drop of linseed oil or pure olive oil. Taking care of your furniture ensures it remains a dazzling focal point of your home.'
    ],
    readTime: '5 min read',
    author: 'Engr. Bilal Ahmad',
    date: 'May 24, 2026',
    category: 'Furniture Maintenance',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    tags: ['Wood Care', 'Beeswax Polish', 'Monsoon Protection', 'Heirlooms']
  },
  {
    id: 'b3',
    title: 'Modern Living Room Trends: The Elegance of Organic Minimalism',
    slug: 'modern-living-room-trends-organic-minimalism',
    summary: 'Explore how combining rich velvet seating, marble-top brass consoles, and solid oak accent tables creates a stunning, balanced modern lounge.',
    content: [
      'The modern living room is no longer just a formal drawing room kept locked for special guests. Today, it is the heartbeat of the home—a sanctuary for relaxation, a hub for family entertainment, and a showcase of personal style. The leading trend of 2026 is "Organic Minimalism," a styling paradigm that balances clean geometric lines with warm organic textures.',
      'To achieve this look, start with a statement seating anchor like the Royal Chesterfield Velvet Sofa Set. The deep emerald green or classic charcoal grey velvet acts as a rich, luxurious focal point. Surround it with lighter, structural accents. Pair it with a marble-top console or a floating American Walnut TV console.',
      'Incorporate warm metallic details to lift the space. Brushed brass or electroplated gold on console legs, drawer handles, and light fixtures adds a delicate sparkle without being gaudy or overwhelming. The contrast between solid wood, cold marble, plush velvet, and gleaming gold creates a multi-layered sensory experience.',
      'Finally, introduce soft, warm lighting. Ditch harsh, sterile overhead spotlights. Use warm-toned LED backlight panels behind the television console, and place hand-crafted wood floor lamps in dark corners to wash the walls with a warm, inviting glow that makes guests immediately feel at ease.'
    ],
    readTime: '4 min read',
    author: 'Ayesha Fatima (Interior Architect)',
    date: 'April 10, 2026',
    category: 'Interior Design Trends',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    tags: ['Modern Lounge', 'Velvet Sofas', 'Organic Luxury', 'Lighting Design']
  }
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find(a => a.slug === slug);
}
