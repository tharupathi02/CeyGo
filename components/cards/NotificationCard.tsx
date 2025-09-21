import { format, parseISO } from 'date-fns';
import {
    AlertTriangle,
    CheckCircle,
    Gift,
    Info,
    Settings,
    XCircle
} from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Notification } from '../../types/notification';

interface NotificationCardProps {
  notification: Notification;
  onPress?: () => void;
  onMarkAsRead?: (id: string) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  notification, 
  onPress,
  onMarkAsRead 
}) => {
  // Format timestamp to display
  const formattedTime = format(parseISO(notification.timestamp), 'MMM dd, HH:mm');

  const getTypeIcon = (type: Notification['type']) => {
    const iconSize = 20;
    const iconColor = getTypeColor(type);
    
    switch (type) {
      case 'success':
        return <CheckCircle size={iconSize} color={iconColor} />;
      case 'warning':
        return <AlertTriangle size={iconSize} color={iconColor} />;
      case 'error':
        return <XCircle size={iconSize} color={iconColor} />;
      case 'promotion':
        return <Gift size={iconSize} color={iconColor} />;
      case 'system':
        return <Settings size={iconSize} color={iconColor} />;
      default:
        return <Info size={iconSize} color={iconColor} />;
    }
  };

  const getTypeColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return '#10B981'; // Green
      case 'warning':
        return '#F59E0B'; // Amber
      case 'error':
        return '#EF4444'; // Red
      case 'promotion':
        return '#8B5CF6'; // Purple
      case 'system':
        return '#6B7280'; // Gray
      default:
        return '#3B82F6'; // Blue
    }
  };

  const getTypeBgColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'warning':
        return 'bg-amber-50';
      case 'error':
        return 'bg-red-50';
      case 'promotion':
        return 'bg-purple-50';
      case 'system':
        return 'bg-gray-50';
      default:
        return 'bg-blue-50';
    }
  };

  const getTypeBorderColor = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return 'border-l-green-500';
      case 'warning':
        return 'border-l-amber-500';
      case 'error':
        return 'border-l-red-500';
      case 'promotion':
        return 'border-l-purple-500';
      case 'system':
        return 'border-l-gray-500';
      default:
        return 'border-l-blue-500';
    }
  };

  const getPriorityIndicator = (priority: Notification['priority']) => {
    switch (priority) {
      case 'high':
        return (
          <View className="w-2 h-2 rounded-full bg-red-500 absolute -top-1 -right-1" />
        );
      case 'medium':
        return (
          <View className="w-2 h-2 rounded-full bg-amber-500 absolute -top-1 -right-1" />
        );
      default:
        return null;
    }
  };

  const handlePress = () => {
    if (!notification.isRead && onMarkAsRead) {
      onMarkAsRead(notification.id);
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`
        mb-3 mx-4 rounded-xl overflow-hidden shadow-sm
        ${notification.isRead ? 'bg-white' : 'bg-blue-50/30'}
        border-l-4 ${getTypeBorderColor(notification.type)}
      `}
      activeOpacity={0.7}
    >
      <View className="p-4">
        <View className="flex-row items-start space-x-3">
          {/* Icon Container */}
          <View className={`
            p-2 rounded-full relative
            ${getTypeBgColor(notification.type)}
          `}>
            {getTypeIcon(notification.type)}
            {getPriorityIndicator(notification.priority)}
          </View>

          {/* Content */}
          <View className="flex-1">
            <View className="flex-row justify-between items-start mb-1">
              <Text className={`
                font-poppins-semibold text-base
                ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}
              `}>
                {notification.title}
              </Text>
              
              {/* Unread indicator */}
              {!notification.isRead && (
                <View className="w-2 h-2 rounded-full bg-blue-500 ml-2 mt-1" />
              )}
            </View>

            <Text className={`
              font-poppins-regular text-sm leading-5 mb-2
              ${notification.isRead ? 'text-gray-500' : 'text-gray-700'}
            `}>
              {notification.message}
            </Text>

            <View className="flex-row justify-between items-center">
              <Text className="font-poppins-regular text-xs text-gray-400">
                {formattedTime}
              </Text>
              
              {/* Type badge */}
              <View className={`
                px-2 py-1 rounded-full
                ${getTypeBgColor(notification.type)}
              `}>
                <Text className={`
                  font-poppins-medium text-xs capitalize
                `} style={{ color: getTypeColor(notification.type) }}>
                  {notification.type}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Action indicator */}
      {notification.actionUrl && (
        <View className="px-4 pb-3">
          <View className="flex-row items-center justify-end">
            <Text className="font-poppins-medium text-xs text-blue-600 mr-1">
              Tap to view
            </Text>
            <View className="w-1 h-1 rounded-full bg-blue-600" />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default NotificationCard;