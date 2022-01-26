import axios from 'axios';
import { getPhotos } from 'services/photo';
import { Artwork } from 'types';
import { random } from 'utils/number';

const baseUrl = process.env.API_URL || '';

export const getFeaturedArtworks = async (): Promise<Artwork[]> => {
  try {
    const photos = await getPhotos();

    const response = await axios.get(`${baseUrl}/featured-artworks`);

    return response.data.map(item => ({
      ...item,
      artworksUrl: photos[random(0, photos.length - 1)]
    }));
  } catch (error) {
    return [];
  }
};
