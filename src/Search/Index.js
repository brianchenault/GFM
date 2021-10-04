import { useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import Results from './Results';
import RelatedSearches from './RelatedSearches';
import { fetchSearchResults } from './API';
import {
  CancelSearchIcon,
  Error,
  FlexColumn,
  FlexRow,
  SearchIcon,
  SearchInput
} from './styles';

const initialDataState = {
  isFetching: false,
  hasError: false,
  results: []
};

const Search = () => {
  const inputRef = useRef(null);
  const controllerRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(initialDataState);

  useEffect(() => {
    const search = async () => {
      setData(d => ({ ...data, ...{ isFetching: true, hasError: false } }));

      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const { results } = await fetchSearchResults(
          searchText,
          controllerRef.current?.signal
        );

        setData({
          isFetching: false,
          results
        });

        controllerRef.current = null;
      } catch (e) {
        setData(d => ({ ...data, ...{ isFetching: false, hasError: true } }));
      }
    };

    if (searchText.trim().length > 0) {
      search();
    }
  }, [searchText]);

  const onCancelSearchClick = () => {
    setData(initialDataState);
    setSearchText('');
    inputRef.current.value = '';
  };

  const onInputChange = debounce(e => {
    setSearchText(inputRef.current.value);
  }, 100);

  return (
    <FlexColumn>
      <div style={{ position: 'relative', width: 'max-content' }}>
        <SearchIcon />
        <SearchInput ref={inputRef} onChange={onInputChange} />
        {searchText.trim().length > 0 && (
          <CancelSearchIcon onClick={onCancelSearchClick} />
        )}
      </div>
      {!data.isFetching && data.results.length > 0 && (
        <FlexRow style={{ alignItems: 'flex-start' }}>
          <Results campaigns={data.results[0]} />
          <RelatedSearches searches={data.results[1]} />
        </FlexRow>
      )}
      {data.hasError && (
        <Error>
          Oops! It seems we are having trouble with your search at the moment.
        </Error>
      )}
    </FlexColumn>
  );
};

export default Search;
