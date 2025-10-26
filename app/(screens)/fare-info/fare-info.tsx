import AppTopBar from "@/components/appbar/AppTopBar";
import StationSelectSheet from "@/components/bottom-sheets/StationSelectSheet";
import FareResultCard from "@/components/cards/FareResultCard";
import AppColors from "@/constant/Colors";
import type { BusStation } from "@/sample/bus-station";
import { busStations } from "@/sample/bus-station";
import { routeFares } from "@/sample/route-fare";
import { formatCurrency } from "@/utils/formatters";
import { findRoutesBetweenStations, getFareClasses } from "@/utils/route-utils";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight, MapPin } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const FareInfo: React.FC = () => {
  const [isPickerVisible, setPickerVisible] = useState<"from" | "to" | null>(
    null
  );
  const [fromStationId, setFromStationId] = useState<string | null>(null);
  const [toStationId, setToStationId] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const fromStation = useMemo(
    () => busStations.find((station) => station.id === fromStationId) ?? null,
    [fromStationId]
  );
  const toStation = useMemo(
    () => busStations.find((station) => station.id === toStationId) ?? null,
    [toStationId]
  );

  const routes = useMemo(
    () =>
      hasSearched
        ? findRoutesBetweenStations(fromStationId, toStationId, routeFares)
        : [],
    [fromStationId, hasSearched, toStationId]
  );

  const handleStationSelect =
    (stationIdSetter: React.Dispatch<React.SetStateAction<string | null>>) =>
    (station: BusStation) => {
      stationIdSetter(station.id);
      setHasSearched(false);
      setPickerVisible(null);
    };

  const handleClearSelection = () => {
    setFromStationId(null);
    setToStationId(null);
    setHasSearched(false);
  };

  const handleFindRoutes = () => {
    if (!fromStationId || !toStationId) {
      return;
    }
    setHasSearched(true);
  };

  return (
    <View className="flex-1 bg-white">
      <AppTopBar title="Fare Explorer" showBackButton />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-2xl font-poppins-bold text-gray-900 mt-2">
          Find the best fare between cities
        </Text>
        <Text className="text-sm text-gray-500 font-poppins-regular">
          Compare comfort classes, amenities and discounts instantly.
        </Text>

        <View className="mt-4 space-y-4">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setPickerVisible("from")}
            className="bg-white rounded-3xl border border-gray-100 px-5 py-4 shadow-sm shadow-indigo-100/30 flex-row items-center justify-between"
          >
            <View className="flex-1 pr-4">
              <Text className="text-xs uppercase text-gray-400 font-poppins-medium">
                From station
              </Text>
              <Text className="text-lg font-poppins-semibold text-gray-900 mt-1">
                {fromStation ? fromStation.name : "Select departure"}
              </Text>
              <Text className="text-xs text-gray-500 mt-1">
                {fromStation
                  ? `${fromStation.city}, ${fromStation.province}`
                  : "Choose your starting terminal"}
              </Text>
            </View>
            <View className="w-8 h-8 rounded-lg bg-indigo-500/10 items-center justify-center">
              <MapPin size={20} color={AppColors.primary} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setPickerVisible("to")}
            className="bg-white rounded-3xl border border-gray-100 px-5 py-4 shadow-sm shadow-indigo-100/30 flex-row items-center justify-between"
          >
            <View className="flex-1 pr-4">
              <Text className="text-xs uppercase text-gray-400 font-poppins-medium">
                To station
              </Text>
              <Text className="text-lg font-poppins-semibold text-gray-900 mt-1">
                {toStation ? toStation.name : "Select destination"}
              </Text>
              <Text className="text-xs text-gray-500 mt-1">
                {toStation
                  ? `${toStation.city}, ${toStation.province}`
                  : "Where do you want to arrive?"}
              </Text>
            </View>
            <View className="w-8 h-8 rounded-lg bg-indigo-500/10 items-center justify-center">
              <ArrowRight size={20} color={AppColors.primary} />
            </View>
          </TouchableOpacity>

          <View className="flex-row gap-3 mt-2">
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleClearSelection}
              className="flex-1 rounded-3xl bg-gray-100 py-3 items-center justify-center"
            >
              <Text className="text-sm font-poppins-semibold text-gray-600">
                Clear
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleFindRoutes}
              disabled={!fromStationId || !toStationId}
              className={`flex-1 rounded-3xl py-3 items-center justify-center ${
                fromStationId && toStationId ? "bg-indigo-500" : "bg-indigo-200"
              }`}
            >
              <Text className="text-sm font-poppins-semibold text-white">
                Find routes
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-8">
          <Text className="text-base font-poppins-semibold text-gray-900">
            Available routes
          </Text>
          <Text className="text-sm text-gray-500 mt-1">
            {hasSearched
              ? routes.length > 0
                ? "Tap a fare class to view inclusions and compare pricing."
                : "No direct services were found for this combination. Try adjusting your stations."
              : "Select your departure and destination, then tap “Find routes” to explore matching services."}
          </Text>

          <View className="mt-5 space-y-4">
            {hasSearched && routes.length === 0 ? (
              <View className="rounded-3xl border border-dashed border-gray-200 py-12 px-6 items-center justify-center">
                <Text className="font-poppins-semibold text-lg text-gray-700">
                  No routes found
                </Text>
                <Text className="text-sm text-gray-500 text-center mt-2">
                  Try swapping your direction or explore nearby hubs for more
                  options.
                </Text>
              </View>
            ) : hasSearched ? (
              routes.map((route) => (
                <FareResultCard
                  key={route.id}
                  route={route}
                  fromStation={fromStation}
                  toStation={toStation}
                  fareClasses={getFareClasses(route)}
                  formatter={formatCurrency}
                />
              ))
            ) : (
              <View className="rounded-3xl border border-dashed border-gray-200 py-12 px-6 items-center justify-center">
                <Text className="font-poppins-semibold text-lg text-gray-700">
                  Start exploring fares
                </Text>
                <Text className="text-sm text-gray-500 text-center mt-2">
                  Select your departure and destination to discover pricing
                  across service classes.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      <StationSelectSheet
        visible={Boolean(isPickerVisible)}
        onClose={() => setPickerVisible(null)}
        title={
          isPickerVisible === "from"
            ? "Select departure station"
            : "Select arrival station"
        }
        stations={busStations}
        onSelect={(station) =>
          isPickerVisible === "from"
            ? handleStationSelect(setFromStationId)(station)
            : handleStationSelect(setToStationId)(station)
        }
        selectedStationId={
          isPickerVisible === "from"
            ? fromStationId ?? undefined
            : toStationId ?? undefined
        }
      />
    </View>
  );
};

export default FareInfo;
