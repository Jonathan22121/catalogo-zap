import type { Product } from "@/types";

function currency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

type Props = {
  items: Product[];
  onAdd: () => void;
  onEdit: (product: Product) => void;
  onRemove: (id: string) => void;
};

export default function ProductsTable({
  items,
  onAdd,
  onEdit,
  onRemove,
}: Props) {
  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-left text-green-700">
          <h2 className="text-2xl font-bold leading-tight">Produtos</h2>
          <p className="text-lg text-neutral-500">Gerencie sua vitrine</p>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          + Adicionar Produto
        </button>
      </div>

      {/* DESKTOP: só mostra a partir de md */}
      <div className="hidden overflow-x-auto md:block">
        <table className="min-w-full table-fixed text-sm  ">
          <thead>
            <tr className="border-b bg-neutral-50 text-left">
              <th className="w-1/12 p-2">Foto</th>
              <th className="w-4/12 p-2">Nome</th>
              <th className="w-2/12 p-2">Preço</th>
              <th className="w-2/12 p-2">Disponível</th>
              <th className="w-3/12 p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id} className="border-b even:bg-green-50">
                <td className="p-2">
                  <div className="w-12 h-12 rounded-lg bg-neutral-200" />
                </td>
                <td className="p-2">{p.name}</td>
                <td className="p-2">{currency(p.price)}</td>
                <td className="p-2">{p.available ? "✓" : "—"}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(p)}
                      className="
      rounded-lg px-3 py-1.5 text-xs font-medium 
      text-blue-700 ring-1 ring-blue-200 
      transition-all duration-200 ease-in-out 
      hover:bg-blue-700 hover:text-white hover:ring-blue-700 
      hover:-translate-y-0.5 hover:shadow-md 
    "
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onRemove(p.id)}
                      className="
      rounded-lg px-3 py-1.5 text-xs font-medium 
      text-red-700 ring-1 ring-red-200 
      transition-all duration-200 ease-in-out 
      hover:bg-red-700 hover:text-white hover:ring-red-700 
      hover:-translate-y-0.5 hover:shadow-md 
    "
                    >
                      Remover
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-neutral-500">
                  Você ainda não cadastrou produtos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE: só mostra até md */}
      <div className="grid gap-3 md:hidden">
        {items.map((p) => (
          <div key={p.id} className="rounded-xl border p-4">
            <div className="mb-3 flex items-center gap-3">
              <div className="size-14 rounded-lg bg-neutral-200" />
              <div>
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-neutral-600">
                  {currency(p.price)} ·{" "}
                  {p.available ? "Disponível" : "Indisponível"}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(p)}
                className="flex-1 rounded-lg px-3 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
              >
                Editar
              </button>
              <button
                onClick={() => onRemove(p.id)}
                className="flex-1 rounded-lg px-3 py-2 text-sm font-medium text-red-700 ring-1 ring-red-200 hover:bg-red-50"
              >
                Remover
              </button>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="rounded-xl border p-6 text-center text-neutral-500">
            Você ainda não cadastrou produtos.
          </div>
        )}
      </div>

      <div className="mt-5">
        <a
          href="/u/yra"
          className="
      inline-flex items-center gap-2 rounded-xl 
      bg-green-900 px-4 py-2 text-sm font-medium text-white 
      shadow-md 
      transition-all duration-200 ease-in-out 
      hover:bg-green-700 
      hover:-translate-y-0.5 
      hover:shadow-lg
      focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2
    "
        >
          Ver Catálogo Público <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}
