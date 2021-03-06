export const fetchSearchResults = async (searchText, signal) => {
  const url = `https://e7phe9bb38-dsn.algolia.net/1/indexes/*/queries`;
  const requests = [
    {
      indexName: 'prod_funds_feed_replica_1',
      params: `attributesToRetrieve=%5B%5D&userToken=00-4990a9a8eae94888b801a0675a0b801f-48914e86
        &query=${searchText}&facets=%5B%5D&tagFilters=`
    },
    {
      indexName: 'prod_funds_query_suggestions',
      params: `attributesToRetrieve=%5B%22query%22%5D&userToken=00-4990a9a8eae94888b801a0675a0b801f-48914e86
        &query=${searchText}&hitsPerPage=4&attributesToHighlight=%5B%22query%22%5D&facets=%5B%5D&tagFilters=`
    }
  ];

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'x-algolia-api-key': '447d82ac9832ffcf05fb432dcb65bd08',
      'x-algolia-application-id': 'E7PHE9BB38'
    },
    body: JSON.stringify({
      requests
    }),
    signal
  });

  return await response.json();
};
