import * as React from 'react';
import Loader from '../loader';
import { SearchResultInfoProps } from './types';

function SearchResultInfo({ resultsLength, isDataLoaded }: SearchResultInfoProps) {
  if (!isDataLoaded) {
    return <Loader />;
  }
  return (
    <div>{resultsLength > 0 ? `Found: ${resultsLength}` : `No albums found`}</div>
  );
}

export default SearchResultInfo;
