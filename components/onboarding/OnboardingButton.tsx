import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface OnboardingButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary';
}

const OnboardingButton: React.FC<OnboardingButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
}) => {
  const isSecondary = variant === 'secondary';

  return (
    <View className="mx-8">
      <TouchableOpacity
        onPress={onPress}
        className={`py-4 px-8 rounded-full ${
          isSecondary
            ? 'bg-transparent border-2 border-blue-600'
            : 'bg-blue-600'
        }`}
        style={{
          shadowColor: '#3B82F6',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: isSecondary ? 0 : 0.3,
          shadowRadius: 8,
          elevation: isSecondary ? 0 : 6,
        }}
        activeOpacity={0.8}
      >
        <Text
          className={`text-center font-semibold text-lg ${
            isSecondary ? 'text-blue-600' : 'text-white'
          }`}
          style={{ fontFamily: 'Poppins-SemiBold' }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingButton;
