import { useEffect, useState } from "react"
import type { Product } from "@/types"
import { isValidPrice, parsePriceBRL } from "@/utils/validation"

type Props = {
  open: boolean
  onClose: () => void
  onSubmit: (p: Product) => void
  initial?: Product | null
}

export default function ProductFormModal({ open, onClose, onSubmit, initial }: Props) {
  const [name, setName] = useState("")
  const [priceStr, setPriceStr] = useState("")
  const [available, setAvailable] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (open) {
      setName(initial?.name ?? "")
      setPriceStr(initial ? String(initial.price).replace('.', ',') : "")
      setAvailable(initial?.available ?? true)
      setError(null)
    }
  }, [open, initial])

  if (!open) return null

  function submit() {
    const priceNum = parsePriceBRL(priceStr)
    if (name.trim().length < 2) return setError("Informe um nome válido (min. 2 caracteres).")
    if (priceNum == null || !isValidPrice(priceNum)) return setError("Preço inválido (mín. R$ 0,50).")

    const product: Product = {
      id: initial?.id ?? crypto.randomUUID(),
      name: name.trim(),
      price: Number(priceNum.toFixed(2)),
      available,
      imageUrl: initial?.imageUrl,
    }
    onSubmit(product)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
        <h3 className="text-lg font-semibold">{initial ? "Editar produto" : "Novo produto"}</h3>
        <p className="mt-1 text-sm text-neutral-600">Preencha os campos abaixo.</p>

        <div className="mt-4 space-y-3">
          <div>
            <label className="text-xs font-medium text-neutral-600">Nome</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ex.: Brigadeiro Gourmet"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-600">Preço</label>
            <input
              value={priceStr}
              onChange={e => setPriceStr(e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ex.: 3,50"
            />
            <p className="mt-1 text-xs text-neutral-500">Formato livre (3,50 ou 3.50). Mínimo R$ 0,50.</p>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={available} onChange={e => setAvailable(e.target.checked)} />
            Disponível para venda
          </label>

          {error && <div className="rounded-lg bg-red-50 p-2 text-sm text-red-700">{error}</div>}
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-xl px-3 py-2 text-sm ring-1 ring-neutral-300 hover:bg-neutral-50">
            Cancelar
          </button>
          <button onClick={submit} className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
