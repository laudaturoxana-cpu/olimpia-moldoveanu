import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, getRecentArticles, formatDate } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Olimpia Moldoveanu`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const recent = getRecentArticles(3).filter((a) => a.slug !== slug);

  return (
    <main className="min-h-screen bg-crem">
      {/* Top nav */}
      <header className="bg-crem border-b border-gri-deschis sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex flex-col items-start">
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
            href="/blog"
            className="font-montserrat text-sm text-gri-mediu hover:text-auriu transition-colors duration-200 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 md:px-8 pt-14 pb-20">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-montserrat text-xs text-auriu uppercase tracking-widest">
            {article.category}
          </span>
          <span className="text-gri-deschis">·</span>
          <span className="font-montserrat text-xs text-gri-mediu">{article.readTime}</span>
          <span className="text-gri-deschis">·</span>
          <span className="font-montserrat text-xs text-gri-mediu">{formatDate(article.date)}</span>
        </div>

        {/* Title */}
        <h1 className="font-cormorant text-3xl md:text-5xl text-charcoal leading-tight mb-6">
          {article.title}
        </h1>

        {/* Gold line */}
        <div className="w-16 h-px bg-auriu mb-8" />

        {/* Excerpt lead */}
        <p className="font-montserrat text-base text-gri-mediu leading-relaxed italic mb-10 border-l-2 border-auriu pl-5">
          {article.excerpt}
        </p>

        {/* Content */}
        <div
          className="prose-olimpia"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Author signature */}
        <div className="mt-14 pt-8 border-t border-gri-deschis flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-roz-pudrat to-lavanda flex items-center justify-center flex-shrink-0">
            <span className="font-cormorant text-xl text-charcoal">O</span>
          </div>
          <div>
            <p className="font-cormorant text-lg text-charcoal">Olimpia Moldoveanu</p>
            <p className="font-montserrat text-xs text-gri-mediu">Coach Transformator prin Legile Universale</p>
          </div>
        </div>

        {/* CTA inline */}
        <div className="mt-10 bg-gradient-to-br from-roz-pudrat/20 to-lavanda/20 rounded-card p-8 text-center">
          <p className="font-cormorant text-2xl text-charcoal mb-3">
            Vrei să explorăm asta împreună?
          </p>
          <p className="font-montserrat text-sm text-gri-mediu mb-6 leading-relaxed">
            Dacă te-ai regăsit în ce ai citit, o sesiune de coaching poate fi primul pas real.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-auriu text-white font-montserrat text-sm px-8 py-3 rounded-button hover:bg-auriu/90 transition-colors duration-200"
          >
            Programează o sesiune
          </Link>
        </div>
      </article>

      {/* More articles */}
      {recent.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
          <div className="border-t border-gri-deschis pt-14">
            <h2 className="font-cormorant text-2xl md:text-3xl text-charcoal mb-8 text-center">
              Mai multe articole
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recent.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group">
                  <article className="bg-white rounded-card shadow-card p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <span className="font-montserrat text-[10px] text-auriu uppercase tracking-widest mb-2 block">
                      {a.category}
                    </span>
                    <h3 className="font-cormorant text-lg text-charcoal leading-snug mb-3 group-hover:text-auriu transition-colors duration-200 flex-1">
                      {a.title}
                    </h3>
                    <span className="font-montserrat text-xs text-auriu flex items-center gap-1 mt-auto">
                      Citește
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
