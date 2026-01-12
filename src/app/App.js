import { useRoute } from "../core/route.js";
import { Dashboard } from "../pages/Dashboard.js";
// import { Transacoes } from "../pages/Transacoes.js";
import { Relatorios } from "../pages/Relatorios.js";
import { SideBar } from "../components/SideBar/sideBar.js";

export function App() {
  const [ route ] = useRoute();

  function renderPage() {
    switch (route) {
      case "/":
      case "/dashboard":
        return Dashboard();
      // case "/transactions":
      //   return Transacoes();
      case "/reports":
        return Relatorios();
      default:
        return `<h2>Not Found: 404</h2>`;
    }
  }

  return `
    ${SideBar()}
    <main>
      ${renderPage()}
    </main>
  `;
}
