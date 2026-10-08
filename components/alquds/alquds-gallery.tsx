import Image from "next/image";
import styles from "@/app/alquds/page.module.css";

interface GalleryPhoto {
  file: number;
  alt: string;
  landscape?: boolean;
}

const interior: GalleryPhoto[] = [
  {
    file: 6,
    alt: "Main dining hall under a glowing gold star ceiling and crystal chandelier",
  },
  { file: 2, alt: "Carved Arabic arch doorway with twisted gold columns" },
  { file: 13, alt: "Dining hall with ivory booths and walnut chairs" },
  { file: 15, alt: "Ivory tufted booth beside a gold curtain" },
  {
    file: 5,
    alt: "Majlis floor seating with a red patterned table and cushions",
  },
  { file: 7, alt: "Private floor-seating room laid with brass plates" },
  { file: 14, alt: "Long table set beside gold tree wallpaper" },
  { file: 8, alt: "Majlis corner with a lantern pendant and walnut panelling" },
  { file: 17, alt: "Booth seating under gold leaf ceiling panels" },
  { file: 16, alt: "Low table dressed with brass plates for a shared meal" },
  { file: 12, alt: "Brass plate and cutlery on a gold-patterned tablecloth" },
];

const food: GalleryPhoto[] = [
  {
    file: 11,
    alt: "Overhead view of a table spread with starters, noodles, soup and dessert",
    landscape: true,
  },
  { file: 27, alt: "Chicken biryani platter with raita and salan" },
  { file: 19, alt: "Chicken mandi on fragrant rice with dry fruits" },
  { file: 25, alt: "Dragon chicken on a black plate", landscape: true },
  { file: 9, alt: "A shared spread of dishes laid out on a dining table" },
  {
    file: 20,
    alt: "Shahi tukda topped with nuts and rose petals",
    landscape: true,
  },
  { file: 26, alt: "Pomegranate cooler garnished with mint" },
  { file: 24, alt: "Hakka noodles with spring onion" },
  { file: 21, alt: "Mutton mandi served over nutted rice" },
  { file: 23, alt: "Gajar halwa in a footed glass bowl" },
];

function GalleryRow({
  photos,
  reverse,
  label,
}: {
  photos: GalleryPhoto[];
  reverse?: boolean;
  label: string;
}) {
  return (
    <div className={styles.galleryRow} role="group" aria-label={label}>
      <div data-scroll-drift={reverse ? "right" : "left"}>
        <ul
          className={`${styles.galleryTrack} ${reverse ? styles.galleryReverse : ""}`}
        >
          {[false, true].map((duplicate) =>
            photos.map((photo) => (
              <li
                key={`${duplicate ? "b" : "a"}-${photo.file}`}
                className={`${styles.galleryTile} ${photo.landscape ? styles.galleryWide : ""}`}
                aria-hidden={duplicate || undefined}
                data-duplicate={duplicate || undefined}
              >
                <Image
                  src={`/images/alquds/${photo.file}.jpeg`}
                  alt={duplicate ? "" : photo.alt}
                  width={photo.landscape ? 1280 : 853}
                  height={photo.landscape ? 853 : 1280}
                  sizes={photo.landscape ? "520px" : "240px"}
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </div>
  );
}

export function AlQudsGallery() {
  return (
    <section className={styles.gallery} aria-labelledby="gallery-title">
      <div className={styles.galleryHead} data-scroll-cascade>
        <p className={styles.eyebrow} data-scroll-track>
          Inside Al-Quds
        </p>
        <h2 id="gallery-title" data-scroll-heading>
          Gold light, warm wood, room to linger.
        </h2>
      </div>
      <GalleryRow photos={interior} label="Restaurant interior" />
      <GalleryRow photos={food} label="Food and tables" reverse />
    </section>
  );
}
