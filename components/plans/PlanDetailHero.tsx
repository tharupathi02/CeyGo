import { LinearGradient } from "expo-linear-gradient"
import { CalendarDays, Users } from "lucide-react-native"
import React from "react"
import { Text, View } from "react-native"
import type { MetroPlan } from "@/sample/metro-plans"

interface PlanDetailHeroProps {
  plan: MetroPlan
}

const PlanDetailHero: React.FC<PlanDetailHeroProps> = ({ plan }) => {
  return (
    <View className="mb-6 overflow-hidden rounded-3xl border border-indigo-100 shadow-lg shadow-indigo-50/40">
      <LinearGradient
        colors={plan.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="px-6 py-6"
      >
        <View className="flex-row justify-between items-start">
          <View className="flex-1 pr-4">
            <Text className="text-xs uppercase text-indigo-100 font-poppins-medium">
              {plan.targetAudience}
            </Text>
            <Text className="font-poppins-bold text-3xl text-white mt-2">{plan.name}</Text>
            <Text className="font-poppins-medium text-sm text-indigo-100 mt-3">
              {plan.description}
            </Text>
          </View>

          <View className="items-end">
            <Text className="text-xs uppercase text-indigo-100 font-poppins-medium">Monthly</Text>
            <Text className="font-poppins-semibold text-white text-3xl mt-1">
              LKR {plan.pricing.pricePerMonth.toLocaleString()}
            </Text>
            <View className="flex-row items-center bg-white/15 px-3 py-1 rounded-full mt-3">
              <CalendarDays size={14} color="#FFFFFF" />
              <Text className="text-[11px] text-white font-poppins-medium ml-2">
                {plan.usage.ridesPerMonth ? `${plan.usage.ridesPerMonth} rides included` : 'Flexible rides'}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default PlanDetailHero
