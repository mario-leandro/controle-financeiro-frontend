import { navigate } from "../../core/navigate.js";

export function SideBar() {
    
    return `
        <div class="w-80 h-full flex flex-col justify-between items-center rounded-2xl shadow-lg bg-violet-50 px-5 py-10">
            <div class="w-full flex flex-row items-center gap-2">
                <img src="/src/assets/user-photo.jpg" alt="User Photo" class="w-10 h-10 rounded-full" />
                <h1 class="text-2xl font-bold">Mario Marques</h1>
            </div>

            <div class="w-full flex justify-center items-center">
                <span class="flex flex-row justify-center items-center gap-1 cursor-pointer">
                    <i class="fa-solid fa-gear text-violet-900"></i>
                    <p class="text-lg font-semibold text-violet-900 hidden md:block">
                        Configurações
                    </p>
                </span>
            </div>
        </div>
    `;
}

window.navigate = navigate;