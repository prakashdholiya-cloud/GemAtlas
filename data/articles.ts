import { Article } from '@/types';

type GemInput = {
  slug: string;
  title: string;
  category: string;
  family: string;
  color: string;
  hardness: string;
  sources: string;
  symbolism: string;
  jewelryUse: string;
  marketNote: string;
  originStory: string;
};

const coreSources = [
  { label: 'GIA Gem Encyclopedia', href: 'https://www.gia.edu/gem-encyclopedia' },
  { label: 'International Gem Society', href: 'https://www.gemsociety.org/' },
  { label: 'Smithsonian National Gem Collection', href: 'https://naturalhistory.si.edu/explore/collections/geogallery' },
];

const gems: GemInput[] = [
  { slug:'natural-diamond', title:'Natural Diamond', category:'Precious Gemstone', family:'Carbon crystal', color:'Colorless to fancy colors', hardness:'10 Mohs', sources:'Botswana, Canada, South Africa, Russia, Australia', symbolism:'endurance, commitment, purity', jewelryUse:'engagement rings, bridal jewelry, high jewelry, tennis bracelets, studs', marketNote:'valued by cut, color, clarity, carat weight, natural origin, rarity, and certification.', originStory:'Natural diamond forms deep in the Earth under extreme pressure and temperature, then reaches the surface through volcanic kimberlite or lamproite pipes.'},
  { slug:'lab-grown-diamond', title:'Lab-Grown Diamond', category:'Lab-Created Gemstone', family:'Carbon crystal', color:'Colorless to fancy colors', hardness:'10 Mohs', sources:'CVD and HPHT laboratories worldwide', symbolism:'modern transparency, technology, accessible luxury', jewelryUse:'bridal jewelry, fashion jewelry, larger-carat engagement rings', marketNote:'chemically diamond, but valued differently because supply is technology-driven rather than geological.', originStory:'Lab-grown diamonds are created by HPHT or CVD processes that reproduce diamond-forming conditions in a controlled environment.'},
  { slug:'ruby', title:'Ruby', category:'Precious Gemstone', family:'Corundum', color:'Red to purplish red', hardness:'9 Mohs', sources:'Myanmar, Mozambique, Sri Lanka, Thailand, Vietnam', symbolism:'passion, protection, royal power, life force', jewelryUse:'rings, pendants, earrings, high jewelry, anniversary pieces', marketNote:'top untreated rubies, especially fine Burmese material, can command extraordinary prices per carat.', originStory:'Ruby is red corundum colored by chromium; the finest stones often combine saturated red color, fluorescence, and minimal treatment.'},
  { slug:'sapphire', title:'Sapphire', category:'Precious Gemstone', family:'Corundum', color:'Blue plus pink, yellow, green, purple, white and padparadscha', hardness:'9 Mohs', sources:'Sri Lanka, Kashmir, Myanmar, Madagascar, Australia, Montana', symbolism:'wisdom, loyalty, heaven, discipline', jewelryUse:'engagement rings, earrings, royal jewelry, watches', marketNote:'Kashmir, Burmese, Sri Lankan, and untreated sapphires often carry origin and treatment premiums.', originStory:'Sapphire is corundum in every color except red; trace elements such as iron and titanium produce the classic blue.'},
  { slug:'emerald', title:'Emerald', category:'Precious Gemstone', family:'Beryl', color:'Green to bluish green', hardness:'7.5–8 Mohs', sources:'Colombia, Zambia, Brazil, Ethiopia', symbolism:'rebirth, fertility, prosperity, wisdom', jewelryUse:'rings with protective settings, necklaces, earrings, luxury suites', marketNote:'fine Colombian and Zambian emeralds are valued for color, transparency, and treatment level.', originStory:'Emerald is green beryl colored primarily by chromium and vanadium, often forming with natural inclusions known as jardin.'},
  { slug:'pearl', title:'Pearl', category:'Organic Gemstone', family:'Organic calcium carbonate', color:'White, cream, pink, silver, gold, black, multicolor', hardness:'2.5–4.5 Mohs', sources:'Japan, China, Australia, French Polynesia, Indonesia, Philippines', symbolism:'purity, elegance, femininity, wisdom', jewelryUse:'strands, studs, bridal jewelry, classic necklaces, contemporary fashion', marketNote:'valued by luster, surface, shape, size, nacre quality, origin, and whether natural or cultured.', originStory:'Pearls form inside mollusks as layers of nacre build around an irritant or nucleus, creating a gem of biological rather than mineral origin.'},
  { slug:'alexandrite', title:'Alexandrite', category:'Rare Gemstone', family:'Chrysoberyl', color:'Green in daylight, red-purple in incandescent light', hardness:'8.5 Mohs', sources:'Russia, Sri Lanka, Brazil, Tanzania, India', symbolism:'transformation, luck, duality', jewelryUse:'collector rings, pendants, rare fine jewelry', marketNote:'strong color change and fine clarity make alexandrite one of the most valuable collector gems.', originStory:'Alexandrite is a color-change chrysoberyl famous for appearing green by day and red by lamplight.'},
  { slug:'amethyst', title:'Amethyst', category:'Semi-Precious Gemstone', family:'Quartz', color:'Purple to violet', hardness:'7 Mohs', sources:'Brazil, Uruguay, Zambia, Russia, India', symbolism:'clarity, sobriety, spiritual calm', jewelryUse:'rings, pendants, earrings, beads, affordable fine jewelry', marketNote:'widely available, with value driven by saturated purple color and attractive cutting.', originStory:'Amethyst is purple quartz colored by irradiation and trace iron, historically treasured before large deposits made it more accessible.'},
  { slug:'aquamarine', title:'Aquamarine', category:'Semi-Precious Gemstone', family:'Beryl', color:'Pale blue to blue-green', hardness:'7.5–8 Mohs', sources:'Brazil, Pakistan, Nigeria, Madagascar, Mozambique', symbolism:'sea, calm, safe travel, clarity', jewelryUse:'cocktail rings, pendants, earrings, bridal alternatives', marketNote:'valued for clean transparency, larger sizes, and stronger blue color.', originStory:'Aquamarine is blue beryl, named for seawater and loved for its cool clarity.'},
  { slug:'topaz', title:'Topaz', category:'Semi-Precious Gemstone', family:'Topaz mineral', color:'Colorless, blue, yellow, orange, pink, imperial', hardness:'8 Mohs', sources:'Brazil, Pakistan, Sri Lanka, Nigeria, Russia', symbolism:'strength, abundance, warmth', jewelryUse:'rings, pendants, earrings, statement stones', marketNote:'imperial topaz and natural pink-orange colors are significantly rarer than treated blue topaz.', originStory:'Topaz forms in fluorine-rich environments and occurs in many colors, though many blue stones are treated.'},
  { slug:'citrine', title:'Citrine', category:'Semi-Precious Gemstone', family:'Quartz', color:'Yellow to orange-brown', hardness:'7 Mohs', sources:'Brazil, Bolivia, Madagascar, Spain', symbolism:'prosperity, sunlight, confidence', jewelryUse:'rings, pendants, earrings, everyday jewelry', marketNote:'affordable and popular, with value tied to attractive warm color and clean appearance.', originStory:'Citrine is yellow-to-orange quartz; much commercial citrine is produced by heating amethyst or smoky quartz.'},
  { slug:'peridot', title:'Peridot', category:'Semi-Precious Gemstone', family:'Olivine', color:'Yellow-green to olive green', hardness:'6.5–7 Mohs', sources:'Pakistan, Myanmar, Arizona, China, Egypt', symbolism:'renewal, protection, light', jewelryUse:'rings, pendants, earrings, summer jewelry', marketNote:'larger clean stones with vivid green color are more valuable.', originStory:'Peridot is gem-quality olivine, sometimes found in volcanic rocks and even meteorites.'},
  { slug:'garnet', title:'Garnet', category:'Semi-Precious Gemstone', family:'Garnet group', color:'Red, orange, green, purple, pink, brown', hardness:'6.5–7.5 Mohs', sources:'India, Madagascar, Tanzania, Mozambique, Sri Lanka, USA', symbolism:'protection, friendship, vitality', jewelryUse:'rings, earrings, pendants, antique jewelry', marketNote:'garnet ranges from affordable red varieties to valuable demantoid, tsavorite, and spessartine.', originStory:'Garnet is a mineral group rather than a single gem, with varieties prized for vivid color and brilliance.'},
  { slug:'tourmaline', title:'Tourmaline', category:'Semi-Precious Gemstone', family:'Tourmaline group', color:'Nearly every color; pink, green, watermelon, Paraíba blue-green', hardness:'7–7.5 Mohs', sources:'Brazil, Nigeria, Mozambique, Afghanistan, Madagascar, USA', symbolism:'creativity, emotional balance, individuality', jewelryUse:'designer jewelry, rings, pendants, collector stones', marketNote:'Paraíba-type copper-bearing tourmaline can command extremely high prices.', originStory:'Tourmaline is a complex borosilicate group famous for remarkable color range and zoning.'},
  { slug:'spinel', title:'Spinel', category:'Semi-Precious Gemstone', family:'Spinel mineral', color:'Red, pink, blue, lavender, gray, black', hardness:'8 Mohs', sources:'Myanmar, Sri Lanka, Tanzania, Vietnam, Tajikistan', symbolism:'renewal, hidden royalty, resilience', jewelryUse:'rings, high jewelry, collector gems', marketNote:'fine red and cobalt-blue spinels are increasingly prized and historically underappreciated.', originStory:'Spinel was long mistaken for ruby in royal collections, but today is valued as an important gem in its own right.'},
  { slug:'tanzanite', title:'Tanzanite', category:'Semi-Precious Gemstone', family:'Zoisite', color:'Blue to violet-blue', hardness:'6–7 Mohs', sources:'Tanzania only, near Merelani', symbolism:'modern rarity, transformation, sophistication', jewelryUse:'pendants, earrings, dress rings with care', marketNote:'single-source rarity supports interest, though softness requires thoughtful jewelry design.', originStory:'Tanzanite is blue-violet zoisite found commercially only in a small area of northern Tanzania.'},
  { slug:'zircon', title:'Zircon', category:'Semi-Precious Gemstone', family:'Zirconium silicate', color:'Blue, colorless, brown, yellow, green, red', hardness:'6–7.5 Mohs', sources:'Cambodia, Sri Lanka, Myanmar, Australia, Tanzania', symbolism:'wisdom, prosperity, brilliance', jewelryUse:'rings, pendants, antique jewelry', marketNote:'natural zircon is valued for brilliance and dispersion, but should not be confused with cubic zirconia.', originStory:'Zircon is a natural gemstone with high brilliance and some of Earth’s oldest mineral crystals.'},
  { slug:'opal', title:'Opal', category:'Semi-Precious Gemstone', family:'Hydrated silica', color:'Play-of-color in many body colors', hardness:'5–6.5 Mohs', sources:'Australia, Ethiopia, Mexico, Brazil', symbolism:'imagination, emotion, mystery', jewelryUse:'pendants, earrings, protective rings, artistic jewelry', marketNote:'black opal, fine crystal opal, and strong play-of-color command premiums.', originStory:'Opal forms from silica-rich water and is treasured for play-of-color caused by microscopic silica spheres.'},
  { slug:'moonstone', title:'Moonstone', category:'Semi-Precious Gemstone', family:'Feldspar', color:'White, peach, gray, rainbow sheen', hardness:'6–6.5 Mohs', sources:'Sri Lanka, India, Madagascar, Tanzania', symbolism:'intuition, moonlight, feminine energy', jewelryUse:'bohemian jewelry, rings, pendants, earrings', marketNote:'value increases with strong blue adularescence and clean body.', originStory:'Moonstone is feldspar known for adularescence, a floating glow that appears to move across the stone.'},
  { slug:'lapis-lazuli', title:'Lapis Lazuli', category:'Semi-Precious Gemstone', family:'Rock composed mainly of lazurite', color:'Deep blue with gold pyrite flecks', hardness:'5–6 Mohs', sources:'Afghanistan, Chile, Russia, Pakistan', symbolism:'truth, royalty, sacred blue, wisdom', jewelryUse:'beads, cabochons, inlay, signet-style jewelry', marketNote:'deep even blue with minimal calcite and attractive pyrite is most desirable.', originStory:'Lapis lazuli has been mined for millennia and was ground into ultramarine pigment for sacred and royal art.'},
  { slug:'turquoise', title:'Turquoise', category:'Semi-Precious Gemstone', family:'Hydrated copper aluminum phosphate', color:'Blue to green-blue', hardness:'5–6 Mohs', sources:'Iran, USA, China, Egypt, Mexico', symbolism:'protection, sky, water, travel', jewelryUse:'southwestern jewelry, beads, cabochons, inlay', marketNote:'natural untreated turquoise from historic mines can command strong premiums.', originStory:'Turquoise is among humanity’s oldest gemstones, revered from ancient Egypt to Native American cultures.'},
  { slug:'jade', title:'Jade', category:'Semi-Precious Gemstone', family:'Jadeite and nephrite', color:'Green, lavender, white, yellow, black, red', hardness:'6–7 Mohs', sources:'Myanmar, China, Guatemala, Canada, Russia', symbolism:'virtue, harmony, longevity, status', jewelryUse:'bangles, carvings, pendants, beads', marketNote:'imperial jadeite is among the most valuable gems in the world.', originStory:'Jade refers to two different minerals, jadeite and nephrite, both prized for toughness and cultural meaning.'},
  { slug:'quartz', title:'Rock Crystal Quartz', category:'Semi-Precious Gemstone', family:'Quartz', color:'Colorless', hardness:'7 Mohs', sources:'Brazil, Madagascar, Arkansas, Alps, worldwide', symbolism:'clarity, amplification, purity', jewelryUse:'faceted stones, beads, carvings, spiritual jewelry', marketNote:'generally affordable, with value tied to clarity, size, and artistry.', originStory:'Rock crystal is colorless quartz, historically used for carving, lenses, ornaments, and ritual objects.'},
  { slug:'onyx', title:'Onyx', category:'Semi-Precious Gemstone', family:'Chalcedony quartz', color:'Black, banded black and white', hardness:'6.5–7 Mohs', sources:'Brazil, India, Uruguay, Madagascar', symbolism:'discipline, grounding, elegance', jewelryUse:'men’s rings, signets, beads, inlay, Art Deco jewelry', marketNote:'widely used and affordable, with design value often exceeding material value.', originStory:'Onyx is a banded chalcedony, most recognized in jewelry as polished black onyx.'},
  { slug:'agate', title:'Agate', category:'Semi-Precious Gemstone', family:'Chalcedony quartz', color:'Banded multicolor', hardness:'6.5–7 Mohs', sources:'Brazil, Uruguay, India, Mexico, USA', symbolism:'stability, protection, earth energy', jewelryUse:'beads, cabochons, carvings, decorative objects', marketNote:'valued for pattern, natural beauty, and collectible locality.', originStory:'Agate forms in cavities where silica layers build into bands and patterns.'},
  { slug:'carnelian', title:'Carnelian', category:'Semi-Precious Gemstone', family:'Chalcedony quartz', color:'Orange to reddish brown', hardness:'6.5–7 Mohs', sources:'India, Brazil, Uruguay, Egypt', symbolism:'courage, vitality, creativity', jewelryUse:'signet rings, beads, cabochons, antique jewelry', marketNote:'fine saturated orange-red color and clean translucency are desirable.', originStory:'Carnelian has been carved into seals, amulets, and ornaments since antiquity.'},
  { slug:'heliodor', title:'Heliodor', category:'Semi-Precious Gemstone', family:'Beryl', color:'Yellow to greenish yellow', hardness:'7.5–8 Mohs', sources:'Brazil, Ukraine, Namibia, Madagascar', symbolism:'sunlight, confidence, clarity', jewelryUse:'rings, pendants, collector gems', marketNote:'clean stones with strong golden color are most attractive.', originStory:'Heliodor is yellow beryl, named from Greek roots meaning gift of the sun.'},
  { slug:'morganite', title:'Morganite', category:'Semi-Precious Gemstone', family:'Beryl', color:'Pink to peach-pink', hardness:'7.5–8 Mohs', sources:'Brazil, Madagascar, Mozambique, Afghanistan, USA', symbolism:'romance, tenderness, compassion', jewelryUse:'engagement rings, pendants, feminine fine jewelry', marketNote:'popular in bridal jewelry, especially in soft pink and peach tones.', originStory:'Morganite is pink beryl, named after financier and gem collector J. P. Morgan.'},
  { slug:'kunzite', title:'Kunzite', category:'Semi-Precious Gemstone', family:'Spodumene', color:'Pink to violet-pink', hardness:'6.5–7 Mohs', sources:'Afghanistan, Pakistan, Brazil, Madagascar, USA', symbolism:'love, calm, emotional openness', jewelryUse:'pendants, earrings, protected rings', marketNote:'large stones can be affordable, but color may fade with prolonged light exposure.', originStory:'Kunzite is the pink variety of spodumene, known for delicate color and strong pleochroism.'},
  { slug:'iolite', title:'Iolite', category:'Semi-Precious Gemstone', family:'Cordierite', color:'Violet-blue to blue-gray', hardness:'7–7.5 Mohs', sources:'India, Sri Lanka, Madagascar, Tanzania, Brazil', symbolism:'navigation, vision, inner direction', jewelryUse:'rings, pendants, earrings, affordable blue jewelry', marketNote:'valued for attractive violet-blue color but less expensive than sapphire.', originStory:'Iolite is cordierite, famous for strong pleochroism that shifts color by viewing direction.'},
  { slug:'coral', title:'Coral', category:'Organic Gemstone', family:'Organic calcium carbonate', color:'Red, pink, orange, white', hardness:'3–4 Mohs', sources:'Mediterranean, Japan, Taiwan, Pacific regions', symbolism:'protection, vitality, ocean heritage', jewelryUse:'beads, cabochons, antique jewelry, carvings', marketNote:'trade is highly regulated in many contexts due to conservation concerns.', originStory:'Precious coral is an organic gem formed by marine organisms and used in jewelry for thousands of years.'},
  { slug:'amber', title:'Amber', category:'Organic Gemstone', family:'Fossilized tree resin', color:'Yellow, orange, brown, red, greenish', hardness:'2–2.5 Mohs', sources:'Baltic region, Dominican Republic, Mexico, Myanmar', symbolism:'memory, preservation, warmth', jewelryUse:'beads, pendants, carvings, collectible inclusions', marketNote:'clarity, color, age, and insect or plant inclusions can affect value.', originStory:'Amber is fossilized resin that preserves ancient forests and sometimes prehistoric inclusions.'},
  { slug:'jet', title:'Jet', category:'Organic Gemstone', family:'Fossilized wood/lignite', color:'Black', hardness:'2.5–4 Mohs', sources:'Whitby England, Spain, Turkey, USA', symbolism:'mourning, protection, Victorian elegance', jewelryUse:'mourning jewelry, beads, carvings, antique pieces', marketNote:'best known for Victorian mourning jewelry and lightweight black ornamentation.', originStory:'Jet is a fossilized organic material carved and polished into deep black jewelry.'},
  { slug:'lab-grown-ruby', title:'Lab-Grown Ruby', category:'Lab-Created Gemstone', family:'Synthetic corundum', color:'Red', hardness:'9 Mohs', sources:'Flame fusion, flux, hydrothermal laboratories', symbolism:'technology, accessible color, innovation', jewelryUse:'fashion jewelry, watches, industrial bearings, lasers', marketNote:'lower value than natural ruby but important in jewelry and technology.', originStory:'Synthetic ruby was one of the earliest commercially successful lab-grown gems and became essential to lasers and watchmaking.'},
  { slug:'lab-grown-sapphire', title:'Lab-Grown Sapphire', category:'Lab-Created Gemstone', family:'Synthetic corundum', color:'Blue plus many colors and colorless', hardness:'9 Mohs', sources:'Global synthetic crystal production', symbolism:'precision, durability, modern design', jewelryUse:'jewelry, watch crystals, optical windows, electronics', marketNote:'valued mostly by manufacturing quality and application rather than rarity.', originStory:'Synthetic sapphire is grown for both jewelry and high-performance industrial uses.'},
  { slug:'lab-grown-emerald', title:'Lab-Grown Emerald', category:'Lab-Created Gemstone', family:'Synthetic beryl', color:'Green', hardness:'7.5–8 Mohs', sources:'Hydrothermal and flux laboratories', symbolism:'modern green luxury, technology', jewelryUse:'rings, pendants, earrings, accessible emerald-style jewelry', marketNote:'more affordable than natural emerald, but should be clearly disclosed.', originStory:'Lab-grown emerald replicates emerald chemistry and color in controlled growth conditions.'},
  { slug:'cubic-zirconia', title:'Cubic Zirconia', category:'Simulant', family:'Synthetic zirconium dioxide', color:'Usually colorless, many colors possible', hardness:'8–8.5 Mohs', sources:'Manufactured globally', symbolism:'diamond look, affordability', jewelryUse:'fashion jewelry, travel jewelry, low-cost alternatives', marketNote:'a diamond simulant, not diamond; inexpensive and widely available.', originStory:'Cubic zirconia is a man-made diamond simulant recognized for high brilliance and low cost.'},
  { slug:'moissanite', title:'Moissanite', category:'Lab-Created / Simulant', family:'Silicon carbide', color:'Colorless to near-colorless and fancy colors', hardness:'9.25 Mohs', sources:'Primarily lab-created', symbolism:'brilliance, durability, alternative bridal', jewelryUse:'engagement rings, earrings, bracelets, bridal alternatives', marketNote:'valued as a durable diamond alternative with strong fire, but distinct optics.', originStory:'Natural moissanite is extremely rare; commercial moissanite is lab-created silicon carbide.'},
];

function makeArticle(g: GemInput): Article {
  return {
    slug: g.slug,
    title: g.title,
    dek: `${g.title} is a ${g.category.toLowerCase()} with a story that spans geology, human culture, jewelry design, and modern trade. This GemAtlas guide explains what it is, where it comes from, how it is used, and what makes it valuable.`,
    category: g.category,
    updated: 'May 2026',
    readingTime: '8–12 min read',
    heroImage: {
      title: `${g.title} hero image`,
      caption: `Use a licensed close-up image, macro crystal photo, polished gemstone image, or jewelry image for ${g.title}.`,
    },
    facts: [
      { label: 'Gem Family', value: g.family },
      { label: 'Color Range', value: g.color },
      { label: 'Hardness', value: g.hardness },
      { label: 'Key Sources', value: g.sources },
      { label: 'Symbolism', value: g.symbolism },
    ],
    sections: [
      {
        id:'overview',
        title:'Overview',
        paragraphs:[
          `${g.title} occupies an important place in the language of gemstones because it combines physical beauty with cultural meaning. For buyers, collectors, designers, and historians, it is best understood not only as a material but as an object shaped by geology, trade, fashion, and human belief.`,
          `${g.originStory} Its identity in the jewelry world is also shaped by durability, color, availability, and the way it has been interpreted by different cultures over time.`,
        ],
        image:{ title:`${g.title} visual overview`, caption:`Recommended image: polished ${g.title} beside rough material or a finished jewelry example.` }
      },
      {
        id:'geology',
        title:'Geological Formation and Properties',
        paragraphs:[
          `The geological identity of ${g.title} begins with its gem family: ${g.family}. Its appearance is defined by color, transparency, crystal structure, inclusions, and the conditions under which it formed or was created.`,
          `Important gemological properties include color range (${g.color}), hardness (${g.hardness}), durability, typical inclusions, and response to cutting and polishing. These properties determine whether a stone is best suited for everyday rings, protected settings, beads, carvings, or collector display.`,
        ],
        bullets:[`Family: ${g.family}`, `Color: ${g.color}`, `Hardness: ${g.hardness}`, `Common sources: ${g.sources}`],
        image:{ title:`Formation and structure`, caption:`Recommended visual: geology diagram, crystal habit, or close-up inclusion photography.` }
      },
      {
        id:'history',
        title:'Historical Relationship with Humanity',
        paragraphs:[
          `Human beings have valued gemstones for reasons beyond decoration. ${g.title} has been used to express status, protection, love, wealth, spirituality, and identity. In many societies, gemstones became portable stores of value and symbols of rank.`,
          `The symbolism most often associated with ${g.title} includes ${g.symbolism}. These meanings evolved through trade routes, royal patronage, religious practice, and changing fashion. Even when scientific understanding changed, cultural attachment to gemstones remained powerful.`,
        ]
      },
      {
        id:'mining-sources',
        title:'Sources, Mining, and Supply',
        paragraphs:[
          `Major sources associated with ${g.title} include ${g.sources}. Source matters because origin can affect color, crystal size, inclusions, market reputation, legal considerations, and collector demand.`,
          `Past mining was often manual, seasonal, and controlled by local rulers, merchants, or colonial powers. Modern mining can range from artisanal digging to large mechanized operations with sorting plants, environmental controls, and traceability programs.`,
          `For GemAtlas, source should be presented carefully: origin can support value, but quality still depends on the individual stone. A fine stone from a newer source may outperform a weaker stone from a famous source.`
        ],
        image:{ title:`Mining and origin map`, caption:`Recommended visual: map with major source countries and a responsible-sourcing note.` }
      },
      {
        id:'jewelry-use',
        title:'Use in Jewelry',
        paragraphs:[
          `${g.title} is commonly used in ${g.jewelryUse}. Designers choose it based on color, hardness, size availability, cutting style, and how the stone performs under everyday wear.`,
          `For jewelry buyers, the most important practical questions are durability, treatment disclosure, setting protection, cleaning method, and whether the stone is suitable for rings or better reserved for pendants and earrings.`,
        ],
        image:{ title:`Jewelry application`, caption:`Recommended visual: ring, pendant, earring, or suite using ${g.title}.` }
      },
      {
        id:'value',
        title:'Quality, Value, and Market Position',
        paragraphs:[
          `The market for ${g.title} is shaped by color, clarity, size, cut, origin, treatment status, rarity, and documentation. ${g.marketNote}`, 
          `Certification and disclosure matter. Buyers should understand whether a gem is natural, treated, cultured, lab-grown, or a simulant. In modern luxury, trust is created through transparency as much as beauty.`,
        ],
        bullets:['Color and visual appeal','Clarity and transparency','Cut quality and proportions','Origin and source reputation','Treatment or growth disclosure','Certification and traceability']
      },
      {
        id:'culture',
        title:'Religious, Cultural, and Symbolic Meaning',
        paragraphs:[
          `The cultural power of ${g.title} comes from the way humans attach meaning to color, rarity, and permanence. Across civilizations, gemstones have served as talismans, offerings, royal insignia, mourning objects, bridal symbols, and expressions of personal identity.`,
          `For ${g.title}, the strongest symbolic associations are ${g.symbolism}. These meanings should be treated as cultural history rather than scientific claims, but they remain important to jewelry storytelling and consumer emotion.`
        ]
      },
      {
        id:'care',
        title:'Care, Cleaning, and Practical Buying Guidance',
        paragraphs:[
          `Care depends on hardness, toughness, treatments, porosity, and setting style. A stone with high hardness may still require caution if it has fractures, filling, dye, oil, coating, or sensitivity to heat and chemicals.`,
          `A practical buyer should ask: What is the gem? Is it natural or lab-created? Has it been treated? Is the treatment stable? Is the stone certified? Is the setting appropriate for the intended wear?`,
        ],
        bullets:['Ask for treatment disclosure','Match durability to jewelry use','Use protective settings for softer gems','Avoid harsh chemicals unless safe for that gem','Store separately to prevent scratches']
      }
    ],
    related: [
      { title:'Gemstone Encyclopedia', href:'/gemstones', description:'Return to the full GemAtlas gemstone hub.' },
      { title:'Jewelry History', href:'/jewelry-history', description:'Explore how gems shaped human adornment and power.' },
      { title:'Education Hub', href:'/education', description:'Learn buying basics, treatments, certification, and care.' },
    ],
    sources: coreSources,
  }
}

export const articles: Article[] = gems.map(makeArticle);
export const gemstoneIndex = gems.map((g)=>({ slug:g.slug, title:g.title, category:g.category, family:g.family, color:g.color, hardness:g.hardness, sources:g.sources }));
export function getArticle(slug:string){ return articles.find((article)=>article.slug===slug); }
