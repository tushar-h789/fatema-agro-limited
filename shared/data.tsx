import sorisaTel1L2L5L from "../src/public/Images/tel/sorisa-tel/sorisa-tel-1L-2L-5L.png";
import product2 from "../src/public/Images/tel/narikel-tel/narikel-tel-01.png";
import product3 from "../src/public/Images/gur/khejur-gur/khejur-jhola.png";
// import product4 from "../src/public/Images/product-4.png";
// import product5 from "../src/public/Images/product-5.png";
// import product6 from "../src/public/Images/product-6.png";
import goru from "../src/public/Images/mangso/goru/goru-mangso-1kg-01.png";
import chagol from "../src/public/Images/mangso/khasi/khasir-mangso-01.jpg";
import patiHas from "../src/public/Images/mangso/has/pati-has-01.jpg";
import rajHas from "../src/public/Images/mangso/has/raj-has.jpg";
import murgi from "../src/public/Images/mangso/chiken/deshi-murgi.jpeg";
import koyelPakhi from "../src/public/Images/mangso/chiken/koel-pakhi.jpg";
import PeraSondeshImg from "../src/public/Images/desert/pera-sondesh/pera-sondesh.jpg";
import samsung32 from "../src/public/Images/tv/Samsung 32″ Smart HD TV  UA32T4400AR.jpg";
import samsung43 from "../src/public/Images/tv/Samsung 43″ 4K Smart UHD TV.jpg";
import samsung43Crystal from "../src/public/Images/tv/free gift - Samsung 43″ Crystal 4K UHD Smart TV.jpg";
import haier32 from "../src/public/Images/tv/Haier 32 Bezel Less Google TV.webp";
import haier43FHD from "../src/public/Images/tv/Haier H43K85FFX 43 Inch FHD Google TV.webp";
import haier43QLED from "../src/public/Images/tv/Haier H43S80EUX 43-Inch QLED 4K Android Google TV.webp";
import haier32Hcast from "../src/public/Images/tv/32 inch H-CAST SERIES LED TV.webp";
import siko32D7 from "../src/public/Images/tv/SIKO 32″ SMART TV-2GB  32D7.jpg";
import siko32Q06 from "../src/public/Images/tv/SIKO 32″ SMART TV-2GB  32Q06.jpg";
import acInverter from "../src/public/Images/ac/1.5 ton, Inverter. 49999.jpg";
import acNonInverter from "../src/public/Images/ac/1.5 Ton, Non Inverter,44499.jpg";

import { StaticImageData } from "next/image";

// Enum for category IDs
export enum CategoryId {
  Oil = "1",
  Jaggery = "2",
  Mango = "3",
  Meat = "4",
  Fish = "5",
  Spices = "6",
  Ghee = "7",
  Desart = "8",
  TV = "9",
  AC = "10",
}

// Enum for sub-category IDs
export enum SubCategoryId {
  // Oil subcategories
  MustardOil = "1.1",
  CoconutOil = "1.2",
  // Jaggery subcategories
  DatePalmJaggery = "2.1",
  PalmJaggery = "2.2",
  CaneJaggery = "2.3",
  // Mango subcategories
  Rupali = "3.1",
  Fazli = "3.2",
  Langra = "3.3",
  Gopalbhog = "3.4",
  Khirsapat = "3.5",
  Amrapali = "3.6",
  Subarnarekha = "3.7",
  Mishridana = "3.8",
  Kachamitha = "3.9",
  Baromasi = "3.10",
  GopalKhas = "3.11",
  Haribhanga = "3.12",
  // Meat subcategories
  Cow = "4.1",
  Goat = "4.2",
  RamGoat = "4.3",
  Dumbo = "4.4",
  Buffalo = "4.5",
  Duck = "4.6",
  RajDuck = "4.7",
  DesiChicken = "4.8",
  PakistaniChicken = "4.9",
  // Fish subcategories
  Rui = "5.1",
  Katla = "5.2",
  Tilapia = "5.3",
  DeshiChitol = "5.4",
  Koi = "5.5",
  Shing = "5.6",
  Pabda = "5.7",
  Boal = "5.8",
  Tengra = "5.9",
  Ilish = "5.10",
  Kalibaush = "5.11",
  Puti = "5.12",
  Magur = "5.13",
  Pangash = "5.14",
  Shol = "5.15",
  NodirMach = "5.16",
  BilerMach = "5.17",
  ChaserMach = "5.18",
  // Spices subcategories
  Cumin = "6.1",
  TurmericPowder = "6.2",
  ChiliPowder = "6.3",
  DryChili = "6.4",
  // Ghee subcategories
  PureGhee = "7.1",
  PeraSondesh = "8.1",
  // TV subcategories
  Samsung = "9.1",
  Samsung43 = "9.2",
  Samsung43Crystal = "9.3",
  Haier = "9.4",
  HaierQLED = "9.5",
  HaierHcast = "9.6",
  Siko = "9.7",
  // AC subcategories
  HaierAC = "10.1",
}

// Product interface
export interface Product {
  id: string;
  path: string;
  label: string;
  title: string;
  categoryId: CategoryId;
  subCategoryId: SubCategoryId;
  subCategoryName: string;
  price: number;
  quantity?: string;
  size?: string;
  description: string;
  image: string | StaticImageData;
}

// Subcategory structure
export interface SubCategory {
  id: string;
  label: string;
  name: string;
  path: string;
  image: string | StaticImageData;
  products: Product[];
}

// Category structure with subcategories
export interface Category {
  id: string;
  label: string;
  name: string;
  path: string;
  subCategories: SubCategory[];
}

// Data
export const categories: Category[] = [
  {
    id: CategoryId.Oil,
    label: "Tel",
    name: "তেল (Oil)",
    path: "/tel",
    subCategories: [
      {
        id: SubCategoryId.MustardOil,
        label: "Sorisa Tel",
        name: "সরিষার তেল (Mustard Oil)",
        path: "/tel/sorisa-tel",
        image: sorisaTel1L2L5L,
        products: [
          {
            id: "101",
            path: "/tel/sorisa-tel",
            label: "khati sorisar tel",
            title: "খাঁটি সরিষার তেল (Pure Mustard Oil)",
            categoryId: CategoryId.Oil,
            subCategoryId: SubCategoryId.MustardOil,
            subCategoryName: "সরিষার তেল",
            price: 240,
            quantity: "1 কেজি",
            description:
              "সরিষার তেল দক্ষিণ এশিয়ার রান্নাঘরের একটি গুরুত্বপূর্ণ উপাদান, যা শুধুমাত্র স্বাদের জন্য নয়, বরং স্বাস্থ্যগত উপকারিতার জন্যও প্রশংসিত। সরিষার বীজ থেকে নিষ্কাশিত এই তেল ওমেগা-৩ ফ্যাটি অ্যাসিড সমৃদ্ধ, যা হৃদরোগ প্রতিরোধে সাহায্য করে। এর বিশেষ পুষ্টিগুণ খাবারের স্বাদকে বাড়িয়ে তোলে এবং বিভিন্ন রান্নার পদ্ধতিতে ব্যবহৃত হয়, যেমন ভাজা, তলায় ভাজা এবং সালাদ ড্রেসিং। সরিষার তেল হজম শক্তি বাড়ানোর পাশাপাশি শ্বাসকষ্টের জন্যও কার্যকর। তেলের অ্যান্টিব্যাকটেরিয়াল গুণ ত্বক ও চুলের যত্নেও সাহায্য করে। প্রচুর মানুষ এই তেলকে ম্যাসাজের জন্য ব্যবহার করেন, যা রক্ত চলাচল উন্নত করতে সাহায্য করে এবং পুষ্টি প্রদান করে। রান্না বা চিকিৎসার জন্য ব্যবহার করা হোক, সরিষার তেল আমাদের খাদ্যতালিকায় একটি অপরিহার্য উপাদান হিসেবে বিবেচিত হয়, যা তার বহুমুখীতা এবং পুষ্টিগুণের জন্য বিখ্যাত।",
            image: sorisaTel1L2L5L,
          },
          // {
          //   id: "102",
          //   path: "/tel/sorisa-tel",
          //   label: "khati sorisar tel",
          //   title: "ঘানি ভাঙ্গা খাঁটি সরিষার তেল (Pure Mustard Oil)",
          //   categoryId: CategoryId.Oil,
          //   subCategoryId: SubCategoryId.MustardOil,
          //   subCategoryName: "সরিষার তেল",
          //   price: 300,
          //   quantity: "1 কেজি",
          //   description:
          //     "সরিষার তেল দক্ষিণ এশিয়ার রান্নাঘরের একটি গুরুত্বপূর্ণ উপাদান, যা শুধুমাত্র স্বাদের জন্য নয়, বরং স্বাস্থ্যগত উপকারিতার জন্যও প্রশংসিত। সরিষার বীজ থেকে নিষ্কাশিত এই তেল ওমেগা-৩ ফ্যাটি অ্যাসিড সমৃদ্ধ, যা হৃদরোগ প্রতিরোধে সাহায্য করে। এর বিশেষ পুষ্টিগুণ খাবারের স্বাদকে বাড়িয়ে তোলে এবং বিভিন্ন রান্নার পদ্ধতিতে ব্যবহৃত হয়, যেমন ভাজা, তলায় ভাজা এবং সালাদ ড্রেসিং। সরিষার তেল হজম শক্তি বাড়ানোর পাশাপাশি শ্বাসকষ্টের জন্যও কার্যকর। তেলের অ্যান্টিব্যাকটেরিয়াল গুণ ত্বক ও চুলের যত্নেও সাহায্য করে। প্রচুর মানুষ এই তেলকে ম্যাসাজের জন্য ব্যবহার করেন, যা রক্ত চলাচল উন্নত করতে সাহায্য করে এবং পুষ্টি প্রদান করে। রান্না বা চিকিৎসার জন্য ব্যবহার করা হোক, সরিষার তেল আমাদের খাদ্যতালিকায় একটি অপরিহার্য উপাদান হিসেবে বিবেচিত হয়, যা তার বহুমুখীতা এবং পুষ্টিগুণের জন্য বিখ্যাত।",
          //   image: sorisaTel1L2L5L,
          // },
        ],
      },
      {
        id: SubCategoryId.CoconutOil,
        label: "Narikal Tel",
        name: "নারিকেল তেল (Coconut Oil)",
        path: "/tel/narikel-tel",
        image: product2,
        products: [
          {
            id: "109",
            path: "/tel/narikel-tel",
            label: "khati narikel tel",
            title: "খাঁটি নারিকেল তেল (Pure Coconut Oil)",
            categoryId: CategoryId.Oil,
            subCategoryId: SubCategoryId.CoconutOil,
            subCategoryName: "নারিকেল তেল",
            price: 950,
            quantity: "1 কেজি",
            description: "নারিকেল তেলের বিস্তারিত বর্ণনা।",
            image: product2,
          },
          // {
          //   id: "110",
          //   path: "/tel/narikel-tel",
          //   label: "khati narikel tel",
          //   title: "খাঁটি নারিকেল তেল (Pure Coconut Oil)",
          //   categoryId: CategoryId.Oil,
          //   subCategoryId: SubCategoryId.CoconutOil,
          //   subCategoryName: "নারিকেল তেল",
          //   price: 300,
          //   quantity: "1 কেজি",
          //   description: "নারিকেল তেলের বিস্তারিত বর্ণনা।",
          //   image: product2,
          // },
        ],
      },
    ],
  },
  //gur
  {
    id: CategoryId.Jaggery,
    label: "Gur",
    name: "গুড় (Jaggery)",
    path: "/gur",
    subCategories: [
      {
        id: SubCategoryId.DatePalmJaggery,
        label: "Khejur Gur",
        name: "খেজুর গুড় (Date Palm Jaggery)",
        path: "/gur/khejur-gur",
        image: product3,
        products: [
          {
            id: "201",
            path: "/gur/khejur-gur",
            label: "Lali/ Jhola Khejur Gur",
            title: "লালি/ ঝোলা খেজুর গুড়",
            categoryId: CategoryId.Jaggery,
            subCategoryId: SubCategoryId.DatePalmJaggery,
            subCategoryName: "খেজুর গুড়",
            price: 300,
            quantity: "1 কেজি",
            image: product3,
            description: "লালি/ ঝোলা খেজুর গুড়ের বিস্তারিত বর্ণনা।",
          },
          // {
          //   id: "202",
          //   path: "/gur/khejur-gur",
          //   label: "Danadar Khejur Gur",
          //   title: "দানাদার খেজুর গুড়",
          //   categoryId: CategoryId.Jaggery,
          //   subCategoryId: SubCategoryId.DatePalmJaggery,
          //   subCategoryName: "খেজুর গুড়",
          //   price: 300,
          //   quantity: "1 কেজি",
          //   description: "দানাদার খেজুর গুড়ের বিস্তারিত বর্ণনা।",
          //   image: product3,
          // },
          // {
          //   id: "203",
          //   path: "/gur/khejur-gur",
          //   label: "Jhola Danadar Khejur Gur",
          //   title: "ঝোলা দানাদার খেজুর গুড়",
          //   categoryId: CategoryId.Jaggery,
          //   subCategoryId: SubCategoryId.DatePalmJaggery,
          //   subCategoryName: "খেজুর গুড়",
          //   price: 300,
          //   quantity: "1 কেজি",
          //   description: "ঝোলা দানাদার খেজুর গুড়ের বিস্তারিত বর্ণনা।",
          //   image: product3,
          // },
          // {
          //   id: "204",
          //   path: "/gur/khejur-gur",
          //   label: "Patali Khejur Gur",
          //   title: "পাটালি খেজুর গুড়",
          //   categoryId: CategoryId.Jaggery,
          //   subCategoryId: SubCategoryId.DatePalmJaggery,
          //   subCategoryName: "খেজুর গুড়",
          //   price: 300,
          //   quantity: "1 কেজি",
          //   description: "পাটালি খেজুর গুড়ের বিস্তারিত বর্ণনা।",
          //   image: product3,
          // },
        ],
      },
      // {
      //   id: SubCategoryId.PalmJaggery,
      //   label: "Tal Gur",
      //   name: "তালের গুড় (Palm Jaggery)",
      //   path: "/gur/tal-gur",
      //   image: product4,
      //   products: [
      //     {
      //       id: "205",
      //       path: "/gur/tal-gur",
      //       label: "Lali/ Jhola Tal Gur",
      //       title: "লালি/ ঝোলা তালের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.PalmJaggery,
      //       subCategoryName: "তালের গুড়",
      //       price: 250,
      //       quantity: "1 কেজি",
      //       description: "লালি/ ঝোলা তালের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product4,
      //     },
      //     {
      //       id: "206",
      //       path: "/gur/tal-gur",
      //       label: "Danadar Tal Gur",
      //       title: "দানাদার তালের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.PalmJaggery,
      //       subCategoryName: "তালের গুড়",
      //       price: 250,
      //       quantity: "1 কেজি",
      //       description: "দানাদার তালের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product4,
      //     },
      //     {
      //       id: "207",
      //       path: "/gur/tal-gur",
      //       label: "Jhola Danadar Tal Gur",
      //       title: "ঝোলা দানাদার তালের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.PalmJaggery,
      //       subCategoryName: "তালের গুড়",
      //       price: 250,
      //       quantity: "1 কেজি",
      //       description: "ঝোলা দানাদার তালের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product4,
      //     },
      //     {
      //       id: "208",
      //       path: "/gur/tal-gur",
      //       label: "Patali Tal Gur",
      //       title: "পাটালি তালের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.PalmJaggery,
      //       subCategoryName: "তালের গুড়",
      //       price: 300,
      //       quantity: "1 কেজি",
      //       description: "পাটালি তালের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product4,
      //     },
      //   ],
      // },
      // {
      //   id: SubCategoryId.CaneJaggery,
      //   label: "Akh Gur",
      //   name: "আখের গুড় (Cane Jaggery)",
      //   path: "/gur/akh-gur",
      //   image: product5,
      //   products: [
      //     {
      //       id: "209",
      //       path: "/gur/akh-gur",
      //       label: "Lali/ Jhola Akh Gur",
      //       title: "লালি/ ঝোলা আখের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.CaneJaggery,
      //       subCategoryName: "আখের গুড়",
      //       price: 250,
      //       quantity: "1 কেজি",
      //       description: "লালি/ ঝোলা আখের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product5,
      //     },
      //     {
      //       id: "210",
      //       path: "/gur/akh-gur",
      //       label: "Danadar Akh Gur",
      //       title: "দানাদার আখের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.CaneJaggery,
      //       subCategoryName: "আখের গুড়",
      //       price: 250,
      //       quantity: "1 কেজি",
      //       description: "দানাদার আখের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product5,
      //     },
      //     {
      //       id: "211",
      //       path: "/gur/akh-gur",
      //       label: "Jhola Danadar Akh Gur",
      //       title: "ঝোলা দানাদার আখের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.CaneJaggery,
      //       subCategoryName: "আখের গুড়",
      //       price: 250,
      //       quantity: "1 কেজি",
      //       description: "ঝোলা দানাদার আখের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product5,
      //     },
      //     {
      //       id: "212",
      //       path: "/gur/akh-gur",
      //       label: "Patali Akh Gur",
      //       title: "পাটালি আখের গুড়",
      //       categoryId: CategoryId.Jaggery,
      //       subCategoryId: SubCategoryId.CaneJaggery,
      //       subCategoryName: "আখের গুড়",
      //       price: 300,
      //       quantity: "1 কেজি",
      //       description: "পাটালি আখের গুড়ের বিস্তারিত বর্ণনা।",
      //       image: product5,
      //     },
      //   ],
      // },
    ],
  },

  // Mangso
  {
    id: CategoryId.Meat,
    label: "Mangso",
    name: "মাংস (Meat)",
    path: "/mangso",
    subCategories: [
      // goru
      {
        id: SubCategoryId.Cow,
        label: "Goru",
        name: "গরু (Cow)",
        path: "/mangso/deshi-gorur-mangso",
        image: goru,
        products: [
          {
            id: "401",
            path: "/mangso/deshi-gorur-mangso",
            label: "Deshi Goru",
            title: "দেশি গরুর মাংস",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.Cow,
            subCategoryName: "গরু",
            price: 750,
            quantity: "1 কেজি",
            description: "গরুর বিস্তারিত বর্ণনা।",
            image: goru,
          },
          {
            id: "402",
            path: "/mangso/deshi-gorur-mangso",
            label: "Deshi Goru",
            title: "হাইব্রিড গরুর মাংস",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.Cow,
            subCategoryName: "গরু",
            price: 750,
            quantity: "1 কেজি",
            description: "গরুর বিস্তারিত বর্ণনা।",
            image: goru,
          },
        ],
      },
      //chagol
      {
        id: SubCategoryId.Goat,
        label: "Goat",
        name: "ছাগল (Goat)",
        path: "/mangso/deshi-chagoler-mangso",
        image: chagol,
        products: [
          {
            id: "403",
            path: "/mangso/deshi-chagoler-mangso",
            label: "Goru",
            title: "ছাগল",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.Goat,
            subCategoryName: "ছাগল",
            price: 1000,
            quantity: "1 কেজি",
            description: "ছাগল বিস্তারিত বর্ণনা।",
            image: chagol,
          },
          {
            id: "404",
            path: "/mangso/deshi-chagoler-mangso",
            label: "Goru",
            title: "ছাগল",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.Goat,
            subCategoryName: "ছাগল",
            price: 1000,
            quantity: "1 কেজি",
            description: "ছাগল বিস্তারিত বর্ণনা।",
            image: chagol,
          },
        ],
      },
      // has
      {
        id: SubCategoryId.Duck,
        label: "Has",
        name: "হাঁস (Duck)",
        path: "/mangso/deshi-haser-mangso",
        image: patiHas,
        products: [
          {
            id: "405",
            path: "/mangso/deshi-haser-mangso",
            label: "Has",
            title: "দেশি হাঁস",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.Duck,
            subCategoryName: "দেশি হাঁস",
            price: 800,
            quantity: "1 কেজি",
            description:
              "দেশি হাঁস প্রাচীনকাল থেকেই বাংলার অন্যতম গৃহপালিত প্রাণী। হাঁসের মাংস ও ডিম দুটোই খেতে খুবই সুস্বাদু ও অতুলনীয়। ",
            image: patiHas,
          },
          {
            id: "406",
            path: "/mangso/deshi-haser-mangso",
            label: "Has",
            title: "রাজ হাঁস",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.Duck,
            subCategoryName: "রাজ হাঁস",
            price: 850,
            quantity: "1 কেজি",
            description:
              "রাজ হাঁস প্রাচীনকাল থেকেই বাংলার অন্যতম গৃহপালিত প্রাণী। রাজহাঁসের মাংস ও ডিম দুটোই খেতে খুবই সুস্বাদু ও অতুলনীয়। ",
            image: rajHas,
          },
        ],
      },
      //murgi
      {
        id: SubCategoryId.DesiChicken,
        label: "Murgi",
        name: "মুরগি (Chicken)",
        path: "/mangso/deshi-murgir-mangso",
        image: murgi,
        products: [
          {
            id: "407",
            path: "/mangso/deshi-murgir-mangso",
            label: "Murgi",
            title: "দেশি মুরগি",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.DesiChicken,
            subCategoryName: "দেশি মুরগি",
            price: 800,
            quantity: "1 কেজি",
            description:
              "দেশি মুরগি প্রাচীনকাল থেকেই বাংলার অন্যতম গৃহপালিত প্রাণী। মুরগি মাংস ও ডিম দুটোই খেতে খুবই সুস্বাদু ও অতুলনীয়। ",
            image: murgi,
          },
          {
            id: "408",
            path: "/mangso/deshi-murgir-mangso",
            label: "Murgi",
            title: "কোয়েল পাখি",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.DesiChicken,
            subCategoryName: "কোয়েল পাখি",
            price: 750,
            quantity: "1 কেজি",
            description:
              "দেশি মুরগি প্রাচীনকাল থেকেই বাংলার অন্যতম গৃহপালিত প্রাণী। মুরগি মাংস ও ডিম দুটোই খেতে খুবই সুস্বাদু ও অতুলনীয়। ",
            image: koyelPakhi,
          },
        ],
      },
    ],
  },

  //aam
  //   {
  //     id: CategoryId.Mango,
  //     label: "Aam",
  //     name: "আম (Mango)",
  //     path: "/aam",
  //     subCategories: [
  //       {
  //         id: SubCategoryId.Rupali,
  //         label: "Rupali Aam",
  //         name: "রূপালি আম (Rupali Mango)",
  //         path: "/aam/rupali-aam",
  //         image: product5,
  //         products: [
  //           {
  //             id: "301",
  //             path: "/aam/rupali-aam",
  //             label: "Rupali Aam",
  //             title: "রূপালি আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Rupali,
  //             subCategoryName: "রূপালি আম",
  //             price: 120,
  //             quantity: "1 কেজি",
  //             description: "রূপালি আমের বিস্তারিত বর্ণনা।",
  //             image: product5,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Fazli,
  //         label: "Fazil Aam",
  //         name: "ফজলি আম (Fazli Mango)",
  //         path: "/aam/fazli-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "302",
  //             path: "/aam/fazli-aam",
  //             label: "Fazli Mango",
  //             title: "ফজলি আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Fazli,
  //             subCategoryName: "ফজলি আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "ফজলি আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Langra,
  //         label: "Langra Aam",
  //         name: "ল্যাংড়া আম (Langra Mango)",
  //         path: "/aam/langra-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "303",
  //             path: "/aam/langra-aam",
  //             label: "Langra Mango",
  //             title: "ল্যাংড়া আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Langra,
  //             subCategoryName: "ল্যাংড়া আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "ল্যাংড়া আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Gopalbhog,
  //         label: "Gopalbhog Aam",
  //         name: "গোপালভোগ আম (Gopalbhog Mango)",
  //         path: "/aam/gopalvog-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "304",
  //             path: "/aam/gopalvog-aam",
  //             label: "Gopalvog Mango",
  //             title: "গোপালভোগ আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Gopalbhog,
  //             subCategoryName: "গোপালভোগ আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "গোপালভোগ আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Khirsapat,
  //         label: "Khirsapat Aam",
  //         name: "খিরসাপাত আম (Khirsapat Mango)",
  //         path: "/aam/Khirsapat-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "305",
  //             path: "/aam/gopalvog-aam",
  //             label: "Khirsapat Mango",
  //             title: "খিরসাপাত আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Khirsapat,
  //             subCategoryName: "খিরসাপাত আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "খিরসাপাত আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Amrapali,
  //         label: "Amrapali Aam",
  //         name: "আম্রপালি আম (Amrapali Mango)",
  //         path: "/aam/amrapali-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "306",
  //             path: "/aam/amrapali-aam",
  //             label: "Amrapali Mango",
  //             title: "আম্রপালি আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Amrapali,
  //             subCategoryName: "আম্রপালি আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "আম্রপালি আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Subarnarekha,
  //         label: "Subarnarekha Aam",
  //         name: "সুবর্নরেখা আম (Subarnarekha Mango)",
  //         path: "/aam/subarnarekha-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "307",
  //             path: "/aam/subarnarekha-aam",
  //             label: "subarnarekha Mango",
  //             title: "সুবর্নরেখা আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Subarnarekha,
  //             subCategoryName: "সুবর্নরেখা আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "সুবর্নরেখা আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Kachamitha,
  //         label: "Kachamitha Aam",
  //         name: "কাঁচামিঠা আম (Kachamitha Mango)",
  //         path: "/aam/kachamitha-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "308",
  //             path: "/aam/kachamitha-aam",
  //             label: "Amrapali Mango",
  //             title: "কাঁচামিঠা আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Kachamitha,
  //             subCategoryName: "কাঁচামিঠা আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "কাঁচামিঠা আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //       {
  //         id: SubCategoryId.Haribhanga,
  //         label: "Haribhanga Aam",
  //         name: "বারোমাসি আম (Haribhanga Mango)",
  //         path: "/aam/baromasi-aam",
  //         image: product6,
  //         products: [
  //           {
  //             id: "309",
  //             path: "/aam/baromasi-aam",
  //             label: "Haribhanga Mango",
  //             title: "বারোমাসি আম",
  //             categoryId: CategoryId.Mango,
  //             subCategoryId: SubCategoryId.Haribhanga,
  //             subCategoryName: "বারোমাসি আম",
  //             price: 140,
  //             quantity: "1 কেজি",
  //             description: "বারোমাসি আমের বিস্তারিত বর্ণনা।",
  //             image: product6,
  //           },
  //         ],
  //       },
  //     ],
  //   },

  // // Mach
  // {
  //     id: CategoryId.Fish,
  //     label: "Mach",
  //     name: "মাছ (Fish)",
  //     path: "/mach",
  //     subCategories: [
  //         {
  //             id: SubCategoryId.NodirMach,
  //             label: "Nodir Mach",
  //             name: "নদীর মাছ (NodirMach)",
  //             path: "/mach/nodir-mach",
  //             image: product7,
  //             products: [
  //                 {
  //                     id: "501",
  //                     path: "/mach/nodir-mach",
  //                     label: "Nodir Mach",
  //                     title: "নদীর মাছ",
  //                     categoryId: CategoryId.Fish,
  //                     subCategoryId: SubCategoryId.NodirMach,
  //                     subCategoryName: "নদীর মাছ",
  //                     price: 220,
  //                     quantity: "1 কেজি",
  //                     description: "নদীর মাছ বিস্তারিত বর্ণনা।",
  //                     image: product7,
  //                 },

  //             ],
  //         },
  //         {
  //             id: SubCategoryId.BilerMach,
  //             label: "Biler Mach",
  //             name: "বিলের মাছ (BilerMach)",
  //             path: "/mach/biler-mach",
  //             image: product7,
  //             products: [
  //                 {
  //                     id: "502",
  //                     path: "/mach/biler-mach",
  //                     label: "Biler Mach",
  //                     title: "বিলের মাছ",
  //                     categoryId: CategoryId.Fish,
  //                     subCategoryId: SubCategoryId.BilerMach,
  //                     subCategoryName: "বিলের মাছ",
  //                     price: 220,
  //                     quantity: "1 কেজি",
  //                     description: "বিলের মাছ বিস্তারিত বর্ণনা।",
  //                     image: product7,
  //                 },

  //             ],
  //         },
  //         {
  //             id: SubCategoryId.ChaserMach,
  //             label: "Chaser Mach",
  //             name: "চাষের মাছ (ChaserMach)",
  //             path: "/mach/chaser-mach",
  //             image: product7,
  //             products: [
  //                 {
  //                     id: "503",
  //                     path: "/mach/chaser-mach",
  //                     label: "Chaser Mach",
  //                     title: "চাষের মাছ",
  //                     categoryId: CategoryId.Fish,
  //                     subCategoryId: SubCategoryId.ChaserMach,
  //                     subCategoryName: "চাষের মাছ",
  //                     price: 220,
  //                     quantity: "1 কেজি",
  //                     description: "চাষের মাছ বিস্তারিত বর্ণনা।",
  //                     image: product7,
  //                 },

  //             ],
  //         },
  //     ],
  // },
  // //mosla
  // {
  //     id: CategoryId.Spices,
  //     label: "Mosla",
  //     name: "মসলা (Spices)",
  //     path: "/mosla",
  //     subCategories: [
  //         {
  //             id: SubCategoryId.Cumin,
  //             label: "Jira",
  //             name: "জিড়া (Cumin)",
  //             path: "/mosla/jira",
  //             image: product7,
  //             products: [
  //                 {
  //                     id: "601",
  //                     path: "/mosla/jira",
  //                     label: "Taja Jira",
  //                     title: "তাজা জিরা",
  //                     categoryId: CategoryId.Spices,
  //                     subCategoryId: SubCategoryId.Cumin,
  //                     subCategoryName: "জিড়া",
  //                     price: 220,
  //                     quantity: "1 কেজি",
  //                     description: "তাজা জিরার বিস্তারিত বর্ণনা।",
  //                     image: product7,
  //                 },
  //             ],
  //         },
  //     ],
  // },

  // Desert Items
  {
    id: CategoryId.Desart,
    label: "desart",
    name: "মিষ্টি খাবার (Desart)",
    path: "/desart/pera-sondesh",
    subCategories: [
      {
        id: SubCategoryId.PeraSondesh,
        label: "pera sondesh",
        name: "পেরা সন্দেশ (Pera Sondesh)",
        path: "/desart/pera-sondesh",
        image: PeraSondeshImg,
        products: [
          {
            id: "801",
            path: "/desart/pera-sondesh",
            label: "Pera sondesh",
            title: "নওগাঁর বিখ্যাত প্যারা সন্দেশ (Pera Sondesh)",
            categoryId: CategoryId.Desart,
            subCategoryId: SubCategoryId.PeraSondesh,
            subCategoryName: "প্যারা সন্দেশ",
            price: 650,
            quantity: "১ কেজি",
            description:
              "নওগাঁ জেলার গর্ব ঐতিহ্যবাহী প্যারা সন্দেশ। মাত্র ৬৫০ টাকা কেজি। নওগাঁ জেলার সবচেয়ে বিখ্যাত ও জনপ্রিয় মিষ্টি হলো নওগাঁর প্যারা সন্দেশ। ৬ কেজি দুধ দিয়ে বানানো হয় এক কেজি প্যারা সন্দেশ তাই এই সন্দেশের স্বাদ একেবারেই অনন্য।\n\nআপনার সন্তানদের বাইরের আজেবাজে কেমিক্যাল দেওয়া খাবারের পরিবর্তে আমাদের নওগাঁর প্যারা সন্দেশ রাখতে পারেন। আপনার পরিবারের সকল বয়সী মানুষের জন্য খাবারের পছন্দের তালিকায় আমাদের নওগাঁর বিখ্যাত প্যারা সন্দেশ রাখতে পারেন।\n\nনিরাপদ ও অর্গানিক সন্দেশ পেতে এখনই অর্ডার করুন ফাতেমা এগ্রোতে : ০১৭১৯৩৫৫৩৭৫",
            image: PeraSondeshImg,
          },
        ],
      },
    ],
  },
  // TV
  {
    id: CategoryId.TV,
    label: "TV",
    name: "টিভি (TV)",
    path: "/tv",
    subCategories: [
      {
        id: SubCategoryId.Samsung,
        label: "Samsung",
        name: "স্যামসাং (Samsung)",
        path: "/tv/samsung",
        image: samsung32,
        products: [
          {
            id: "901",
            path: "/tv/samsung",
            label: "Samsung 32″ Smart HD TV",
            title: "Samsung 32″ Smart HD TV | UA32T4400AR",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.Samsung,
            subCategoryName: "Samsung",
            price: 29990,
            // quantity: "32″",
            size: "32″",
            description:
              "Samsung UA32T4400AR একটি 32-ইঞ্চি স্মার্ট HD টিভি যা Tizen™ অপারেটিং সিস্টেমে চলে। Quad Core প্রসেসর দ্বারা চালিত এই টিভিতে রয়েছে PurColor প্রযুক্তি, HDR সাপোর্ট এবং পরিষ্কার অডিওর জন্য Dolby Digital Plus। 2×HDMI, 1×USB, বিল্ট-ইন Wi‑Fi এবং Smart View সহ সহজ কানেক্টিভিটি। স্টাইলিশ বেজেল-লেস ডিজাইন, হালকা ওজন (প্রায় 4.1 কেজি) এবং স্যামসাং-এর নির্ভরযোগ্য সাপোর্টের সাথে এটি আপনার লিভিং রুমে একটি প্রিমিয়াম অভিজ্ঞতা নিশ্চিত করে। ওয়ারেন্টি: LED প্যানেল ২ বছর, স্পেয়ার পার্টস ১ বছর, ফ্রি সার্ভিস ৫ বছর।",
            image: samsung32,
          },
          {
            id: "902",
            path: "/tv/samsung",
            label: "Samsung 43″ 4K Smart UHD TV",
            title: "Samsung 43″ 4K Smart UHD TV",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.Samsung,
            subCategoryName: "Samsung",
            price: 89990,
            size: "43″",
            description:
              "Samsung 43″ 4K Smart UHD TV একটি প্রিমিয়াম 4K রেজোলিউশন টিভি যা Crystal Processor 4K প্রযুক্তি ব্যবহার করে। এই টিভিতে রয়েছে HDR 10 সাপোর্ট, Auto Motion Plus, Dolby Digital Plus অডিও, এবং 20W সাউন্ড আউটপুট। Tizen™ অপারেটিং সিস্টেমে চালিত এই টিভিতে রয়েছে WiFi, Bluetooth Audio, 3×HDMI, 2×USB পোর্ট এবং AirSlim ডিজাইন। 4K রেজোলিউশন (3,840 x 2,160) এবং 2200 PQI (Picture Quality Index) সহ এই টিভি আপনার বাড়িতে সিনেমা হলের অভিজ্ঞতা নিশ্চিত করে। ওয়ারেন্টি: LED প্যানেল ২ বছর, স্পেয়ার পার্টস ১ বছর, ফ্রি সার্ভিস ৫ বছর।",
            image: samsung43,
          },
          {
            id: "903",
            path: "/tv/samsung",
            label: "Samsung 43″ Crystal 4K UHD Smart TV",
            title: "Samsung 43″ Crystal 4K UHD Smart TV | Free Gift Available",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.Samsung,
            subCategoryName: "Samsung ",
            price: 94990,
            size: "43″",
            description:
              "Samsung 43″ Crystal 4K UHD Smart TV একটি বিশেষ সংস্করণ যা ফ্রি গিফট সহ আসে। এই টিভিতে রয়েছে Crystal Processor 4K, HDR 10 সাপোর্ট, এবং Dolby Digital Plus অডিও। 4K রেজোলিউশন (3,840 x 2,160) সহ এই টিভি Crystal Display প্রযুক্তি ব্যবহার করে যা ছবিকে আরও উজ্জ্বল এবং স্পষ্ট করে তোলে। Tizen™ অপারেটিং সিস্টেম, WiFi, Bluetooth Audio, 3×HDMI, 2×USB পোর্ট এবং AirSlim ডিজাইন সহ এই টিভি আপনার বাড়িতে প্রিমিয়াম অভিজ্ঞতা নিশ্চিত করে। বিশেষ অফার: ফ্রি গিফট সহ। ওয়ারেন্টি: LED প্যানেল ২ বছর, স্পেয়ার পার্টস ১ বছর, ফ্রি সার্ভিস ৫ বছর।",
            image: samsung43Crystal,
          },
        ],
      },
      {
        id: SubCategoryId.Haier,
        label: "Haier",
        name: "হায়ার (Haier)",
        path: "/tv/haier",
        image: haier32,
        products: [
          {
            id: "904",
            path: "/tv/haier",
            label: "Haier 32″ Bezel Less Google TV",
            title: "Haier 32″ Bezel Less Google TV H32K85FX",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.Haier,
            subCategoryName: "হায়ার টিভি",
            price: 19999,
            size: "32″",
            description:
              "Haier 32″ Bezel Less Google TV H32K85FX একটি আধুনিক স্মার্ট টিভি যা Google TV অপারেটিং সিস্টেমে চলে। এই টিভিতে রয়েছে LED ডিসপ্লে, 1366 × 768 রেজোলিউশন, এবং 60Hz রিফ্রেশ রেট। ARM A55*4@1.5GHz প্রসেসর এবং 1.5GB DDR3 RAM সহ এই টিভি দ্রুত পারফরম্যান্স নিশ্চিত করে। 3×HDMI 2.0, USB, WiFi, এবং Bluetooth কানেক্টিভিটি সহ এই টিভি আপনার বাড়িতে স্মার্ট অভিজ্ঞতা নিশ্চিত করে। Bezel-less ডিজাইন এবং 4KG ওজন সহ এটি আপনার লিভিং রুমে একটি স্টাইলিশ সংযোজন। ওয়ারেন্টি: প্যানেল ৪ বছর, স্পেয়ার পার্টস ২ বছর, সার্ভিস ৫ বছর।",
            image: haier32,
          },
          {
            id: "905",
            path: "/tv/haier",
            label: "Haier 43″ FHD Google TV",
            title: "Haier H43K85FFX 43″ FHD Google TV",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.Haier,
            subCategoryName: "হায়ার টিভি",
            price: 28999,
            size: "43″",
            description:
              "Haier H43K85FFX 43″ FHD Google TV একটি প্রিমিয়াম Full HD টিভি যা Google TV অপারেটিং সিস্টেমে চলে। এই টিভিতে রয়েছে DLED ডিসপ্লে, 1920 x 1080 রেজোলিউশন, এবং 60Hz রিফ্রেশ রেট। ARM Cortex Advanced Quad-Core প্রসেসর এবং 1.5GB RAM সহ এই টিভি দ্রুত পারফরম্যান্স নিশ্চিত করে। 3×HDMI, 2×USB, WiFi, Bluetooth, এবং 24W স্টেরিও স্পিকার সহ এই টিভি আপনার বাড়িতে সিনেমা হলের অভিজ্ঞতা নিশ্চিত করে। HDR ডিকোডিং, বিল্ট-ইন Chromecast, এবং Google Assistant সাপোর্ট সহ এটি একটি সম্পূর্ণ স্মার্ট টিভি। ওয়ারেন্টি: প্যানেল ৪ বছর, স্পেয়ার পার্টস ও সার্ভিস ২ বছর।",
            image: haier43FHD,
          },
        ],
      },
      {
        id: SubCategoryId.HaierQLED,
        label: "Haier QLED",
        name: "হায়ার QLED (Haier QLED)",
        path: "/tv/haier-qled",
        image: haier43QLED,
        products: [
          {
            id: "906",
            path: "/tv/haier-qled",
            label: "Haier 43″ QLED 4K Android Google TV",
            title: "Haier H43S80EUX 43″ QLED 4K Android Google TV",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.HaierQLED,
            subCategoryName: "হায়ার টিভি",
            price: 34999,
            size: "43″",
            description:
              "Haier H43S80EUX 43″ QLED 4K Android Google TV একটি প্রিমিয়াম QLED টিভি যা Android এবং Google TV অপারেটিং সিস্টেমে চলে। এই টিভিতে রয়েছে QLED ডিসপ্লে, 4K রেজোলিউশন, এবং উন্নত কালার টেকনোলজি। QLED প্রযুক্তি ব্যবহার করে এই টিভি উজ্জ্বল, স্পষ্ট, এবং জীবন্ত রং প্রদর্শন করে। Android এবং Google TV এর সমন্বয়ে এই টিভিতে রয়েছে Google Play Store, Netflix, YouTube, এবং Amazon Prime Video সহ অসংখ্য অ্যাপ। 4K রেজোলিউশন এবং QLED ডিসপ্লে সহ এই টিভি আপনার বাড়িতে প্রিমিয়াম সিনেমা অভিজ্ঞতা নিশ্চিত করে। ওয়ারেন্টি: প্যানেল ৪ বছর, স্পেয়ার পার্টস ও সার্ভিস ২ বছর।",
            image: haier43QLED,
          },
          {
            id: "908",
            path: "/tv/haier-qled",
            label: "Haier H32S80EFX QLED Technology TV",
            title: "Haier H32S80EFX QLED Technology TV",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.HaierQLED,
            subCategoryName: "হায়ার টিভি",
            price: 21999,
            size: "32″",
            description:
              "Haier H32S80EFX QLED Technology TV একটি উচ্চ-প্রযুক্তির QLED টিভি যা QLED (Quantum Light Emitting Diode) প্রযুক্তি ব্যবহার করে। এই টিভিতে রয়েছে 4K Ultra HD রেজোলিউশন, HDR সাপোর্ট, এবং উন্নত কালার ম্যানেজমেন্ট সিস্টেম। QLED প্রযুক্তি ব্যবহার করে এই টিভি উজ্জ্বল, স্পষ্ট, এবং জীবন্ত রং প্রদর্শন করে যা সাধারণ LED টিভির তুলনায় অনেক উন্নত। এই টিভিতে রয়েছে Android অপারেটিং সিস্টেম, Google Play Store, WiFi, Bluetooth, এবং 4×HDMI পোর্ট। QLED ডিসপ্লে সহ এই টিভি আপনার বাড়িতে সিনেমা হলের অভিজ্ঞতা নিশ্চিত করে। ওয়ারেন্টি: প্যানেল ৪ বছর, স্পেয়ার পার্টস ও সার্ভিস ২ বছর।",
            image: haier43QLED,
          },
        ],
      },
      {
        id: SubCategoryId.HaierHcast,
        label: "Haier H-CAST",
        name: "হায়ার H-CAST (Haier H-CAST)",
        path: "/tv/haier-hcast",
        image: haier32Hcast,
        products: [
          {
            id: "907",
            path: "/tv/haier-hcast",
            label: "Haier H32D2MS 32″ H-CAST SERIES LED TV",
            title: "Haier H32D2MS 32″ H-CAST SERIES LED TV",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.HaierHcast,
            subCategoryName: "হায়ার টিভি",
            price: 14900,
            size: "32″",
            description:
              "Haier H32D2MS 32″ H-CAST SERIES LED TV একটি আধুনিক LED টিভি যা H-CAST প্রযুক্তি ব্যবহার করে। এই টিভিতে রয়েছে LED ডিসপ্লে, HD রেজোলিউশন, এবং উন্নত ইমেজ প্রসেসিং। H-CAST প্রযুক্তি ব্যবহার করে এই টিভি দ্রুত এবং সহজ কানেক্টিভিটি নিশ্চিত করে। এই টিভিতে রয়েছে HDMI, USB, এবং অন্যান্য কানেক্টিভিটি অপশন। হালকা ওজন এবং স্টাইলিশ ডিজাইন সহ এটি আপনার বাড়িতে একটি সুন্দর সংযোজন। এই টিভি আপনার দৈনন্দিন টিভি দেখার অভিজ্ঞতাকে আরও উন্নত করে তোলে। ওয়ারেন্টি: প্যানেল ৪ বছর, স্পেয়ার পার্টস ও সার্ভিস ২ বছর।",
            image: haier32Hcast,
          },
        ],
      },
      {
        id: SubCategoryId.Siko,
        label: "SIKO",
        name: "সিকো (SIKO)",
        path: "/tv/siko",
        image: siko32D7,
        products: [
          {
            id: "909",
            path: "/tv/siko",
            label: "SIKO 32″ SMART TV-2GB 32D7",
            title: "SIKO 32″ SMART TV-2GB | 32D7",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.Siko,
            subCategoryName: "SIKO",
            price: 0,
            size: "32″",
            description:
              "SIKO 32D7 একটি 32-ইঞ্চি ফুল HD (1920×1080) স্মার্ট LED টিভি। Android 11, 2GB RAM/16GB ROM, 4‑Core CPU (2x Cortex‑A55), DLED backlight, 3000:1 কনট্রাস্ট, 20ms রেসপন্স টাইম। কানেক্টিভিটি: HDMI 1.3/1.4, USB 2.0, AV, RF, LAN, Wi‑Fi। YouTube/Netflix সাপোর্ট। অডিও: 1×10W স্টেরিও, ব্যাক সাইড ডুয়াল স্পিকার। ফাইল সাপোর্ট: Audio MP3/WMA/AC3; Video MPEG/AVI/MOV/MKV/DAT/MP4/VOB; Image JPG/JPEG/PNG/BMP। পাওয়ার: AC 110‑240V, Max 75W, Standby <0.5W। ওয়ারেন্টি: প্যানেল/প্যানেল রিপ্লেসমেন্ট 1 বছর, Best free service 5 বছর।",
            image: siko32D7,
          },
          {
            id: "910",
            path: "/tv/siko",
            label: "SIKO 32″ SMART TV-2GB 32Q06",
            title: "SIKO 32″ SMART TV-2GB | 32Q06",
            categoryId: CategoryId.TV,
            subCategoryId: SubCategoryId.Siko,
            subCategoryName: "SIKO",
            price: 0,
            size: "32″",
            description:
              "SIKO 32Q06 একটি 32-ইঞ্চি ফুল HD (1920×1080) স্মার্ট LED টিভি। Android 11, 2GB RAM/16GB ROM, 4‑Core CPU (2x Cortex‑A55), DLED backlight, 3000:1 কনট্রাস্ট, 20ms রেসপন্স টাইম। কানেক্টিভিটি: HDMI 1.3/1.4, USB 2.0, AV, RF, LAN, Wi‑Fi। YouTube/Netflix সাপোর্ট। অডিও: 1×10W স্টেরিও, ব্যাক সাইড ডুয়াল স্পিকার। ফাইল সাপোর্ট: Audio MP3/WMA/AC3; Video MPEG/AVI/MOV/MKV/DAT/MP4/VOB; Image JPG/JPEG/PNG/BMP। পাওয়ার: AC 110‑240V, Max 75W, Standby <0.5W। ওয়ারেন্টি: প্যানেল/প্যানেল রিপ্লেসমেন্ট 1 বছর, Best free service 5 বছর।",
            image: siko32Q06,
          },
        ],
      },
    ],
  },
  // AC
  {
    id: CategoryId.AC,
    label: "AC",
    name: "এসি (AC)",
    path: "/ac",
    subCategories: [
      {
        id: SubCategoryId.HaierAC,
        label: "Haier AC",
        name: "হায়ার এসি (Haier AC)",
        path: "/ac/haier",
        image: acInverter,
        products: [
          {
            id: "1001",
            path: "/ac/haier",
            label: "Haier 1.5 Ton Inverter AC",
            title:
              "Haier CleanCool Inverter 1.5 Ton AC | HSU-18CleanCool (INV)(3DF)(QA)",
            categoryId: CategoryId.AC,
            subCategoryId: SubCategoryId.HaierAC,
            subCategoryName: "Haier AC",
            price: 49999,
            size: "1.5 Ton",
            description:
              "CleanCool Inverter 1.5 Ton: Android Hidden LED Display, Up to 65% Energy Saving, Self Clean 99.9%, Surge Protection 550V. Capacity 18000 BTU, Power input 1790W, EER 2.93, Running current 8.2A, Power 1/230/50Hz, Air circulation 800 m³/h. Refrigerant R32. Indoor pkg 941×298×381mm (13.5kg), Outdoor pkg 954×409×625mm (33.5kg). ID Noise 46/42/38 dB(A), OD Noise 55 dB(A). Warranty: Compressor 10y, Parts 1y.",
            image: acInverter,
          },
          {
            id: "1002",
            path: "/ac/haier",
            label: "Haier 1.5 Ton Non‑Inverter AC",
            title:
              "Haier AquaCool 1.5 Ton Non‑Inverter AC | HSU-18TurboAqua (FIX)(Pro)",
            categoryId: CategoryId.AC,
            subCategoryId: SubCategoryId.HaierAC,
            subCategoryName: "Haier AC",
            price: 44499,
            size: "1.5 Ton",
            description:
              "AquaCool Non‑Inverter 1.5 Ton: Cooling 18000 BTU, Input 1800W (max 2100W), EER 2.93, Current 8.5A (max 11.5A), Power 1/230V/50Hz, Air Circulation 1000 m³/h. Refrigerant R32 (1.13kg). Indoor 975×220×318mm (12.5kg), Outdoor 800×280×553mm (37kg). Noise: ID 47/43/40 dB(A), OD 55 dB(A). Warranty: Compressor 5y, Spare Parts 2y, Service 2y.",
            image: acNonInverter,
          },
        ],
      },
    ],
  },
];

// Function to get all products under a category
// export const getProductsByCategory = (categoryId: CategoryId): Product[] => {
//     const category = categories.find(cat => cat.label === categoryId);
//     if (!category) return []; // Return an empty array if category is not found
//     return category.subCategories.flatMap(subCategory => subCategory.products);
// };

export const getProductsByCategory = (categoryId: CategoryId): Product[] => {
  return categories
    .filter((category) => category.id === categoryId) // ক্যাটাগরির সাথে মিল খোঁজা
    .flatMap((category) =>
      category.subCategories.flatMap((subCategory) => subCategory.products)
    );
};

// Function to get products by subcategory
export const getProductsBySubCategory = (
  subCategoryId: SubCategoryId
): Product[] => {
  return categories.flatMap((category) =>
    category.subCategories.flatMap((subCategory) =>
      subCategory.id === subCategoryId ? subCategory.products : []
    )
  );
};

// Add a function to get a specific product by ID
export const getProductById = (productId: string): Product | undefined => {
  for (const category of categories) {
    for (const subCategory of category.subCategories) {
      const product = subCategory.products.find((p) => p.id === productId);
      if (product) return product;
    }
  }
  return undefined;
};

// Function to get all products
export const getAllProducts = (): Product[] => {
  return categories.flatMap((category) =>
    category.subCategories.flatMap((subCategory) => subCategory.products)
  );
};

// Function to get products with size property, sorted from small to large
export const getProductsWithSizeSorted = (): Product[] => {
  // Get all products
  const allProducts = getAllProducts();
  
  // Separate products by category
  const nonTVProducts = allProducts.filter(product => product.categoryId !== CategoryId.TV);
  const tvProducts = allProducts.filter(product => product.categoryId === CategoryId.TV);
  
  // Sort TV products with size from small to large (choto theke boro)
  const tvProductsWithSize = tvProducts.filter(product => product.size);
  const tvProductsWithoutSize = tvProducts.filter(product => !product.size);
  
  const sortedTVProductsWithSize = tvProductsWithSize.sort((a, b) => {
    // Extract numeric value from size string (e.g., "32″" → 32)
    const sizeA = parseInt(a.size!.replace(/[^\d]/g, ''));
    const sizeB = parseInt(b.size!.replace(/[^\d]/g, ''));
    
    return sizeA - sizeB; // Ascending order (small to large)
  });
  
  // Return: original products first, then sorted TV products with size, then TV products without size
  return [
    ...nonTVProducts, // Original products (Oil, Jaggery, Meat, Desert)
    ...sortedTVProductsWithSize, // TV products with size (sorted small to large)
    ...tvProductsWithoutSize // TV products without size
  ];
};
