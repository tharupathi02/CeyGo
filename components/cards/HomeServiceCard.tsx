import React, { useMemo } from 'react'
import { Pressable, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {
  Clock,
  CreditCard,
  History,
  LifeBuoy,
  Map,
  Ticket,
  TrainFront,
  Wallet,
  type LucideIcon
} from 'lucide-react-native'

import type { HomeService } from '@/types/home-service'

export type HomeServiceCardProps = {
  service: HomeService
  onPress?: (service: HomeService) => void
}

const iconMap: Record<HomeService['icon'], LucideIcon> = {
  train: TrainFront,
  'credit-card': CreditCard,
  ticket: Ticket,
  wallet: Wallet,
  map: Map,
  clock: Clock,
  history: History,
  lifebuoy: LifeBuoy
}

const HomeServiceCard: React.FC<HomeServiceCardProps> = ({ service, onPress }) => {
  const IconComponent = useMemo(() => iconMap[service.icon] ?? TrainFront, [service.icon])

  return (
    <Pressable
      onPress={() => onPress?.(service)}
      android_ripple={{ color: '#E0E7FF' }}
      className='overflow-hidden rounded-3xl shadow-sm shadow-indigo-100 active:opacity-95'
      style={{ backgroundColor: service.backgroundColor }}
    >
      <LinearGradient
        colors={[`${service.accentColor}1A`, `${service.accentColor}0D`]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className='px-5 py-5'
        style={{ borderRadius: 28 }}
      >
        <View
          className='h-11 w-11 rounded-2xl items-center justify-center'
          style={{ backgroundColor: service.accentColor }}
        >
          <IconComponent size={22} color='#FFFFFF' />
        </View>

        <Text className='text-base font-poppins-semibold text-gray-900 mt-4'>{service.title}</Text>
        <Text className='text-xs text-gray-600 mt-1'>{service.subtitle}</Text>
      </LinearGradient>
    </Pressable>
  )
}

export default HomeServiceCard
