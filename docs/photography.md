# Website stock photography

The live website uses downloaded, locally hosted Pexels photographs in place of the generated courier imagery. These stock scenes do not represent Speedy Bat personnel, vehicles, or facilities. Alt text describes what each photograph shows; Austin and Houston location descriptions follow the original photo sources.

## Sources and license

The initial set was retrieved October 1, 2026, and expanded October 4, 2026. All fourteen photographs are offered under the [Pexels license](https://www.pexels.com/license/), which permits website and marketing use, downloading, and modification without required attribution. People and brands pictured must not be presented as endorsing Speedy Bat.

Each of the nine services has a distinct photograph, shared consistently between its homepage module, service directory listing, and landing page. The hero and three lower homepage strip images are separate, so all thirteen homepage photo placements use different photographs. The About photograph is also distinct.

| Local asset | Photographer | Original photograph | Photography evidence on source page |
| --- | --- | --- | --- |
| `public/courier-road-stock.webp` | Artem Balashevsky | [White van driving down the highway at sunset — 18385872](https://www.pexels.com/photo/a-white-van-driving-down-the-highway-at-sunset-18385872/) | Photographer credit; published September 15, 2023. |
| `public/courier-handoff-stock.webp` | Polina Tankilevitch | [People carrying delivery boxes — 4440884](https://www.pexels.com/photo/people-carrying-delivery-boxes-4440884/) | Canon EOS 5D Mark IV; taken May 1, 2020. |
| `public/courier-airport-stock.webp` | ArtHouse Studio | [Airplane connected to airport terminal with airbridge — 4530195](https://www.pexels.com/photo/airplane-connected-to-airport-terminal-with-airbridge-4530195/) | Sony ILCE-7RM2; taken January 7, 2017. |
| `public/courier-scheduled-stock.webp` | Tima Miroshnichenko | [Parcels inside a delivery van — 6170458](https://www.pexels.com/photo/parcels-inside-a-delivery-van-6170458/) | Sony ILCE-7M3; taken November 26, 2020. |
| `public/courier-loading-stock.webp` | Tima Miroshnichenko | [Delivery man carrying boxes — 6169670](https://www.pexels.com/photo/delivery-man-carrying-boxes-6169670/) | Sony ILCE-7M3; taken November 26, 2020. |
| `public/courier-freight-stock.webp` | Juan R. Real | [Warehouse with delivery truck exiting the loading dock — 29786116](https://www.pexels.com/photo/warehouse-with-delivery-truck-exiting-the-loading-dock-29786116/) | Canon EOS Rebel T6; taken July 12, 2022. |
| `public/courier-intercity-stock.webp` | Erik Mclean | [A highway in a city — 18462218](https://www.pexels.com/photo/a-highway-in-a-city-18462218/) | Photographer and Houston location confirmed; camera and date unavailable on public page. |
| `public/courier-documents-stock.webp` | Anete Lusina | [Man opening blue briefcase with documents — 4792284](https://www.pexels.com/photo/man-opening-blue-briefcase-with-documents-4792284/) | Nikon D750; taken June 29, 2020. |
| `public/courier-manufacturing-stock.webp` | Daniel Smyth | [Close-up photo of metal tool — 10406128](https://www.pexels.com/photo/close-up-photo-of-metal-tool-10406128/) | Sony ILCE-7M3; taken November 10, 2021. |
| `public/courier-hand-carry-stock.webp` | Gustavo Fring | [Elegant businessman with suitcase standing in airport hallway — 4173215](https://www.pexels.com/photo/elegant-businessman-with-suitcase-standing-in-airport-hallway-4173215/) | Canon EOS 5D Mark III; taken February 9, 2020. |
| `public/courier-secure-stock.webp` | Andreas Näslund | [Photography equipment set on film production site — 34955429](https://www.pexels.com/photo/photography-equipment-set-on-film-production-site-34955429/) | Sony ILCE-7RM3A; taken March 27, 2023. |
| `public/courier-scan-stock.webp` | RDNE Stock project | [Deliveryman scanning the barcode — 7363196](https://www.pexels.com/photo/deliveryman-scanning-the-barcode-7363196/) | Published April 2, 2021; Adobe Photoshop 22.1 editing metadata. |
| `public/courier-austin-stock.webp` | Drone Task Force | [Bridges by the river in Austin — 18583616](https://www.pexels.com/photo/bridges-by-the-river-in-austin-18583616/) | Photographer and Austin location confirmed; camera and date unavailable on public page. |
| `public/courier-delivery-stock.webp` | Kindel Media | [A woman receiving packages from a delivery man — 6995138](https://www.pexels.com/photo/a-woman-receiving-packages-from-a-delivery-man-6995138/) | Taken February 14, 2021; Adobe Lightroom editing metadata. |

## Asset preparation

- The road photograph is cropped from the bottom to 1920 × 1280 to retain the van. `courier-road-mobile-stock.webp` is a 960 × 1280 crop of the same photograph, keeping the vehicle above the mobile headline. The other photographs are cropped to 1536 × 1024. Airport images use a lower focal position to keep the aircraft visible in wide crops.
- Photographs are encoded as WebP at quality 82 and served from `public/`; the website does not depend on third-party image requests.
- `public/og-image-redesign.png` uses the same real road photograph with the existing brand copy and local Archivo font at 1200 × 630.
- The five superseded `courier-*-illustrative.webp` assets have been removed. Historical design concepts and preserved legacy brand assets remain in the repository but are not used as live website photography.
- The former `courier-parts-stock.webp` tools photograph was replaced by separate freight and manufacturing scenes and removed from the public assets.
