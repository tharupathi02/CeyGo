import React from 'react'
import { FlatList, View } from 'react-native'

import MetroNFCCard from '@/components/cards/MetroNFCCard'
import type { MetroCard } from '@/sample/metro-cards'

export type NFCCardCarouselProps = {
  cards: MetroCard[]
  contentInset?: number
  onCardPress?: (card: MetroCard) => void
}

const ITEM_SPACING = 20

const NFCCardCarousel: React.FC<NFCCardCarouselProps> = ({ cards, contentInset = 24, onCardPress }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cards}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingHorizontal: contentInset }}
      ItemSeparatorComponent={() => <View style={{ width: ITEM_SPACING }} />}
      snapToAlignment='start'
      decelerationRate='fast'
      snapToInterval={320 + ITEM_SPACING}
      renderItem={({ item }) => (
        <View style={{ width: 320 }}>
          <MetroNFCCard card={item} onPress={() => onCardPress?.(item)} />
        </View>
      )}
    />
  )
}

export default NFCCardCarousel
