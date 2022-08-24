import { Box, Container, Grid, Typography } from '@mui/material';

function About() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Box mt="40px">
          <Typography variant="h2">Hello, </Typography>
          <br />
          <Typography variant="h5">
            You can search list by artist, genre, or album name. <br />
            <br />
            If you click on genre name, or artist name - it will also generate search
            query
            <br />
            <br /> ps. logo works as home link. <br />
            <br /> ps2. i&apos;ve used localstorage to save favorites because i
            didn&apos;t have time to integrate with some api
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}

export default About;
