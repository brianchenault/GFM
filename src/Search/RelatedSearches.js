import parse from 'html-react-parser';
import { FlexColumn, RelatedSearchesList, ResultSearchesItem } from './styles';

const RelatedSearches = ({ relatedData: { hits } }) => {
  return hits.length > 0 ? (
    <FlexColumn
      style={{
        flex: '0 0 50%',
        marginLeft: '3rem'
      }}
    >
      <h2>Related Searches</h2>
      <RelatedSearchesList>
        {hits.map(({ _highlightResult, query, objectID }) => (
          <ResultSearchesItem key={`related-search-${objectID}`}>
            <a
              href={`https://www.gofundme.com/s?q=${query}`}
              rel="noreferrer"
              target="_blank"
            >
              {parse(_highlightResult.query.value)}
            </a>
          </ResultSearchesItem>
        ))}
      </RelatedSearchesList>
    </FlexColumn>
  ) : null;
};

export default RelatedSearches;
