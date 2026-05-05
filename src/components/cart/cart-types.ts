export type CartLine = {
  id: string;
  title: string;
  imageUrl?: string;
  unitPrice: number;
  unitLabel?: string;
  quantity: number;
};

export type CartState = {
  lines: CartLine[];
};

