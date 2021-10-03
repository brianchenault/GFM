import styled from 'styled-components'
import parse from 'html-react-parser'

const ResultListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 0 0.4rem;
  padding: 1rem 0.5rem;
  color: #767676;

  &:hover {
    background: #f7f7f7;
    cursor: pointer;
  }

  a {
    color: #767676;
    text-decoration: none;
  }
`

const CampaignTitle = styled.div`
  margin-bottom: 0.4em;
`

const Result = ({
  result: {
    _highlightResult: { url, fundname_cleaned, username, bene_name }
  }
}) => {
  return (
    <ResultListItem>
      <a
        href={`https://www.gofundme.com/f/${url.value}`}
        target="_blank"
        rel="noreferrer"
      >
        <CampaignTitle>{parse(fundname_cleaned.value)}</CampaignTitle>
        <div>
          by {parse(username.value)} for {parse(bene_name.value)}
        </div>
      </a>
    </ResultListItem>
  )
}

export default Result
