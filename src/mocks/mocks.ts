import type { Product, StoreProfile } from "../types"

export const profile: StoreProfile = {
  storeName: "Doces da YRA",
  whatsapp: "5531999990000",
  shortDescription: "Gourmet feito com carinho ✦",
  logoUrl: "",
  username: "yra"
}

export const products: Product[] = [
  { id: "1", name: "Brigadeiro Gourmet", price: 3.50, available: true,  imageUrl: "" },
  { id: "2", name: "Bolo de Cenoura",    price: 25.00, available: true, imageUrl: "" }
]
