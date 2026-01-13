import { useRoute } from "../core/route.js";
import { Dashboard } from "../pages/Dashboard.js";
// import { Transacoes } from "../pages/Transacoes.js";
import { Relatorios } from "../pages/Relatorios.js";
import { SideBar } from "../components/SideBar/sideBar.js";
import { LoginPage } from "../pages/LoginPage.js";

export function App() {
  const [ route ] = useRoute();

  function renderPage() {
    switch (route) {
      case "/":
      case "/index.html":
        return LoginPage();
      case "/dashboard":
        return Dashboard();
      // case "/transacoes":
      //   return Transacoes();
      case "/relatorios":
        return Relatorios();
      default:
        return `<h2>Not Found: 404</h2>`;
    }
  }

  return `
    <div class="min-h-screen bg-violet-200 flex justify-center items-center">
      ${renderPage()}
    </div>
  `;
}
