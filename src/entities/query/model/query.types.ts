export interface Query {
  id: string;
  prompt: string;
  status: QueryStatus;
  resultReportId?: string;
  createdAt: string;
}

export type QueryStatus = 'pending' | 'processing' | 'completed' | 'failed';
