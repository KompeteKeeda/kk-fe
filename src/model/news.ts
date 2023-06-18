export interface News {
  id: String;
  title: String;
  content: String;
  tags: number[];
  coverUrl: String;
  userId: number;
  viewCount: number;
  endDate: Date;
}
