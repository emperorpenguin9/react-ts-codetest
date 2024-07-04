import { useEffect, useState } from "react";
// import { DataType, Result } from "../types/type";

type Result = {
  loading: boolean;
  data?: DataType;
  error?: string;
};

type DataType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const useFetch = (url: string): Result => {
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const ret: DataType = await response.json();
        if (!!ret) {
          setLoading(false);
          setData(ret);
        }
      } catch (error) {
        setLoading(false);
        setError(error as string);
      }
    };
    fetchData();
  }, []);

  return { loading, data, error };
};

export default useFetch;
