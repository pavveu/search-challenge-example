import { Grid, TextField } from '@mui/material';
import * as React from 'react';

type SearchProps = {
  searchQuery: string;
  handleSearch: (value: string) => void;
};

function Search({ searchQuery, handleSearch }: SearchProps) {
  return (
    <Grid item xs={12}>
      <TextField
        sx={{ width: '100%', marginBottom: '10px', marginTop: '80px' }}
        placeholder="Search by Artist, Genre or Album Name"
        type="search"
        label="Search"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Grid>
  );
}

export default Search;
