import React, { useMemo } from 'react'
import { Pressable, Text, View } from 'react-native'
import {
  ArrowUpRight,
  CreditCard,
  MapPin,
  RefreshCcw,
  Ticket,
  TrainFront,
  Wallet,
  Bus,
  Gift,
  Clock,
  type LucideIcon
} from 'lucide-react-native'

import type { HistoryEntry, HistoryEntryIcon } from '@/sample/history'
import { formatCurrency } from '@/utils/formatters'
import { formatHistoryDateTag, formatHistoryTime } from '@/utils/history-utils'

export type HomeActivityCardProps = {
  entry: HistoryEntry
  onPress?: (entry: HistoryEntry) => void
}

const iconMap: Record<HistoryEntryIcon, LucideIcon> = {
  'credit-card': CreditCard,
  train: TrainFront,
  bus: Bus,
  cash: Wallet,
  transfer: ArrowUpRight,
  plane: ArrowUpRight,
  gift: Gift,
  mobile: Wallet,
  store: Wallet,
  ticket: Ticket,
  star: Gift,
  users: Gift,
  'qr-code': Ticket,
  percent: Gift,
  refund: RefreshCcw,
  'google-pay': CreditCard,
  bank: Wallet,
  paypal: Wallet
}

const HomeActivityCard: React.FC<HomeActivityCardProps> = ({ entry, onPress }) => {
  const isCredit = entry.direction === 'credit'
  const IconComponent = useMemo(() => {
    if (entry.icon && iconMap[entry.icon]) {
      return iconMap[entry.icon]
    }

    return isCredit ? CreditCard : ArrowUpRight
  }, [entry.icon, isCredit])

  const amountLabel = `${isCredit ? '+' : '-'}${formatCurrency(Math.abs(entry.amount), entry.currency)}`

  return (
    <Pressable
      onPress={() => onPress?.(entry)}
      android_ripple={{ color: '#E0E7FF' }}
      className='relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-5 py-5 shadow-sm shadow-indigo-50'
    >
      <View className='absolute -right-14 -top-14 h-32 w-32 rounded-full bg-indigo-100/30' />
      <View className='absolute -left-16 bottom-0 h-36 w-36 rounded-full bg-indigo-50/80' />

      <View className='flex-row justify-between items-start'>
        <View className='flex-row items-center'>
          <View className='mr-3 rounded-2xl bg-indigo-500/10 p-2'>
            <IconComponent size={18} color={isCredit ? '#16A34A' : '#F97316'} />
          </View>
          <View>
            <Text className='text-[11px] font-poppins-medium uppercase tracking-[1.4px] text-gray-400'>
              {entry.category}
            </Text>
            <Text className='text-xs text-gray-500 mt-1'>{formatHistoryDateTag(entry.occurredAt)}</Text>
          </View>
        </View>

        <Text className={`text-base font-poppins-semibold ${isCredit ? 'text-emerald-600' : 'text-rose-600'}`}>
          {amountLabel}
        </Text>
      </View>

      <Text className='text-base font-poppins-semibold text-gray-900 mt-4'>{entry.title}</Text>
      <Text className='text-xs text-gray-500 mt-1'>{entry.subtitle}</Text>

      {entry.location ? (
        <View className='flex-row items-center mt-4'>
          <MapPin size={14} color='#4338CA' />
          <Text numberOfLines={1} className='text-xs text-gray-500 ml-2 flex-1'>
            {entry.location}
          </Text>
        </View>
      ) : null}

      <View className='flex-row items-center mt-4'>
        <Clock size={14} color='#4338CA' />
        <Text className='text-xs text-gray-400 ml-2'>
          {formatHistoryTime(entry.occurredAt)} • {entry.status}
        </Text>
      </View>
    </Pressable>
  )
}

export default HomeActivityCard
