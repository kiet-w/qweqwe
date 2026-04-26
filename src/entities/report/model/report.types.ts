export interface Report {
  id: string;
  title: string;
  content: string;
  status: ReportStatus;
  createdAt: string;
  updatedAt: string;
}

export type ReportStatus = 'draft' | 'published' | 'archived';
