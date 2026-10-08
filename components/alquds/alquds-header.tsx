"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "@/app/alquds/page.module.css";

const SCROLL_ENTER = 48;
const SCROLL_EXIT = 12;

export function AlQudsHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled((current) =>
        current ? window.scrollY > SCROLL_EXIT : window.scrollY > SCROLL_ENTER,
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <Link href="/alquds" className={styles.brand} aria-label="Al-Quds home">
        <Image
          src="/images/alquds/alquds-lockup-light.png"
          alt=""
          width={1151}
          height={400}
          loading="eager"
          sizes="(max-width: 767px) 110px, 150px"
        />
      </Link>
      <nav aria-label="Restaurant navigation">
        <a href="#about">Our story</a>
        <a href="#cuisine">Cuisine</a>
        <a href="#visit">Visit us</a>
        <a href="#order" className={styles.navOrder}>
          Order online <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
