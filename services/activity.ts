import axios from "axios";
import { Activity } from "types";

const baseUrl = process.env.API_URL || "";

export const getRecentActivities = async (): Promise<Activity[]> => {
  try {
    const response = await axios.get(`${baseUrl}/recent-activities`);
    return response.data;
  } catch (error) {
    return [];
  }
};
