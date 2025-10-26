import AppTopBar from "@/components/appbar/AppTopBar"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import PlanDetailHero from "@/components/plans/PlanDetailHero"
import PlanPerkList from "@/components/plans/PlanPerkList"
import { getMetroPlanById } from "@/sample/metro-plans"
import { useLocalSearchParams } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ArrowLeftRight, Sparkles } from "lucide-react-native"
import React, { useMemo } from "react"
import { ScrollView, Text, View } from "react-native"

const PlanDetailsScreen: React.FC = () => {
  const params = useLocalSearchParams<{ id?: string }>()
  const { bottom } = useSafeAreaInsets()
  const planId = Array.isArray(params.id) ? params.id[0] : params.id

  const plan = useMemo(() => (planId ? getMetroPlanById(planId) : undefined), [planId])

  if (!plan) {
    return (
      <View className="flex-1 bg-white">
        <AppTopBar title="Metro Plan" showBackButton />
        <View className="flex-1 items-center justify-center px-8">
          <Text className="font-poppins-semibold text-lg text-gray-800 text-center">
            Plan unavailable
          </Text>
          <Text className="text-sm text-gray-500 text-center mt-2">
            We couldn’t find the plan you’re looking for. Please go back and select a plan again.
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-white">
      <AppTopBar title={plan.name} showBackButton />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 130, paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <PlanDetailHero plan={plan} />

        <View className="rounded-3xl border border-indigo-50 bg-white px-5 py-5 shadow-sm shadow-indigo-50/40 mb-6">
          <Text className="text-sm font-poppins-semibold text-gray-800">Why riders love this plan</Text>
          <Text className="text-sm font-poppins-regular text-gray-500 mt-2">
            {plan.recommendedFor}
          </Text>

          <View className="flex-row flex-wrap gap-2 mt-4">
            <View className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 flex-row items-center">
              <Sparkles size={14} color={plan.accentColor} />
              <Text className="text-[11px] font-poppins-medium text-indigo-600 ml-2">
                Signature experience
              </Text>
            </View>
            <View className="px-3 py-1 rounded-full bg-gray-100 flex-row items-center">
              <ArrowLeftRight size={14} color={plan.accentColor} />
              <Text className="text-[11px] font-poppins-medium text-gray-600 ml-2">
                {plan.usage.ridesPerMonth ? `${plan.usage.ridesPerMonth} rides included` : 'Flexible ride quotas'}
              </Text>
            </View>
          </View>
        </View>

        <PlanPerkList title="Included perks" items={plan.perks} accentColor={plan.accentColor} />
        <PlanPerkList title="Highlights" items={plan.highlights} accentColor={plan.accentColor} />
      </ScrollView>

      <View
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6"
        style={{ paddingBottom: bottom + 16, paddingTop: 20 }}
      >
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-xs uppercase font-poppins-medium text-gray-400">Monthly membership</Text>
            <Text className="text-2xl font-poppins-semibold text-gray-900 mt-1">
              LKR {plan.pricing.pricePerMonth.toLocaleString()}
            </Text>
          </View>

          <View className="items-end">
            <Text className="text-xs font-poppins-medium text-gray-500">Includes</Text>
            <Text className="text-sm font-poppins-semibold text-gray-700">
              {plan.usage.ridesPerMonth ? `${plan.usage.ridesPerMonth} rides` : 'Dynamic ride allocation'}
            </Text>
          </View>
        </View>

        <PrimaryButton
          label="Add plan to account"
          onPress={() => {}}
          trailingIcon={<Sparkles size={18} color="#FFFFFF" />}
        />
      </View>
    </View>
  )
}

export default PlanDetailsScreen