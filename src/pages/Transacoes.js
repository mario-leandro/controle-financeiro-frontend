import { useFinance } from "../store/financeStore.js";

export function Transacoes() {
    const [transactions, setTransactions] = useFinance();

    function addTransaction() {
        const desc = document.getElementById("desc").value;
        const value = Number(document.getElementById("value").value);

        setTransactions([...transactions, { desc, value }]);
    }

    return `
        <div>
            <input id="desc" placeholder="Descrição"/>
            <input id="value" type="number"/>
            <button onclick="addTransaction()">Adicionar</button>
        </div>
    `;
}

window.addTransaction = addTransaction;