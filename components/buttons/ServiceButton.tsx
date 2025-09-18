import { LucideIcon } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ServiceButtonProps {
  icon: LucideIcon;
  title: string;
  backgroundColorClass: string;
  iconColor: string;
  onPress?: () => void;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
  icon: Icon,
  title,
  backgroundColorClass,
  iconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      className="items-center flex-1"
      onPress={onPress}
    >
      <View 
        className={`w-16 h-16 rounded-2xl items-center justify-center mb-2 shadow-sm ${backgroundColorClass} opacity-70`}
      >
        <Icon size={24} color={iconColor} />
      </View>
      <Text className="text-gray-700 text-xs font-medium text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ServiceButton;