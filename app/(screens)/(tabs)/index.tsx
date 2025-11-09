import TopBar from '@/components/appbar/TopBar'
import HomeActivityCard from '@/components/cards/HomeActivityCard'
import HomeServiceCard from '@/components/cards/HomeServiceCard'
import NFCCardCarousel from '@/components/sections/NFCCardCarousel'
import { homeServices } from '@/sample/home-services'
import { historyEntries } from '@/sample/history'
import { cardUtils, metroCards, type MetroCard } from '@/sample/metro-cards'
import { formatCurrency } from '@/utils/formatters'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { BanknoteArrowUp, ArrowRight } from 'lucide-react-native'
import React, { useMemo } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const router = useRouter()

  const totalBalance = useMemo(() => cardUtils.getTotalBalance(), [])
  const latestActivities = useMemo(() => historyEntries.slice(0, 5), [])

  const handleCardPress = (card: MetroCard) => {
    router.push({ pathname: '/(screens)/my-cards/card-details', params: { id: card.id } })
  }

  const handleActivityPress = (entryId: string) => {
    router.push({ pathname: '/(screens)/history/history-details', params: { id: entryId } })
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <TopBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 48 }}
      >
        <View>
          <View className='flex-row items-center justify-between px-6 mb-5'>
            <View>
              <Text className='text-base font-poppins-semibold text-gray-900'>My Cards</Text>
              <Text className='text-xs text-gray-500 mt-1'>Tap a card to view full details</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.push('/(screens)/(tabs)/my-cards' as never)}
              className='rounded-full bg-slate-100 px-3 py-1'
              activeOpacity={0.85}
            >
              <Text className='text-xs font-poppins-medium text-slate-600'>Manage</Text>
            </TouchableOpacity>
          </View>

          <NFCCardCarousel cards={metroCards} onCardPress={handleCardPress} />
        </View>

        <View className='px-6'>
          <View className='flex-row items-center justify-between mb-5'>
            <Text className='text-base font-poppins-semibold text-gray-900'>Services</Text>
          </View>

          <View className='flex-row flex-wrap gap-4'>
            {homeServices.map(service => (
              <View key={service.id} style={{ flexBasis: '48%', flexGrow: 1 }}>
                <HomeServiceCard service={service} onPress={() => router.push(service.route as never)} />
              </View>
            ))}
          </View>
        </View>

        <View className='mt-10 px-6'>
          <View className='flex-row items-center justify-between mb-5'>
            <Text className='text-base font-poppins-semibold text-gray-900'>Latest activity</Text>
            <TouchableOpacity
              onPress={() => router.push('/(screens)/history/history')}
              activeOpacity={0.85}
            >
              <Text className='text-xs font-poppins-medium text-indigo-600'>View history</Text>
            </TouchableOpacity>
          </View>

          <View className='gap-4'>
            {latestActivities.map(entry => (
              <HomeActivityCard
                key={entry.id}
                entry={entry}
                onPress={() => handleActivityPress(entry.id)}
              />
            ))}
          </View>

          {latestActivities.length === 0 ? (
            <View className='rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-10 items-center mt-4'>
              <Text className='text-sm font-poppins-medium text-slate-500'>No activity recorded yet</Text>
              <Text className='text-xs text-slate-400 mt-2 text-center'>Start travelling or top up to see your history here.</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen