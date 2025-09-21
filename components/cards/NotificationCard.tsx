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
  const formattedTime = format(parseISO(notification.timestamp), 'MMMM dd, HH:mm');

  const getTypeIcon = (type: Notification['type']) => {
    const iconSize = 15;
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
        mb-3 mx-4 rounded-2xl overflow-hidden border
        ${notification.isRead 
          ? 'bg-white border-gray-100' 
          : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'
        }
      `}
      activeOpacity={0.7}
    >
      <View className="p-5">
        {/* Top Row: Icon, Title, and Badge */}
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center flex-1">
            {/* Icon Container */}
            <View className={`
              w-8 h-8 rounded-xl items-center justify-center mr-3
              ${getTypeBgColor(notification.type)} relative
            `}>
              {getTypeIcon(notification.type)}
            </View>

            {/* Title */}
            <Text 
              className={`
                font-poppins-semibold text-base flex-1
                ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}
              `}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {notification.title}
            </Text>
          </View>

          {/* Read/Unread Badge */}
          <View className="ml-3">
            {!notification.isRead ? (
              <View className="bg-blue-500 px-2 py-1 rounded-full">
                <Text className="font-poppins-medium text-xs text-white">
                  New
                </Text>
              </View>
            ) : (
              <View className="bg-gray-100 px-2 py-1 rounded-full">
                <Text className="font-poppins-medium text-xs text-gray-500">
                  Read
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Content */}
        <View className="mb-4">
          <Text className={`
            font-poppins-regular text-sm leading-6
            ${notification.isRead ? 'text-gray-600' : 'text-gray-800'}
          `}>
            {notification.message}
          </Text>
        </View>

        {/* Bottom Row: Date and Type Badge */}
        <View className="flex-row items-center justify-end">
          <Text className="font-poppins-regular text-xs text-gray-400">
            {formattedTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;