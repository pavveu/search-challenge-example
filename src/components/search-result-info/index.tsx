import * as React from 'react';
import Loader from '../loader';
import { SearchResultInfoProps } from './types';

function SearchResultInfo({ resultsLength, isDataLoaded }: SearchResultInfoProps) {
  if (isDataLoaded) {
    return (
      <div>
        {resultsLength > 0 ? <>Found: {resultsLength}</> : <>No albums found</>}
      </div>
    );
  }
  return <Loader />;
}

export default SearchResultInfo;
