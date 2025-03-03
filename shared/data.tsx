import sorisaTel1L2L5L from "../src/public/Images/tel/sorisa-tel/sorisa-tel-1L-2L-5L.png";
import product2 from "../src/public/Images/tel/narikel-tel/narikel-tel-01.png";
import product3 from "../src/public/Images/gur/khejur-gur/khejur-jhola.png";
import chicken from "../src/public/Images/mangso/chiken/deshi-murgi-03.png";
// import product4 from "../src/public/Images/product-4.png";
// import product5 from "../src/public/Images/product-5.png";
// import product6 from "../src/public/Images/product-6.png";
import goru from "../src/public/Images/mangso/goru/goru-mangso-1kg-01.png";
import chagol from "../src/public/Images/mangso/khasi/khasir-mangso-01.jpg";
import patiHas from "../src/public/Images/mangso/has/pati-has-01.webp";
import murgi from "../src/public/Images/mangso/chiken/murgi-mangso-01.webp";
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
  quantity: string;
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
            price: 300,
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
            price: 300,
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
            price: 220,
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
            price: 220,
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
            price: 550,
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
            price: 750,
            quantity: "1 কেজি",
            description:
              "রাজ হাঁস প্রাচীনকাল থেকেই বাংলার অন্যতম গৃহপালিত প্রাণী। রাজহাঁসের মাংস ও ডিম দুটোই খেতে খুবই সুস্বাদু ও অতুলনীয়। ",
            image: patiHas,
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
            price: 550,
            quantity: "1 কেজি",
            description:
              "দেশি মুরগি প্রাচীনকাল থেকেই বাংলার অন্যতম গৃহপালিত প্রাণী। মুরগি মাংস ও ডিম দুটোই খেতে খুবই সুস্বাদু ও অতুলনীয়। ",
            image: chicken,
          },
          {
            id: "408",
            path: "/mangso/deshi-murgir-mangso",
            label: "Murgi",
            title: "দেশি মুরগি Chiken",
            categoryId: CategoryId.Meat,
            subCategoryId: SubCategoryId.DesiChicken,
            subCategoryName: "দেশি মুরগি",
            price: 550,
            quantity: "1 কেজি",
            description:
              "দেশি মুরগি প্রাচীনকাল থেকেই বাংলার অন্যতম গৃহপালিত প্রাণী। মুরগি মাংস ও ডিম দুটোই খেতে খুবই সুস্বাদু ও অতুলনীয়। ",
            image: murgi,
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
