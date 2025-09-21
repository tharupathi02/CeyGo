import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  iconBackgroundColor?: string;
  containerClassName?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  subtitle,
  actionLabel,
  onActionPress,
  iconBackgroundColor = 'bg-gray-100',
  containerClassName = 'flex-1 justify-center items-center py-12'
}) => {
  return (
    <View className={containerClassName}>
      {/* Icon Container */}
      {icon && (
        <View className={`${iconBackgroundColor} rounded-full p-6 mb-4`}>
          {icon}
        </View>
      )}

      {/* Title */}
      <Text className="font-poppins-semibold text-lg text-gray-700 mb-2 text-center">
        {title}
      </Text>

      {/* Subtitle */}
      {subtitle && (
        <Text className="font-poppins-regular text-gray-500 text-center px-8 mb-6">
          {subtitle}
        </Text>
      )}

      {/* Action Button */}
      {actionLabel && onActionPress && (
        <TouchableOpacity
          onPress={onActionPress}
          className="bg-blue-500 px-6 py-3 rounded-2xl"
          activeOpacity={0.7}
        >
          <Text className="font-poppins-semibold text-white text-base">
            {actionLabel}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EmptyState;