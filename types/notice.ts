export type NoticeCategory = 'meeting' | 'cultural' | 'financial' | 'language' | 'festival' | 'general'
export type NoticePriority = 'high' | 'medium' | 'low'

export interface Notice {
  id: string;
  title: string;
  content: string;
  category: NoticeCategory;
  priority: NoticePriority;
  status: 'draft' | 'sent' | 'scheduled';
  createdBy: string;
  createdAt: Date;
  scheduledFor?: Date;
  sentAt?: Date;
  recipients: string[];
  attachments?: string[];
  isPublic: boolean;
    relatedLink?: string; // New field for related page links

}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'member';
  isSubscribed: boolean;
  joinedAt: Date;
}

export interface NoticeStats {
  totalNotices: number;
  totalRecipients: number;
  todayNotices: number;
  noticesByCategory: { [key: string]: number };
}