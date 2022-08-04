import * as React from 'react';
import { Grid } from '@mui/material';
import { AlbumProps } from '../album/types';
import Album from '../album';
import { AlbumListProps } from './types';

function AlbumList({ searchResults, handleSearch }: AlbumListProps) {
  return (
    <Grid container spacing={4}>
      {searchResults?.map((album: AlbumProps) => (
        <Album
          key={album?.id?.attributes['im:id']}
          album={album}
          handleSearch={handleSearch}
        />
      ))}
    </Grid>
  );
}

export default AlbumList;
