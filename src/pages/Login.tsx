import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        {/* ESQUERDA: Título + bullets */}
        <section className="order-2 md:order-1">
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Entre para gerenciar seu <span className="text-emerald-600">Catálogo</span>
          </h1>
          <p className="mt-4 max-w-lg text-gray-600">
            Publique produtos, compartilhe links de pedido pelo WhatsApp e acompanhe seu
            catálogo em tempo real.
          </p>

          <ul className="mt-8 space-y-4 text-gray-800">
            {[
              "Rápido e simples de usar",
              "Botões de pedido via WhatsApp",
              "Layout responsivo e bonito",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* DIREITA: Card do login */}
        <section className="order-1 md:order-2">
          <div className="mx-auto w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-center">
              <h2 className="text-xl font-semibold">Entrar</h2>
              <p className="text-sm text-gray-500">
                Use seu e-mail e senha para acessar.
              </p>
            </div>

            {/* Social (apenas visual) */}
            <div className="mb-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
              >
                <span className="h-4 w-4 rounded bg-gray-300" />
                Google
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50"
              >
                <span className="h-4 w-4 rounded bg-gray-300" />
                GitHub
              </button>
            </div>

            <div className="relative my-5 text-center">
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gray-200" />
              <span className="relative bg-white px-3 text-xs uppercase text-gray-400">
                ou
              </span>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block text-sm font-medium">E-mail</label>
                <input
                  type="email"
                  placeholder="voce@email.com"
                  className="w-full rounded-lg border px-3 py-2 outline-none ring-emerald-500 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">Senha</label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder="Sua senha"
                    className="w-full rounded-lg border px-3 py-2 pr-14 outline-none ring-emerald-500 focus:ring-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 text-xs text-gray-500 hover:bg-gray-50"
                  >
                    {showPwd ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  Lembrar-me
                </label>
                <a href="#" className="text-emerald-700 hover:underline">
                  Esqueci a senha
                </a>
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-lg bg-emerald-600 px-4 py-2.5 font-medium text-white hover:bg-emerald-700"
              >
                Entrar
              </button>

              <p className="text-center text-sm text-gray-600">
                Não tem conta?{" "}
                <Link to="/register" className="text-emerald-700 hover:underline">
                  Criar conta
                </Link>
              </p>
            </form>

            <div className="mt-5 rounded-lg bg-gray-50 p-3 text-center text-xs text-gray-500">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="underline">
                Termos
              </a>{" "}
              e{" "}
              <a href="#" className="underline">
                Política de Privacidade
              </a>
              .
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
