export type DataType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Result = {
  loading: boolean;
  data: DataType;
  error: string;
};
