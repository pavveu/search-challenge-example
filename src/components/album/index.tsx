import Card from '@mui/material/Card';
import { Chip, Grid, IconButton, IconButtonProps } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { AlbumWrapperProps } from './types';

export interface StyledIconButtonProps extends IconButtonProps {
  favorite: number;
}

const StyledIconButton = styled(IconButton)<StyledIconButtonProps>`
  position: relative;
  float: right;
  transition: all 0.4s ease-in;
  border: ${(props) => (props.favorite === 0 ? '1px solid #7FBAF5' : '1px solid red')};
  color: ${(props) => (props.favorite === 0 ? 'white' : 'red')};
  background: ${(props) => (props.favorite === 0 ? '#7FBAF5' : 'white')};
  &: hover {
    transition: all 0.2s ease-in;
    background: ${(props) =>
      props.favorite === 0 ? lighten(0.2, '#7FBAF5') : lighten(0.3, 'red')};
  }
`;

function Album({ album, handleSearch }: AlbumWrapperProps) {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  const ALBUM_ID = album?.id?.attributes['im:id'];

  // I could have probably also destructure like this
  // const {
  //   id: {
  //     attributes: { 'im:id': ALBUM_ID },
  //   },
  // } = album;


  React.useEffect(() => {
    const keyExist = localStorage.getItem(ALBUM_ID);
    if (keyExist) {
      setIsFavorite(true);
    }
  }, [ALBUM_ID]);

  const handleChangeFavorite = React.useCallback(() => {
    if (!isFavorite) {
      localStorage.setItem(ALBUM_ID, 'isFavorite');
    } else {
      localStorage.removeItem(ALBUM_ID);
    }
    setIsFavorite((isFavPrev) => !isFavPrev);
  }, [ALBUM_ID, isFavorite]);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card
        sx={{
          maxWidth: '580px',
        }}
      >
        <CardMedia
          component="img"
          height="340"
          image={album?.['im:image']?.[2].label}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'Merriweather',
              minHeight: '50px',
              fontSize: '16px',
            }}
          >
            {album['im:name'].label}
          </Typography>

          <Typography
            variant="h6"
            color="info"
            mb={4}
            onClick={() => handleSearch(album['im:artist'].label)}
            sx={{ fontSize: '16px' }}
          >
            {album['im:artist'].label}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" color="text.secondary" mb={4}>
                <Chip
                  label={album.category.attributes.term}
                  color="info"
                  variant="filled"
                  clickable
                  onClick={() => handleSearch(album.category.attributes.term)}
                />
              </Typography>
            </Grid>
            <Grid item xs={6} alignContent="flex-end">
              <StyledIconButton
                aria-label="add to favorites"
                onClick={handleChangeFavorite}
                favorite={isFavorite ? 1 : 0}
              >
                <FavoriteIcon />
              </StyledIconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default React.memo(Album);
