export function parsePriceBRL(input: string): number | null {
  const clean = input.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.')
  const n = Number(clean)
  return Number.isFinite(n) ? n : null
}

export function isValidPrice(n: number) {
  return n >= 0.5 && n <= 10000
}
