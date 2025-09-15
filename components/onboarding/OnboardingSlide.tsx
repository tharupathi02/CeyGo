import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

interface OnboardingSlideProps {
  image: any;
  title: string;
  description: string;
}

const { width, height } = Dimensions.get('window');

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <View className="flex-1 w-full">
      {/* Image Container */}
      <View className="flex-1 relative">
        <Image
          source={image}
          className="w-full h-full"
          resizeMode="cover"
        />
        {/* Gradient Overlay */}
        <LinearGradient
          colors={[
            'transparent',
            'rgba(255,255,255,0.1)', 
            'rgba(255,255,255,0.7)',
            'rgba(255,255,255,0.95)',
            'rgba(255,255,255,1)'
          ]}
          locations={[0, 0.3, 0.6, 0.8, 1]}
          className="absolute inset-0"
        />
      </View>
      
      {/* Content Container */}
      <View className="bg-white px-8 pb-8 pt-4 -mt-2">
        <Text 
          className="text-3xl font-bold text-gray-900 text-center mb-4"
          style={{ 
            fontFamily: 'Poppins-Bold',
            lineHeight: 40 
          }}
        >
          {title}
        </Text>
        <Text 
          className="text-base text-gray-600 text-center"
          style={{ 
            fontFamily: 'Poppins-Regular',
            lineHeight: 24 
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingSlide;
