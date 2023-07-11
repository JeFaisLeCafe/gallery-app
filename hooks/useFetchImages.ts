import { useState, useEffect } from "react";
import { fetchImages } from "../api/fetchImages";
import { ApiImage } from "../types";

export default function useFetchImages(count = 10) {
  const [images, setImages] = useState<ApiImage[]>([]);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const fetch = () => {
    setIsLoading(true);
    try {
      fetchImages({ count }).then((images) => {
        setImages(images);
      });
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  function refresh(newCount: number) {
    count = newCount;
    fetch();
  }

  useEffect(() => {
    fetch();
  }, [count]);

  return {
    images,
    isLoading,
    error,
    refresh
  };
}
