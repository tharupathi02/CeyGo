import AppTopBar from "@/components/appbar/AppTopBar";
import PlanCard from "@/components/cards/PlanCard";
import type { MetroPlan } from "@/sample/metro-plans";
import { metroPlans } from "@/sample/metro-plans";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";

const MetroPlansScreen: React.FC = () => {
  const router = useRouter();

  const featuredPlanId = useMemo(() => metroPlans[0]?.id, []);

  const handlePlanPress = (plan: MetroPlan) => {
    router.push({
      pathname: "/(screens)/metro-plans/plan-details",
      params: { id: plan.id },
    });
  };

  return (
    <View className="flex-1 bg-white">
      <AppTopBar title="Metro Plans" showBackButton />

      <FlatList
        data={metroPlans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlanCard
            plan={item}
            onPress={handlePlanPress}
            highlight={item.id === featuredPlanId}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 32 }}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListHeaderComponent={
          <View>
            <Text className="text-2xl font-poppins-bold text-gray-900">
              Memberships tailored for every routine
            </Text>
            <Text className="text-sm font-poppins-regular text-gray-500 leading-5">
              Unlock unlimited rides, exclusive lounges and seasonal perks. Tap
              on a plan to explore full benefits.
            </Text>

            <View className="mt-6">
              <Text className="text-sm font-poppins-semibold text-gray-400 uppercase">
                Featured plan
              </Text>
              <Text className="text-lg font-poppins-semibold text-gray-900 mt-2">
                {metroPlans.find((plan) => plan.id === featuredPlanId)?.name}
              </Text>
              <Text className="text-sm font-poppins-regular text-gray-500 mb-3">
                Most popular choice curated from daily rider feedback.
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={<View className="h-4" />}
      />
    </View>
  );
};

export default MetroPlansScreen;
