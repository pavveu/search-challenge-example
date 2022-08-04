import axios from 'axios';

// eslint-disable-next-line consistent-return
async function getAlbums() {
  try {
    const response = await axios.get(
      'https://itunes.apple.com/us/rss/topalbums/limit=100/json'
    );
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default getAlbums;
