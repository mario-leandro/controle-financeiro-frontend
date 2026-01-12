import { navigate } from "../../core/navigate.js";

export function SideBar() {
    
    return `
        <div>
            <nav>
                <ul>
                    <li><a href="/dashboard" onclick="event.preventDefault(); navigate('/dashboard')">Dashboard</a></li>
                    <!-- <li><a href="/transactions" onclick="event.preventDefault(); navigate('/transactions')">Transações</a></li> -->
                    <li><a href="/reports" onclick="event.preventDefault(); navigate('/reports')">Relatórios</a></li>
                </ul>
            </nav>
        </div>
    `;
}

window.navigate = navigate;