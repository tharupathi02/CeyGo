import AppTopBar from "@/components/appbar/AppTopBar";
import HistoryListCard from "@/components/cards/HistoryListCard";
import AppColors from "@/constant/Colors";
import { historyEntries } from "@/sample/history";
import { groupHistoryEntriesByDate } from "@/utils/history-utils";
import { useRouter } from "expo-router";
import { CalendarDays, ChevronDown, Search } from "lucide-react-native";
import React, { useMemo } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HistoryScreen: React.FC = () => {
  const router = useRouter();

  const groupedHistory = useMemo(
    () => groupHistoryEntriesByDate(historyEntries),
    []
  );

  const handleNavigateToDetails = (entryId: string) => {
    router.push({
      pathname: "/(screens)/history/history-details",
      params: { id: entryId },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppTopBar title="History" showBackButton />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 32,
          paddingHorizontal: 24,
          paddingTop: 16,
        }}
      >
        <Text className="text-2xl font-poppins-bold text-gray-900">
          Recent activity
        </Text>
        <Text className="text-sm text-gray-600 font-poppins-regular mt-1">
          Monitor top-ups, trips, transfers and adjustments in real time.
        </Text>

        <View className="flex-row gap-3 mt-5">
          <TouchableOpacity
            activeOpacity={0.9}
            className="flex-1 flex-row items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-sm shadow-indigo-100/50"
          >
            <Search size={16} color={AppColors.primary} />
            <Text className="text-sm text-gray-500 font-poppins-medium">
              Search history
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            className="flex-row items-center gap-2 rounded-2xl border border-indigo-100 bg-white px-4 py-3 shadow-sm shadow-indigo-100/50"
          >
            <CalendarDays size={16} color={AppColors.primary} />
            <Text className="text-sm font-poppins-medium text-gray-900">
              This month
            </Text>
            <ChevronDown size={14} color={AppColors.primary} />
          </TouchableOpacity>
        </View>

        <View className="gap-y-8 mt-6">
          {groupedHistory.map((group) => (
            <View key={group.dateKey} className="gap-y-4">
              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-poppins-semibold text-gray-900">
                  {group.heading}
                </Text>
                <View className="flex-row items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
                  <Text className="text-[11px] font-poppins-medium text-indigo-600">
                    {group.items.length}{" "}
                    {group.items.length === 1 ? "activity" : "activities"}
                  </Text>
                </View>
              </View>

              <View className="gap-y-4">
                {group.items.map((entry) => (
                  <HistoryListCard
                    key={entry.id}
                    entry={entry}
                    onPress={() => handleNavigateToDetails(entry.id)}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;
