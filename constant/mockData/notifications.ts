import { Notification } from '../../types/notification';

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Ticket Purchase Successful',
    message: 'Your ticket for Route 101 from Colombo to Kandy has been successfully purchased. Show this at boarding.',
    type: 'success',
    timestamp: '2025-09-21T09:15:00Z',
    isRead: false,
    priority: 'high',
    actionUrl: '/tickets/1'
  },
  {
    id: '2',
    title: 'Special Weekend Offer!',
    message: '🎉 Get 20% off on all inter-city routes this weekend! Valid until Sunday midnight. Use code WEEKEND20.',
    type: 'promotion',
    timestamp: '2025-09-21T08:30:00Z',
    isRead: false,
    priority: 'medium',
    actionUrl: '/offers'
  },
  {
    id: '3',
    title: 'Account Top-up Completed',
    message: 'Your account has been successfully topped up with LKR 2,000. New balance: LKR 3,450.',
    type: 'success',
    timestamp: '2025-09-20T16:45:00Z',
    isRead: true,
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Service Disruption Alert',
    message: 'Route 205 (Colombo - Matara) is experiencing delays due to weather conditions. Expected delay: 30 minutes.',
    type: 'warning',
    timestamp: '2025-09-20T14:20:00Z',
    isRead: false,
    priority: 'high'
  },
  {
    id: '5',
    title: 'Low Balance Warning',
    message: 'Your account balance is running low (LKR 150). Top up now to avoid interruption in service.',
    type: 'warning',
    timestamp: '2025-09-20T12:10:00Z',
    isRead: true,
    priority: 'medium',
    actionUrl: '/topup'
  },
  {
    id: '6',
    title: 'New Feature: Real-time Tracking',
    message: 'We\'ve introduced real-time bus tracking! Now you can see exactly where your bus is and get accurate arrival times.',
    type: 'info',
    timestamp: '2025-09-19T18:00:00Z',
    isRead: true,
    priority: 'low'
  },
  {
    id: '7',
    title: 'Payment Failed',
    message: 'Your payment for ticket booking failed. Please check your payment method and try again.',
    type: 'error',
    timestamp: '2025-09-19T15:30:00Z',
    isRead: false,
    priority: 'high',
    actionUrl: '/payment/retry'
  },
  {
    id: '8',
    title: 'Scheduled Maintenance',
    message: 'The app will undergo maintenance from 2:00 AM to 4:00 AM tonight. Some features may be temporarily unavailable.',
    type: 'system',
    timestamp: '2025-09-19T10:00:00Z',
    isRead: true,
    priority: 'low'
  },
  {
    id: '9',
    title: 'Journey Completed',
    message: 'Thank you for traveling with us! Your journey from Colombo to Kandy is complete. Rate your experience.',
    type: 'success',
    timestamp: '2025-09-18T17:45:00Z',
    isRead: true,
    priority: 'low',
    actionUrl: '/feedback'
  },
  {
    id: '10',
    title: 'Flash Sale: 50% Off!',
    message: '⚡ Limited time offer! Get 50% off on your next 3 bookings. Only 2 hours left! Don\'t miss out.',
    type: 'promotion',
    timestamp: '2025-09-18T14:15:00Z',
    isRead: false,
    priority: 'high',
    actionUrl: '/flash-sale'
  },
  {
    id: '11',
    title: 'Security Alert',
    message: 'New login detected from a different device. If this wasn\'t you, please secure your account immediately.',
    type: 'warning',
    timestamp: '2025-09-18T11:20:00Z',
    isRead: true,
    priority: 'high',
    actionUrl: '/security'
  },
  {
    id: '12',
    title: 'Weekly Travel Summary',
    message: 'This week you saved LKR 340 by using CeyGo! Total trips: 8, Total distance: 145 km.',
    type: 'info',
    timestamp: '2025-09-17T09:00:00Z',
    isRead: true,
    priority: 'low'
  }
];

export default mockNotifications;

// Helper functions for filtering and managing notifications
export const getUnreadNotifications = (notifications: Notification[]) => 
  notifications.filter(notification => !notification.isRead);

export const getNotificationsByType = (notifications: Notification[], type: Notification['type']) =>
  notifications.filter(notification => notification.type === type);

export const getNotificationsByPriority = (notifications: Notification[], priority: Notification['priority']) =>
  notifications.filter(notification => notification.priority === priority);

export const markAsRead = (notifications: Notification[], id: string): Notification[] =>
  notifications.map(notification => 
    notification.id === id ? { ...notification, isRead: true } : notification
  );

export const markAllAsRead = (notifications: Notification[]): Notification[] =>
  notifications.map(notification => ({ ...notification, isRead: true }));