import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { gemstoneIndex } from '@/data/articles';

export const metadata={
  title:'Gemstone Encyclopedia | GemAtlas.org',
  description:'A premium gemstone hub covering precious stones, semi-precious stones, diamonds, lab diamonds, pearls, organic gems, and simulants.',
};

const categoryOrder = ['Precious Gemstone','Semi-Precious Gemstone','Rare Gemstone','Organic Gemstone','Lab-Created Gemstone','Lab-Created / Simulant','Simulant'];
const grouped = categoryOrder.map(category=>({category, items: gemstoneIndex.filter(g=>g.category===category)})).filter(g=>g.items.length);

export default function Page(){
  return <main>
    <PageHero eyebrow="GemAtlas Guide" title="Gemstone Encyclopedia" subtitle="A premium, Wikipedia-style gemstone hub for precious stones, semi-precious stones, diamonds, lab diamonds, pearls, organic gems, and modern simulants."/>

    <section className="bg-white border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 py-10 grid gap-4 md:grid-cols-4">
        <div className="rounded-3xl bg-sand p-6">
          <p className="text-4xl font-black text-forest">{gemstoneIndex.length}</p>
          <p className="mt-2 font-bold text-ink/65">Gem guides included</p>
        </div>
        <div className="rounded-3xl bg-sand p-6">
          <p className="text-4xl font-black text-forest">4</p>
          <p className="mt-2 font-bold text-ink/65">Classic precious stones</p>
        </div>
        <div className="rounded-3xl bg-sand p-6">
          <p className="text-4xl font-black text-forest">5</p>
          <p className="mt-2 font-bold text-ink/65">Organic / lab / simulant categories</p>
        </div>
        <div className="rounded-3xl bg-sand p-6">
          <p className="text-4xl font-black text-forest">∞</p>
          <p className="mt-2 font-bold text-ink/65">Expandable article system</p>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-3xl border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/45">Browse by Category</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm font-semibold">
              {grouped.map(group=><a key={group.category} className="rounded-xl px-3 py-2 text-ink/70 hover:bg-sand hover:text-forest" href={`#${group.category.toLowerCase().replaceAll(' ','-').replaceAll('/','')}`}>{group.category}</a>)}
            </nav>
          </div>
        </aside>

        <div className="space-y-14">
          <section className="rounded-[2rem] border border-ink/10 bg-white p-7 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">How to use this hub</p>
            <h2 className="mt-3 text-3xl font-black text-forest">Build every gemstone into a pillar page.</h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">Each card below links to a full guide with overview, geology, history, mining sources, jewelry usage, value drivers, symbolism, and care guidance. Replace placeholder visuals with licensed photography over time, then expand the strongest pages into deeper SEO articles.</p>
          </section>

          {grouped.map(group=><section key={group.category} id={group.category.toLowerCase().replaceAll(' ','-').replaceAll('/','')} className="scroll-mt-28">
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">GemAtlas Category</p>
                <h2 className="mt-2 text-4xl font-black tracking-tight text-forest">{group.category}</h2>
              </div>
              <p className="hidden rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-bold text-ink/55 md:block">{group.items.length} guides</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map(g=><Link key={g.slug} href={`/gemstones/${g.slug}`} className="group rounded-[2rem] border border-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex min-h-[160px] items-end rounded-[1.5rem] bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.65),transparent_24%),linear-gradient(135deg,#f8f0dc,#d9a441_45%,#123c35)] p-5 text-white">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-white/65">Image Slot</p>
                    <h3 className="mt-1 text-2xl font-black">{g.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-gold">{g.family}</p>
                <h3 className="mt-2 text-2xl font-black text-forest group-hover:text-emerald">{g.title}</h3>
                <dl className="mt-4 space-y-2 text-sm text-ink/68">
                  <div><dt className="inline font-black text-ink/45">Color: </dt><dd className="inline">{g.color}</dd></div>
                  <div><dt className="inline font-black text-ink/45">Hardness: </dt><dd className="inline">{g.hardness}</dd></div>
                  <div><dt className="inline font-black text-ink/45">Sources: </dt><dd className="inline">{g.sources}</dd></div>
                </dl>
                <p className="mt-5 font-black text-emerald">Read guide →</p>
              </Link>)}
            </div>
          </section>)}
        </div>
      </div>
    </section>
  </main>
}
