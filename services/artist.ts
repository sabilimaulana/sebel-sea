import axios from "axios";
import { Artist } from "types";

const baseUrl = process.env.API_URL || "";

export const getTopArtists = async (): Promise<Artist[]> => {
  try {
    const response = await axios.get(`${baseUrl}/top-artist`);
    return response.data;
  } catch (error) {
    return [];
  }
};
