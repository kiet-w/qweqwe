export interface Collection {
  id: string;
  name: string;
  description?: string;
  itemIds: string[];
  userId: string;
  createdAt: string;
}
