import { useState, useEffect } from 'react';
import { BLOG_ARTICLES, getArticleBySlug } from '../data/blog';
import { Clock, ArrowLeft, Share2, Award, ChevronRight } from 'lucide-react';

interface BlogProps {
  currentPath: string;
}

export default function Blog({ currentPath }: BlogProps) {
  const [activeArticle, setActiveArticle] = useState<any>(null);

  useEffect(() => {
    const hash = window.location.hash;
    const parts = hash.split('/');
    if (parts.length >= 3 && parts[1] === 'blog') {
      const slug = parts[2].split('?')[0];
      const article = getArticleBySlug(slug);
      if (article) {
        setActiveArticle(article);
      } else {
        setActiveArticle(null);
      }
    } else {
      setActiveArticle(null);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPath]);

  // Handle sharing action
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: activeArticle?.title || 'Modern Furniture Blog',
        url: window.location.href
      }).catch(() => {});
    } else {
      alert('URL Copied to clipboard!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (activeArticle) {
    // 1. READ ARTICLE VIEW
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-10">
        
        {/* Navigation back and meta row */}
        <div className="flex justify-between items-center border-b border-stone-200 pb-4">
          <a
            href="#/blog"
            className="text-stone-500 hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5"
          >
            <ArrowLeft size={14} />
            <span>Back to All Articles</span>
          </a>
          <button
            onClick={handleShare}
            className="text-stone-500 hover:text-[#D4AF37] text-xs flex items-center space-x-1 cursor-pointer"
          >
            <Share2 size={13} />
            <span>Share Article</span>
          </button>
        </div>

        {/* Hero Banner within article */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#D4AF37] font-mono font-bold">
            <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-0.5 rounded-sm uppercase">{activeArticle.category}</span>
            <span>•</span>
            <span>{activeArticle.date}</span>
            <span>•</span>
            <span className="flex items-center"><Clock size={12} className="mr-1" /> {activeArticle.readTime}</span>
          </div>

          <h1 className="font-serif text-[#1A1A1A] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {activeArticle.title}
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed italic border-l-2 border-[#D4AF37] pl-4 font-light">
            {activeArticle.summary}
          </p>
        </div>

        {/* Featured Main Image */}
        <div className="border border-stone-200 rounded-sm overflow-hidden aspect-[2/1] bg-stone-50 shadow-md">
          <img
            src={activeArticle.image}
            alt={activeArticle.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content paragraphs */}
        <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed font-light">
          {activeArticle.content.map((para: string, idx: number) => (
            <p key={idx}>
              {para}
            </p>
          ))}
        </div>

        {/* Article footer author sign-off */}
        <div className="bg-stone-50 border border-stone-200 p-6 rounded-sm flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 text-xs">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-stone-200 text-[#D4AF37] font-bold shadow-sm">
              MF
            </div>
            <div>
              <span className="text-stone-400 block uppercase font-mono text-[9px]">Written By</span>
              <span className="text-[#1A1A1A] font-serif font-semibold text-sm">{activeArticle.author}</span>
            </div>
          </div>
          <div className="text-[11px] text-stone-500 font-light flex items-center">
            <Award size={13} className="mr-1.5 text-[#D4AF37]" /> Modern Furniture Editorial Board • Gujranwala
          </div>
        </div>

        {/* Tags footer */}
        <div className="flex flex-wrap gap-2 pt-4">
          {activeArticle.tags.map((tag: string) => (
            <span key={tag} className="bg-white text-stone-500 text-[10px] px-2.5 py-1 rounded-sm border border-stone-200 font-mono shadow-sm">
              #{tag}
            </span>
          ))}
        </div>

      </div>
    );
  }

  // 2. BLOG DIRECTORY / INDEX LISTING VIEW
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-16">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[#D4AF37] text-xs font-mono tracking-[0.3em] uppercase block font-bold">Design & Woodcraft</span>
        <h1 className="font-serif text-[#1A1A1A] text-3xl sm:text-5xl font-bold tracking-tight">The Heritage Journal</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        <p className="text-stone-500 text-sm leading-relaxed font-light">
          Interior design inspiration, solid-timber buying guides, and preservation advice directly from the experts at Modern Furniture.
        </p>
      </div>

      {/* Grid listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_ARTICLES.map((art) => (
          <div
            key={art.id}
            className="group bg-white border border-stone-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/50 transition shadow-sm hover:shadow-md"
          >
            {/* Image header */}
            <div className="aspect-[16/10] overflow-hidden bg-stone-50 relative">
              <img
                src={art.image}
                alt={art.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-white text-[9px] text-[#D4AF37] font-mono font-bold tracking-wide uppercase px-2 py-0.5 border border-stone-100 shadow-sm">
                {art.category}
              </span>
            </div>

            {/* Content body */}
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] text-stone-400 font-mono">
                  <span>{art.date}</span>
                  <span className="flex items-center"><Clock size={11} className="mr-1" /> {art.readTime}</span>
                </div>
                <h3 className="font-serif text-[#1A1A1A] font-semibold text-lg group-hover:text-[#D4AF37] transition-colors">
                  <a href={`#/blog/${art.slug}`}>
                    {art.title}
                  </a>
                </h3>
                <p className="text-stone-500 text-xs leading-relaxed line-clamp-3 font-light">
                  {art.summary}
                </p>
              </div>

              {/* Read button footer */}
              <div className="pt-4 border-t border-stone-200 flex justify-between items-center mt-5">
                <span className="text-stone-400 text-[10px] font-mono">By {art.author.split(' ')[0]}</span>
                <a
                  href={`#/blog/${art.slug}`}
                  className="text-[#D4AF37] hover:text-[#B8962E] text-xs font-bold tracking-wider uppercase inline-flex items-center group/btn"
                >
                  <span>Read Article</span>
                  <ChevronRight size={13} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
