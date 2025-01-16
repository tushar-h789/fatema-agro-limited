
export type NavItem = {
    label: string;
    path: string;
    children?: NavItem[];
    Icon?: any;
    image?: StaticImageData;
    description?: string;
    detailedDesc?: {
      details: string;
      points: string[];
    };
  
    pageContent?: {
      title: string;
      html: string;
    };
  
    faqs?: {
      ques: string;
      ans: string;
    }[];
  };