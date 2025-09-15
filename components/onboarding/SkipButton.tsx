import React from 'react';
import { Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';

interface SkipButtonProps {
  onPress: () => void;
}

const SkipButton: React.FC<SkipButtonProps> = ({ onPress }) => {
  const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 44;
  
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute right-6 z-10"
      style={{ top: statusBarHeight + 16 }}
      activeOpacity={0.7}
    >
      <View 
        className="bg-black/20 rounded-full px-4 py-2"
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      >
        <Text 
          className="text-white font-semibold text-sm"
          style={{ fontFamily: 'Poppins-SemiBold' }}
        >
          Skip
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SkipButton;
