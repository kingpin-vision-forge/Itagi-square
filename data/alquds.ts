export type AlQudsDishCategory =
  | "Arabian Mandi"
  | "Biryani"
  | "Starters & Indo-Chinese"
  | "Desserts & Drinks";

export interface AlQudsDish {
  id: string;
  name: string;
  category: AlQudsDishCategory;
  description: string;
  image: string;
  alt: string;
  /** CSS object-position for the round crop. */
  focus?: string;
}

// A selection photographed at the restaurant. Add the owner's complete menu when supplied.
export const restaurantDishes: AlQudsDish[] = [
  {
    id: "chicken-mandi",
    name: "Chicken Mandi",
    category: "Arabian Mandi",
    description:
      "Slow-roasted chicken over fragrant rice, finished with almonds, cashews and raisins.",
    image: "/images/alquds/19.jpeg",
    alt: "Chicken mandi on a brass platter of rice with almonds and raisins",
    focus: "50% 72%",
  },
  {
    id: "mutton-mandi",
    name: "Mutton Mandi",
    category: "Arabian Mandi",
    description:
      "Tender mutton in a mild, creamy gravy, served over nutted mandi rice.",
    image: "/images/alquds/21.jpeg",
    alt: "Mutton in a creamy gravy served over mandi rice with dry fruits",
    focus: "50% 76%",
  },
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    category: "Biryani",
    description:
      "A generous platter of layered biryani with raita, salan, lemon and onion.",
    image: "/images/alquds/27.jpeg",
    alt: "Chicken biryani platter with raita, salan, lemon and onion",
    focus: "50% 55%",
  },
  {
    id: "handi-biryani",
    name: "Handi Biryani",
    category: "Biryani",
    description:
      "Biryani served in its own handi, with cooling raita and a spiced salan.",
    image: "/images/alquds/28.jpeg",
    alt: "Biryani in a steel handi with raita and salan on the side",
    focus: "45% 50%",
  },
  {
    id: "pepper-chicken",
    name: "Pepper Chicken Dry",
    category: "Starters & Indo-Chinese",
    description:
      "Pan-tossed chicken coated in cracked pepper, herbs and spring onion.",
    image: "/images/alquds/22.jpeg",
    alt: "Pepper chicken dry on an oval plate garnished with spring onion",
    focus: "50% 62%",
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken",
    category: "Starters & Indo-Chinese",
    description:
      "Glossy, wok-tossed chicken with onion, spring onion and a chilli kick.",
    image: "/images/alquds/18.jpeg",
    alt: "Chilli chicken with onion and spring onion on a white plate",
    focus: "50% 68%",
  },
  {
    id: "dragon-chicken",
    name: "Dragon Chicken",
    category: "Starters & Indo-Chinese",
    description:
      "Crisp chicken tossed with peppers, onion and a sweet-spicy glaze.",
    image: "/images/alquds/25.jpeg",
    alt: "Dragon chicken with peppers and onion on a black plate, seen from above",
  },
  {
    id: "hakka-noodles",
    name: "Hakka Noodles",
    category: "Starters & Indo-Chinese",
    description:
      "Wok-tossed noodles with shredded cabbage, carrot and spring onion.",
    image: "/images/alquds/24.jpeg",
    alt: "Hakka noodles with spring onion in a black boat-shaped dish",
    focus: "40% 55%",
  },
  {
    id: "shahi-tukda",
    name: "Shahi Tukda",
    category: "Desserts & Drinks",
    description:
      "Golden bread soaked in rich rabdi, topped with nuts and rose petals.",
    image: "/images/alquds/20.jpeg",
    alt: "Shahi tukda in rabdi topped with nuts and rose petals",
    focus: "60% 55%",
  },
  {
    id: "gajar-halwa",
    name: "Gajar Halwa",
    category: "Desserts & Drinks",
    description: "Warm carrot halwa, slow-cooked and finished with almonds.",
    image: "/images/alquds/23.jpeg",
    alt: "Gajar halwa in a footed glass bowl surrounded by almonds and cashews",
    focus: "50% 58%",
  },
  {
    id: "pomegranate-cooler",
    name: "Pomegranate Cooler",
    category: "Desserts & Drinks",
    description:
      "A chilled pomegranate drink with fresh mint and a twist of citrus.",
    image: "/images/alquds/26.jpeg",
    alt: "Pomegranate cooler in a wine glass garnished with mint",
    focus: "50% 50%",
  },
];

export interface OrderPlatform {
  name: "Zomato" | "Swiggy";
  url: string | null;
  logo: string;
}

// Restaurant-specific links supplied by the owner. Logos from Simple Icons.
export const orderPlatforms: OrderPlatform[] = [
  {
    name: "Zomato",
    url: "https://link.zomato.com/xqzv/rshare?id=14707420630563ed7",
    logo: "/images/alquds/zomato.svg",
  },
  {
    name: "Swiggy",
    url: "https://www.swiggy.com/direct/brand/819224?source=swiggy-direct&subSource=generic",
    logo: "/images/alquds/swiggy.svg",
  },
];
