import {
  ArrowLeftRight,
  ArrowUpRight,
  Banknote,
  Building2,
  CreditCard,
  Gift,
  MapPin,
  Percent,
  Plane,
  QrCode,
  RefreshCcw,
  RotateCcw,
  Smartphone,
  Star,
  Store,
  Ticket,
  TrainFront,
  Users,
  Wallet,
  Bus
} from 'lucide-react-native'
import React, { useMemo } from 'react'
import { Pressable, Text, View } from 'react-native'
import AppColors from '@/constant/Colors'
import type { HistoryEntry, HistoryEntryIcon } from '@/sample/history'
import { formatCurrency } from '@/utils/formatters'
import { formatHistoryDateTag, formatHistoryTime } from '@/utils/history-utils'

type HistoryListCardProps = {
  entry: HistoryEntry
  onPress?: (entry: HistoryEntry) => void
}

const categoryAccent: Record<HistoryEntry['category'], string> = {
  'Top-up': 'bg-emerald-500/15',
  Deduction: 'bg-rose-500/15',
  Transfer: 'bg-sky-500/15',
  Adjustment: 'bg-amber-500/15'
}

const statusColor: Record<HistoryEntry['status'], string> = {
  Completed: 'text-emerald-600',
  Pending: 'text-amber-600',
  Failed: 'text-rose-600',
  Reversed: 'text-sky-600'
}

const HistoryListCard: React.FC<HistoryListCardProps> = ({ entry, onPress }) => {
  const isCredit = entry.direction === 'credit'
  const iconColor = isCredit ? AppColors.primary : '#F87171'
  const amountColor = isCredit ? 'text-emerald-600' : 'text-rose-600'
  const accentBackground = categoryAccent[entry.category]
  const statusTextColor = statusColor[entry.status]

  const IconComponent = useMemo(() => {
    const map: Record<HistoryEntryIcon, React.ComponentType<{ size?: number; color?: string }>> = {
      'credit-card': CreditCard,
      train: TrainFront,
      bus: Bus,
      cash: Banknote,
      transfer: ArrowLeftRight,
      plane: Plane,
      gift: Gift,
      mobile: Smartphone,
      store: Store,
      ticket: Ticket,
      star: Star,
      users: Users,
      'qr-code': QrCode,
      percent: Percent,
      refund: RotateCcw,
      'google-pay': CreditCard,
      bank: Building2,
      paypal: Wallet
    }

    if (entry.icon && map[entry.icon]) {
      return map[entry.icon]
    }

    return isCredit ? CreditCard : ArrowUpRight
  }, [entry.icon, isCredit])

  const amountLabel = `${isCredit ? '+' : '-'}${formatCurrency(Math.abs(entry.amount), entry.currency)}`
  const balanceAfterLabel =
    entry.balanceAfter !== undefined ? formatCurrency(entry.balanceAfter, entry.currency) : undefined
  const balanceBeforeLabel =
    entry.balanceBefore !== undefined ? formatCurrency(entry.balanceBefore, entry.currency) : undefined

  return (
    <Pressable
      onPress={() => onPress?.(entry)}
      android_ripple={{ color: '#EEF2FF', borderless: false }}
      className='relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-5 py-4 shadow-sm shadow-indigo-50/50'
    >
      <View className={`absolute -right-14 -top-14 h-28 w-28 rounded-full ${accentBackground}`} />
      <View className='absolute -left-16 bottom-0 h-32 w-32 rounded-full bg-indigo-50/40' />

      <View className='flex-row justify-between items-start'>
        <View className='flex-1 pr-4'>
          <View className='flex-row items-center'>
            <View className='mr-3 rounded-2xl bg-indigo-500/10 p-2'>
              <IconComponent size={18} color={iconColor} />
            </View>
            <View>
              <Text className='text-[11px] font-poppins-medium uppercase tracking-[1.4px] text-gray-400'>{entry.category}</Text>
              <Text className='text-xs text-gray-500 mt-1'>{formatHistoryDateTag(entry.occurredAt)}</Text>
            </View>
          </View>

          <Text className='text-lg font-poppins-semibold text-gray-900 mt-4'>{entry.title}</Text>
          <Text className='text-xs text-gray-500 mt-1'>{entry.subtitle}</Text>

          <View className='flex-row flex-wrap items-center gap-2 mt-3'>
            {entry.route ? (
              <View className='flex-row items-center rounded-full bg-gray-100 px-3 py-1'>
                <Text className='text-[11px] font-poppins-medium text-gray-600'>Route {entry.route}</Text>
              </View>
            ) : null}
            {entry.distance ? (
              <View className='flex-row items-center rounded-full bg-gray-100 px-3 py-1'>
                <Text className='text-[11px] font-poppins-medium text-gray-600'>{entry.distance}</Text>
              </View>
            ) : null}
            {entry.duration ? (
              <View className='flex-row items-center rounded-full bg-gray-100 px-3 py-1'>
                <Text className='text-[11px] font-poppins-medium text-gray-600'>{entry.duration}</Text>
              </View>
            ) : null}
          </View>

          <View className='flex-row items-center mt-4'>
            <RefreshCcw size={14} color={AppColors.primary} />
            <Text className='text-xs text-gray-400 ml-2'>
              {formatHistoryTime(entry.occurredAt)} • {entry.status}
            </Text>
          </View>

          {entry.location ? (
            <View className='flex-row items-center mt-3'>
              <MapPin size={14} color={AppColors.primary} />
              <Text className='text-xs text-gray-500 ml-2 flex-1'>{entry.location}</Text>
            </View>
          ) : null}

          {entry.tags && entry.tags.length > 0 ? (
            <View className='flex-row flex-wrap gap-2 mt-3'>
              {entry.tags.slice(0, 3).map(tag => (
                <View key={`${entry.id}-${tag}`} className='rounded-full bg-indigo-50 px-3 py-1'>
                  <Text className='text-[11px] font-poppins-medium text-indigo-600'>#{tag}</Text>
                </View>
              ))}
              {entry.tags.length > 3 ? (
                <View className='rounded-full bg-indigo-50 px-3 py-1'>
                  <Text className='text-[11px] font-poppins-medium text-indigo-600'>
                    +{entry.tags.length - 3}
                  </Text>
                </View>
              ) : null}
            </View>
          ) : null}
        </View>

        <View className='items-end'>
          <Text className={`text-xl font-poppins-semibold ${amountColor}`}>{amountLabel}</Text>
          {balanceBeforeLabel ? (
            <Text className='text-[11px] text-gray-400 mt-2'>Before {balanceBeforeLabel}</Text>
          ) : null}
          {balanceAfterLabel ? (
            <Text className='text-[11px] text-gray-500 mt-1'>After {balanceAfterLabel}</Text>
          ) : null}
          <Text className={`text-[11px] font-poppins-medium mt-3 ${statusTextColor}`}>{entry.status}</Text>
          {entry.transactionId ? (
            <Text numberOfLines={1} className='text-[10px] text-gray-400 mt-2 max-w-[120px]'>
              #{entry.transactionId}
            </Text>
          ) : null}
        </View>
      </View>
    </Pressable>
  )
}

export default HistoryListCard
