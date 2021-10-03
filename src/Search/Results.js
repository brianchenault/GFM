import styled from 'styled-components'
import Result from './Result'

const ResultsList = styled.ol`
  width: 100%;
  margin: 30px 0 0;
  padding: 0;
  list-style-type: none;
`

const Link = styled.a`
  color: #767676;

  &:hover {
    color: #02a95c;
  }
`

const Results = ({ campaigns: { query, hits, nbHits } }) => {
  return (
    <ResultsList>
      <div
        style={{
          paddingBottom: '1.6rem'
        }}
      >
        <Link href={`https://www.gofundme.com/s?q=${query}`} target="_blank">
          See all {nbHits.toLocaleString()} campaigns
        </Link>
      </div>
      {hits.map(hit => (
        <Result result={hit} />
      ))}
    </ResultsList>
  )
}

export default Results
