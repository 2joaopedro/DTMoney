import { Header } from "../../components/Header";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { Summary } from "../../components/Sumary/index";
import { SearchForm } from "./components";

export function Transactions() {
    return (
       <div>
        <Header />
        <Summary />
        <TransactionsContainer>
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2023</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburger</td>
                        <td>
                            <PriceHighlight variant="outcome">
                               - R$ 59,00
                            </PriceHighlight>
                        </td>
                        <td>Alimentação</td>
                        <td>12/04/2023</td>
                    </tr>
                </tbody>
            </TransactionsTable>
        </TransactionsContainer>
       </div>
    )
}