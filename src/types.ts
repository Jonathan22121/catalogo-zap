export type Product = {
  id: string;
  name: string;
  price: number;
  available: boolean;
  imageUrl?: string;
};

export type StoreProfile = {
  storeName: string;
  whatsapp: string;
  shortDescription?: string;
  logoUrl?: string;
  username: string;
  text: string;
};
