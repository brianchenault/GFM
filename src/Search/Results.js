import Result from './Result';
import { FlexColumn, Link, ResultsList } from './styles';

const Results = ({ campaigns: { hits, nbHits, query } }) => {
  return (
    <FlexColumn
      style={{
        flex: '0 0 50%'
      }}
    >
      <div
        style={{
          padding: '1.6rem 0'
        }}
      >
        <Link href={`https://www.gofundme.com/s?q=${query}`} target="_blank">
          See all {nbHits?.toLocaleString()} campaigns
        </Link>
      </div>

      <ResultsList>
        {hits?.map(hit => (
          <Result key={`result-${hit?.objectID}`} result={hit} />
        ))}
      </ResultsList>
    </FlexColumn>
  );
};

export default Results;
