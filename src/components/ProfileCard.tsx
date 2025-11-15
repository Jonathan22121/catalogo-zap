import type { StoreProfile } from "@/types";

export default function ProfileCard({ profile }: { profile: StoreProfile }) {
  return (
    <section className="rounded-2xl border bg-white p-4 md:p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        {/* Adicionar a logica da logo da loja aqui */}
        <div className="size-10 md:size-12 rounded-xl bg-neutral-200" />
        <div>
          <h2 className="text-base md:text-lg font-semibold leading-tight">
            Perfil
          </h2>
          <p className="text-xs text-neutral-500">
            Dados da sua loja exibidos ao público
          </p>
        </div>
      </div>

      <dl className="grid grid-cols-1 min-[550px]:grid-cols-2 gap-y-6 gap-x-8">
        {/* Item 1: Nome da loja */}
        <div>
          <dt className="text-2xl font-medium text-teal-900">Nome da loja</dt>
          <dd className="text-lg">{profile.storeName}</dd>
        </div>

        {/* Item 2: WhatsApp */}
        <div>
          <dt className="text-2xl font-medium text-teal-900">WhatsApp</dt>
          <dd className="text-lg break-all">{profile.whatsapp}</dd>
        </div>

        <div className="min-[550px]:col-span-2">
          <dt className="text-2xl font-medium text-teal-900">
            Descrição curta
          </dt>
          <dd className="text-lg">{profile.shortDescription ?? "—"}</dd>
        </div>
      </dl>
    </section>
  );
}
