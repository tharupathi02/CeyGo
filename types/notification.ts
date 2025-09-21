export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'promotion' | 'system';
  timestamp: string;
  isRead: boolean;
  icon?: string;
  actionUrl?: string;
  priority: 'low' | 'medium' | 'high';
}

export type NotificationFilter = 'all' | 'unread' | 'info' | 'success' | 'warning' | 'error' | 'promotion' | 'system';