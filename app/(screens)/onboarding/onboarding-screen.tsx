import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Dimensions, Platform, ScrollView, StatusBar, View } from 'react-native';
import OnboardingButton from '../../../components/onboarding/OnboardingButton';
import OnboardingSlide from '../../../components/onboarding/OnboardingSlide';
import PageIndicator from '../../../components/onboarding/PageIndicator';
import SkipButton from '../../../components/onboarding/SkipButton';
import { ONBOARDING_DATA } from '../../../constant/Onboarding';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const router = useRouter();

  // We no longer need handleNext as we've removed the Next buttons
  // and only rely on manual scrolling and the Get Started button

  const handleSkip = () => {
    handleGetStarted();
  };

  const handleGetStarted = () => {
    // Navigate to main app or home screen
    router.replace('/(screens)/(tabs)');
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const isLastSlide = currentIndex === ONBOARDING_DATA.length - 1;

  return (
    <View className="flex-1 bg-white">
      <StatusBar 
        hidden
      />
      
      {/* Skip Button */}
      {!isLastSlide && <SkipButton onPress={handleSkip} />}

      {/* Slides Container */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        className="flex-1"
        decelerationRate="fast"
        bounces={false}
        scrollEnabled={true}
      >
        {ONBOARDING_DATA.map((slide, index) => (
          <View key={slide.id} style={{ width }}>
            <OnboardingSlide
              image={slide.image}
              title={slide.title}
              description={slide.description}
            />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Controls */}
      <View 
        className="bg-white pt-6"
        style={{ paddingBottom: Platform.OS === 'ios' ? 34 : 24 }}
      >
        {/* Page Indicator */}
        <View className="mb-8">
          <PageIndicator
            currentIndex={currentIndex}
            totalPages={ONBOARDING_DATA.length}
          />
        </View>

        {/* Action Button - Only show Get Started button */}
        {isLastSlide ? (
          <OnboardingButton
            onPress={handleGetStarted}
            title="Get Started"
          />
        ) : (
          // Empty space to maintain layout
          <View style={{ height: 48 }}></View>
        )}
      </View>
    </View>
  );
};

export default OnboardingScreen;