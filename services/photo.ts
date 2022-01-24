import axios from "axios";

export const getPhotos = async (): Promise<string[]> => {
  try {
    const response = await axios.get(
      "https://pixabay.com/api/?key=" + process.env.PIXABAY_KEY
    );
    return response.data.hits.map((item) => item.webformatURL);
  } catch (error) {
    return [];
  }
};
