import React from 'react';
import { View } from 'react-native';

interface PageIndicatorProps {
  currentIndex: number;
  totalPages: number;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentIndex,
  totalPages,
}) => {
  return (
    <View className="flex-row justify-center items-center">
      {Array.from({ length: totalPages }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentIndex
              ? 'bg-blue-600 w-8'
              : 'bg-gray-300 w-2'
          }`}
          style={{ marginHorizontal: 6 }}
        />
      ))}
    </View>
  );
};

export default PageIndicator;
