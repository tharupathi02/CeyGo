import AppTopBar from '@/components/appbar/AppTopBar'
import MetroNFCCard from '@/components/cards/MetroNFCCard'
import AppColors from '@/constant/Colors'
import { metroCards } from '@/sample/metro-cards'
import { Plus } from 'lucide-react-native'
import React from 'react'
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const MyCardsScreen: React.FC = () => {
  const router = useRouter()

  type Item = { type: 'card'; id: string } | { type: 'cta'; id: 'add-card' }

  const data: Item[] = React.useMemo(
    () => [...metroCards.map((card) => ({ type: 'card', id: card.id } as Item)), { type: 'cta', id: 'add-card' }],
    []
  )

  const handleCardPress = (cardId: string) => {
    router.push({
      pathname: '/(screens)/my-cards/card-details',
      params: { id: cardId },
    })
  }

  const renderItem = ({ item }: ListRenderItemInfo<Item>) => {
    if (item.type === 'cta') {
      return (
        <TouchableOpacity
          activeOpacity={0.9}
          className='flex-row items-center justify-center py-4 rounded-2xl shadow-lg shadow-indigo-500/30 mt-2'
          style={{ backgroundColor: AppColors.primary }}
        >
          <Plus size={18} color='#FFFFFF' />
          <Text className='text-white font-poppins-medium text-base ml-2'>Add new card</Text>
        </TouchableOpacity>
      )
    }

    const card = metroCards.find((c) => c.id === item.id)
    if (!card) return null

    return <MetroNFCCard key={card.id} card={card} onPress={() => handleCardPress(card.id)} />
  }

  const keyExtractor = (item: Item) => `${item.type}-${item.id}`

  return (
    <SafeAreaView className='flex-1 bg-white pb-20'>
      <View className='flex-1'>
        <AppTopBar title='My Cards' showBackButton={false} />

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 32, paddingTop: 24 }}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={
            <View className='mb-6'>
              <Text className='text-2xl font-poppins-semibold text-gray-900'>Metro Bus NFC Cards</Text>
              <Text className='text-sm text-gray-500 mt-2 leading-5'>
                Access and manage your tap-to-ride cards. Monitor remaining balance, routes, and usage so you're always ready to board.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default MyCardsScreen