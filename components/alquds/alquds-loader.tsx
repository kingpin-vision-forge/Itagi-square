"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/alquds/page.module.css";

// Long enough for the logo to register; capped so a slow image never traps the visitor.
const MIN_VISIBLE = 1600;
const MIN_VISIBLE_REDUCED = 500;
const MAX_VISIBLE = 4500;
const EXIT_DURATION = 900;

type LoaderState = "loading" | "leaving" | "done";

export function AlQudsLoader() {
  const [state, setState] = useState<LoaderState>("loading");

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const started = performance.now();
    const timers: number[] = [];
    let finished = false;

    root.style.overflow = "hidden";

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(
        0,
        (reduced ? MIN_VISIBLE_REDUCED : MIN_VISIBLE) -
          (performance.now() - started),
      );
      timers.push(
        window.setTimeout(() => {
          setState("leaving");
          root.style.overflow = "";
          root.dataset.alqudsReady = "true";
          window.dispatchEvent(new Event("alquds:ready"));
          timers.push(
            window.setTimeout(
              () => setState("done"),
              reduced ? 300 : EXIT_DURATION,
            ),
          );
        }, wait),
      );
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    timers.push(window.setTimeout(finish, MAX_VISIBLE));

    return () => {
      window.removeEventListener("load", finish);
      timers.forEach(window.clearTimeout);
      root.style.overflow = "";
      delete root.dataset.alqudsReady;
    };
  }, []);

  if (state === "done") return null;

  return (
    <div
      className={styles.loader}
      data-alquds-loader
      data-state={state}
      role="status"
      aria-live="polite"
    >
      <div className={styles.loaderInner}>
        <Image
          src="/images/alquds/alquds-logo-light.png"
          alt=""
          width={1581}
          height={1913}
          preload
          sizes="(max-width: 767px) 190px, 240px"
          className={styles.loaderLogo}
        />
        <span className={styles.loaderLine} aria-hidden="true" />
      </div>
      <span className={styles.srOnly}>
        {state === "loading" ? "Loading Al-Quds" : "Al-Quds is ready"}
      </span>
      {/* Without JavaScript the loader would never leave, so hide it outright. */}
      <noscript>
        <style>{`[data-alquds-loader]{display:none!important}`}</style>
      </noscript>
    </div>
  );
}
