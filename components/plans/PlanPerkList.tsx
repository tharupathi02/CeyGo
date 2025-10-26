import React from "react"
import { Text, View } from "react-native"
import { CheckCircle } from "lucide-react-native"
import type { PlanPerk } from "@/sample/metro-plans"

type PlanPerkListProps = {
  title: string
  items: PlanPerk[] | string[]
  accentColor?: string
}

const renderPerkLabel = (perk: PlanPerk | string) => {
  if (typeof perk === "string") return perk
  return perk.description ?? perk.title
}

const renderPerkKey = (perk: PlanPerk | string) => {
  if (typeof perk === "string") return perk
  return perk.title
}

const PlanPerkList: React.FC<PlanPerkListProps> = ({ title, items, accentColor = "#4F46E5" }) => {
  if (!items.length) return null

  return (
    <View className="mb-6">
      <Text className="text-sm font-poppins-semibold text-gray-800 mb-3">{title}</Text>
      <View className="space-y-3">
        {items.map((item) => (
          <View
            key={renderPerkKey(item)}
            className="flex-row items-start bg-gray-50 border border-gray-100 rounded-3xl px-4 py-3 mb-2"
          >
            <View className="mt-0.5">
              <CheckCircle size={16} color={accentColor} />
            </View>
            <Text className="flex-1 ml-3 text-sm font-poppins-regular text-gray-600 leading-5">
              {renderPerkLabel(item)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default PlanPerkList
