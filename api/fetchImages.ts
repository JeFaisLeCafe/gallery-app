import { Constants } from "../constants";
import axios from "axios";
import { ApiImage } from "../types";

const key = process.env.EXPO_PUBLIC_NASA_API_KEY;

export const fetchImages = async ({ count = 20 }: { count?: number }) => {
  const response = await axios.get<ApiImage[]>(Constants.NASA_API_URL, {
    params: {
      api_key: key,
      count: count
    }
  });

  if (response.status !== 200) {
    throw new Error("Error fetching images");
  }

  return response.data.filter((image) => image.media_type === "image");
};
