import Link from 'next/link';
import { Article } from '@/types';
import VisualPlaceholder from './VisualPlaceholder';

function slugLabel(id:string){ return id.replaceAll('-', ' '); }

export default function ArticleShell({article}:{article:Article}){
  return <main className="bg-sand">
    <section className="border-b border-ink/10 bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_.8fr] lg:py-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">{article.category}</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-white/82">{article.dek}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            <span className="rounded-full border border-white/20 px-4 py-2">Updated {article.updated}</span>
            <span className="rounded-full border border-white/20 px-4 py-2">{article.readingTime}</span>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/15 bg-white/8 p-4 shadow-2xl">
          <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.35),transparent_24%),linear-gradient(135deg,#210711,#841a2a_45%,#e7b855)] min-h-[360px] flex items-end p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">Hero Image Slot</p>
              <h2 className="mt-2 text-2xl font-black">{article.heroImage.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">{article.heroImage.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[280px_1fr_320px]">
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-3xl border border-ink/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/45">Contents</p>
          <nav className="mt-4 flex flex-col gap-2 text-sm font-semibold">
            {article.sections.map((s)=><a key={s.id} className="rounded-xl px-3 py-2 text-ink/70 hover:bg-sand hover:text-forest" href={`#${s.id}`}>{s.title}</a>)}
          </nav>
        </div>
      </aside>

      <article className="min-w-0 rounded-3xl border border-ink/10 bg-white p-6 shadow-sm md:p-10">
        {article.sections.map((section, index)=><section key={section.id} id={section.id} className="scroll-mt-28 border-b border-ink/10 py-8 last:border-b-0">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">{String(index+1).padStart(2,'0')} / {slugLabel(section.id)}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-forest md:text-4xl">{section.title}</h2>
          <div className="prose mt-5 max-w-none text-lg text-ink/80">
            {section.paragraphs.map((p)=><p key={p}>{p}</p>)}
          </div>
          {section.bullets && <div className="mt-6 grid gap-3 md:grid-cols-2">
            {section.bullets.map((b)=><div key={b} className="rounded-2xl border border-ink/10 bg-sand p-4 font-semibold text-ink/75">{b}</div>)}
          </div>}
          {section.image && <VisualPlaceholder title={section.image.title} caption={section.image.caption}/>}        
        </section>)}
      </article>

      <aside>
        <div className="sticky top-24 space-y-6">
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/45">Quick Facts</p>
            <dl className="mt-4 divide-y divide-ink/10">
              {article.facts.map((f)=><div key={f.label} className="py-3">
                <dt className="text-xs font-bold uppercase tracking-wide text-ink/45">{f.label}</dt>
                <dd className="mt-1 font-bold text-forest">{f.value}</dd>
              </div>)}
            </dl>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/45">Related Guides</p>
            <div className="mt-4 space-y-4">
              {article.related.map((r)=><Link key={r.title} href={r.href} className="block rounded-2xl bg-sand p-4 hover:bg-forest hover:text-white">
                <strong>{r.title}</strong>
                <span className="mt-1 block text-sm opacity-70">{r.description}</span>
              </Link>)}
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-ink/45">Sources to Cite</p>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              {article.sources.map((s)=><li key={s.href}><a className="font-semibold text-emerald hover:underline" href={s.href}>{s.label}</a></li>)}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </main>
}
