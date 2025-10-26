import { LinearGradient } from 'expo-linear-gradient'
import { ArrowRight, Users } from 'lucide-react-native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import type { MetroPlan, PlanPerk } from '@/sample/metro-plans'

interface PlanCardProps {
  plan: MetroPlan
  onPress?: (plan: MetroPlan) => void
  highlight?: boolean
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onPress, highlight = false }) => {
  const cardBorderClass = highlight ? 'border-indigo-200 shadow-indigo-100/60' : 'border-gray-100 shadow-indigo-50/40'

  return (
    <Pressable
      className='mb-4'
      android_ripple={onPress ? { color: 'rgba(79,70,229,0.08)', borderless: false } : undefined}
      onPress={() => onPress?.(plan)}
      disabled={!onPress}
    >
      <View className={`relative overflow-hidden rounded-3xl border bg-white p-5 shadow-md ${cardBorderClass}`}>
        <View className='absolute inset-0 opacity-10'>
          <LinearGradient colors={plan.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }} />
        </View>

        <View className='relative'>
          <View className='flex-row items-center justify-between'>
            <View className='flex-1 pr-4'>
              <Text className='text-xs uppercase font-poppins-medium text-gray-500'>
                {plan.targetAudience}
              </Text>
              <Text className='text-2xl font-poppins-semibold text-gray-900 mt-2'>{plan.name}</Text>
              <Text className='text-sm font-poppins-regular text-gray-500 mt-2'>{plan.description}</Text>
            </View>

            <View className='items-end'>
              <Text className='text-xs uppercase font-poppins-medium text-gray-400'>From</Text>
              <Text className='text-2xl font-poppins-semibold text-gray-900'>
                LKR {plan.pricing.pricePerMonth.toLocaleString()}
              </Text>
              <Text className='text-xs font-poppins-medium text-gray-500 mt-1'>per month</Text>
            </View>
          </View>

          {highlight ? (
            <View className='mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3'>
              <Text className='text-xs font-poppins-medium text-indigo-600'>Recommended</Text>
              <Text className='text-sm font-poppins-regular text-gray-600 mt-1'>{plan.recommendedFor}</Text>
            </View>
          ) : null}

          <View className='mt-6 flex-row items-center justify-between'>
            <View>
              <Text className='text-xs uppercase font-poppins-medium text-gray-400'>Tap to explore</Text>
              <Text className='text-xs font-poppins-regular text-gray-500 mt-1'>View detailed inclusions & add-ons</Text>
            </View>

            <View className='w-10 h-10 rounded-full items-center justify-center bg-indigo-500/10'>
              <ArrowRight size={20} color={plan.accentColor} />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default PlanCard
