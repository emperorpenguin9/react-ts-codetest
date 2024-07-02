import { useEffect, useState } from "react";
const URL = "https://jsonplaceholder.typicode.com/photos/1";

type DataType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const Custom = () => {
  const [data, setData] = useState<DataType>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data: DataType = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error", error);
        return error;
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{!!data && data.title}</h1>
    </div>
  );
};

export default Custom;
