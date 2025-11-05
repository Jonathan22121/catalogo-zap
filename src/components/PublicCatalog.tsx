import type { Product, StoreProfile } from "@/types";

function currency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function waLink(phone: string, product: Product) {
  const text = `Olá! Quero pedir ${product.name} por ${currency(product.price)}.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export default function PublicCatalog({
  profile,
  items,
}: {
  profile: StoreProfile;
  items: Product[];
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* hero */}
      <section className="rounded-3xl border bg-white p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 size-20 rounded-3xl bg-emerald-600/10 ring-1 ring-emerald-600/30" />
        <h1 className="text-2xl font-bold tracking-tight">{profile.storeName}</h1>
        {profile.shortDescription && (
          <p className="mt-1 text-sm text-neutral-600">{profile.shortDescription}</p>
        )}

        <a
          href={`https://wa.me/${profile.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* lista de produtos */}
      <section className="mt-6 space-y-4">
        {items.map((p) => (
          <article
            key={p.id}
            className="flex items-center justify-between gap-4 rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="size-14 rounded-xl bg-neutral-200" />
              <div>
                <h3 className="font-medium leading-tight">{p.name}</h3>
                <p className="text-sm text-neutral-600">{currency(p.price)}</p>
              </div>
            </div>

            <a
              href={waLink(profile.whatsapp, p)}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              Pedir pelo WhatsApp
            </a>
          </article>
        ))}

        {items.length === 0 && (
          <div className="rounded-2xl border bg-white p-6 text-center text-neutral-500">
            Nenhum produto disponível no momento.
          </div>
        )}
      </section>

      <footer className="mt-10 text-center text-xs text-neutral-500">
        feito com CatálogoZap ✦
      </footer>
    </main>
  );
}
