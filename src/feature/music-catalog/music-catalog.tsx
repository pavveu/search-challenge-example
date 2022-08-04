import Container from '@mui/material/Container';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

import { ErrorBoundary } from 'react-error-boundary';
import getAlbums from '../../services/getAlbums';
import { AlbumProps } from '../../components/album/types';
import Search from '../search';
import AlbumList from '../../components/album-list';
import ErrorFallback from '../../components/error/error-fallback';
import SearchResultInfo from '../../components/search-result-info';

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
  // Do something with the error
  // E.g. log to an error logging client here
  // eslint-disable-next-line no-console
  console.log(error, info);
};

function MusicCatalog() {
  const [albums, setAlbums] = React.useState<AlbumProps[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [searchResults, setSearchResults] = React.useState<AlbumProps[]>([]);

  React.useEffect(() => {
    getAlbums()
      .then((response) => {
        setAlbums(response.feed.entry);
        setSearchResults(response.feed.entry);
      })
      // eslint-disable-next-line no-console
      .catch((e) => console.log(e));
  }, []);

  const handleSearch = React.useCallback(
    (searchTerm: string) => {
      setSearchQuery(searchTerm);
      const searchString = searchTerm.toLowerCase();

      const filtered = albums?.filter(
        (album: AlbumProps) =>
          searchString.includes(album['im:artist'].label.toLowerCase()) ||
          album['im:artist'].label.toLowerCase().includes(searchString) ||
          searchString.includes(album.title.label.toLowerCase()) ||
          album.title.label.toLowerCase().includes(searchString) ||
          searchString.includes(album.category.attributes.term.toLowerCase()) ||
          album.category.attributes.term.toLowerCase().includes(searchString)
      );

      setSearchResults(filtered);
    },
    [albums]
  );

  return (
    <Container sx={{ marginBottom: '50px' }} maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Search searchQuery={searchQuery} handleSearch={handleSearch} />
        </Grid>
        <Grid item xs={12}>
          <Box mb={6}>
            <Typography variant="h3">
              <SearchResultInfo
                resultsLength={searchResults.length}
                isDataLoaded={albums.length > 0}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <AlbumList searchResults={searchResults} handleSearch={handleSearch} />
      </ErrorBoundary>
    </Container>
  );
}

export default MusicCatalog;
