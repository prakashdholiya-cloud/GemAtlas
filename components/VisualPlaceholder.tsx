export default function VisualPlaceholder({title, caption}:{title:string; caption:string}){
  return <figure className="my-8 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
    <div className="min-h-[260px] bg-[radial-gradient(circle_at_30%_30%,rgba(182,31,54,.35),transparent_35%),linear-gradient(135deg,#3b0b16,#6f1724_45%,#f7f2e8)] flex items-end">
      <div className="p-6 text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/75">Image Slot</p>
        <h3 className="mt-2 text-2xl font-black">{title}</h3>
      </div>
    </div>
    <figcaption className="p-4 text-sm leading-6 text-ink/65">{caption}</figcaption>
  </figure>
}
