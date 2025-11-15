import type { StoreProfile } from "@/types";

export default function ProfileCard({ profile }: { profile: StoreProfile }) {
  return (
    <section className="rounded-2xl border bg-white p-4 md:p-5 shadow-sm">
      <div className="mb-3 gap-3">
        <div className="flex justify-between flex-1 p-5">
          <div>
            {/* Adicionar a logica da logo da loja aqui */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neutral-200" />
              <h2 className="text-base md:text-lg font-semibold leading-tight">
                Perfil
              </h2>
            </div>
            <p className="text-xs text-neutral-500 mt-1">{profile.text}</p>
          </div>

          <dl className="">
            {/* Item 2: WhatsApp */}
            <div className="text-left ">
              <dt className="text-2xl text-green-500 font-bold">WhatsApp</dt>
              <dd className="text-lg break-all">{profile.whatsapp}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="text-left mb-10 mt-10 ">
        <dt className="text-2xl text-green-700 font-bold">Nome da loja</dt>
        <dd className="text-lg">{profile.storeName}</dd>
      </div>

      <div className="min-[550px]:col-span-2 text-left text-justify ">
        <dt className="text-2xl text-green-700 font-bold">Descrição curta</dt>
        <dd className="text-lg">{profile.shortDescription ?? "—"}</dd>
      </div>
    </section>
  );
}
