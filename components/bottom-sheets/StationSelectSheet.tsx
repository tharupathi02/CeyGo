import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Building2, MapPin, Search, Train } from "lucide-react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import AppColors from "../../constant/Colors";
import { BusStation } from "../../sample/bus-station";

interface StationSelectSheetProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  stations: BusStation[];
  onSelect: (station: BusStation) => void;
  selectedStationId?: string;
}

const StationSelectSheet: React.FC<StationSelectSheetProps> = ({
  visible,
  onClose,
  title,
  stations,
  onSelect,
  selectedStationId,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const snapPoints = useMemo(() => ["95%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    []
  );

  const filteredStations = useMemo(() => {
    if (!searchTerm.trim()) {
      return stations;
    }

    const normalizedQuery = searchTerm.trim().toLowerCase();

    return stations.filter((station) => {
      const searchable = [
        station.name,
        station.city,
        station.district,
        station.province,
        station.code,
        station.type,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [searchTerm, stations]);

  const sortedStations = useMemo(
    () =>
      [...filteredStations].sort((a, b) => {
        if (a.province === b.province) {
          return a.city.localeCompare(b.city);
        }

        return a.province.localeCompare(b.province);
      }),
    [filteredStations]
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  const handleSelect = useCallback(
    (station: BusStation) => {
      onSelect(station);
      bottomSheetRef.current?.close();
    },
    [onSelect]
  );

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [visible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      enableContentPanningGesture={false}
      backgroundStyle={{
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
      }}
      handleIndicatorStyle={{
        backgroundColor: "#D1D5DB",
        width: 48,
        height: 4,
      }}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 16,
      }}
    >
      <View className="flex-1 px-5">
        <BottomSheetFlatList
          data={sortedStations}
          keyExtractor={(item: BusStation) => item.id}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
          ListEmptyComponent={() => (
            <View className="items-center justify-center py-12">
              <Train size={36} color={AppColors.primary} />
              <Text className="font-poppins-semibold text-base text-gray-900 mt-4">
                No stations found
              </Text>
              <Text className="font-poppins-regular text-xs text-gray-500 mt-1 text-center px-6">
                Try adjusting your search or explore stations in another
                province.
              </Text>
            </View>
          )}
          renderItem={({ item }: { item: BusStation }) => {
            const isSelected = item.id === selectedStationId;

            return (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                activeOpacity={0.85}
                className={`overflow-hidden rounded-3xl border px-5 py-4 mb-3 ${
                  isSelected
                    ? "border-indigo-200 bg-indigo-50/80"
                    : "border-gray-100 bg-white"
                }`}
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-1 pr-4">
                    <View className="flex-row items-center">
                      <Text className="font-poppins-semibold text-base text-gray-900">
                        {item.name}
                      </Text>
                      <View className="ml-3 px-2.5 py-1 rounded-full bg-gray-100">
                        <Text className="text-[11px] font-poppins-medium uppercase text-gray-600 tracking-[1.2px]">
                          {item.code}
                        </Text>
                      </View>
                    </View>

                    <View className="flex-row items-center mt-2">
                      <MapPin size={16} color={AppColors.primary} />
                      <Text className="text-xs text-gray-500 ml-2">
                        {item.city}, {item.district}
                      </Text>
                    </View>

                    <View className="flex-row items-center mt-1">
                      <Building2 size={16} color="#6B7280" />
                      <Text className="text-xs text-gray-500 ml-2">
                        {item.province} • {item.type}
                      </Text>
                    </View>
                  </View>

                  <View
                    className={`w-12 h-12 rounded-2xl items-center justify-center ${
                      isSelected ? "bg-indigo-500/10" : "bg-gray-100"
                    }`}
                  >
                    <Text
                      className={`text-xs font-poppins-semibold ${
                        isSelected ? "text-indigo-600" : "text-gray-500"
                      }`}
                    >
                      Select
                    </Text>
                  </View>
                </View>

                <View className="mt-3 flex-row flex-wrap gap-2">
                  {item.facilities.slice(0, 3).map((facility: string) => (
                    <View
                      key={facility}
                      className="px-3 py-1 rounded-full bg-gray-100"
                    >
                      <Text className="text-[11px] font-poppins-medium text-gray-600">
                        {facility}
                      </Text>
                    </View>
                  ))}
                  {item.facilities.length > 3 ? (
                    <View className="px-3 py-1 rounded-full bg-gray-100">
                      <Text className="text-[11px] font-poppins-medium text-gray-600">
                        +{item.facilities.length - 3} more
                      </Text>
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
          ListHeaderComponent={() => (
            <>
              <View className="pt-2 pb-5">
                <Text className="font-poppins-bold text-lg text-gray-900 text-center">
                  {title}
                </Text>
                <Text className="font-poppins-regular text-xs text-gray-500 text-center mt-1">
                  Browse and select from the available terminals and hubs across
                  Sri Lanka.
                </Text>
              </View>

              <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mb-4 border border-gray-200">
                <Search size={18} color={AppColors.primary} />
                <TextInput
                  value={searchTerm}
                  onChangeText={setSearchTerm}
                  placeholder="Search by name, city or code"
                  placeholderTextColor="#9CA3AF"
                  className="flex-1 ml-3 font-poppins-medium text-sm text-gray-900"
                />
                {searchTerm ? (
                  <TouchableOpacity onPress={() => setSearchTerm("")}>
                    <Text className="text-xs font-poppins-medium text-gray-500">
                      Clear
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </>
          )}
        />
      </View>
    </BottomSheet>
  );
};

export default StationSelectSheet;
