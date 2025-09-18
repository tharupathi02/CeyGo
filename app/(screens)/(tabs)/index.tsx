import TopBar from '@/components/appbar/TopBar'
import BottomSheet from '@gorhom/bottom-sheet'
import { BanknoteArrowUp } from 'lucide-react-native'
import React, { useRef } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppColors from '../../../constant/Colors'
import HomeBottomSheet from '@/components/bottom-sheets/HomeBottomSheet'

const HomeScreen = () => {
  // Ref for the bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.primary} />

      {/* Top Section with Balance */}
      <View className='bg-[#4F46E5] flex-1'>
        {/* TopBar Component */}
        <TopBar />

        {/* Balance Section */}
        <View className='flex flex-col items-center mt-5'>
          <Text className='text-white/70 text-center mt-5'>Total balance</Text>
          <Text className='text-white text-5xl font-bold text-center mt-5'>2,000.00</Text>
          <Text className='text-white/70 text-center text-sm mb-1'>Sri Lanka Rupees</Text>
        </View>

        {/* Buy Tickets Button */}
        <View className='px-8 mt-10 items-center'>
          <TouchableOpacity
            className='flex gap-2 bg-white py-4 px-6 rounded-xl flex-row items-center justify-center w-full shadow-sm'
            onPress={() => console.log('Top Up My Wallet Pressed')}
          >
            <BanknoteArrowUp size={20} color={AppColors.primary} />
            <Text className='font-poppins-medium text-base text-[#4F46E5]'>Top Up My Wallet</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Sheet */}
        <HomeBottomSheet bottomSheetRef={bottomSheetRef} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen