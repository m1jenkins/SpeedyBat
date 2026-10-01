import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => (
  <main className="mt-[76px] min-h-[calc(100svh-76px)] bg-ink text-white lg:mt-[84px] lg:min-h-[calc(100svh-84px)]">
    <section className="mx-auto grid min-h-[700px] max-w-[1536px] grid-cols-1 lg:grid-cols-12" aria-labelledby="about-heading">
      <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:col-span-7 lg:px-10 lg:py-24">
        <h1 id="about-heading" className="display-face max-w-5xl text-[clamp(3.2rem,7vw,6rem)] uppercase leading-[0.84] text-white">Austin courier service for the jobs that cannot wait</h1>
        <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-white/75">Speedy Bat Couriers arranges same-day delivery, expedited freight, airport recovery, scheduled routes, and specialized courier work from the Austin metro. Send us the route, deadline, and item details. We’ll tell you whether we can take the job and what it will cost.</p>
        <a href="/#quick-quote-form" className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded-[5px] bg-signal px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-ink">Get a quote<ArrowUpRight className="h-4 w-4" /></a>
      </div>
      <div className="relative min-h-[360px] overflow-hidden bg-black lg:col-span-5">
        <img src="/courier-loading-stock.webp" alt="Two delivery workers loading cardboard parcels into a white cargo van." width="1536" height="1024" className="absolute inset-0 h-full w-full object-cover object-[48%_center]" />
      </div>
    </section>
  </main>
);
