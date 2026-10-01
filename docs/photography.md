# Website stock photography

The live website uses downloaded, locally hosted Pexels photographs in place of the generated courier imagery. These are stock scenes, not photographs of Speedy Bat personnel, vehicles, facilities, or the Austin service area. Alt text describes only what each photograph shows.

## Sources and license

Retrieved October 1, 2026. All six photographs are offered under the [Pexels license](https://www.pexels.com/license/), which permits website and marketing use, downloading, and modification without required attribution. People and brands pictured must not be presented as endorsing Speedy Bat.

| Local asset | Photographer | Original photograph | Photography evidence on source page |
| --- | --- | --- | --- |
| `public/courier-road-stock.webp` | Artem Balashevsky | [White van driving down the highway at sunset — 18385872](https://www.pexels.com/photo/a-white-van-driving-down-the-highway-at-sunset-18385872/) | Photographer credit; published September 15, 2023. |
| `public/courier-handoff-stock.webp` | Polina Tankilevitch | [People carrying delivery boxes — 4440884](https://www.pexels.com/photo/people-carrying-delivery-boxes-4440884/) | Canon EOS 5D Mark IV; taken May 1, 2020. |
| `public/courier-parts-stock.webp` | Andrea Piacquadio | [Set of various metal tools — 3853201](https://www.pexels.com/photo/set-of-various-metal-tools-3853201/) | Canon EOS 5DS; taken September 3, 2017. |
| `public/courier-airport-stock.webp` | ArtHouse Studio | [Airplane connected to airport terminal with airbridge — 4530195](https://www.pexels.com/photo/airplane-connected-to-airport-terminal-with-airbridge-4530195/) | Sony ILCE-7RM2; taken January 7, 2017. |
| `public/courier-scheduled-stock.webp` | Tima Miroshnichenko | [Parcels inside a delivery van — 6170458](https://www.pexels.com/photo/parcels-inside-a-delivery-van-6170458/) | Sony ILCE-7M3; taken November 26, 2020. |
| `public/courier-loading-stock.webp` | Tima Miroshnichenko | [Delivery man carrying boxes — 6169670](https://www.pexels.com/photo/delivery-man-carrying-boxes-6169670/) | Sony ILCE-7M3; taken November 26, 2020. |

## Asset preparation

- The road photograph is cropped from the bottom to 1920 × 1280 to retain the van. `courier-road-mobile-stock.webp` is a 960 × 1280 crop of the same photograph, keeping the vehicle above the mobile headline. The other photographs are cropped to 1536 × 1024. Airport images use a lower focal position to keep the aircraft visible in wide crops.
- Photographs are encoded as WebP at quality 82 and served from `public/`; the website does not depend on third-party image requests.
- `public/og-image-redesign.png` uses the same real road photograph with the existing brand copy and local Archivo font at 1200 × 630.
- The five superseded `courier-*-illustrative.webp` assets have been removed. Historical design concepts and preserved legacy brand assets remain in the repository but are not used as live website photography.
