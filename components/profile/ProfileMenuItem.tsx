import React from 'react'
import { Pressable, Text, View } from 'react-native'
import {
  Bell,
  CreditCard,
  Globe,
  HelpCircle,
  LifeBuoy,
  LogOut,
  Moon,
  ShieldCheck,
  User,
  Wallet2
} from 'lucide-react-native'

import type { ProfileMenuItem as ProfileMenuItemType } from '@/types/profile'

export type ProfileMenuItemProps = {
  item: ProfileMenuItemType
  onPress?: (item: ProfileMenuItemType) => void
  isLast?: boolean
}

const iconMap: Record<ProfileMenuItemType['icon'], React.ComponentType<{ size?: number; color?: string }>> = {
  user: User,
  shield: ShieldCheck,
  bell: Bell,
  creditCard: CreditCard,
  wallet: Wallet2,
  globe: Globe,
  moon: Moon,
  lifeBuoy: LifeBuoy,
  help: HelpCircle,
  logOut: LogOut
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({ item, onPress, isLast = false }) => {
  const IconComponent = iconMap[item.icon]
  const textColor = item.isDestructive ? 'text-rose-600' : 'text-gray-900'
  const iconColor = item.isDestructive ? '#DC2626' : '#4338CA'

  return (
    <Pressable
      onPress={() => onPress?.(item)}
      android_ripple={{ color: '#EEF2FF' }}
      className={`px-5 py-4 flex-row items-center ${isLast ? '' : 'border-b border-slate-100'}`}
    >
      <View className='w-11 h-11 rounded-2xl bg-indigo-50 items-center justify-center mr-4'>
        <IconComponent size={20} color={iconColor} />
      </View>

      <View className='flex-1'>
        <Text className={`text-base font-poppins-medium ${textColor}`}>{item.label}</Text>
        {item.description ? <Text className='text-xs text-gray-500 mt-1'>{item.description}</Text> : null}
      </View>
    </Pressable>
  )
}

export default ProfileMenuItem
