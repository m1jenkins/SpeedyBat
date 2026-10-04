# Austin courier visibility plan — October 4, 2026

Speedy Bat has a healthy technical foundation. Its strongest next opportunity is to make the existing service pages answer customers' buying questions and build a verifiable Austin business presence through Google Business Profile, honest reviews, and evidence of completed work. First-page organic visibility and the local map pack are separate targets; neither can be guaranteed for every person or every query.

## What the audit established

- **Observed:** all 17 live sitemap URLs returned 200, one matching canonical, indexable directives, one H1, and readable content/schema in initial HTML. Sampled host, protocol, slash, retired-page, and 404 behavior was correct. See [technical audit](technical-audit-2026-10-04.md) and [crawl evidence](technical-crawl-2026-10-04.json).
- **Observed:** one actual Google query for “courier service Austin,” using Google's “Try without personalization” option and Austin-labeled results, showed Austin Express Couriers, 1-512-DELIVER, and Dropoff in Places. Speedy Bat did not appear in the displayed Places or nine visible organic results. This snapshot is not a citywide or ongoing rank measurement. The page's pricing questions included courier charges and the cheapest service.
- **Observed:** the general web research tool surfaced Speedy Bat for several courier queries. That establishes some discoverability in that tool; it does not contradict the separate Google snapshot or prove first-page Google visibility.
- **Unknown:** Search Console indexing/selected canonicals, Google Business Profile verification/completeness, reviews, backlink profile, mobile field performance, accepted organic jobs, and search volumes. Missing account evidence is not proof that an account is absent or broken.
- **Supported opportunity:** 16 intent families and more than 80 representative searches map to the existing site. See [search research](austin-search-research-2026-10-04.md). Search examples are hypotheses to validate with actual queries, not measured demand or a requirement to repeat exact wording.

## Improvements prepared in this branch

| Customer need | Change | Destination | Verification |
| --- | --- | --- | --- |
| A local Austin courier | Broader courier-service title and readable description with dispatch phone; synchronized fallback and social metadata. | `/` | Inspect generated title, canonical, description, and social tags. |
| Delivery today, rush delivery, personal packages | Same-day title/summary and useful answers about rush requests, individuals, packages/documents, pricing, and timing. | `/same-day-on-demand-courier`, `/faq` | One canonical page covers related wording; dispatch conditions and quote path stay clear. |
| What will it cost? | Quote-factor section covering route, deadline, cargo/vehicle fit, and access; service-directory link to it. No invented rate card. | `/how-it-works#courier-pricing`, `/services` | Follow the anchor and four service links; compare with the visible pricing FAQ. |
| Urgent freight or production parts | Hot Shot and Austin named clearly in the relevant H1s. | `/hot-shot-expedited-freight`, `/manufacturing-line-down-delivery` | Unique, intent-aligned titles/H1s in built HTML. |
| Austin to another Texas city | Dallas, Houston, and San Antonio added as example destinations for dispatch review; same-day intercity timing explained. | `/long-distance-intercity-courier`, `/service-areas` | Keep pickup Austin-origin and retain existing retired city redirects. |
| Airport and accompanied air shipments | Expand AUS, NFO, AOG, and OBC terminology in supported service content. | Airport and hand-carry service pages | Check that recovery/tender/cargo scope stays clear and no passenger service or access credentials are implied. |
| Readable headline sooner | Replace unused Outfit preload with the Archivo headline font already used by the design system. | Main HTML template | Inspect generated preload; actual performance gain remains unmeasured. |
| Reliable measurement | Align baseline with both individuals and businesses; annotate changes to pending experimental controls. | Existing SEO measurement documents | Select fresh controls and baseline before claiming causal results. |

These are source changes prepared for review, not a claim of deployment or improved rankings. Existing public URLs and service scope remain the source of truth. See [content change notes](content-changes-2026-10-04.md).

## Priority work and accountability

| Priority | Action | Impact / confidence / effort | Owner and dependency | Success evidence |
| --- | --- | --- | --- | --- |
| P0 | Verify the Search Console domain property; inspect homepage and priority service URLs; submit the existing sitemap if needed. Export query/page/device data for a comparable baseline, ideally 90 days when available. | High diagnostic value / high / low–medium | Owner + SEO; property access | Google-selected canonical, real index status, nonbrand impressions/clicks, no manual actions. |
| P1 | Verify or complete the eligible Google Business Profile. Use the real business name, controlled phone, canonical site, relevant courier category available in the account, and accurate services/coverage. | High local relevance value / high recommendation confidence / account-dependent | Owner; existing profile link, verification and actual operating facts | Verified accurate profile; tracked website actions and calls; repeated local checks. |
| P1 | Release the reviewed page improvements, then verify production HTML and URL Inspection. | High relevance opportunity / medium ranking confidence / implementation prepared | Developer; normal release approval | Correct metadata/content/link output; query-family impressions and qualified inquiries to intended pages. |
| P1 | Request honest reviews consistently after completed jobs. Prepare a direct review link and a neutral request; do not send until authorized. | High local prominence opportunity / high recommendation confidence / ongoing | Owner; genuine customers, verified profile and permission for outreach | Genuine review growth, useful replies, accurate business feedback; no incentives or selective positive-only requests. |
| P1 | Add original operator/fleet photos and consented completed-job examples to About and priority services. Explain route, challenge, accepted scope, and actual outcome without identifying private customers. | Medium–high differentiation / medium / evidence-dependent | Operations; real records and permission | Verified content published; better qualified inquiries; legitimate client/partner references. |
| P2 | Reconcile existing business listings; claim Bing Places and Apple Business Connect where eligible; pursue relevant real memberships and client/supplier mentions. | Medium authority opportunity / medium / medium | Owner + SEO; facts and eligibility | Consistent name/phone/site, legitimate referring domains, accurate profiles. |
| P2 | Measure mobile performance and contact events, then fix measured bottlenecks. | Potential UX value / severity unknown / diagnostic first | Developer + Analytics; field data and GA4 access | PageSpeed/field results, working `generate_lead`, `click_call`, `click_text`; accepted jobs distinguished from clicks. |

Google describes local results as depending on relevance, distance, and prominence, and says reviews and links can help prominence. Completing the profile and earning genuine reviews addresses those documented inputs; it does not override searcher distance. [Google local ranking guidance](https://support.google.com/business/answer/7091).

Use one accurate service-area profile if customers do not visit a staffed storefront, and hide its address as applicable. Real name and facts must match the business; no keyword-added business names, virtual downtown office, or profiles for distant delivery destinations. [Google business representation guidance](https://support.google.com/business/answer/3038177?hl=en).

## Content sequence after this release

Four useful content themes fit the current product: local same-day delivery; time-critical parts/freight; airport and accompanied air; recurring and authorized document work. Keep broad courier intent on the homepage, service choice on `/services`, and practical buying answers on their service pages, `/faq`, and `/how-it-works`.

1. **Days 1–30:** verify accounts and index evidence, record qualified-lead baseline, release these changes, complete accurate profile facts, and start a consistent genuine review request process.
2. **Days 31–60:** publish the first real job examples for same-day and the most valuable specialty service; replace stock-only proof with genuine operations images. Add verified quote examples if the owner can provide current scope/pricing. Improve airport release instructions using the [official AUS cargo directory](https://www.flyaustin.com/air-cargo-information), without claiming relationships or access.
3. **Days 61–90:** choose the next content improvement from actual Search Console queries and accepted jobs. Consider a distinct local/route page only if demand and first-party operational detail support content that helps customers beyond the existing hubs. This is a work schedule, not a predicted ranking timeline.

Future helpful resources include a same-day versus recurring-route comparison, a courier-ready packaging/handoff checklist, and an airport cargo recovery checklist reviewed by Operations. Add them when the business can supply firsthand information. They should link to the appropriate quote/service page rather than become repetitive keyword landing pages. Google prohibits doorway and scaled low-value pages. [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

## Measurement and decision rules

Track organic web results, Places/Maps visibility, AI citations/referrals, and accepted jobs separately. For Google, review actual nonbrand query families, landing pages, clicks, impressions, and average position distributions; segment brand and nonbrand. For local checks, use consistent Austin-area observation points and separate organic from Places. Use the research query panel for repeatability, then replace hypotheses with actual queries.

Weekly after release: diagnose indexing, selected canonicals, contact-event health, and qualified requests. Monthly: compare service/query families, review profile activity and genuine review growth, and choose work based on accepted jobs and customer questions. Establish a reliable pre-period and normal variation before setting growth targets. Stop or correct changes that introduce wrong claims, index exclusions, broken conversion paths, or accessibility defects.

Google's current [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) points to a Generative AI performance report and states that normal SEO remains relevant. Verify the property's actual reporting and inclusion control. Ordinary useful HTML and accurate evidence serve both users and retrieval; special AI files/schema are not a ranking shortcut. Existing FAQ answers are useful, but FAQ rich results have been retired. [Google documentation updates](https://developers.google.com/search/updates).

No emails, review requests, business-profile edits, directory submissions, or production release were performed by this audit. Those actions depend on real account access, facts, and specific authorization. The source changes and full evidence are reviewable now.

Skills applied: SEO Audit, SEO AI Search, SEO and AI Search Visibility, Site Architecture, Content Strategy, Copy Editing, and PR packaging. Current Google primary documentation takes precedence over dated platform assertions in skill text. Next owner review: after profile/account evidence is supplied; operating claims remain due for the repository's November 12, 2026 review.

## Release validation

`npm run build` passed with 17 prerendered routes, 28 redirects, and nine Service schema nodes. `npx tsc --noEmit` and `git diff --check` passed. The built pricing section and its canonical were verified in the in-app browser, including a 390px mobile viewport with no horizontal page overflow. An independent agent reviewed the application diff and found no actionable issues. These checks validate implementation; they do not measure Google indexing, rankings, mobile field performance, or lead growth.
