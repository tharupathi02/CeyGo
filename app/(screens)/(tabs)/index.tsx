import { BanknoteArrowUp, Bus, ClipboardClock, CreditCard, HeartHandshake, History, MapPin, Ticket } from 'lucide-react-native'
import React from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ServiceButton from '../../../components/buttons/ServiceButton'
import AppColors from '../../../constant/Colors'
import TopBar from '@/components/appbar/TopBar'

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.primary} />

      {/* Top Section with Balance */}
      <View className='bg-[#4F46E5] h-full'>
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


        <View className='flex-1 bg-white rounded-t-3xl p-6 mt-10'>

          <View className='bg-gray-100 h-2 w-20 rounded-lg mx-auto mb-5' />

          {/* Service List Header */}
          <View className='flex-row justify-between items-center mb-6'>
            <Text className='text-lg font-bold text-gray-800'>Service List</Text>
            <TouchableOpacity>
              <Text className='text-[#4F46E5] text-sm'>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Services Grid */}
          <View className='flex-row flex-wrap justify-between mb-6'>
            {/* First Row */}
            <View className='flex-row w-full justify-between mb-4'>
              <ServiceButton
                icon={Bus}
                title="Bus Tickets"
                backgroundColorClass="bg-blue-50"
                iconColor="#1976D2"
                onPress={() => console.log('Bus Tickets pressed')}
              />
              <ServiceButton
                icon={CreditCard}
                title="Top Up"
                backgroundColorClass="bg-orange-50"
                iconColor="#F57C00"
                onPress={() => console.log('Top Up pressed')}
              />
              <ServiceButton
                icon={Ticket}
                title="My Tickets"
                backgroundColorClass="bg-pink-50"
                iconColor="#C2185B"
                onPress={() => console.log('My Tickets pressed')}
              />
              <ServiceButton
                icon={BanknoteArrowUp}
                title="Fare Info"
                backgroundColorClass="bg-indigo-50"
                iconColor="#3F51B5"
                onPress={() => console.log('Fare Information pressed')}
              />
            </View>

            {/* Second Row */}
            <View className='flex-row w-full justify-between'>
              <ServiceButton
                icon={MapPin}
                title="Route Map"
                backgroundColorClass="bg-yellow-50"
                iconColor="#FBC02D"
                onPress={() => console.log('Route Map pressed')}
              />
              <ServiceButton
                icon={ClipboardClock}
                title="Timetables"
                backgroundColorClass="bg-green-50"
                iconColor="#388E3C"
                onPress={() => console.log('Timetables pressed')}
              />
              <ServiceButton
                icon={History}
                title="History"
                backgroundColorClass="bg-purple-50"
                iconColor="#7B1FA2"
                onPress={() => console.log('History pressed')}
              />
              <ServiceButton
                icon={HeartHandshake}
                title="Support"
                backgroundColorClass="bg-red-50"
                iconColor="#D32F2F"
                onPress={() => console.log('Support pressed')}
              />
            </View>
          </View>

          {/* Recent Activity */}
          <View className='mt-4'>
            <Text className='text-base font-semibold text-gray-800 mb-3'>Recent Activity</Text>
            <View className='bg-gray-50 rounded-xl p-4'>
              <Text className='text-gray-500 text-center text-sm'>No recent activity</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen