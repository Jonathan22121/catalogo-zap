import type { StoreProfile } from "@/types";

export default function ProfileCard({ profile }: { profile: StoreProfile }) {
  return (
    <section className="rounded-2xl border bg-white p-4 md:p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="size-10 md:size-12 rounded-xl bg-neutral-200" />
        <div>
          <h2 className="text-base md:text-lg font-semibold leading-tight">Perfil</h2>
          <p className="text-xs text-neutral-500">Dados da sua loja exibidos ao público</p>
        </div>
      </div>

      <dl className="grid gap-3 sm:grid-cols-2">
        <div>
          <dt className="text-xs font-medium text-neutral-500">Nome da loja</dt>
          <dd className="text-sm">{profile.storeName}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium text-neutral-500">WhatsApp</dt>
          <dd className="text-sm break-all">{profile.whatsapp}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs font-medium text-neutral-500">Descrição curta</dt>
          <dd className="text-sm">{profile.shortDescription ?? "—"}</dd>
        </div>
      </dl>
    </section>
  );
}
