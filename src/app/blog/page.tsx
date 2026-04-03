import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Olimpia Moldoveanu",
  description:
    "Articole despre anxietate, transformare personală, Legile Universale și puterea interioară. Scrise de Olimpia Moldoveanu, coach transformator.",
  openGraph: {
    title: "Blog | Olimpia Moldoveanu",
    description:
      "Articole despre anxietate, transformare personală și Legile Universale.",
    type: "website",
  },
};

const sorted = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogPage() {
  const featured = sorted.find((a) => a.featured);
  const rest = sorted.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-crem">
      {/* Simple top nav */}
      <header className="bg-crem border-b border-gri-deschis sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col items-start group">
            <span
              className="font-cormorant text-charcoal text-base md:text-xl tracking-widest"
              style={{ letterSpacing: "0.1em" }}
            >
              OLIMPIA MOLDOVEANU
            </span>
            <span className="w-full h-px bg-auriu my-0.5 md:my-1" />
            <span
              className="font-montserrat text-gri-mediu text-[9px] md:text-[10px] tracking-widest uppercase"
              style={{ letterSpacing: "0.12em" }}
            >
              Coaching Transformator prin Legile Universale
            </span>
          </Link>
          <Link
            href="/#contact"
            className="hidden sm:inline-flex font-montserrat text-sm text-charcoal hover:text-auriu transition-colors duration-200"
          >
            Lucrează cu mine
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-24 md:pb-14 text-center px-4">
        <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-auriu mb-4">
          Articole & reflecții
        </p>
        <h1 className="font-cormorant text-4xl md:text-5xl text-charcoal leading-tight mb-4">
          Blog
        </h1>
        <div className="w-16 h-px bg-auriu mx-auto mb-6" />
        <p className="font-montserrat text-sm md:text-base text-gri-mediu max-w-xl mx-auto leading-relaxed">
          Scriu despre anxietate, emoții, Legile Universale și transformarea
          interioară, pentru femeile care vor mai mult decât să supraviețuiască.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        {/* Featured article */}
        {featured && (
          <div className="mb-14">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <article className="bg-white rounded-card shadow-card overflow-hidden md:grid md:grid-cols-2 hover:shadow-lg transition-shadow duration-300">
                <div className="h-52 md:h-auto relative overflow-hidden">
                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt ?? featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-roz-pudrat/40 via-lavanda/30 to-auriu/20 flex items-center justify-center">
                      <span className="font-cormorant text-5xl text-auriu/60">✦</span>
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-montserrat text-xs text-auriu uppercase tracking-widest">
                      {featured.category}
                    </span>
                    <span className="text-gri-deschis">·</span>
                    <span className="font-montserrat text-xs text-gri-mediu">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal leading-snug mb-4 group-hover:text-auriu transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="font-montserrat text-sm text-gri-mediu leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-montserrat text-xs text-gri-mediu">
                      {formatDate(featured.date)}
                    </span>
                    <span className="font-montserrat text-sm text-auriu group-hover:gap-2 flex items-center gap-1 transition-all duration-200">
                      Citește articolul
                      <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Article grid */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                <article className="bg-white rounded-card shadow-card overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="h-40 relative overflow-hidden">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.imageAlt ?? article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-roz-pudrat/30 via-lavanda/20 to-verde-sage/20 flex items-center justify-center">
                        <span className="font-cormorant text-4xl text-auriu/50">✦</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-montserrat text-[10px] text-auriu uppercase tracking-widest">
                        {article.category}
                      </span>
                      <span className="text-gri-deschis text-xs">·</span>
                      <span className="font-montserrat text-[10px] text-gri-mediu">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-cormorant text-xl text-charcoal leading-snug mb-3 group-hover:text-auriu transition-colors duration-200">
                      {article.title}
                    </h2>
                    <p className="font-montserrat text-xs text-gri-mediu leading-relaxed flex-1 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gri-deschis">
                      <span className="font-montserrat text-xs text-gri-mediu">
                        {formatDate(article.date)}
                      </span>
                      <span className="font-montserrat text-xs text-auriu flex items-center gap-1">
                        Citește
                        <svg className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CTA footer */}
      <section className="bg-charcoal py-16 px-4 text-center">
        <p className="font-montserrat text-xs tracking-[0.25em] uppercase text-auriu mb-4">
          Vrei să mergi mai departe?
        </p>
        <h2 className="font-cormorant text-3xl md:text-4xl text-crem mb-6">
          Hai să lucrăm împreună
        </h2>
        <p className="font-montserrat text-sm text-gri-mediu max-w-md mx-auto mb-8 leading-relaxed">
          Articolele oferă perspectivă. Schimbarea reală se face în profunzime, în sesiunile 1 la 1.
        </p>
        <Link
          href="/#contact"
          className="inline-block bg-auriu text-white font-montserrat text-sm px-8 py-3 rounded-button hover:bg-auriu/90 transition-colors duration-200"
        >
          Află cum te pot ajuta
        </Link>
      </section>
    </main>
  );
}
