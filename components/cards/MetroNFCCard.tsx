import { LinearGradient } from 'expo-linear-gradient'
import { BadgeCheck, CreditCard, RefreshCcw, Wifi } from 'lucide-react-native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { MetroCard } from '@/sample/metro-cards'
import { formatCurrency, maskCardNumber } from '@/utils/formatters'
import Assets from '@/constant/Assets'

type MetroNFCCardProps = {
  card: MetroCard
  onPress?: () => void
  disabled?: boolean
}

const MetroNFCCard: React.FC<MetroNFCCardProps> = ({ card, onPress, disabled = false }) => {
  const autoReloadLabel = card.autoReload.enabled
    ? `Auto reload • ${formatCurrency(card.autoReload.amount ?? 0, card.currency)}`
    : 'Manual reload'

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      className='mb-5'
    >
      <LinearGradient
        colors={card.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className='px-6 py-6'
        style={{ borderRadius: 28, overflow: 'hidden', position: 'relative' }}
      >
        <View
          className='absolute -right-14 -top-16 w-40 h-40 rounded-full'
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
        />

        <View
          className='absolute -right-12 bottom-0 w-32 h-32 rounded-full'
          style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
        />

        <Image
          source={Assets.logo.whiteBus}
          resizeMode='contain'
          className='absolute -bottom-6 -left-10 w-48 h-48 opacity-15'
        />

        <View className='flex-row justify-between items-start'>
          <View className='flex-1 pr-4'>
            <Text className='text-xs uppercase text-indigo-100 font-poppins-medium tracking-[1.2px]'>
              {card.cardType} metro card
            </Text>
            <Text className='text-white text-2xl font-poppins-semibold mt-2'>{card.nickname}</Text>
            <View className='flex-row items-center mt-2'>
              <CreditCard size={14} color='white' />
              <Text className='text-xs font-poppins-medium text-indigo-100 ml-2'>{card.cardStatus}</Text>
            </View>
          </View>

          <View className='items-end'>
            {card.status ? (
              <View className='flex-row items-center bg-white/15 px-3 py-1 rounded-full mb-3'>
                {card.status === 'Primary' && <BadgeCheck size={14} color='#FFFFFF' />}
                <Text className={`text-white text-xs font-poppins-medium ${card.status === 'Primary' ? 'ml-2' : ''}`}>
                  {card.status}
                </Text>
              </View>
            ) : null}

            <View className='w-10 h-10 rounded-full bg-white/20 items-center justify-center'>
              <Wifi size={18} color='#FFFFFF' />
            </View>
          </View>
        </View>

        <Text className='text-white text-xl font-poppins-semibold mt-4 tracking-[4px]'>
          {maskCardNumber(card.cardNumber)}
        </Text>

        <View className='flex-col mt-4'>
          <View>
            <Text className='text-sm uppercase text-indigo-100 font-poppins-medium'>Balance</Text>
            <Text className='text-white text-4xl font-poppins-semibold'>
              {formatCurrency(card.balance, card.currency)}
            </Text>
          </View>

          <View className='flex-row items-center mt-2'>
            <Text className='text-sm uppercase text-indigo-100 font-poppins-medium'>Valid thru</Text>
            <Text className='text-sm uppercase text-indigo-100 font-poppins-medium ml-2'>•</Text>
            <Text className='text-sm text-white font-poppins-medium ml-2'>{card.validThrough}</Text>
          </View>
        </View>

        <View className='flex-row justify-between items-center mt-4'>
          <View>
            <Text className='text-sm uppercase text-indigo-100 font-poppins-light'>Card holder</Text>
            <Text className='text-sm text-white font-poppins-medium'>{card.holder}</Text>
          </View>
        </View>

        {!disabled && (
          <View className='flex-row justify-end items-center mt-3'>
            <Text className='text-xs font-poppins-medium text-indigo-100 mr-1'>Tap to view details</Text>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default MetroNFCCard
