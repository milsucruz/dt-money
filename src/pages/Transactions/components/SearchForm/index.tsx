import { MagnifyingGlass } from 'phosphor-react'
import { SearchFomrContainer } from './styles'

export function SearchFomr() {
  return (
    <SearchFomrContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFomrContainer>
  )
}
