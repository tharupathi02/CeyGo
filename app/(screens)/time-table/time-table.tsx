import AppTopBar from '@/components/appbar/AppTopBar'
import StationSelectSheet from '@/components/bottom-sheets/StationSelectSheet'
import TimetableResultCard from '@/components/cards/TimetableResultCard'
import AppColors from '@/constant/Colors'
import type { BusStation } from '@/sample/bus-station'
import { busStations } from '@/sample/bus-station'
import { busTimetables } from '@/sample/bus-timetable'
import { findTimetablesBetweenStations } from '@/utils/timetable-utils'
import { ArrowRight, MapPin } from 'lucide-react-native'
import React, { useMemo, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const TimeTableScreen: React.FC = () => {
  const [isPickerVisible, setPickerVisible] = useState<'from' | 'to' | null>(null)
  const [fromStationId, setFromStationId] = useState<string | null>(null)
  const [toStationId, setToStationId] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const fromStation = useMemo(
    () => busStations.find(station => station.id === fromStationId) ?? null,
    [fromStationId]
  )

  const toStation = useMemo(
    () => busStations.find(station => station.id === toStationId) ?? null,
    [toStationId]
  )

  const timetables = useMemo(
    () =>
      hasSearched
        ? findTimetablesBetweenStations(fromStationId, toStationId, busTimetables)
        : [],
    [fromStationId, hasSearched, toStationId]
  )

  const handleStationSelect =
    (setter: React.Dispatch<React.SetStateAction<string | null>>) =>
    (station: BusStation) => {
      setter(station.id)
      setHasSearched(false)
      setPickerVisible(null)
    }

  const handleClearSelection = () => {
    setFromStationId(null)
    setToStationId(null)
    setHasSearched(false)
  }

  const handleFindTimetable = () => {
    if (!fromStationId || !toStationId) {
      return
    }
    setHasSearched(true)
  }

  const isSheetVisible = isPickerVisible !== null

  return (
    <View className='flex-1 bg-white'>
      <AppTopBar title='Bus Timetables' showBackButton />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className='text-2xl font-poppins-bold text-gray-900 mt-2'>
          Plan your journey with live departures
        </Text>
        <Text className='text-sm text-gray-500 font-poppins-regular mt-1'>
          Pick your departure and destination to explore upcoming bus services and onboard amenities.
        </Text>

        <View className='mt-4 space-y-4'>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setPickerVisible('from')}
            className='bg-white rounded-3xl border border-gray-100 px-5 py-4 shadow-sm shadow-indigo-100/30 flex-row items-center justify-between'
          >
            <View className='flex-1 pr-4'>
              <Text className='text-xs uppercase text-gray-400 font-poppins-medium'>
                From station
              </Text>
              <Text className='text-lg font-poppins-semibold text-gray-900 mt-1'>
                {fromStation ? fromStation.name : 'Select departure'}
              </Text>
              <Text className='text-xs text-gray-500 mt-1'>
                {fromStation
                  ? `${fromStation.city}, ${fromStation.province}`
                  : 'Choose where you will start your trip'}
              </Text>
            </View>
            <View className='w-8 h-8 rounded-lg bg-indigo-500/10 items-center justify-center'>
              <MapPin size={20} color={AppColors.primary} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setPickerVisible('to')}
            className='bg-white rounded-3xl border border-gray-100 px-5 py-4 mt-2 shadow-sm shadow-indigo-100/30 flex-row items-center justify-between'
          >
            <View className='flex-1 pr-4'>
              <Text className='text-xs uppercase text-gray-400 font-poppins-medium'>
                To station
              </Text>
              <Text className='text-lg font-poppins-semibold text-gray-900 mt-1'>
                {toStation ? toStation.name : 'Select destination'}
              </Text>
              <Text className='text-xs text-gray-500 mt-1'>
                {toStation
                  ? `${toStation.city}, ${toStation.province}`
                  : 'Pick where you want to arrive'}
              </Text>
            </View>
            <View className='w-8 h-8 rounded-lg bg-indigo-500/10 items-center justify-center'>
              <ArrowRight size={20} color={AppColors.primary} />
            </View>
          </TouchableOpacity>

          <View className='flex-row gap-3 mt-2'>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleClearSelection}
              className='flex-1 rounded-3xl bg-gray-100 py-3 items-center justify-center'
            >
              <Text className='text-sm font-poppins-semibold text-gray-600'>
                Clear
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleFindTimetable}
              disabled={!fromStationId || !toStationId}
              className={`flex-1 rounded-3xl py-3 items-center justify-center ${
                fromStationId && toStationId ? 'bg-indigo-500' : 'bg-indigo-200'
              }`}
            >
              <Text className='text-sm font-poppins-semibold text-white'>
                Show timetable
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className='mt-8'>
          <Text className='text-base font-poppins-semibold text-gray-900'>
            Upcoming departures
          </Text>
          <Text className='text-sm text-gray-500 mt-1'>
            {hasSearched
              ? timetables.length > 0
                ? 'Review departure options, amenities and platform details for your trip.'
                : 'No direct services were found for this combination. Try alternative terminals or swap direction.'
              : 'Select your departure and destination, then tap “Show timetable” to view upcoming services.'}
          </Text>

          <View className='mt-5 space-y-4'>
            {hasSearched && timetables.length === 0 ? (
              <View className='rounded-3xl border border-dashed border-gray-200 py-12 px-6 items-center justify-center'>
                <Text className='font-poppins-semibold text-lg text-gray-700'>
                  No departures available
                </Text>
                <Text className='text-sm text-gray-500 text-center mt-2'>
                  Try adjusting your stations or explore nearby hubs for more connection options.
                </Text>
              </View>
            ) : hasSearched ? (
              timetables.map(timetable => (
                <TimetableResultCard
                  key={timetable.id}
                  timetable={timetable}
                  fromStation={fromStation}
                  toStation={toStation}
                />
              ))
            ) : (
              <View className='rounded-3xl border border-dashed border-gray-200 py-12 px-6 items-center justify-center'>
                <Text className='font-poppins-semibold text-lg text-gray-700'>
                  Check next departures
                </Text>
                <Text className='text-sm text-gray-500 text-center mt-2'>
                  Choose your departure and arrival stations to discover upcoming services and travel classes.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {isSheetVisible ? (
        <StationSelectSheet
          visible={isSheetVisible}
          onClose={() => setPickerVisible(null)}
          title={
            isPickerVisible === 'from'
              ? 'Select departure station'
              : 'Select arrival station'
          }
          stations={busStations}
          onSelect={station =>
            isPickerVisible === 'from'
              ? handleStationSelect(setFromStationId)(station)
              : handleStationSelect(setToStationId)(station)
          }
          selectedStationId={
            isPickerVisible === 'from'
              ? fromStationId ?? undefined
              : toStationId ?? undefined
          }
        />
      ) : null}
    </View>
  )
}

export default TimeTableScreen