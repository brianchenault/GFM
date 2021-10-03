import { useRef, useState } from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { useQuery } from 'react-query'
import { fetchSearchResults } from './API'
import Results from './Results'
import SearchSvg from './icon_search.svg'

const SearchIcon = styled.img.attrs({
  src: SearchSvg
})`
  position: absolute;
  left: 0.6rem;
  top: calc(50% - 8px);
  width: 16px;
  height: 16px;
`

const SearchInput = styled.input`
  height: 36px;
  width: 400px;
  padding: 0 10px 0 30px;
  border-radius: 4px;
  border: 1px solid #ccc;
`

const Search = () => {
  const inputRef = useRef(null)
  const [searchText, setSearchText] = useState('')

  const {
    isFetching,
    data: { results }
  } = useQuery(
    ['gofundme-search-results', { searchText }],
    () => fetchSearchResults(searchText),
    {
      enabled: searchText.length > 0,
      initialData: {
        results: []
      }
    }
  )

  const onInputChange = debounce(e => {
    setSearchText(inputRef.current.value)
  }, 200)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ position: 'relative' }}>
        <SearchIcon />
        <SearchInput ref={inputRef} onChange={onInputChange} />
      </div>
      {!isFetching && results.length > 0 && <Results campaigns={results[0]} />}
    </div>
  )
}

export default Search
