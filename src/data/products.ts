import productAvakaya from "@/assets/product-avakaya.png";
import productLemonPickle from "@/assets/product-lemon-pickle.jpg";
import productGongura from "@/assets/product-gongura.jpg";
import productTomatoPickle from "@/assets/product-tomato-pickle.jpg";
import productRiceSandige from "@/assets/product-rice-sandige.jpg";
import productUradOdiyalu from "@/assets/product-urad-odiyalu.jpg";
import productSaggubiyyam from "@/assets/product-saggubiyyam.jpg";
import productKandiPodi from "@/assets/product-kandi-podi.png";
import productNuvvulaPodi from "@/assets/product-nuvvula-podi.png";
import productKarapodi from "@/assets/product-karapodi.png";
import productChittiKaja from "@/assets/product-chitti-kaja.png";
import productSambharPodi from "@/assets/product-sambhar-podi.png";
import productBellamGavvalu from "@/assets/product-bellam-gavvalu.jpg";
import productChegodilu from "@/assets/product-chegodilu.jpg";
import productRavvaLaddu from "@/assets/product-ravva-laddu.png";

import videoAvakaya from "@/assets/product-avakaya.mp4";
import videoLemonPickle from "@/assets/product-lemon-pickle.mp4";
import videoGongura from "@/assets/product-gongura.mp4";
import videoTomatoPickle from "@/assets/product-tomato-pickle.mp4";
import videoRiceSandige from "@/assets/product-rice-sandige.mp4";
import videoUradOdiyalu from "@/assets/product-urad-odiyalu.mp4";
import videoSaggubiyyam from "@/assets/product-saggubiyyam.mp4";
import videoKandiPodi from "@/assets/product-kandi-podi.mp4";
import videoNuvvulaPodi from "@/assets/product-nuvvula-podi.mp4";
import videoKarapodi from "@/assets/product-karapodi.mp4";
import videoRedChilliPowder from "@/assets/product-red-chilli-powder.mp4";
import videoBellamGavvalu from "@/assets/product-bellam-gavvalu.mp4";
import videoChegodilu from "@/assets/product-chegodilu.mp4";

export interface Product {
  id: string;
  name: string;
  category: "pickles" | "odiyalu" | "podilu" | "special";
  price: number;
  weight: string;
  image: string;
  hoverImage?: string;
  hoverVideo?: string;
  video: string;
  description: string;
  ingredients: string;
  shelfLife: string;
  storage: string;
  spiceLevel: "mild" | "medium" | "hot";
  isVeg: boolean;
  inStock?: boolean;
}

export const categories = [
  { id: "pickles", name: "Pickles", slug: "pickles" },
  { id: "odiyalu", name: "Odiyalu", slug: "odiyalu" },
  { id: "podilu", name: "Podilu", slug: "podilu" },
  { id: "special", name: "Special Home Foods", slug: "special" },
] as const;

export const products: Product[] = [
  // === PICKLES ===
  {
    id: "p1",
    name: "Avakaya Mango Pickle",
    category: "pickles",
    price: 299,
    weight: "500g",
    image: productAvakaya,
    video: videoAvakaya,
    description: "Traditional Andhra-style raw mango pickle made with hand-pounded spices, mustard, and cold-pressed sesame oil. A fiery, tangy delight passed down through generations.",
    ingredients: "Raw mango, red chili powder, mustard seeds, fenugreek, salt, sesame oil",
    shelfLife: "12 months",
    storage: "Store in a cool, dry place. Use a dry spoon.",
    spiceLevel: "hot",
    isVeg: true,
  },
  {
    id: "p2",
    name: "Lemon Pickle",
    category: "pickles",
    price: 249,
    weight: "400g",
    image: productLemonPickle,
    video: videoLemonPickle,
    description: "Sun-ripened lemons marinated in a fragrant blend of spices. Perfectly tangy and mildly spiced for everyday meals.",
    ingredients: "Lemon, red chili powder, turmeric, mustard seeds, salt, sesame oil",
    shelfLife: "10 months",
    storage: "Store in a cool, dry place.",
    spiceLevel: "medium",
    isVeg: true,
  },
  {
    id: "p3",
    name: "Gongura Pickle",
    category: "pickles",
    price: 279,
    weight: "500g",
    image: productGongura,
    video: videoGongura,
    description: "Sorrel leaves (gongura) cooked with green chilies and tempered with garlic. An authentic Andhra specialty.",
    ingredients: "Gongura leaves, green chili, garlic, mustard, salt, oil",
    shelfLife: "8 months",
    storage: "Refrigerate after opening.",
    spiceLevel: "hot",
    isVeg: true,
  },
  {
    id: "p4",
    name: "Tomato Pickle",
    category: "pickles",
    price: 199,
    weight: "350g",
    image: productTomatoPickle,
    video: videoTomatoPickle,
    description: "Sweet and tangy tomato pickle with a hint of jaggery. A family favorite that pairs well with rice and roti.",
    ingredients: "Tomato, jaggery, red chili, mustard, salt, oil",
    shelfLife: "6 months",
    storage: "Refrigerate after opening.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p13",
    name: "Allam Pachadi",
    category: "pickles",
    price: 229,
    weight: "300g",
    image: productGongura,
    video: videoGongura,
    description: "Spicy ginger pickle with tamarind and jaggery. A zesty condiment that adds warmth to any meal.",
    ingredients: "Ginger, tamarind, jaggery, red chili, mustard, sesame oil",
    shelfLife: "8 months",
    storage: "Store in a cool, dry place.",
    spiceLevel: "hot",
    isVeg: true,
  },
  {
    id: "p14",
    name: "Amla Pickle",
    category: "pickles",
    price: 259,
    weight: "400g",
    image: productLemonPickle,
    video: videoLemonPickle,
    description: "Indian gooseberry pickle rich in Vitamin C. Tangy, mildly spiced, and incredibly good for immunity.",
    ingredients: "Amla, red chili, mustard, fenugreek, salt, sesame oil",
    shelfLife: "10 months",
    storage: "Store in an airtight container.",
    spiceLevel: "medium",
    isVeg: true,
  },
  {
    id: "p15",
    name: "Chintapandu Pachadi",
    category: "pickles",
    price: 219,
    weight: "350g",
    image: productTomatoPickle,
    video: videoTomatoPickle,
    description: "Sweet and sour tamarind pickle with a perfect balance of jaggery and spices. A beloved Andhra classic.",
    ingredients: "Tamarind, jaggery, red chili, cumin, mustard, salt, oil",
    shelfLife: "8 months",
    storage: "Store in a cool, dry place.",
    spiceLevel: "mild",
    isVeg: true,
  },

  // === ODIYALU ===
  {
    id: "p5",
    name: "Rice Sandige",
    category: "odiyalu",
    price: 189,
    weight: "250g",
    image: productRiceSandige,
    video: videoRiceSandige,
    description: "Crispy sun-dried rice crackers made from a special rice batter. Perfect as a crunchy side dish when deep fried.",
    ingredients: "Rice flour, cumin, sesame seeds, salt",
    shelfLife: "6 months",
    storage: "Store in an airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p6",
    name: "Urad Dal Odiyalu",
    category: "odiyalu",
    price: 219,
    weight: "250g",
    image: productUradOdiyalu,
    video: videoUradOdiyalu,
    description: "Sun-dried urad dal dumplings with black pepper and curry leaves. Fry for a golden, crunchy accompaniment.",
    ingredients: "Urad dal, black pepper, curry leaves, salt",
    shelfLife: "8 months",
    storage: "Store in an airtight container in a cool place.",
    spiceLevel: "medium",
    isVeg: true,
  },
  {
    id: "p7",
    name: "Saggubiyyam Odiyalu",
    category: "odiyalu",
    price: 199,
    weight: "200g",
    image: productSaggubiyyam,
    video: videoSaggubiyyam,
    description: "Delicate sago-based sun-dried wafers. Light, airy, and incredibly crispy when fried.",
    ingredients: "Sago, cumin, green chili, salt",
    shelfLife: "6 months",
    storage: "Store in an airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p16",
    name: "Pesara Odiyalu",
    category: "odiyalu",
    price: 209,
    weight: "250g",
    image: productUradOdiyalu,
    video: videoUradOdiyalu,
    description: "Green gram sun-dried dumplings with a peppery kick. A protein-rich snack that fries up beautifully crispy.",
    ingredients: "Green gram dal, black pepper, cumin, curry leaves, salt",
    shelfLife: "8 months",
    storage: "Store in an airtight container.",
    spiceLevel: "medium",
    isVeg: true,
  },
  {
    id: "p17",
    name: "Minapa Sandige",
    category: "odiyalu",
    price: 229,
    weight: "250g",
    image: productRiceSandige,
    video: videoRiceSandige,
    description: "Urad dal-based sun-dried crackers with a soft, bubbly texture when fried. A classic Andhra accompaniment.",
    ingredients: "Urad dal, rice flour, cumin, salt",
    shelfLife: "6 months",
    storage: "Store in a dry, airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p18",
    name: "Corn Odiyalu",
    category: "odiyalu",
    price: 179,
    weight: "200g",
    image: productSaggubiyyam,
    video: videoSaggubiyyam,
    description: "Crispy corn-based sun-dried wafers with a subtle sweetness. A modern twist on a traditional favorite.",
    ingredients: "Corn flour, rice flour, sesame seeds, salt",
    shelfLife: "6 months",
    storage: "Store in an airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },

  // === PODILU ===
  {
    id: "p8",
    name: "Kandi Podi",
    category: "podilu",
    price: 179,
    weight: "200g",
    image: productKandiPodi,
    video: videoKandiPodi,
    description: "Roasted toor dal powder with red chilies and garlic. Mix with rice and ghee for an instant, flavorful meal.",
    ingredients: "Toor dal, red chili, garlic, salt",
    shelfLife: "4 months",
    storage: "Store in an airtight container. Refrigerate for longer freshness.",
    spiceLevel: "medium",
    isVeg: true,
  },
  {
    id: "p9",
    name: "Red Chilli Powder",
    category: "podilu",
    price: 199,
    weight: "200g",
    image: productNuvvulaPodi,
    video: videoRedChilliPowder,
    description: "Fragrant sesame seed powder with dry red chilies. Rich in nutrients, perfect with hot rice and a drizzle of ghee.",
    ingredients: "Sesame seeds, red chili, salt, cumin",
    shelfLife: "4 months",
    storage: "Store in an airtight container.",
    spiceLevel: "medium",
    isVeg: true,
  },
  {
    id: "p10",
    name: "Karapodi",
    category: "podilu",
    price: 159,
    weight: "200g",
    image: productKarapodi,
    video: videoKarapodi,
    description: "Spicy gunpowder chutney podi made with roasted gram and red chilies. A staple in every South Indian household.",
    ingredients: "Roasted gram, red chili, garlic, tamarind, salt",
    shelfLife: "5 months",
    storage: "Store in an airtight container.",
    spiceLevel: "hot",
    isVeg: true,
  },
  {
    id: "p19",
    name: "Sambhar Podi",
    category: "podilu",
    price: 189,
    weight: "200g",
    image: productSambharPodi,
    video: videoKandiPodi,
    description: "Roasted peanut powder with red chilies and garlic. Crunchy, nutty, and irresistibly flavorful with hot rice.",
    ingredients: "Peanuts, red chili, garlic, cumin, salt",
    shelfLife: "3 months",
    storage: "Refrigerate for best freshness.",
    spiceLevel: "medium",
    isVeg: true,
  },
  {
    id: "p20",
    name: "Kobbari Podi",
    category: "podilu",
    price: 209,
    weight: "200g",
    image: productNuvvulaPodi,
    video: videoNuvvulaPodi,
    description: "Dry coconut chutney powder with a mildly sweet, nutty flavor. A South Indian breakfast essential for idli and dosa.",
    ingredients: "Dry coconut, roasted gram, red chili, salt",
    shelfLife: "3 months",
    storage: "Store in an airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p21",
    name: "Curry Leaf Podi",
    category: "podilu",
    price: 169,
    weight: "150g",
    image: productKarapodi,
    video: videoKarapodi,
    description: "Aromatic curry leaf powder with urad dal and red chilies. Packed with iron and flavor — a health-boosting addition to meals.",
    ingredients: "Curry leaves, urad dal, red chili, salt, oil",
    shelfLife: "4 months",
    storage: "Store in an airtight container.",
    spiceLevel: "medium",
    isVeg: true,
  },

  // === SPECIAL ===
  {
    id: "p11",
    name: "Bellam Gavvalu",
    category: "special",
    price: 349,
    weight: "300g",
    image: productBellamGavvalu,
    video: videoBellamGavvalu,
    description: "Shell-shaped sweet snack coated in jaggery syrup. A beloved traditional Andhra sweet perfect for festivals.",
    ingredients: "Wheat flour, jaggery, ghee, cardamom",
    shelfLife: "2 months",
    storage: "Store in an airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p12",
    name: "RAVVA LADDU",
    category: "special",
    price: 249,
    weight: "250g",
    image: productRavvaLaddu,
    video: videoChegodilu,
    description: "Crunchy ring-shaped savory snack made with rice flour and sesame seeds. The perfect tea-time companion.",
    ingredients: "Rice flour, sesame seeds, cumin, butter, salt",
    shelfLife: "3 months",
    storage: "Store in an airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p22",
    name: "CHITTI KAJA",
    category: "special",
    price: 399,
    weight: "300g",
    image: productChittiKaja,
    video: videoBellamGavvalu,
    description: "Traditional deep-fried rice flour sweet soaked in jaggery. A must-have during Sankranti and festive occasions.",
    ingredients: "Rice flour, jaggery, sesame seeds, ghee, cardamom",
    shelfLife: "1 month",
    storage: "Store in an airtight container at room temperature.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p23",
    name: "Murukulu",
    category: "special",
    price: 279,
    weight: "250g",
    image: productChegodilu,
    video: videoChegodilu,
    description: "Crispy spiral-shaped savory snack made from rice and urad dal flours. A crunchy, addictive snack for every occasion.",
    ingredients: "Rice flour, urad dal flour, sesame seeds, cumin, butter, salt",
    shelfLife: "3 months",
    storage: "Store in an airtight container.",
    spiceLevel: "mild",
    isVeg: true,
  },
  {
    id: "p24",
    name: "Pakam Undalu",
    category: "special",
    price: 329,
    weight: "300g",
    image: productBellamGavvalu,
    video: videoBellamGavvalu,
    description: "Sweet jaggery and sesame seed balls — a nutritious energy-packed traditional snack loved by all ages.",
    ingredients: "Sesame seeds, jaggery, dry coconut, cardamom",
    shelfLife: "2 months",
    storage: "Store in a cool, dry place.",
    spiceLevel: "mild",
    isVeg: true,
  },
];
