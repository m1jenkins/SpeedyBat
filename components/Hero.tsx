import React from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToElement } from '../utils/scrollHelper';

export const Hero: React.FC = () => {
  const focusQuoteForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToElement('quick-quote-form');
    window.setTimeout(() => document.getElementById('pickupZip')?.focus({ preventScroll: true }), 350);
  };

  return (
    <section id="hero" className="relative mt-[76px] h-[68svh] min-h-[620px] overflow-hidden bg-ink lg:mt-[84px] lg:h-[75svh] lg:min-h-[650px] lg:max-h-[780px]" aria-labelledby="hero-heading">
      <picture className="hero-photo absolute inset-0">
        <source media="(max-width: 639px)" srcSet="/courier-road-mobile-stock.webp" width="960" height="1280" />
        <img
          src="/courier-road-stock.webp"
          alt="A white cargo van traveling along a country road at sunset."
          width="1920"
          height="1280"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-ink/60 lg:bg-ink/50" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1536px] items-end px-5 pb-10 sm:px-8 sm:pb-12 lg:items-center lg:px-10 lg:pb-0">
        <div className="hero-copy max-w-[760px] text-white">
          <h1 id="hero-heading" className="display-face text-[clamp(3.2rem,7vw,6rem)] uppercase leading-[0.82] text-white">
            <span className="block">Courier</span>
            <span className="block">service.</span>
            <span className="block">Austin &amp;</span>
            <span className="block">beyond.</span>
          </h1>
          <p className="mt-6 max-w-[470px] text-[17px] font-medium leading-[1.45] text-white sm:text-[19px]">
            Same-day delivery, expedited freight, and scheduled routes from Austin.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a href="#quick-quote-form" onClick={focusQuoteForm} className="inline-flex min-h-12 items-center gap-2 rounded-[5px] bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-signal hover:text-white">
              Get a quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="hidden items-center gap-5 lg:flex" aria-label="Call or text Speedy Bat Couriers">
              <a href="tel:+15129104938" className="inline-flex min-h-12 items-center border-b border-white/70 text-sm font-bold text-white hover:border-white">Call us</a>
              <a href="sms:+15129104938" className="inline-flex min-h-12 items-center border-b border-white/70 text-sm font-bold text-white hover:border-white">Text us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
