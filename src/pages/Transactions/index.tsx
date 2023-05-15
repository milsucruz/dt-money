import { Header } from '../../components/Header'
import { Summarry } from '../../components/Summarry'
import { SearchFomr } from './components/SearchForm'
import {
  PriceHightLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summarry />

      <TransactionsContainer>
        <SearchFomr />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHightLight variant="income">R$ 12.000,00</PriceHightLight>
              </td>
              <td>Venda</td>
              <td>15/05/2023</td>
            </tr>

            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHightLight variant="outcome">- R$ 59,00</PriceHightLight>
              </td>
              <td>Alimentação</td>
              <td>12/05/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
