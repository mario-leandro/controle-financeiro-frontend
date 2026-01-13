import { useNavigate } from "../../core/navigate.js";

export function CadastroPage() {
    const navigate = useNavigate();

    return `
        <div class="w-96 min-h-96 bg-violet-300 px-6 py-10 rounded-lg shadow-lg flex flex-col justify-between items-center">
            <div class="mb-6">
                <h1 class="text-2xl font-bold text-violet-700">Cadastre-se</h1>
            </div>

            <form method="POST" class="w-full flex flex-col gap-4 mb-6">
                <div class="flex flex-col gap-4">
                    <input type="text" placeholder="Nome" class="w-full rounded-lg p-2 bg-violet-200 outline-none text-violet-800 placeholder:text-violet-500" />
                    <input type="email" placeholder="Email" class="w-full rounded-lg p-2 bg-violet-200 outline-none text-violet-800 placeholder:text-violet-500" />
                    <input type="password" placeholder="Senha" class="w-full rounded-lg p-2 bg-violet-200 outline-none text-violet-800 placeholder:text-violet-500" />
                    <input type="password" placeholder="Confirme a senha" class="w-full rounded-lg p-2 bg-violet-200 outline-none text-violet-800 placeholder:text-violet-500" />
                </div>

                <button type="submit" class="w-full rounded-lg p-2 bg-violet-400 text-white font-bold hover:bg-violet-500 transition-colors">Entrar</button>
            </form>

            <div class="text-sm text-violet-700">
                <p>Já tem uma conta? <button onclick={navigate('/')} class="text-violet-700 font-bold hover:underline">Entrar</button></p>
            </div>
        </div>
    `;
}

window.navigate = navigate;