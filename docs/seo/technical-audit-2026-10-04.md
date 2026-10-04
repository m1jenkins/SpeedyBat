# Speedy Bat technical search audit — October 4, 2026

## Outcome

The public site already has sound crawl and URL foundations. Every one of the 17 URLs in the live sitemap returned HTTP 200 with one self-referencing apex canonical, `index, follow`, one H1, unique page titles, and JSON-LD in the initial HTML. An unknown URL correctly returned 404 with `noindex, follow` and no canonical. The most valuable next technical step is to verify Google's actual indexing and the business's lead baseline in account data; a successful source fetch is not proof that a page is indexed or ranking.

No ranking guarantee follows from this audit. Search positions, local visibility, and lead outcomes remain unmeasured without Search Console, Business Profile, and analytics access.

## Evidence and scope

- Production origin: `https://speedybat.com`, inspected October 4, 2026.
- Full HTTP/source snapshot: [technical-crawl-2026-10-04.json](technical-crawl-2026-10-04.json). It contains all sitemap routes, response status, canonical and robots tags, titles, H1 counts, parsed JSON-LD, internal links, images, redirects, and crawler policy.
- Source inspected: `PRODUCT.md`, `data/routes.ts`, `data/services.ts`, `data/locations.ts`, `utils/schemaHelper.ts`, `utils/analytics.ts`, `index.html`, `index.css`, `prerender.js`, `prerender-entry.tsx`, `vercel.json`, navigation, service pages, and the SEO regression script.
- `npm run build` passed: 17 canonical pages, 28 redirects, and nine Service schema nodes. This is build verification, not a Google rich-result or indexing test.
- Supplemental parent audit rendered the live homepage in the in-app browser, confirmed its DOM JSON-LD, and found no broken images. The full route matrix here is based on HTTP source. Service-page rendered parity, Google rendering, and mobile interaction remain separate checks.
- The Chrome CLI could not start because the Google Chrome executable was unavailable. No Lighthouse score or Core Web Vitals result is claimed.

## Verified healthy foundations

| Area | Observation | Implication |
| --- | --- | --- |
| Search crawl policy | `/robots.txt` returned 200, wildcard crawling is allowed, and the sitemap is declared. `OAI-SearchBot` and `ChatGPT-User` are explicitly allowed. | No observed robots block on public search content. Training preferences are handled separately. |
| Sitemap | `/sitemap.xml` returned 200 and contains exactly the 17 current canonical routes. | Discovery source is present; Search Console submission and Google's acceptance are not verified. |
| Rendering | Main content, links, page metadata, and JSON-LD are present in initial route HTML. | Key information does not depend on client rendering for discovery. Google recommends considering pre-rendering for users and crawlers. [Google JavaScript SEO documentation](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) |
| Page directives | All 17 sitemap URLs returned 200, one matching canonical, and `index, follow`. | No observed source-level index exclusion or wrong canonical. Google's selected canonical may still differ. |
| Host/protocol | HTTP and `www` versions of the same-day route returned 308 to the HTTPS apex URL. | Host/protocol consolidation is implemented. |
| URL variants | The same-day trailing slash and `/index.html` variants returned 308 to the clean URL; root `/index.html` returned 308 to `/`. | Sampled duplicate URL formats are consolidated. |
| Retired pages | `/round-rock` returned 308 to `/service-areas#coverage`; `/medical-stat-courier` returned 308 to `/services`. | Existing retired URLs are handled without restoring unsupported service or staffed-location claims. |
| Unknown page | `/seo-audit-nonexistent-20261004` returned 404, `noindex, follow`, no canonical, and one H1. | The sampled unknown route is not a soft 404. |
| Link architecture | Every canonical route has inbound links in the generated site; all 16 other canonical routes are linked from the generated homepage. Service pages contain related-service links. | No generated-route orphan or excessive click depth was found. |
| Images | Generated canonical pages have alt attributes; image dimensions are supplied. The homepage uses an eager, high-priority WebP hero and a separate mobile image source. | The foundation is present; actual mobile loading and layout stability require measured verification. |
| Schema identity | Homepage Organization and WebSite nodes use stable IDs; nine Service nodes reference the same provider. Breadcrumbs and visible FAQ content are represented. | No need to invent business locations, ratings, hours, credentials, or a new business entity for each service. |
| Regression coverage | Build checks metadata uniqueness, canonical routes, sitemap membership, redirects, internal document links, claim constraints, schema, and 404 output. Hash targets are not checked: fragment-only links are skipped, and other links are validated by pathname. | Keep these checks as release guardrails; inspect changed in-page destinations separately. |

## Prioritized actions

| Priority / class | Action | Impact / confidence / effort | Owner and dependency | Metric and verification |
| --- | --- | --- | --- | --- |
| P0 — unknown evidence | Verify Search Console domain ownership; review Page Indexing, Sitemaps, Manual Actions, and URL Inspection for the homepage, same-day, hot shot, airport, legal, and service-area pages. Submit the existing sitemap if it is not already submitted. | High diagnostic value / high confidence that evidence is unavailable / low-to-medium effort | Site owner or Marketing; requires account access | Actual indexed routes, Google-selected canonicals, crawl results, nonbrand query impressions and clicks. Do not equate submitted URLs with indexed pages. |
| P0 — unknown evidence | Populate the existing measurement baseline and validate `generate_lead`, `click_call`, and `click_text` in GA4. Match a lead to dispatch qualification and accepted work without logging sensitive request data in analytics. The baseline's business-outcome wording has been aligned to include both business and individual requesters consistently with `PRODUCT.md`. | High decision value / high confidence / medium effort | Analytics and Operations; GA4/CRM access and agreed qualification definition | Qualified inquiries and accepted jobs by landing page, service, channel, and query family where available. Account evidence remains unavailable. |
| P1 — verified source correction implemented | Main-route HTML previously preloaded Outfit although the actual display face in `index.css` is Archivo. Parent replaced that preload with `/fonts/archivo-expanded-latin.woff2`; Outfit stays available for the separate success page that uses it. | Small loading improvement / high source confidence, performance gain unmeasured / low effort | Engineering; implementation is in this working branch and requires release | Inspect released HTML and browser requests: preload Archivo, avoid loading Outfit on normal routes. Recheck heading rendering. Original redundant font was 32,292 bytes. |
| P1 — unknown measurement | Run mobile PageSpeed Insights and review Search Console Core Web Vitals after release; obtain field data where available. Profile the homepage and important service pages before deciding on further JavaScript, image, font, or animation changes. | Potentially material UX impact / unknown site severity / low initial diagnostic effort | Engineering; browser tooling or PageSpeed Insights, plus field data | Google documents good targets of LCP within 2.5 s, INP below 200 ms, CLS below 0.1. These are targets, not site results or a ranking promise. [Google Core Web Vitals documentation](https://developers.google.com/search/docs/appearance/core-web-vitals) |
| P2 — supported opportunity | Run the released homepage and representative service/breadcrumb pages through the Rich Results Test and URL Inspection. Preserve Organization schema; expand only facts the business can verify and users can see. | Moderate validation value / high confidence / low effort | Engineering and business owner; released URLs and verified business facts | Valid parsed markup and parity with visible content. Google's LocalBusiness rich-result requirements include a physical address; no verified public address is supplied, so absence of that markup is not a defect to solve by inventing an address. [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business) |

## Structured data and AI-search cautions

The site already publishes schema. Claims that it has “no schema” would be false. Raw-source JSON-LD was parsed successfully; the parent also inspected homepage DOM markup. Parsing does not independently certify Google's supported-feature eligibility.

FAQ content remains useful for visitors and retrieval, but do not promise FAQ rich-result expansion. Google's current changelog says FAQ rich results stopped appearing May 7, 2026, and its FAQ documentation was removed June 15. [Google Search documentation updates](https://developers.google.com/search/updates)

Do not prioritize `llms.txt`, embedding APIs, additional schema types, or near-duplicate location pages ahead of real indexing evidence, content relevance, and local credibility. The same current Google changelog says `llms.txt` does not affect Google Search visibility or rankings. [Google Search documentation updates](https://developers.google.com/search/updates)

## Limits and next verification

- Search Console, GA4, Google Business Profile, Bing Webmaster Tools, CDN logs, CRM data, backlink exports, and authenticated rank measurements were not supplied. Their absence is an evidence limitation, not proof of a broken setup.
- Default Python urllib user-agent requests returned 403 in this environment, while the explicit audit user agent succeeded. This difference does not establish verified Googlebot availability or a Googlebot block. If Search Console reports crawl errors, inspect the live test and verified bot logs before changing firewall policy.
- No mobile field INP/LCP/CLS data, lab performance score, or full rendered mobile crawl was available. The local build's main JavaScript bundle was approximately 286 KB uncompressed / 84 KB gzip; bundle size alone does not prove poor Core Web Vitals.
- Current production fetches predate release of this working branch. Recheck the same 17-route matrix, schema/metadata, font preload, contact paths, and non-existent URL after deployment. Record the release date in the measurement baseline.
- First-page coverage is an objective to track across query families and Austin search locations; it is not a technical property that this audit can certify.
