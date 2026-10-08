"use client";

import { useState } from "react";
import Image from "next/image";
import { restaurantDishes, type AlQudsDish } from "@/data/alquds";
import styles from "@/app/alquds/page.module.css";

const ALL = "All dishes";

const categories = [...new Set(restaurantDishes.map((dish) => dish.category))];

export function RestaurantMenu() {
  const [category, setCategory] = useState<string>(ALL);
  const shown = categories.filter(
    (item) => category === ALL || item === category,
  );
  const count = restaurantDishes.filter(
    (dish) => category === ALL || dish.category === category,
  ).length;

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter cuisine">
        {[ALL, ...categories].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className={styles.srOnly} role="status">
        {count} {count === 1 ? "dish" : "dishes"} shown
      </p>
      {shown.map((group) => (
        <DishGroup
          key={group}
          title={group}
          dishes={restaurantDishes.filter((dish) => dish.category === group)}
        />
      ))}
    </>
  );
}

function DishGroup({ title, dishes }: { title: string; dishes: AlQudsDish[] }) {
  return (
    <div className={styles.menuGroup}>
      <h3 className={styles.menuGroupTitle}>{title}</h3>
      <div
        className={styles.dishes}
        data-count={dishes.length}
        data-scroll-stagger
      >
        {dishes.map((dish) => (
          <article className={styles.dish} key={dish.id} data-scroll-item>
            <div className={styles.dishPhoto}>
              <Image
                src={dish.image}
                alt={dish.alt}
                fill
                sizes="(max-width: 767px) 80vw, 300px"
                style={dish.focus ? { objectPosition: dish.focus } : undefined}
              />
            </div>
            <h4>{dish.name}</h4>
            <p>{dish.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
