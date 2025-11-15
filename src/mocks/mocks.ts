import type { Product, StoreProfile } from "../types";

export const profile: StoreProfile = {
  storeName: "Doces da YRA",
  whatsapp: "5531999990000",
  shortDescription:
    " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.✦",
  logoUrl: "",
  username: "yra",
};

export const products: Product[] = [
  {
    id: "1",
    name: "Brigadeiro Gourmet",
    price: 3.5,
    available: true,
    imageUrl: "",
  },
  {
    id: "2",
    name: "Bolo de Cenoura",
    price: 25.0,
    available: true,
    imageUrl: "",
  },
];
