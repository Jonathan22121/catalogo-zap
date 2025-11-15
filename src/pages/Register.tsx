import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        {/* ESQUERDA: copy/benefícios */}
        <section className="order-2 md:order-1">
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Crie sua conta e publique seu{" "}
            <span className="text-emerald-600">Catálogo</span>
          </h1>
          <p className="mt-4 max-w-lg text-gray-600">
            Em poucos minutos você já pode cadastrar produtos e compartilhar
            pedidos pelo WhatsApp.
          </p>

          <ul className="mt-8 space-y-4 text-gray-800">
            {[
              "Cadastro simples e gratuito",
              "Página pública com seu @username",
              "Botões de pedido via WhatsApp",
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

        {/* DIREITA: Card do formulário */}
        <section className="order-1 md:order-2">
          <div className="mx-auto w-full max-w-md rounded-2xl border border-green-700 bg-white p-6 shadow-sm">
            <div className="mb-3 text-center">
              <h2 className="text-xl font-semibold">Criar conta</h2>
              <p className="text-sm text-gray-500">
                Preencha seus dados para começar.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block text-lg font-medium text-left">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg border px-3 py-2 outline-none ring-emerald-500 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-1 block text-lg font-medium text-left">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="voce@email.com"
                  className="w-full rounded-lg border px-3 py-2 outline-none ring-emerald-500 focus:ring-2"
                />
              </div>

              <div>
                <label className="mb-1 block text-lg font-medium text-left">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
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

              <div>
                <label className="mb-1 block text-lg font-medium text-left">
                  Confirmar senha
                </label>
                <div className="relative">
                  <input
                    type={showPwd2 ? "text" : "password"}
                    placeholder="Repita a senha"
                    className="w-full rounded-lg border px-3 py-2 pr-14 outline-none ring-emerald-500 focus:ring-2"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd2((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-2 text-xs text-gray-500 hover:bg-gray-50"
                  >
                    {showPwd2 ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                <span>
                  Aceito os{" "}
                  <a href="#" className="text-emerald-700 underline">
                    Termos
                  </a>{" "}
                  e a{" "}
                  <a href="#" className="text-emerald-700 underline">
                    Política de Privacidade
                  </a>
                  .
                </span>
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-lg bg-emerald-600 px-4 py-2.5 font-medium text-white hover:bg-emerald-700"
              >
                Criar conta
              </button>

              <p className="text-center text-sm text-gray-600">
                Já tem conta?{" "}
                <Link to="/login" className="text-emerald-700 hover:underline">
                  Entrar
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
