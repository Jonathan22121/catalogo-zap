import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="bg-neutral-50">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="max-w-3xl">
            <h1 className="font-extrabold tracking-tight text-neutral-900 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Monte seu catálogo e
              <br className="hidden sm:block" />
              receba pedidos direto
              <br className="hidden sm:block" />
              no WhatsApp.
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg text-neutral-600">
              Para doces, barbearias, lojas locais e autônomos.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Criar Catálogo Grátis
              </Link>
              <Link
                to="/u/demo"
                className="inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-base font-semibold text-neutral-800 bg-white/80 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
              >
                Ver exemplo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="exemplos"
        className="mx-auto max-w-6xl px-4 sm:px-6 pb-6 md:pb-8"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StoreCard
            title="Barber Prime"
            phone="(99) 99999-0000"
            img="https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?auto=format&fit=crop&q=80&w=1200"
          />
          <StoreCard
            title="Confeitaria Aurora"
            phone="(99) 99999-0000"
            img="https://images.unsplash.com/photo-1601205741712-b261aff33a7d?auto=format&fit=crop&q=80&w=1200"
          />
          <StoreCard
            title="Pastéis Bom Sabor"
            phone="(99) 99999-0000"
            img="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1200"
          />
        </div>
      </section>

      {/* PROVA SOCIAL (prints de conversa) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ChatCard
            you="Vi seu catálogo, tem horário hoje pra um corte?"
            them="Tenho sim! Pode 15h?"
            time="13:12"
          />
          <ChatCard
            you="Oi! Você faz brigadeiro pra festa?"
            them="Faço sim! Qual a quantidade que você precisa?"
            time="08:47"
          />
          <ChatCard
            you="Tem pastel de frango ainda? Quero pegar 6."
            them="Tem sim! Pode retirar ainda hoje."
            time="19:26"
          />
        </div>
      </section>
    </main>
  );
}

/* ====== Subcomponentes ====== */

function StoreCard({
  title,
  phone,
  img,
}: {
  title: string;
  phone: string;
  img: string;
}) {
  return (
    <article className="rounded-2xl border bg-white shadow-sm overflow-hidden transition hover:shadow-md focus-within:shadow-md">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={img}
          alt={`Foto da loja ${title}`}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1200}
          height={675}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-neutral-700">
          <WhatsAppIcon className="h-5 w-5 text-emerald-600" />
          <span className="select-all">{phone}</span>
        </div>

        <Link
          to="/u/demo"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
        >
          Ver Catálogo
        </Link>
      </div>
    </article>
  );
}

function ChatCard({
  you,
  them,
  time,
}: {
  you: string;
  them: string;
  time: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="space-y-2">
        <p className="max-w-[85%] rounded-2xl bg-neutral-100 px-3 py-2 text-sm text-neutral-900">
          {you}
        </p>
        <p className="max-w-[85%] rounded-2xl bg-emerald-50 px-3 py-2 text-sm text-neutral-900">
          {them}
        </p>
      </div>
      <div className="mt-3 text-right text-xs text-neutral-500">{time}</div>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12.04 2a9.94 9.94 0 0 0-8.48 15.1L2 22l4.99-1.53A10 10 0 1 0 12.04 2zm5.75 14.19c-.24.67-1.42 1.28-1.98 1.31-.51.03-1.16.04-1.88-.12-.43-.1-.98-.31-1.69-.61-2.98-1.28-4.92-4.3-5.07-4.5-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.17 1.05-2.47.28-.3.61-.37.81-.37.2 0 .4 0 .58.01.18.01.44-.07.69.53.24.6.83 2.06.9 2.21.07.15.12.33.02.53-.1.2-.16.33-.31.51-.15.18-.33.4-.47.54-.15.15-.3.31-.13.61.18.3.79 1.3 1.7 2.1 1.17 1.03 2.16 1.35 2.46 1.5.3.15.48.13.66-.07.18-.2.77-.9.98-1.21.21-.31.42-.26.69-.16.27.1 1.71.81 2.01.96.3.15.5.23.58.36.08.13.08.75-.16 1.42z"
      />
    </svg>
  );
}
